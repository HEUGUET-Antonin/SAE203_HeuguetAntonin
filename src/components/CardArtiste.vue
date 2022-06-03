<template>
  <div class="">
    <img :src="image" class="object-cover border-2 border-black w-full h-36" />
    <div
      class="
        flex
        ml-auto
        mr-auto
        bg-red-600
        w-24
        border-2 border-black
        z-20
        -mt-4
      "
    >
      <p class="font-serif text-black uppercase text-xl text-center">
        {{ nom }}
      </p>
    </div>

    <div class="flex flex-col gap-10">
      <div class="flex justify-evenly">
        <RouterLink :to="{ name: 'deleteArtiste', params: { id: Artiste.id } }"
          ><IconTrash
        /></RouterLink>
        <RouterLink :to="{ name: 'editArtiste', params: { id: Artiste.id } }"
          ><IconEdit
        /></RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
import IconEdit from "../components/icons/IconEdit.vue";
import IconTrash from "../components/icons/IconTrash.vue";

export default {
  components: {
    IconEdit,
    IconTrash,
  },
  props: {
    nom: String,
    photo: String,
  },
};
</script>