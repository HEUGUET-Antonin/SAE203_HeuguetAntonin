<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Les artistes</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <div
    class="
      grid grid-cols-2
      lg:grid-cols-3
      space-x-4
      justify-center
      ml-4
      mr-4
      pb-6
    "
  >
    <RouterLink to="/LaFeve"><CardFeve class="mb-12"></CardFeve></RouterLink>
    <CardBushi class="mb-12"></CardBushi>
    <CardZamdane class="mb-12"></CardZamdane>
    <CardEdge class="mb-12"></CardEdge>
    <CardHomey class="mb-12"></CardHomey>
    <CardKhali class="mb-12"></CardKhali>
    <CardJ9ueve class="mb-12"></CardJ9ueve>
    <CardEpps class="mb-12"></CardEpps>
    <CardChanceko class="mb-12"></CardChanceko>
    <CardWinter class="mb-12"></CardWinter>
    <CardAnnie></CardAnnie>
    <CardWallace></CardWallace>
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