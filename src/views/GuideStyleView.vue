<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">Guide de style</h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <div class="grid justify-center">
    <div>
      <h2
        class="font-serif text-black text-xl text-center uppercase mb-12 mt-4"
      >
        Couleurs
      </h2>
    </div>
    <div class="flex space-x-4">
      <div class="w-16 h-16 rounded-full bg-black"></div>
      <div class="w-16 h-16 rounded-full bg-white border-2 border-black"></div>
      <div class="w-16 h-16 rounded-full bg-red-500"></div>
      <div class="w-16 h-16 rounded-full bg-red-600"></div>
      <div
        class="w-16 h-16 rounded-full bg-yellow-50 border-2 border-black"
      ></div>

      <div class="w-16 h-16 rounded-full bg-yellow-300"></div>
      <div class="w-16 h-16 rounded-full bg-yellow-200"></div>
    </div>

    <div class="grid justify-center">
      <div>
        <h2
          class="
            font-serif
            text-black text-xl text-center
            uppercase
            mb-12
            mt-12
          "
        >
          Typographies
        </h2>
      </div>
      <p class="font-serif text-black text-center text-lg">Typo 1</p>
      <p class="font-display text-black text-center text-lg">Typo 2</p>
    </div>

    <div class="grid justify-center">
      <div>
        <h2
          class="
            font-serif
            text-black text-xl text-center
            uppercase
            mb-12
            mt-12
          "
        >
          Icônes
        </h2>
      </div>
      <div class="flex justify-items-center space-x-8">
        <IconSun></IconSun>
        <IconSend></IconSend>
        <IconMenu></IconMenu>
      </div>
    </div>
    <div class="grid justify-center">
      <div>
        <h2
          class="
            font-serif
            text-black text-xl text-center
            uppercase
            mb-12
            mt-12
          "
        >
          Composants
        </h2>
        <div
          class="
            grid grid-cols-2
            sm:grid-cols-3
            gap-4
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >
          <CardFeve></CardFeve>
          <CardBushi></CardBushi>
          <CardZamdane></CardZamdane>
          <CardEdge></CardEdge>
          <CardHomey></CardHomey>
          <CardKhali></CardKhali>
          <CardJ9ueve></CardJ9ueve>
          <CardEpps></CardEpps>
          <CardChanceko></CardChanceko>
          <CardWinter></CardWinter>
          <CardAnnie></CardAnnie>
          <CardWallace></CardWallace>
        </div>
        <div class="grid grid-cols-1 justify-items-center">
          <BoutonReservez class="mt-4 mb-8"></BoutonReservez>
          <BoutonTickets class="mb-8"></BoutonTickets>
          <BoutonSavoirplus class="mb-8"></BoutonSavoirplus>
          <BoutonEnvoyer class="mb-8"></BoutonEnvoyer>
          <BoutonAchetez class="mb-8"></BoutonAchetez>
          <BarreMail class="mb-8"></BarreMail>
          <BarreMessage class="mb-8"></BarreMessage>
          <BarreNewsletter class="mb-8"></BarreNewsletter>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BoutonTickets from "../components/BoutonTickets.vue";
import IconSun from "../components/icons/IconSun.vue";
import IconSend from "../components/icons/IconSend.vue";
import IconMenu from "../components/icons/IconMenu.vue";
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
import BoutonSavoirplus from "../components/BoutonSavoirplus.vue";
import BoutonReservez from "../components/BoutonReservez.vue";
import BarreMail from "../components/BarreMail.vue";
import BarreMessage from "../components/BarreMessage.vue";
import BoutonEnvoyer from "../components/BoutonEnvoyer.vue";
import BarreNewsletter from "../components/BarreNewsletter.vue";

export default {
  components: {
    BarreNewsletter,
    BoutonReservez,
    BarreMail,
    BarreMessage,
    BoutonEnvoyer,
    BoutonTickets,
    BoutonSavoirplus,
    IconSun,
    IconSend,
    IconMenu,
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