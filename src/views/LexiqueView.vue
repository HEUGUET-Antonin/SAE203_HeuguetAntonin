<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Lexique</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <form>
    <section class="grid justify-center gap-4 pb-8">
      <div>
        <p class="font-serif uppercase mt-4">Créez une nouvelle définition</p>
      </div>
      <div class="flex gap-4">
        <div class="grid gap-4">
          <input
            type="text"
            v-model="nom"
            class="font-serif pl-2"
            placeholder="Mot"
            required
          />
          <input
            type="text"
            v-model="def"
            class="font-serif pl-2"
            required
            placeholder="Définition"
          />
        </div>
        <button type="button" @click="createLexique()" title="Création">
          <IconPlus></IconPlus>
        </button>
      </div>
    </section>

    <section
      v-for="lexique in listelexiqueSynchro"
      :key="lexique.id"
      class="pb-12 mt-12 flex justify-center"
    >
      <div class="grid gap-8">
        <input
          type="text"
          v-model="lexique.nom"
          class="font-serif uppercase text-xl bg-yellow-50 -ml-4"
        />
        <input
          type="text"
          v-model="lexique.def"
          class="font-serif text-base bg-yellow-50 ml-2"
        />
      </div>
      <div class="mt-8 ml-12">
        <button @click.prevent="updatelexique(lexique)">
          <IconEdit class="mr-4"></IconEdit>
        </button>
        <button @click.prevent="deletelexique(lexique)">
          <IconTrash></IconTrash>
        </button>
      </div>
    </section>
  </form>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import IconPlus from "../components/icons/IconPlus.vue";
import IconEdit from "../components/icons/IconEdit.vue";
import IconTrash from "../components/icons/IconTrash.vue";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  components: {
    IconSun,
    IconPlus,
    IconEdit,
    IconTrash,
  },
  data() {
    // Données de la vue
    return {
      nom: null, // Pour la création d'un nouveau pays
      def: null,
      listelexiqueSynchro: [], // Liste des pays synchronisée - collection pays de Firebase
    };
  },

  mounted() {
    // Appel de la liste des pays synchronisée
    this.getlexiqueSynchro();
  },
  methods: {
    async getlexiqueSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dblexique = collection(firestore, "lexique");
      // Liste des pays synchronisée
      const query = await onSnapshot(dblexique, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listelexiqueSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createLexique() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dblexique = collection(firestore, "lexique");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dblexique, {
        nom: this.nom,
        def: this.def,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updatelexique(lexique) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "lexique", lexique.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: lexique.nom,
        def: lexique.def,
      });
    },

    async deletelexique(lexique) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "lexique", lexique.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>
