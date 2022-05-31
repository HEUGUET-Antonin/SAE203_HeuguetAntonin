<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Guide de style</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <CardFeve></CardFeve>
</template>


<script>
import IconSun from "../components/icons/IconSun.vue";
import BoutonReservez from "../components/BoutonReservez.vue";
import CardFeve from "../components/CardFeve.vue";

export default {
  components: {
    IconSun,
    BoutonReservez,
    CardFeve,
  },
};
</script>