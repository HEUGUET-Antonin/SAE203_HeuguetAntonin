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
    <CardFeve></CardFeve>
  </main>
</template>

<script>
import IconSun from "../components/icons/IconSun.vue";
import CardFeve from "../components/CardFeve.vue";

export default {
  components: {
    IconSun,
    CardFeve,
  },
};
</script>