<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Programmation</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <div class="grid justify-items-center mt-4 pb-12">
    <h3 class="font-serif uppercase text-black text-2xl">
      Vendredi 17 JUIN 2022
    </h3>
  </div>
  <div
    class="grid grid-cols-2 xl:grid-cols-4 gap-4 justify-center mt-4 ml-8 mr-8"
  >
    <CardEdge class="mb-12"></CardEdge>
    <CardBushi class="mb-12"></CardBushi>
    <CardEpps></CardEpps>
    <CardHomey></CardHomey>
  </div>
  <RouterLink to="/concert">
    <div class="grid justify-center pb-12">
      <BoutonSavoirplus class="mt-12"></BoutonSavoirplus>
    </div>
  </RouterLink>

  <div class="grid justify-items-center mt-4 pb-12">
    <h3 class="font-serif uppercase text-black text-2xl">
      Samedi 18 JUIN 2022
    </h3>
  </div>
  <div
    class="grid grid-cols-2 xl:grid-cols-4 gap-4 justify-center mt-4 ml-8 mr-8"
  >
    <CardChanceko class="mb-12"></CardChanceko>
    <CardWinter class="mb-12"></CardWinter>
    <CardAnnie></CardAnnie>
    <CardWallace></CardWallace>
  </div>
  <div class="grid justify-center pb-12">
    <BoutonSavoirplus class="mt-12"></BoutonSavoirplus>
  </div>

  <div class="grid justify-items-center mt-4 pb-12">
    <h3 class="font-serif uppercase text-black text-2xl">
      Dimanche 19 JUIN 2022
    </h3>
  </div>
  <div
    class="grid grid-cols-2 xl:grid-cols-4 gap-4 justify-center mt-4 ml-8 mr-8"
  >
    <CardFeve class="mb-12"></CardFeve>
    <CardZamdane class="mb-12"></CardZamdane>
    <CardKhali></CardKhali>
    <CardJ9ueve></CardJ9ueve>
  </div>
  <div class="grid justify-center pb-12">
    <BoutonSavoirplus class="mt-12"></BoutonSavoirplus>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import BoutonSavoirplus from "../components/BoutonSavoirplus.vue";
import CardFeve from "../components/CardFeve.vue";
import CardEdge from "../components/CardEdge.vue";
import CardBushi from "../components/CardBushi.vue";
import CardHomey from "../components/CardHomey.vue";
import CardKhali from "../components/CardKhali.vue";
import CardZamdane from "../components/CardZamdane.vue";
import CardAnnie from "../components/CardAnnie.vue";
import CardChanceko from "../components/CardChanceko.vue";
import CardEpps from "../components/CardEpps.vue";
import CardJ9ueve from "../components/CardJ9ueve.vue";
import CardWallace from "../components/CardWallace.vue";
import CardWinter from "../components/CardWinter.vue";

export default {
  components: {
    IconSun,
    BoutonSavoirplus,
    CardFeve,
    CardBushi,
    CardEdge,
    CardHomey,
    CardKhali,
    CardZamdane,
    CardWinter,
    CardWallace,
    CardJ9ueve,
    CardEpps,
    CardChanceko,
    CardAnnie,
  },
};
</script>