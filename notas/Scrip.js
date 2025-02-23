document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const notasTableBody = document.getElementById('notasTable').getElementsByTagName('tbody')[0];

    logoutBtn.addEventListener('click', logout);

    // Cargar notas del alumno
    cargarNotas();

    function cargarNotas() {
        // Aquí iría la lógica para obtener las notas del servidor
        // Por ahora, usaremos datos de ejemplo
        const notas = obtenerNotasEjemplo();

        notas.forEach(materia => {
            const row = crearFilaNota(materia);
            notasTableBody.appendChild(row);
        });
    }

    function obtenerNotasEjemplo() {
        return [
            { materia: 'Test Vocacional', notas: [9, 9, 9, 9, 8, 9, 10] },
            { materia: 'Inglés', notas: [7, 8, 6,5, 8, 9, 9, 10] },
            { materia: 'Matemáticas', notas: [5, 6, 7,5, 6,, 7, 8, 9] },
            { materia: 'Marco Jurídico', notas: [9, 8, 10, 9, 9, 9, 9] },
            { materia: 'Arduino', notas: [8, 9, 6,5, 9, 8, 7,5, 9,5] },
            { materia: 'Asistencia', notas: [9, 9, 9, 8, 8, 10, 10] },
            { materia: 'Redes', notas: [9, 8, 7,5, 9, 8, 9, 10] },
            { materia: 'Programación', notas: [7, 6, 7,5, 8, 9, 6,5, 7,5] },
            { materia: 'Hardware', notas: [6, 8, 7.5, 8, 9, 8.5, 8] },
            { materia: 'Autogestión', notas: [6, 8, 9,5, 9, 9, 9, 10] }
        ];
    }

    function crearFilaNota(materia) {
        const row = document.createElement('tr');
        row.insertCell().textContent = materia.materia;

        materia.notas.forEach(nota => {
            row.insertCell().textContent = nota;
        });

        // Calcular y agregar la nota final
        const notaFinal = calcularNotaFinal(materia.notas);
        row.insertCell().textContent = notaFinal.toFixed(2); 

        return row;
    }

    function calcularNotaFinal(notas) {
        const suma = notas.reduce((acc, nota) => acc + nota, 0);
        return suma / notas.length; // Promedio
    }

    function logout() {
        // Aquí iría la lógica de cierre de sesión
        window.location.href = 'index.html';
    }
});