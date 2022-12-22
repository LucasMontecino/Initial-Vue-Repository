<template>
    <q-page padding>
        <h4>Agregar Productos</h4>

        <q-form class="row q-col-gutter-md" @submit.prevent="onSubmit" @reset="onReset" ref="myForm">
            <div class="col-12 col-sm-6">
                <q-input 
                    label="Producto"
                    v-model="formProduct.producto"
                />
            </div>

            <div class="col-12 col-sm-6">
                <q-input 
                    label="Cantidad"
                    v-model="formProduct.cantidad"
                />
            </div>

            <div class="col-12 col-sm-6">
                <q-input 
                    label="Precio"
                    v-model="formProduct.precio"
                />
            </div>

            <div class="col-12 col-sm-6">
                <q-select 
                    label="Prioridad"
                    v-model="formProduct.prioridad"
                    :options="opciones"
                />
            </div>

            <div class="col-12">
                <q-btn 
                    label="Submit"
                    color="primary"
                    type="submit"
                />
        
                <q-btn 
                    label="Reset"
                    color="primary"
                    outline
                    class="q-ml-sm"
                    type="reset"
                />
            </div>
        </q-form>

        <ProductosTable />

    </q-page>
</template>

<script setup>
    import { useMetaProductos } from '../composables/useMetaPage';
    import { ref } from 'vue';
    import { useQuasar } from 'quasar'
    import ProductosTable from '../components/ProductosTable.vue'
    import { validateFirstName } from '../utils/validate';
    
    const $q = useQuasar();
    const myForm = ref(null)
    const productos = ref([])
    useMetaProductos();

    const formProduct = ref({
        producto: undefined,
        cantidad: undefined,
        precio: undefined,
        prioridad: undefined
    });

    const onSubmit = () => {
        myForm.value.validate().then((success) => {
            if(success){
                $q.notify({
                    color: "green-4",
                    textColor: "white",
                    icon: "cloud_done",
                    message: "Enviado",
                });
                productos.value = [...productos.value, {
                    producto: formProduct.value.producto,
                    cantidad: formProduct.value.cantidad,
                    precio: formProduct.value.precio,
                    prioridad: formProduct.value.prioridad,
                }]
            }
        });
    };

    const onReset = () => {
        formProduct.value.producto = undefined;
        formProduct.value.precio = undefined;
        formProduct.value.cantidad = undefined;
        formProduct.value.prioridad = undefined;
    }

    const opciones = ['máxima', 'moderada', 'mínima'];
</script>