<template>
  <div class="jazznpop-text p-page">
    <form enctype="multipart/form-data" @submit.prevent="createArtiste()">
      <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
        <h1 class="font-display text-black text-3xl text-center">
          Créer un artiste
        </h1>
        <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
      </div>

      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="font-serif uppercase text-center text-xl mt-2"
            >Nom de l'artiste</span
          >
          <input
            class="
              font-serif
              w-56
              ml-auto
              mr-auto
              pl-3
              mt-6
              border-2 border-black
              uppercase
            "
            placeholder="Exemple : La Fève"
            v-model="artiste.nom"
            required
          />
        </div>
        <div class="flex flex-col">
          <span class="font-serif uppercase text-center text-xl mt-6"
            >Photo</span
          >
          <input
            type="file"
            class="flex flex-wrap font-serif uppercase ml-auto mr-auto mt-4"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
        <div class="grid justify-center">
          <span class="font-serif uppercase text-center text-xl mt-8"
            >Aperçu de la photo choisie</span
          >

          <img
            class="
              w-40
              bg-center
              mr-auto
              ml-auto
              mt-4
              object-cover
              md:w-48
              lg:w-52
            "
            :src="imageData"
          />
        </div>
      </div>

      <div
        class="
          mt-8
          flex flex-col
          items-center
          justify-center
          gap-12
          md:flex-row
          pb-8
        "
      >
        <button
          contenuTextBouton="Créer"
          type="submit"
          class="
            w-fit
            px-6
            border-black border-2
            py-4
            uppercase
            font-serif
            text-lg
            bg-yellow-200
          "
        >
          Créer
        </button>

        <router-link to="/artistes">
          <button
            contenuTextBouton="Annuler"
            class="
              w-fit
              px-6
              border-black border-2
              py-4
              uppercase
              font-serif
              text-lg
              bg-red-500
            "
          >
            Annuler
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import IconSun from "../components/icons/IconSun.vue";

export default {
  name: "CreateArtisteView",
  components: { IconSun },
  data() {
    return {
      imageData: null,
      listeCat: [],
      artiste: {
        nom: null,
        photo: null,
      },
    };
  },
  mounted() {
    this.getCat();
  },
  methods: {
    async getCat() {
      const firestore = getFirestore();

      const dbCat = collection(firestore, "categorie");

      const q = query(dbCat, orderBy("libelle", "asc"));

      await onSnapshot(q, (snapshot) => {
        this.listeCat = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des catégories", this.listeCat);
      });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];

      this.artiste.photo = this.file.name;

      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
          this.imageData = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    async createArtiste() {
      const storage = getStorage();

      const refStorage = ref(storage, "artiste/" + this.artiste.photo);

      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");

          const db = getFirestore();
          const docRef = addDoc(collection(db, "artiste"), this.artiste);
        }
      );

      this.$router.push("/artistes");
    },
  },
};
</script>