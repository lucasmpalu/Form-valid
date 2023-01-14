// const form = document.getElementById('form')
// const inputPassword = document.getElementById('password')




// //1° recupero al padre (DIV), para luego buscar el ultimo child que le voy a agregar un texto. 2° le agrego la clase error y saco la de exito. 3° recupero el hijo vacío para el error y le agrego un textContent. 4° el message es personalizado, es un parametro.
// showError = (input, message) => {
//     const formField = input.parentElement //parentElement --> ACÁ ESTARÍA RECUPERANDO EL ELEMENTO PADRE (en este caso es el div que contiene al label e input)

//     formField.classList.remove('successJS') //le remuevo la clase de exito
//     formField.classList.add('errorJS')     //le añado un color rojo al texto

//     const errorField = formField.lastElementChild //acá es una forma de sacar el ultimo elemento de mi div contenedor (ES UNA FORMA, DIRECTAMENTE LO PODRÍA SACAR POR ID O CLASS)
//     errorField.textContent = message 
// }

// showSuccess = (input, message) => {   //VER QUE ES CASI IGUAL LA FUNCIÓN SUCCESS Y ERROR, CAMBIA QUE LE REMUEVO Y QUE LE AGREGO, PERO ES SIMILAR, COMPARARLAS.
//     const formField = input.parentElement //parentElement --> ACÁ ESTARÍA RECUPERANDO EL ELEMENTO PADRE (en este caso es el div que contiene al label e input)

//     formField.classList.remove('errorJS') //saco la de error si el usuario no hizo su cotnraseña correcta
//     formField.classList.add('successJS')  //y le pongo la de exito (basicamente no tendría nada)

//     const errorField = formField.lastElementChild //acá es una forma de sacar el ultimo elemento de mi div contenedor (ES UNA FORMA, DIRECTAMENTE LO PODRÍA SACAR POR ID O CLASS)
//     errorField.textContent = message

// }



// // isPasswordSecure = (pwd) => {                                                                    /////CHEQUEAR PASSWORD CON EXPRESIONES REGULARES
// //     passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/       //expresión regular 
    
// //     //PARA CHEQUEAR --> en la consola pongo console.log(isPasswordSecure('miContraseñaParaChequear123!'))

// //     return passwordRegEx.test(pwd)                                                               //me devuelve true o false con esto veo si mi pwd cumple con los requisitos de la función regular de aca arriba

// // }


// // isEmpty = (lengthPassword) => {
// //     //(?) SI NO TENGO RETURN, ME RETORNA TRUE O FALSE IGUAL?
// //    return lengthPassword === "" ? true : false
// // }

// // COMO SE HACE
// checkUsername = () => {

// };

// checkEmail = () => {
    
// };

// //Explicación de esta función.
// //Acá las condiciones son una función que me chequea si está vacío, si es segura (ME TIENEN QUE DAR TRUE O FALSE) y las ejecuciones {} son el showError() que me agregan las clases para error, les paso como parametro el input correspondiente y el mensaje que le voy a agregar con el textcontent para el error. 
// // checkPassword = () => {

// //     let valid = false
// //     const valuePassword = inputPassword.value.trim() 

// //     if (isEmpty(valuePassword)) {  //Si la función de si esta vacío o lleno da verdadero (vacío), voy a ejecutar la función reutilizable para errores en los inputs
// //         showError(inputPassword, 'Debes ingresar caracteres')
      
// //     } else if (!isPasswordSecure(valuePassword)) {   //CHEQUEAR QUE LA CONTRASEÑA SEA SEGURA //si en este caso me da false, ejecuto lo de abajo
// //         showError(inputPassword, 'Debe ingresar por lo menos un caracter especial, numero, una mayuscula y una minuscula')
// //     } else {
// //         showSuccess(inputPassword)

// //         valid = true
// //     }
    
// //     return valid;
// // };

// checkPhone = () => {
    
// };







// //CUANDO SE HACE
// const debounce = (fn, delay = 500) => { //si no recibe ningun parametro, por default el parametro delay siempre será 500ms
    //   let timOutId 
    //   return (...args) => { //esto es una manera de retornar una función
    //     if (timeOutId){     //esto quiere decir, si EXISTE timeOutId 
    //         clearTimeout(timeOutId)
    //     }
    //     timOutId = setTimeout(() => {
    //         fn.apply(null, args)
    //     }, delay);

    //   }
// 
// }


// //ESTO SERÍA PARA VALIDAR FORMULARIOS 
// form.addEventListener('input', debounce((e) =>{  // el evento 'input' es si el input cambia de valor....
//     switch (e.target.id) {   //dependiendo el "id" del input que cambie, va a ejecutar una u otra función
//         case 'username':
//             checkUsername()
//             break;
            
//         case 'email':
//             checkEmail()
//             break;    
    
//         case 'password':
//             checkPassword()
//             break;    
    
//         case 'phone':
//             checkPhone()
//             break;    
    
//             default:
//             break;
//     }
// }))




//////////////////////////////// FORMA MAS COMPLEJA DE HACER EL EJERCICIO

// const form = document.getElementById('form')
// const inputPassword = document.getElementById('password')




// //1° recupero al padre (DIV), para luego buscar el ultimo child que le voy a agregar un texto. 2° le agrego la clase error y saco la de exito. 3° recupero el hijo vacío para el error y le agrego un textContent. 4° el message es personalizado, es un parametro.
// showError = (input, message) => {
//     const formField = input.parentElement //parentElement --> ACÁ ESTARÍA RECUPERANDO EL ELEMENTO PADRE (en este caso es el div que contiene al label e input)

//     formField.classList.remove('successJS') //le remuevo la clase de exito
//     formField.classList.add('errorJS')     //le añado un color rojo al texto

//     const errorField = formField.lastElementChild //acá es una forma de sacar el ultimo elemento de mi div contenedor (ES UNA FORMA, DIRECTAMENTE LO PODRÍA SACAR POR ID O CLASS)
//     errorField.textContent = message 
// }

// showSuccess = (input, message) => {   //VER QUE ES CASI IGUAL LA FUNCIÓN SUCCESS Y ERROR, CAMBIA QUE LE REMUEVO Y QUE LE AGREGO, PERO ES SIMILAR, COMPARARLAS.
//     const formField = input.parentElement //parentElement --> ACÁ ESTARÍA RECUPERANDO EL ELEMENTO PADRE (en este caso es el div que contiene al label e input)

//     formField.classList.remove('errorJS') //saco la de error si el usuario no hizo su cotnraseña correcta
//     formField.classList.add('successJS')  //y le pongo la de exito (basicamente no tendría nada)

//     const errorField = formField.lastElementChild //acá es una forma de sacar el ultimo elemento de mi div contenedor (ES UNA FORMA, DIRECTAMENTE LO PODRÍA SACAR POR ID O CLASS)
//     errorField.textContent = message

// }


// checkEmptyPrimitivo = () => {  //FUNCIÓN PARA LA VALIDACIÓN -SIN- EXPRRESIONES REGULARES (MAS DIFICIL)
//     const passwordValue = inputPassword.value.trim()
//     const formField = inputPassword.parentElement
//     const small = formField.lastElementChild
    
//     if (passwordValue.length === 0) {
//         small.textContent = ''
//         return passwordValue.length < 0
//      } else {
//         return passwordValue.length < 0
        
//      }
 
//  }
 


// checkMayusPrimitivo = () => { // MANERA QUE NO VOY A USAR, PORQUE ES MAS COMPLEJA PERO PUEDO VALIDAR SI TIENE O NO TIENE UNA MAYUSCULA.

//     const arrayLettersUpper = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A','S', 'D', 'F','G','H','J','K','L','Ñ','Z', 'X','C','V','B','N','M']
//     const passwordValue = inputPassword.value.trim()  // -IMPORTANTE- SI YO PONÍA ESTA VARIABLE AFUERA DE LA FUNCIÓN, ES COMO QUE NO EXISTÍA, CUANDO QUIERO SACAR EL VALUE DE UN INPUT POR EJ, SIEMPRE PONERLO DECLARARLO O RECUPERARLO ADENTRO DE LA FUNCIÓN

//     for (iteradorArray of arrayLettersUpper) {
//         for(iteradorString of passwordValue) {
//             if(iteradorArray === iteradorString) {  //1° si 'Q'(iteradorArray) === h (iteradorString), si no es así, 'Q' === 'o', si no es así 'Q' === 'l', si no coincide ninguna con 'Q' pasa a la 'W' y así.
//                 showSuccess(inputPassword, 'Contraseña segura')
//                 return //sin este return va a seguir iterando hasta la 'M' del array del abecedario y va a tirar seguramente incorrecto
                
//             } else {
//                 showError(inputPassword, 'ingrese una contraseña correcta')

//             } 
//         }
//         }}


// inputPassword.addEventListener('input', checkMayusPrimitivo)
// inputPassword.addEventListener('input', checkEmpty)


// -------------------------------------------- OTRA FORMA DE VER SI TIENE MINUSCULA O NO -----------------------------------------------------
// ------ NO TAN TAN TAN PRIMITIVA

const form = document.getElementById('form')
const inputPassword = document.getElementById('password')
const inputPhone = document.getElementById('phone')
const inputUsername = document.getElementById('username')
const inputEmail = document.getElementById('email')


const checkPassword = () => {
    const passwordValue = inputPassword.value.trim()
    let valid = false
    const valueOriginal = passwordValue
    const valueMinuscula = passwordValue.toLowerCase()

    valid = valueOriginal === valueMinuscula   //si es true, quiere decir que no hay ninguna mayuscula

    if (passwordValue.length === 0) {
        isEmpty(inputPassword)
        valid = false
        return valid
    } else if (passwordValue.length < 8) {
        showError(inputPassword, 'Debe ingresar al menos 8 caracteres')
        valid = false
        return valid
    } else if(valid) { //si no hay ninguna mayuscula
        showError(inputPassword, 'Ingrese por lo menos una letra mayuscula')
        valid = false
        return valid
    } else {
        showSuccess(inputPassword)
        valid = true
        return valid
    }

   
}




const checkPhone = () => {
    const phoneValue = inputPhone.value.trim()
    let valid = false

   if(phoneValue.length === 0) {  ////SI ESTE IF LO PONÍA DESPUÉS, NUNCA ME IBA A FUNCIONAR ESTA CONDICIÓN, LO TUVE QUE PONER AL PRINCIPIO, INVESTIGAR EL PORQUE... --> Yo razono, la RegEx si no tiene entre 10 numeros, va a dar el error, siempre y si tiene 10 va a dar el success, pero cuando borro y no tiene 10 da el error y nunca llegaría al showEmpty
        isEmpty(inputPhone)
        valid = false
        return valid
    } else if(!isPhoneValid(phoneValue)) {                   /////BUEN EJEMPLO DE COMO USAR UN RETURN EN UNA FUNCIÓN
        showError(inputPhone, 'Ingrese 10 digitos, por favor, ingrese sin +54 9, sin 0, sin 15')  
        valid = false
        return valid
    }
    else {
        showSuccess(inputPhone)
        valid = true
        return valid
}}

isPhoneValid = (valueInput) => { /////BUEN EJEMPLO DE COMO USAR UN RETURN
    const phoneRegEx = /^[0-9]{10}$/
    
    return phoneRegEx.test(valueInput)
}

//   ////  ---- FORMA 1 ---- COMENTAR ESTA O COMENTAR LA FORMA 2
//   ////  ---- FORMA 1 ---- COMENTAR ESTA O COMENTAR LA FORMA 2
//     const checkUsername = () => {
//         const min = 6
//         const max = 23
//         const usernameValue = inputUsername.value.trim()

//     if ( usernameValue.length === 0 ){
//         isEmpty(inputUsername)
//         return
//     } else if( usernameValue.length < min || usernameValue.length > max) {  // si el value es menor a 6 o mayor a 23 error, 
//         showError(inputUsername, 'Debe ingresar minimo 6 y maximo 23 caracteres')
//     }  else {
//         showSuccess( inputUsername, 'Username valido' )
//     }}



const checkUsername = () => {////  ---- FORMA 2 ---- COMENTAR ESTA O COMENTAR LA FORMA 1
    const min = 6            ////  ---- FORMA 2 ---- COMENTAR ESTA O COMENTAR LA FORMA 1
    const max = 23
    const usernameValue = inputUsername.value.trim()
    let valid = false

    if ( usernameValue.length === 0 ){
            isEmpty(inputUsername)
            valid = false
            return valid
        } else if(!isBeetween(6, 23, usernameValue.length)) {
            showSuccess(inputUsername) 
            valid = true
            return valid
        } else {
        showError(inputUsername, `Debe contener entre ${min} y ${max} caracteres`)
            valid = false
            return  valid
        }
}

const isBeetween = (min, max, longitud) => {////  ---- FUNCIÓN PARA LA FORMA 2 ---- ⚠️SI NO USO FORMA 2, COMENTAR
                                            ////  ---- FUNCIÓN PARA LA FORMA 2 ---- ⚠️SI NO USO FORMA 2, COMENTAR
    return longitud < min || longitud > max ? true : false  //⚠️si es mayor al minimo (6) o menor al maximo (23) RETORNA TRUE.
}    


const checkEmail = () => {
    const emailValue = inputEmail.value.trim()
    const emailLong = emailValue.length
    let valid = false

    if (emailLong == 0) {
        isEmpty(inputEmail)
        valid = false
        return valid
    } else if (!includeArroba(emailValue)) {   // ⚠️ESTO SIGNIFICA SI NO INCLUYE ARROBA (OSEA SI ES = A FALSE, EJECUTA)
        showError(inputEmail, 'Ingrese un email valido por favor, incluya @ y .')
        valid = false
        return valid
    } else {
        showSuccess(inputEmail)
        valid = true
        return valid
    }

}

const includeArroba = (value) => {     //⚠️PUEDO USAR EXPRESION REGULAR ACÁ, SIN PROBLEMAS ⚠️

    for(iteradorValue of value) {                  //⚠️PRIMERO VEO SI LETRA POR LETRA TIENE UN @ Y SI CUMPLE, ITERO DEVUELTA LETRA POR LETRA A VER SI TIENE UN ., PORQUE EN UN SOLO CARACTER -NUNCA- VA A INCLUIR UN . Y UN @ ⚠️
        if (iteradorValue == '@') {
            
            for(iteradorValue of value) {
                
                if (iteradorValue == '.') {
                    
                    return true 
                     
                } else {
                     
                }
            }
        }
    }
}








const isEmpty = (check) => {
    const valueInput = check.value.trim()
    const formField = check.parentElement
    const small = formField.lastElementChild
    

    if (valueInput.length === 0) {
        small.classList.remove('successJS')
        small.classList.remove('errorJS') 
        small.style.fontSize = '13px'
        small.textContent = ''
        check.style.border = "none"
        return
    } else {
        return false
    }

}



const showError = (check, message) => {
   const formField = check.parentElement
   const small = formField.lastElementChild

    small.classList.add('errorJS')
    small.classList.remove('successJS')
    small.style.fontSize = '12px'
    small.style.marginTop = '3px'
    check.style.border = "1px solid red"
    small.textContent = message
   
}

const showSuccess = (check) => {
    const formField = check.parentElement
    const small = formField.lastElementChild
    small.classList.remove('errorJS')
    small.classList.add('successJS')
    small.style.fontSize = '12px'
    check.style.border = "1px solid green"
    small.textContent = ''

}




form.addEventListener('submit', (e) => {
    e.preventDefault()
    let isUsernameValid = checkUsername()
    let isEmailValid = checkEmail()
    let isPasswordValid = checkPassword()
    let isPhoneValid = checkPhone()

    correctionForm(isUsernameValid, inputUsername, 'Ingrese un username valido')
    correctionForm(isEmailValid, inputEmail, 'Ingrese un email valido')
    correctionForm(isPasswordValid, inputPassword, `Ingrese una password valida`)
    correctionForm(isPhoneValid, inputPhone, 'Ingrese un telefono valido')
   

    console.log( { isUsernameValid } ) // ⚠️ de esta manera me muestra así --> {isUsernameValid: true}, sino me muestra solo asi --> true
    console.log( { isEmailValid } )    // ⚠️ de esta manera me muestra así --> {isUsernameValid: true}, sino me muestra solo asi --> true
    console.log( { isPasswordValid } ) // ⚠️ de esta manera me muestra así --> {isUsernameValid: true}, sino me muestra solo asi --> true
    console.log( { isPhoneValid } )    // ⚠️ de esta manera me muestra así --> {isUsernameValid: true}, sino me muestra solo asi --> true

    let isFormValid = isEmailValid && isPasswordValid && isUsernameValid && isPhoneValid //// ⚠️⚠️ SI SON TODOS TRUES, LA VARIABLE SERÁ TRUE, SI UNO SOLOO AUNQUE SEA ES FALSE, LA VARIABLE SERÁ FALSE

    console.log( {isFormValid} )

}
)

const correctionForm = (check, input, message) => {
    if (!check) {
        showError(input, message)
        return
    } else {
        return
    }
}



const init = () => {
    inputEmail.addEventListener('input', checkEmail)
    inputPassword.addEventListener('input', checkPassword)
    inputPhone.addEventListener('input', checkPhone)
    inputUsername.addEventListener('input', checkUsername)
}

init()





// const inputPassword = document.getElementById('password')


// const checkPassword = () => {
//     const passwordValue = inputPassword.value

//     console.log(passwordValue)
// }

// checkPassword()