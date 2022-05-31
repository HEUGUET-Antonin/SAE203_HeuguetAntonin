<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">La fève</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <div class="grid justify-center">
    <img
      src="../assets/Lafeve.png"
      alt="La fève"
      class="
        ml-auto
        mr-auto
        w-48
        h-44
        object-cover
        mt-2
        mb-8
        border-black border-2
      "
    />
    <p class="font-serif text-black text-base leading-10">
      La Fève est l’un des nouveaux phénomènes du rap francophone.<br />
      C’est l’un des piliers du mouvement “Next-Gen” en france.<br />
      C’est suite à son album en commun avec le beatmaker Kosei “Kolaf” que le
      jeune rappeur commencera à se faire remarquer.<br />
      Puis plus récemment avec son album solo “Errr” qui fut un total succès.
    </p>
  </div>
  <div class="flex justify-center space-x-48 mt-12">
    <img src="../assets/Errr.png" alt="" class="border-black border-2" />
    <img src="../assets/Kolaf.png" alt="" class="border-black border-2" />
  </div>
  <div class="pb-24">
    <BoutonReservez class="ml-auto mr-auto mt-24"></BoutonReservez>
  </div>
</template>
<script>
import IconSun from "../components/icons/IconSun.vue";
import BoutonReservez from "../components/BoutonReservez.vue";

export default {
  components: {
    IconSun,
    BoutonReservez,
  },
};
</script>