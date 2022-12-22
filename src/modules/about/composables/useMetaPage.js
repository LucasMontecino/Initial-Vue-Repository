import { useMeta } from "quasar";
import { ref } from "vue";

export const useMetaHome = () => {
    const title = ref('Home Page - Mi Pagina')

    useMeta(() => {
        return {
            title: title.value,
          };
    })
};

export const useMetaAbout = () => {
    const title = ref('About Page - Mi Pagina')

    useMeta(() => {
        return {
            title: title.value,
          };
    })
};

export const useMetaSome = () => {
    const title = ref('Some Page - Mi Pagina')

    useMeta(() => {
        return {
            title: title.value
        };
    })
};

export const useMetaProductos = () => {
    const title = ref('Productos - Mi Pagina')

    useMeta(() => {
        return {
            title: title.value
        };
    })
};

export const useMetaCards = () => {
    const title = ref('Cards Table - Mi Pagina')

    useMeta(() => {
        return {
            title: title.value
        };
    })
};

export const useMetaQCard = () => {
    const title = ref('Notas - Mi Pagina')

    useMeta(() => {
        return {
            title: title.value
        };
    })
};


