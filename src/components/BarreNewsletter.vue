<template>
  <div class="flex justify-center">
    <form class="m-4 flex">
      <input
        type="email"
        class="w-52 font-serif text-xs text-black border-black border h-7 pl-2"
        placeholder="Votre adresse mail"
      />
      <button
        class="
          flex
          justify-center
          items-center
          w-14
          h-7
          bg-red-500
          border-black border-t border-b border-r
        "
      >
        <IconSend></IconSend>
      </button>
    </form>
  </div>
</template>
<script>
import IconSend from "../components/icons/IconSend.vue";

export default {
  components: {
    IconSend,
  },
};
</script>