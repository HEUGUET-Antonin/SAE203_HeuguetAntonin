<template>
  <div class="">
    <form enctype="multipart/form-data" @submit.prevent="editartiste">
      <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
        <h1 class="font-display text-black text-3xl text-center">
          Mise à jour artiste
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
          contenuTextBouton="Modifier"
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
          Modifier
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
  name: "EditArtisteView",
  components: { IconSun },
  data() {
    return {
      imageData: null,
      listeartiste: [],
      artiste: {
        nom: null,
        photo: null,
      },
      refArtiste: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.artiste(this.$route.params.id);
    this.getartiste();
  },

  methods: {
    async getartiste() {
      const firestore = getFirestore();
      const dbartiste = collection(firestore, "artiste");
      const q = query(dbartiste, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeartiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getartiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", id);
      this.refartiste = await getDoc(docRef);
      if (this.refartiste.exists()) {
        this.artiste = this.refartiste.data();
        this.photoActuelle = this.artiste.photo;
      } else {
        this.console.log("Artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.photo = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async editartiste() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artiste/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            console.log("Uploaded a base64 string", this.artiste.photo);
          }
        );
      }
      const firestore = getFirestore();
      await updateDoc(
        doc(firestore, "artiste", this.$route.params.id),
        this.artiste
      );
      this.$router.push("/artistes");
    },
  },
};
</script>