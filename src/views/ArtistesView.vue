<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Les artistes</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <div class="grid grid-cols-3 justify-items-center mt-6">
    <CardFeve class="mb-16"></CardFeve>
    <CardBushi class="mb-16"></CardBushi>
    <CardZamdane class="mb-16"></CardZamdane>
    <CardEdge class="mb-16"></CardEdge>
    <CardHomey class="mb-16"></CardHomey>
    <CardKhali class="mb-16"></CardKhali>
    <CardJ9ueve class="mb-16"></CardJ9ueve>
    <CardEpps class="mb-16"></CardEpps>
    <CardChanceko class="mb-16"></CardChanceko>
    <CardWinter class="mb-16"></CardWinter>
    <CardAnnie class="mb-16"></CardAnnie>
    <CardWallace class="mb-16"></CardWallace>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
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