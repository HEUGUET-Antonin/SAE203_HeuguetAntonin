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
  </main>

  <RouterView />
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

