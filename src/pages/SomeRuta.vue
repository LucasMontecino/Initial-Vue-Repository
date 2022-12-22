<template>
  <q-page class="q-pa-md q-gutter-y-md column items-center">
    <q-btn-group push>
      <q-btn
        color="yellow"
        glossy
        text-color="black"
        push
        label="First"
        icon="verified_user"
      />
      <q-btn color="amber" glossy text-color="black" push label="Second" />
      <q-btn color="orange" glossy text-color="black" push label="Third" />
    </q-btn-group>
  </q-page>
</template>

<script setup>
import { useMetaSome } from '../composables/useMetaPage'

useMetaSome();
</script>
