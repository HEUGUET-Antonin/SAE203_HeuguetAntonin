<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Programmation</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <div class="grid justify-items-center mt-4 pb-12">
    <h3 class="font-serif uppercase text-black text-2xl">
      Vendredi 17 JUIN 2022
    </h3>
    <div class="flex"></div>
    <BoutonSavoirplus class="mt-12"></BoutonSavoirplus>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import BoutonSavoirplus from "../components/BoutonSavoirplus.vue";

export default {
  components: {
    IconSun,
    BoutonSavoirplus,
  },
};
</script>