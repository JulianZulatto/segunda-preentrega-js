
document.getElementById("agregarBtn").addEventListener("click", function() {
    agregarContacto();
});

document.getElementById("quitarBtn").addEventListener("click", function() {
    quitarContacto();
});

document.getElementById("buscarBtn").addEventListener("click", function() {
    buscarContacto();
});


class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

let agenda = [];

function crearContacto() {
    let nombre = prompt("Ingrese el nombre del contacto:");
    let telefono = prompt("Ingrese el teléfono del contacto:");

    let nuevoContacto = new Contacto(nombre, telefono);
    agenda.push(nuevoContacto);

    alert("Contacto creado: " + nombre + " - " + telefono);
}

function agregarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto a agregar:");
    let telefono = prompt("Ingrese el teléfono del contacto a agregar:");

    let nuevoContacto = new Contacto(nombre, telefono);
    agenda.push(nuevoContacto);

    alert("Contacto agregado: " + nombre + " - " + telefono);
}

function quitarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto a quitar:");

    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].nombre === nombre) {
            agenda.splice(i, 1);
            alert("Contacto eliminado: " + nombre);
            return;
        }
    }

    alert("No se encontró el contacto con ese nombre.");
}


function buscarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto a buscar:");

    let contactoEncontrado = agenda.find(contacto => contacto.nombre === nombre);

    if (contactoEncontrado) {
        alert('Contacto encontrado: ' + nombre);
    } else {
        alert('No se encontró el contacto con ese nombre.');
    }
}

