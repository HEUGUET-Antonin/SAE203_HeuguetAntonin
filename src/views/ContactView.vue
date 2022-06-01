<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Nous contacter</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <form class="grid justify-center mt-8 mb-8">
    <BarreMail class="mb-4"></BarreMail>
    <BarreMessage class="mb-4"></BarreMessage>
    <BoutonEnvoyer></BoutonEnvoyer>
  </form>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h2 class="font-display text-black text-3xl text-center">Localisation</h2>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <img
    src="\Localisation.png"
    alt="Localisation"
    class="
      ml-auto
      mr-auto
      mt-4
      sm:w-[476px]
      lg:w-[655px]
      xl:w-[922px]
      h-[202px]
      object-cover
    "
  />
  <p class="font-serif text-black text-xl text-center mt-4 pb-16">
    Champs de mars 75015 Paris
  </p>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import BarreMail from "../components/BarreMail.vue";
import BarreMessage from "../components/BarreMessage.vue";
import BoutonEnvoyer from "../components/BoutonEnvoyer.vue";

export default {
  components: {
    IconSun,
    BarreMail,
    BarreMessage,
    BoutonEnvoyer,
  },
};
</script>