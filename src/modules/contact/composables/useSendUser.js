import { ref } from "vue";
import { useQuasar, QSpinnerFacebook } from "quasar";

const useSendUser = () => {
  const $q = useQuasar();
  const myForm = ref(null);

  const formDataInput = ref({
    firstName: undefined,
    lastName: undefined,
    user: undefined,
    email: undefined,
    password: undefined,
    terms: false,
  });

  const formDataToSend = ref({
    name: {
      firstName: undefined,
      lastName: undefined,
    },
    user: undefined,
    email: undefined,
    password: undefined,
    terms: false,
  });

  const onSubmit = () => {
    myForm.value.validate().then((success) => {
      if (success) {
        if (formDataInput.value.terms !== true) {
          $q.notify({
            color: "negative",
            icon: "warning",
            message:
              "Necesitas aceptar los terminos y condiciones antes de poder enviar el formulario",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Enviado",
          });
        }
      }
    });
  };

  const onReset = () => {
    formDataInput.value.firstName = undefined,
    formDataInput.value.lastName = undefined,
    formDataInput.value.user = undefined,
    formDataInput.value.email = undefined,
    formDataInput.value.password = undefined,
    formDataInput.value.terms = false
  };

  const alert = () => {
    $q.dialog({
      title: 'Alerta!',
      message: 'No estás introduciendo todos los datos'
    }).onOk(() => {
      console.log('Ok')
    }).onCancel(() => {
      console.log('Cancel')
    }).onDismiss(() => {
      console.log('I am triggered on both OK and Cancel')
    })
  };

  

  const confirm = () => {
    $q.dialog({
      title: 'Confirmación',
        message: 'Te gustaría ser cliente?',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
    }).onOk(() => {
      console.log('Está todo bien')
    }).onCancel(() => {
      console.log('Saliste inesperadamente')
    }).onDismiss(() => {
      console.log('He visto todo')
    })
  };

  const prompt = () => {
    $q.dialog({
      title: 'Escriba su nombre de usuario aquí',
      message: 'Ya tienes un usuario?',
      prompt: {
        model: '',
        type: 'text'
      },
      cancel: true,
      persistent: true
    }).onOk((data) => {
      console.log('Ok, reservado', data)
    }).onCancel(() => {
      console.log('Cancelado')
    }).onDismiss(() => {
      console.log('No guardes los cambios')
    })
  };

  const showLoading = () => {
    $q.loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: 'blue',
      spinnerSize: 140,
      backgroundColor: 'purple',
      message: 'Espere mientras se finaliza el proceso...',
      messageColor: 'white',
    })

    let timer = setTimeout(() => {
      $q.loading.hide()
      timer = void 0
    }, 3000)

    // $q.loading.show()
  
    // timer = setTimeout(() => {
    //   $q.loading.hide()
    //   timer = void 0 
    // }, 2000)
  };

  return {
    myForm,
    formDataInput,
    onSubmit,
    onReset,
    alert,
    confirm,
    prompt,
    showLoading
  }
};

export default useSendUser;
