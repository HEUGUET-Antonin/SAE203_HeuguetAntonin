<template>
  <div class="flex justify-center ml-4 mr-4 pt-4 pb-4">
    <h1 class="font-display text-black text-3xl text-center">
      Mentions Légales
    </h1>
    <IconSun class="flex place-items-end -ml-5 mt-2"></IconSun>
  </div>

  <div>
    <h2 class="font-serif text-2xl text-black mt-12 ml-10">
      Identité & Coordonnées :
    </h2>
    <p class="font-serif text-base text-black ml-12 mt-12">
      Département métiers du multimédia et de l’internet de Montbéliard <br />
      Établissement Public <br />
      4, place Tharradin 25200 Montbéliard <br />
      Tél. +33 (0)3 81 99 47 34 <br />
      Mail DUT MMI : dut-mmi-montbeliard@univ-fcomte.fr <br />
      Site du MMI : http://mmimontbeliard.com
    </p>
  </div>

  <div>
    <h2 class="font-serif text-2xl text-black mt-12 ml-10">
      Les mentions relatives à l’hébergement du site :
    </h2>
    <p class="font-serif text-base text-black ml-12 mt-12">
      Netlify <br />
      2325 3rd Street, Suite 296, San Francisco, California, 94107, USA
      <br />Site : https://www.netlify.com <br />Les contacter :
      https://www.netlify.com/support/<br />
      Tél. (415) 691-1573
    </p>
    <p class="font-serif text-base text-black ml-12 mt-12 pb-8">
      Infomaniak<br />
      Rue Eugène, Marziano 25, 1227 Genève, Suisse <br />Site :
      https://www.infomaniak.com/fr <br />Les contacter :
      https://support.infomaniak.com<br />
      Tél. +41 22 820 35 55
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