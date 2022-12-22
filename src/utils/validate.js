
export const validateFirstName = (val) => {
    // if(!val) return 'Ingrese su nombre por favor';
    // if(val.length < 3) return 'Al menos ingrese 4 caracteres';
    if(!val) return 'Ingrese su nombre por favor';
    if(val){
        const namePatern = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
        return namePatern.test(val) || 'Ingrese un nombre con mínimo cuatro caracteres, sin números, guiones o guión bajo'
    }
}

export const validateLastName = (val) => {
    if(!val) return 'Ingrese su apellido por favor';
    // if(val.length < 3) return 'Al menos ingrese 4 caracteres';
    if(val){
        const namePatern = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
        return namePatern.test(val) || 'Ingrese su apellido con mínimo dos caracteres, sin números, guiones o guión bajo'
    }
}

export const validateUser = (val) => {
    if(!val) return 'Ingrese su nombre de usuario por favor';
    // if(val.length < 3) return 'Al menos ingrese 4 caracteres';
    if(val){
        const userPatern = /^[a-zA-Z0-9\_\-]{4,16}$/;
        return userPatern.test(val) || 'Mínimo 4 caracteres: letras, números, guión y guión bajo'
    }
}

export const validateEmail = (val) => {
  const emailPatern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPatern.test(val) || "El correo parece no ser valido";
};

export const validatePassword = (val) => {
    if(!val) return 'Ingrese su contraseña por favor'
    if(val){
        const passwordPatern = /^.{4,12}$/;
        return passwordPatern.test(val) || '4 a 12 dígitos';
    };
}


