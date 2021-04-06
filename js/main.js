const $form = document.formulario;




function validarNombre(string) {
    if (string.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } else if (string.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    } else if (!/^[A-z]+$/.test(string)) {
        return 'Este campo solo puede contener letras';
    } 
    
    return '';
}

function validarCiudad(string) {
    if (string.length === 0) {
        return 'El campo ciudad no puede estar vacio';
    } 

    
    return '';

}

$form.onsubmit = validarFormulario;

function validarDescripcionRegalo(string) {
    if (string.length === 0) {
        return 'El campo regalo no puede estar vacio';
    } 

    return '';
}

function validarFormulario(event) {
    event.preventDefault();

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    
    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    manejarErrores(errores);
    
    
}

function borrarErrores() {
    document.querySelector('#errores').innerHTML = '';
}

function manejarErrores(errores) {
    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    let cantidadErrores = 0;

    const keys = Object.keys(errores);
    console.log(errores);

    borrarErrores();

    keys.forEach(function(key){
        const error = errores[key];
        const $errores = document.querySelector('#errores');
        console.log($errores);

        if (error) {

            $form[key].className = "error";
            cantidadErrores++;

            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);
        } else {
            $form[key].className = "";

            
             
        }
    })
    if (cantidadErrores === 0) {
        document.querySelector('#exito').className = '';
        $form.className = 'oculto';
        

        setTimeout(function() {
            window.location.href = 'wishlist.html';
        }, 2000);
    }
}

