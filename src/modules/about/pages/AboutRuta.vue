<template>
  <q-page>
    <h1 class="q-pa-md">Hola esto es un About</h1>
    <p class="q-pa-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio
      temporibus ex aut rerum. Ipsum neque unde a vitae autem saepe cumque quam
      esse, libero similique excepturi architecto iste hic! Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Quisquam, aperiam cupiditate. Quo
      doloremque minus rem est deserunt deleniti incidunt ab aliquid quas hic
      illo reiciendis eum dolor quasi, doloribus nostrum? Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Harum ipsam deserunt eligendi obcaecati
      consequuntur incidunt omnis deleniti quasi repudiandae neque a, placeat
      impedit. Eius perferendis nemo magnam? Qui, ipsa distinctio?
    </p>
  </q-page>
</template>

<script setup>
import { useMetaAbout } from "../composables/useMetaPage";

useMetaAbout();
</script>
