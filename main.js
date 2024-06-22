
document.getElementById("agregarBoton").addEventListener("click", function() {
    agregarContacto();
});

document.getElementById("quitarBoton").addEventListener("click", function() {
    quitarContacto();
});

document.getElementById("buscarBoton").addEventListener("click", function() {
    buscarContacto();
});

document.getElementById("editarBoton").addEventListener("click", function() {
    editarContacto();
});

document.getElementById("filtroBoton").addEventListener("click", function() {
    filtroDeContactos();
});

let agenda = [];

class Contacto {
    constructor(nombre, apellido, telefono, direccion, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email
    }
}


function agregarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto a agregar:");
    let apellido = prompt("Ingrese el apellido del contacto a agregar:");
    let telefono = prompt("Ingrese el teléfono del contacto a agregar:");
    let direccion = prompt("Ingrese la direccion del contacto a agregar:");
    let email = prompt("Ingrese el email del contacto a agregar:");

    let nuevoContacto = new Contacto(nombre,apellido, telefono, direccion, email);
    agenda.push(nuevoContacto);

    alert("Contacto agregado: " + nombre + " - " + apellido);
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


function editarContacto() {

    let nombreEditable = prompt('Ingrese el nombre del contacto que desea editar:')
    let contactoEditable = agenda.find(contacto => contacto.nombre === nombreEditable);


    if (contactoEditable) {
    
        contactoEditable.nombre = prompt('Ingrese el nuevo nombre del contacto')
        contactoEditable.apellido = prompt('Ingrese el nuevo apellido del contacto')
        contactoEditable.telefono = prompt('Ingrese el nuevo telefono del contacto')
        contactoEditable.direccion = prompt('Ingrese la nueva direccion del contacto')
        contactoEditable.email = prompt('Ingrese el nuevo email del contacto')

        alert(`Contacto ${contactoEditable.nombre} actualizado con éxito.`);
    } else {
        alert(`Contacto con ID ${contactoEditable} no encontrado.`);
    }
}


function filtroDeContactos(){
let caracteristicaBuscada = prompt('Ingresa la característica a buscar en los contactos:');


let contactosFiltrados = [];
agenda.forEach(contacto => {
    if (contacto.apellido === caracteristicaBuscada) {
        contactosFiltrados.push(contacto);
    }

    let mensaje = 'Contactos con la característica buscada:\n';
    contactosFiltrados.forEach(contacto => {
        mensaje += 'Nombre: ' + contacto.nombre + ', Apellido: ' + contacto.apellido + '\n';
    });

    alert(mensaje);
});}



