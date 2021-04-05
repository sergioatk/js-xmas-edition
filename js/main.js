const $form = document.formulario;

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(string) {
    if (string.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } else if (string.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    } 
}

function validarCiudad(string) {
    if (string.length === 0) {
        return 'El campo ciudad no puede estar vacio';
    }

}

function validarDescripcionRegalo(string) {
    if (string.length === 0) {
        return 'El campo regalo no puede estar vacio';
    }
}