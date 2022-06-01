<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">
      Concert Vendredi 17 Juin
    </h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <div class="grid justify-center">
    <div><CardEdge></CardEdge></div>
    <div><CardBushi></CardBushi></div>
    <div><CardEpps></CardEpps></div>
    <div><CardHomey></CardHomey></div>
  </div>
  <div class="flex justify-center mt-28 pb-12">
    <BoutonReservez></BoutonReservez>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import CardEpps from "../components/CardEpps.vue";
import CardEdge from "../components/CardEdge.vue";
import CardBushi from "../components/CardBushi.vue";
import CardHomey from "../components/CardHomey.vue";
import BoutonReservez from "../components/BoutonReservez.vue";

export default {
  components: {
    IconSun,
    CardEpps,
    CardBushi,
    CardEdge,
    CardHomey,
    BoutonReservez,
  },
};
</script>