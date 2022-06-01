<script setup>
</script>

<template>
  <main class="bg-yellow-50">
    <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
      <h1 class="font-display text-black text-3xl text-center">
        17.18.19 <br />
        Juin 2022
      </h1>
      <IconSun class="flex place-items-end -ml-4 mt-10"></IconSun>
    </div>
    <div class="pt-4 pb-4">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center m-4">
        <RouterLink to="/LaFeve"
          ><CardFeve class="mb-12"></CardFeve
        ></RouterLink>
        <CardBushi class="mb-12"></CardBushi>
        <CardZamdane class="mb-12"></CardZamdane>
        <CardEdge class="mb-12"></CardEdge>
        <CardHomey></CardHomey>
        <CardKhali></CardKhali>
      </div>
    </div>
    <RouterLink to="/artistes">
      <p
        class="
          flex
          justify-center
          uppercase
          font-serif
          text-black
          mt-12
          text-xl
          hover:text-red-600
        "
      >
        Tous les artistes
      </p>
    </RouterLink>
    <h2 class="font-display text-3xl text-black flex justify-center mt-16">
      Tickets
    </h2>
    <BoutonAchetez class="ml-auto mr-auto mt-6"></BoutonAchetez>
    <h2 class="font-display text-3xl text-black flex justify-center mt-16">
      Newsletter
    </h2>
    <p class="flex justify-center uppercase font-serif text-black mt-6 text-xl">
      Suivez l'actualité de NewFest
    </p>
    <BarreNewsletter class="pb-12"></BarreNewsletter>
  </main>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import CardFeve from "../components/CardFeve.vue";
import CardEdge from "../components/CardEdge.vue";
import CardBushi from "../components/CardBushi.vue";
import CardHomey from "../components/CardHomey.vue";
import CardKhali from "../components/CardKhali.vue";
import CardZamdane from "../components/CardZamdane.vue";
import BoutonAchetez from "../components/BoutonAchetez.vue";
import BarreNewsletter from "../components/BarreNewsletter.vue";
import IconSend from "../components/icons/IconSend.vue";

export default {
  components: {
    IconSun,
    CardFeve,
    CardBushi,
    CardEdge,
    CardHomey,
    CardKhali,
    CardZamdane,
    BoutonAchetez,
    BarreNewsletter,
    IconSend,
  },
};
</script>