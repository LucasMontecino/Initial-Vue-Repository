<template>
  <q-page class="column flex-center">
    <q-form
      ref="myForm"
      class="column q-pa-md shadow-2"
      @submit.prevent="onSubmit"
      @reset="onReset"
    >
      
      <q-input
        v-model="formDataInput.firstName"
        filled
        label="Ingrese su nombre"
        :rules="[validateFirstName
          // (val) => !!val || 'Ingrese su nombre por favor',
          // (val) => val.length > 3 || 'Al menos ingrese 4 caracteres',
        ]"
      />

      <q-input
        v-model="formDataInput.lastName"
        filled
        label="Ingrese su apellido"
        :rules="[validateLastName
          // (val) => !!val || 'Ingrese su apellido por favor',
          // (val) => val.length > 3 || 'Al menos ingrese 4 caracteres',
        ]"
      />

      <q-input 
        v-model="formDataInput.user"
        filled
        label="Ingrese su nombre de usuario"
        :rules="[validateUser
          // (val) => !!val || 'Ingrese su nombre de usuario por favor',
          // (val) => val.length > 3 || 'Al menos ingrese 4 caracteres',
        ]"
      />

      <q-input
        v-model="formDataInput.email"
        filled
        label="Email"
        :rules="[validateEmail]"
      />

      <q-input
        v-model="formDataInput.password"
        filled
        label="Contraseña" 
        type="password"
        :rules="[validatePassword]"
      />

      <q-toggle
        v-model="formDataInput.terms"
        label="Acepto los terminos y condiciones"
        class="q-mb-md"
      />

      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
      
      <div class="flex flex-center q-pa-md">
        <q-btn color="red" @click="showLoading" label="Loading..." />
      </div>

      <div class="q-gutter-sm q-mb-sm">
        <q-btn label="Alerta" color="primary" @click="alert"></q-btn>
        <q-btn label="Confirmar" color="primary" @click="confirm"></q-btn>
        <q-btn label="Prompt" color="primary" @click="prompt"></q-btn>
      </div>

    </q-form>
  </q-page>
</template>

<script setup>
import useSendUser from "./composables/useSendUser";
import { useMetaHome } from "./composables/useMetaPage";
import { validateFirstName, validateLastName, validateUser, validateEmail, validatePassword } from '../../utils/validate';

useMetaHome();

const {
  myForm,
  formDataInput,
  formDataToSend,
  onSubmit,
  onReset,
  alert,
  confirm,
  prompt,
  showLoading
} = useSendUser();

</script>
