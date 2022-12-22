<template>
  
    <q-table
        class="q-ma-md" 
        title="Productos"
        no-data-label="Sin productos para mostrar"
        :columns="columns"
        :rows="rows" 
    />
  
</template>

<script setup>

const columns = [
    {
        name: 'producto',
        label: 'Producto',
        align: 'left',
        field: 'producto',
        sortable: true
    },
    {
        name: 'cantidad',
        label: 'Cantidad',
        align: 'left',
        field: 'cantidad',
        sortable: true
    },
    {
        name: 'precio',
        label: 'Precio',
        align: 'left',
        field: 'precio',
        sortable: true
    },
    {
        name: 'prioridad',
        label: 'Prioridad',
        align: 'left',
        field: 'prioridad',
        sortable: true
    }
];

const rows = [
    {
        producto: 'Notebook',
        cantidad: 3,
        precio: 150000,
        prioridad: 'máxima'
    },
]
</script>
