<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Le festival</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <p class="font-serif text-base text-black ml-48 mt-8 leading-10">
    New fest est un festival se voulant jeune et très actuel. <br />
    le festival c’est vivre une expérience unique et enrichissante. <br />
    Le NewFest c’est aussi découvrir des artistes émergeants de la scène
    francophone. <br />
    Venez vous réunir entre passionnée de rap francophone dans un lieu
    magnifique que sont les champs de mars.
  </p>
  <div class="pb-12">
    <h2 class="font-display text-black text-3xl text-center mt-16">
      Reserve ton ticket dès maintenant !
    </h2>
    <div class="mt-8 pb-8 flex justify-center">
      <BoutonTickets></BoutonTickets>
    </div>
  </div>
</template>
<script>
import IconSun from "../components/icons/IconSun.vue";
import BoutonTickets from "../components/BoutonTickets.vue";

export default {
  components: {
    IconSun,
    BoutonTickets,
  },
};
</script>