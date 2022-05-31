<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">
      Mentions Légales
    </h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <div>
    <h2 class="font-serif text-2xl text-black mt-12 ml-44">
      Identité & Coordonnées :
    </h2>
    <p>
      Département métiers du multimédia et de l’internet de Montbéliard
      Établissement Public 4, place Tharradin 25200 Montbéliard Tél. +33 (0)3 81
      99 47 34 Mail DUT MMI : dut-mmi-montbeliard@univ-fcomte.fr Site du MMI :
      http://mmimontbeliard.com
    </p>
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