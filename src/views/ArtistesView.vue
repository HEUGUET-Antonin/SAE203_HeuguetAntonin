<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Les artistes</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <div class="flex justify-center sm:gap-24 md:gap-64 xl:gap-xl mt-4 mb-12">
    <div class="flex items-center mt-2">
      <input
        type="text"
        class="border-black border-2 h-8 text-black uppercase font-serif pl-2"
        v-model="filter"
        placeholder="Recherchez un artiste"
      />
      <button
        class="bg-red-500 border-black border-r-2 border-t-2 border-b-2 h-8"
        type="button"
        title="Recherche"
      >
        <IconSearch class="w-12"></IconSearch>
      </button>
    </div>

    <RouterLink to="/createartiste">
      <div class="flex justify-end mr-12">
        <div
          class="
            flex
            bg-yellow-300
            border-black border-2
            px-4
            gap-4
            items-center
          "
        >
          <p class="font-serif text-black uppercase text-2xl">
            Ajouter un artiste
          </p>
          <IconPlus class="stroke-4 w-5"></IconPlus>
        </div>
      </div>
    </RouterLink>
  </div>
  <div
    class="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center ml-4 mr-4 pb-6"
  >
    <section v-for="artiste in filterByname" :key="artiste.id" class="mb-12">
      <div class="">
        <img
          :src="artiste.photo"
          class="object-cover border-2 border-black w-full h-36"
        />
        <div
          class="
            flex
            ml-auto
            mr-auto
            bg-red-600
            w-max
            px-4
            border-2 border-black
            z-20
            -mt-4
          "
        >
          <p
            class="font-serif text-black uppercase text-xl text-center mx-auto"
          >
            {{ artiste.nom }}
          </p>
        </div>

        <div class="flex flex-col z-20">
          <div class="flex justify-end mr-4 gap-4">
            <RouterLink
              :to="{ name: 'editartiste', params: { id: artiste.id } }"
              ><IconEdit
                class="-mt-36 stroke-white bg-black bg-opacity-30 rounded-sm"
            /></RouterLink>
            <RouterLink
              :to="{ name: 'deleteartiste', params: { id: artiste.id } }"
              ><IconTrash
                class="-mt-36 stroke-white bg-black bg-opacity-30 rounded-sm"
            /></RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import IconPlus from "../components/icons/IconPlus.vue";
import IconEdit from "../components/icons/IconEdit.vue";
import IconTrash from "../components/icons/IconTrash.vue";
import IconSearch from "../components/icons/IconSearch.vue";

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
export default {
  components: {
    IconPlus,
    IconSearch,
    IconSun,
    IconEdit,
    IconTrash,
  },
  name: "ArtistesView",
  data() {
    return {
      listeArtiste: [],
      filter: "",
    };
  },

  mounted() {
    this.getArtiste();
  },
  computed: {
    orderByname: function () {
      return this.listeArtiste.sort(function (a, b) {
        if (a.nom.toLowerCase() < b.nom.toLowerCase()) return -1;
        if (a.nom.toLowerCase() > b.nom.toLowerCase()) return 1;
        return 0;
      });
    },

    filterByname: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();

        return this.orderByname.filter(function (artiste) {
          return artiste.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByname;
      }
    },
  },

  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        console.log("query", query);
        this.listeArtiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtiste.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artiste/" + personne.photo);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.photo = url;
              console.log("personne", personne);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeArtiste", this.listeArtiste);
      });
    },
  },
};
</script>