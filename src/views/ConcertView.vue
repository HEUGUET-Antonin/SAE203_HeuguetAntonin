<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">
      Concert Vendredi 17 Juin
    </h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>
  <div class="grid justify-center">
    <div class="flex mt-4 mb-4">
      <CardEdge class="w-40"></CardEdge>
      <p
        class="
          font-serif
          text-black text-base
          w-32
          sm:w-[268px]
          lg:w-[368px]
          xl:w-[518px]
          h-36
          bg-white
          border-black border-2
          justify-center
          pl-2
          pt-10
        "
      >
        19h-20h <br />
        Scène principale
      </p>
    </div>
    <div class="flex mt-4 mb-4">
      <CardBushi class="w-40"></CardBushi>
      <p
        class="
          font-serif
          text-black text-base
          w-32
          sm:w-[268px]
          lg:w-[368px]
          xl:w-[518px]
          h-36
          bg-white
          border-black border-2
          justify-center
          pl-2
          pt-10
        "
      >
        20h-21h <br />
        Scène principale
      </p>
    </div>
    <div class="flex mt-4 mb-4">
      <CardEpps class="w-40"></CardEpps>
      <p
        class="
          font-serif
          text-black text-base
          w-32
          sm:w-[268px]
          lg:w-[368px]
          xl:w-[518px]
          h-36
          bg-white
          border-black border-2
          justify-center
          pl-2
          pt-10
        "
      >
        21h-22h <br />
        Scène principale
      </p>
    </div>
    <div class="flex mt-4 mb-4">
      <CardHomey class="w-40"></CardHomey>
      <p
        class="
          font-serif
          text-black text-base
          w-32
          sm:w-[268px]
          lg:w-[368px]
          xl:w-[518px]
          h-36
          bg-white
          border-black border-2
          justify-center
          pl-2
          pt-10
        "
      >
        22h-23h <br />
        Scène principale
      </p>
    </div>
  </div>
  <div class="flex justify-center mt-14 pb-12">
    <BoutonReservez></BoutonReservez>
  </div>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import CardEpps from "../components/CardEpps.vue";
import CardEdge from "../components/CardEdge.vue";
import CardBushi from "../components/CardBushi.vue";
import CardHomey from "../components/CardHomey.vue";
import BoutonReservez from "../components/BoutonReservez.vue";

export default {
  components: {
    IconSun,
    CardEpps,
    CardBushi,
    CardEdge,
    CardHomey,
    BoutonReservez,
  },
};
</script>