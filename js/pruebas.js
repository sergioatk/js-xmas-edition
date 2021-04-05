pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarDescripcionRegalo();

function pruebaValidarNombre() {
    console.assert(validarNombre('') === 'Este campo debe tener al menos 1 caracter', 'validarNombre no valido que el nombre no sea vacio');

    console.assert(validarNombre('sdkfjsldkfjsdlkfjsldkjflsdkfjsdkljfsdkljfsldkjfldskjflskdjflksdjflksdjflksdjflksdjflksdjflksjdflksdjflksjdflksjlksfd') === 'Este campo debe tener menos de 50 caracteres', 'validarNombre no valido que el nombre sea menor a 50 caracteres');
}

function pruebaValidarCiudad() {
    console.assert(validarCiudad('') === 'El campo ciudad no puede estar vacio', 'validarCiudad no valido que el campo ciudad no sea vacio');
}

function pruebaValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo('') === 'El campo regalo no puede estar vacio', 'validarDescripcionRegalo no valido que el campo regalo no sea vacio');
}