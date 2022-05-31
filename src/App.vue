<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="pt-6 pl-8 pr-8 pb-8 bg-yellow-50 text-black">
    <div class="flex justify-between items-center">
      <RouterLink to="/"
        ><img src="src\assets\Logo.png" alt="Logo NewFest"
      /></RouterLink>
      <div class="block lg:hidden">
        <button
          class="relative z-50 text-xl"
          aria-haspopup="true"
          aria-controls="menu"
          :aria-expanded="menuOuvert"
          @click="menuOuvert = !menuOuvert"
        >
          <IconMenu></IconMenu>
        </button>
        <div
          id="menu"
          class="
            translate-x-full
            motion-safe:duration-1000 motion-safe:transition-transform
            fixed
            inset-0
            bg-yellow-200
            text-black
            font-serif
            text-2xl
          "
          :class="{ 'translate-x-0': menuOuvert }"
        >
          <RouterLink to="/" class="ml-6 mr-6">Accueil</RouterLink>
          <RouterLink to="/programmation" class="ml-6 mr-6"
            >Programmation</RouterLink
          >
          <RouterLink to="/artistes" class="ml-6 mr-6">Artistes</RouterLink>
          <RouterLink to="/apropos" class="ml-6 mr-6"> à propos</RouterLink>
          <RouterLink to="/contact" class="ml-6 mr-6">Contact</RouterLink>
        </div>
      </div>

      <div class="hidden lg:block">
        <nav
          class="
            flex
            items-center
            justify-center
            bg-yellow-300
            text-black
            font-serif
            text-2xl
            border-[3px] border-black
            w-[56rem]
            h-14
            uppercase
          "
        >
          <RouterLink to="/" class="ml-6 mr-6">Accueil</RouterLink>
          <RouterLink to="/programmation" class="ml-6 mr-6"
            >Programmation</RouterLink
          >
          <RouterLink to="/artistes" class="ml-6 mr-6">Artistes</RouterLink>
          <RouterLink to="/apropos" class="ml-6 mr-6"> à propos</RouterLink>
          <RouterLink to="/contact" class="ml-6 mr-6">Contact</RouterLink>
        </nav>
      </div>
    </div>

    <nav class="hidden">
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main class="bg-yellow-50 text-black"><RouterView /></main>

  <footer
    class="
      flex
      justify-center
      items-center
      space-x-[700px]
      pt-6
      pb-4
      bg-yellow-50 bg-fond-footer bg-cover
    "
  >
    <RouterLink to="/mentionslegales">
      <p class="font-serif text-black text-xs hover:text-red-500">
        Mentions Légales
      </p>
    </RouterLink>
    <a href="http://1863.fr/">
      <img src="../src/assets/1863.png" alt="Logo 1863"
    /></a>
  </footer>
</template>

<style>
@import "@/assets/base.css";
</style>

<script>
import IconMenu from "./components/icons/IconMenu.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
  components: {
    IconMenu,
  },
};
</script>

