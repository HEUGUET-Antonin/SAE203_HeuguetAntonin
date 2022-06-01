<template>
  <div class="flex justify-center ml-4 mr-4 pt-12 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Erreur 404</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <div class="grid justify-center">
    <p
      class="
        font-serif
        text-black text-2xl
        uppercase
        mt-32
        mb-8
        ml-4
        mr-4
        text-center
      "
    >
      La page que vous recherchez n'existe pas ou n'est pas disponible
    </p>
    <form
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q + ' site:mmimontbeliard.com'"
      class="flex justify-center pb-64 mt-12"
    >
      <input type="text" id="q" name="q" x-model="q" class="w-40 h-8 sm:w-64" />
      <button
        type="submit"
        class="
          font-serif
          uppercase
          text-black
          bg-red-500
          rounded-r-md
          w-20
          text-xs
          sm:w-32 sm:text-base
          h-8
        "
      >
        Rechercher
      </button>
    </form>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";

export default {
  components: {
    IconSun,
  },
};
</script>