const pacientes = [
    {
        nombre: "Juan Pérez",
        dni: "73451287",
        telefono: "987654321"
    },
    {
        nombre: "María López",
        dni: "71524896",
        telefono: "976543210"
    },
    {
        nombre: "Luis Gómez",
        dni: "74859612",
        telefono: "965432109"
    }
];

const citas = [
    {
        paciente: "Juan Pérez",
        especialidad: "Medicina General",
        medico: "Dr. Torres",
        hora: "09:00",
        estado: "Pendiente"
    },
    {
        paciente: "María López",
        especialidad: "Pediatría",
        medico: "Dra. Rojas",
        hora: "10:30",
        estado: "Atendido"
    },
    {
        paciente: "Luis Gómez",
        especialidad: "Cardiología",
        medico: "Dr. Ramos",
        hora: "11:00",
        estado: "Pendiente"
    }
];

function mostrarSeccion(id) {

    const secciones = document.querySelectorAll(".seccion");
    const botones = document.querySelectorAll(".btn-menu");

    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    botones.forEach(function(boton) {
        boton.classList.remove("activo");
    });

    document.getElementById(id).classList.add("activa");

    const botonActivo =
        document.querySelector('[data-seccion="' + id + '"]');

    botonActivo.classList.add("activo");
}

function cargarPacientes() {

    const tabla = document.getElementById("tablaPacientes");

    tabla.innerHTML = "";

    pacientes.forEach(function(paciente) {

        tabla.innerHTML += `
            <tr>
                <td>${paciente.nombre}</td>
                <td>${paciente.dni}</td>
                <td>${paciente.telefono}</td>
            </tr>
        `;

    });

    document.getElementById("totalPacientes").textContent =
        pacientes.length;
}

function cargarCitas() {

    const tabla = document.getElementById("tablaCitas");
    const tablaInicio =
        document.getElementById("tablaInicioCitas");

    tabla.innerHTML = "";
    tablaInicio.innerHTML = "";

    citas.forEach(function(cita) {

        const fila = `
            <tr>
                <td>${cita.paciente}</td>
                <td>${cita.especialidad}</td>
                <td>${cita.medico}</td>
                <td>${cita.hora}</td>
                <td>${cita.estado}</td>
            </tr>
        `;

        tabla.innerHTML += fila;
        tablaInicio.innerHTML += fila;

    });

    document.getElementById("totalCitas").textContent =
        citas.length;

    const pendientes = citas.filter(function(cita) {
        return cita.estado === "Pendiente";
    });

    document.getElementById("totalPendientes").textContent =
        pendientes.length;
}

document.querySelectorAll(".btn-menu").forEach(function(boton) {

    boton.addEventListener("click", function() {

        mostrarSeccion(this.dataset.seccion);

    });

});

document.getElementById("formPaciente").addEventListener(
    "submit",
    function(evento) {

        evento.preventDefault();

        const nombre =
            document.getElementById("nombrePaciente").value;

        const dni =
            document.getElementById("dniPaciente").value;

        const telefono =
            document.getElementById("telefonoPaciente").value;

        pacientes.push({
            nombre: nombre,
            dni: dni,
            telefono: telefono
        });

        cargarPacientes();

        this.reset();

        alert("Paciente registrado correctamente.");

    }
);

document.getElementById("formCita").addEventListener(
    "submit",
    function(evento) {

        evento.preventDefault();

        const paciente =
            document.getElementById("citaPaciente").value;

        const especialidad =
            document.getElementById("citaEspecialidad").value;

        const medico =
            document.getElementById("citaMedico").value;

        const hora =
            document.getElementById("citaHora").value;

        citas.push({
            paciente: paciente,
            especialidad: especialidad,
            medico: medico,
            hora: hora,
            estado: "Pendiente"
        });

        cargarCitas();

        this.reset();

        alert("Cita registrada correctamente.");

    }
);

cargarPacientes();
cargarCitas();