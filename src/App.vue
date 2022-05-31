<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="bg-yellow-50 text-black">
    <header class="pt-6 ml-8 mr-8 pb-8">
      <div class="flex justify-between items-center">
        <RouterLink to="/"
          ><img src="src\assets\Logo.png" alt="Logo NewFest"
        /></RouterLink>
        <button
          class="relative z-50"
          aria-haspopup="true"
          :aria-expanded="menuOuvert"
          @click="menuOuvert = !menuOuvert"
        >
          <IconMenu></IconMenu>
        </button>
      </div>

      <nav class="hidden">
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
    <footer
      class="
        flex
        justify-center
        items-center
        space-x-[700px]
        mt-12
        pt-4
        pb-4
        bg-fond-footer bg-cover
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
  </main>
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

