<template>
    <q-page padding>
        <h4 class="flex flex-center">Notas</h4>

        <QCard />
    </q-page>
</template>

<script setup>
    import QCard from '../components/CardQtable.vue'
    import { useMetaQCard } from '../composables/useMetaPage';

    useMetaQCard();
</script>