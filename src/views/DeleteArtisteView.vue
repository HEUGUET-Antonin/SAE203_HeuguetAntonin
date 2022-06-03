<template>
  <div class="">
    <form enctype="multipart/form-data" @submit.prevent="deleteartiste">
      <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
        <h1 class="font-display text-black text-3xl text-center">
          Supprimer un artiste
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
            disabled
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
            :src="photoActuelle"
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
          Supprimer
        </button>

        <RouterLink to="/artistes">
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
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
// Bibliothèque Firestore : import des fonctions

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {
    IconSun,
  },
  name: "DeleteView",
  data() {
    return {
      artiste: {
        // Le participant à créer
        nom: null, // son nom
        photo: null, // sa photo (nom du fichier)
      },

      refArtiste: null, // Référence du participant à modifier
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche participant concerné
    this.getartiste(this.$route.params.id);
  },

  methods: {
    async getartiste(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      // Récupération sur Firestore du participant via son id
      const docRef = doc(firestore, "artiste", id);
      // Référence du participant concerné
      this.refartiste = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refartiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refartiste.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.artiste.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteartiste() {
      const firestore = getFirestore();
      // Suppresion du participant
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "artiste/" + this.artiste.photo);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des participants
      this.$router.push("/artistes");
    },
  },
};
</script>