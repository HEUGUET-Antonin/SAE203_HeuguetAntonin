<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Programmation</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <div class="grid justify-items-center mt-4 pb-12">
    <h3 class="font-serif uppercase text-black text-2xl">
      Vendredi 17 JUIN 2022
    </h3>
    <div class="flex mt-8 mb-8">
      <CardEdge></CardEdge>
      <CardBushi></CardBushi>
      <CardEpps></CardEpps>
      <CardHomey></CardHomey>
    </div>
    <RouterLink to="/concert"
      ><BoutonSavoirplus class="mt-12"></BoutonSavoirplus
    ></RouterLink>
  </div>

  <div class="grid justify-items-center mt-4 pb-12">
    <h3 class="font-serif uppercase text-black text-2xl">
      Samedi 18 JUIN 2022
    </h3>
    <div class="flex mt-8 mb-8">
      <CardChanceko></CardChanceko>
      <CardWinter></CardWinter>
      <CardAnnie></CardAnnie>
      <CardWallace></CardWallace>
    </div>
    <BoutonSavoirplus class="mt-12"></BoutonSavoirplus>
  </div>

  <div class="grid justify-items-center mt-4 pb-12">
    <h3 class="font-serif uppercase text-black text-2xl">
      Dimanche 19 JUIN 2022
    </h3>
    <div class="flex mt-8 mb-8">
      <CardFeve></CardFeve>
      <CardZamdane></CardZamdane>
      <CardKhali></CardKhali>
      <CardJ9ueve></CardJ9ueve>
    </div>
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