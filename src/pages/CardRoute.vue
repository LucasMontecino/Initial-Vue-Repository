<template>
    <q-page padding>
        <h4 class="flex flex-center">Tabla de Postres</h4>

        <CardTable />
    </q-page>
</template>

<script setup>
    import { useMetaCards } from '../composables/useMetaPage'
    import CardTable from '../components/CardTable.vue'

    useMetaCards();
</script>