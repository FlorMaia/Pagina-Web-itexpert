document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const materiasButtons = document.getElementById('materias-buttons');
    const cursosCard = document.getElementById('cursos-card');
    const cursosButtons = document.getElementById('cursos-buttons');
    const notasCard = document.getElementById('notas-card');
    const notasTable = document.getElementById('notasTable').getElementsByTagName('tbody')[0];
    const guardarNotasBtn = document.getElementById('guardarNotasBtn');

    let materiaSeleccionada = '';
    let cursoSeleccionado = '';

    // Event listeners
    logoutBtn.addEventListener('click', logout);
    guardarNotasBtn.addEventListener('click', guardarNotas);

    // Load subjects
    const materias = [
        'Test Vocacional', 'Inglés', 'Matemáticas', 'Marco Jurídico',
        'Arduino', 'Asistencia', 'Programación', 'Autogestión', 
        'Hardware', 'Redes'
    ];
    
    materias.forEach(materia => {
        const button = document.createElement('button');
        button.textContent = materia;
        button.addEventListener('click', () => seleccionarMateria(materia));
        materiasButtons.appendChild(button);
    });

    function seleccionarMateria(materia) {
        materiaSeleccionada = materia;
        cursosCard.style.display = 'block';
        notasCard.style.display = 'none';
        cargarCursos(); // Load courses when a subject is selected
    }

    function cargarCursos() {
        // Example courses, you can replace this with dynamic loading
        const cursos = ['Septimo 1', 'Septimo 2', 'Septimo 3'];
        cursosButtons.innerHTML = ''; 
        cursos.forEach(curso => {
            const button = document.createElement('button');
            button.textContent = curso;
            button.classList.add('curso-btn');
            button.dataset.curso = curso;
            button.addEventListener('click', () => seleccionarCurso(curso));
            cursosButtons.appendChild(button);
        });
    }

    function seleccionarCurso(curso) {
        cursoSeleccionado = curso;
        cargarAlumnos();
        notasCard.style.display = 'block';
    }

    function cargarAlumnos() {
        const alumnos = [
            'Florencia Vergara', 'Valentina Suarez', 'Micaela Gaudelli', 'Abril Martinez',
            'Mariano Olivera', 'Antonio Martinez', 'Agustin Martinez', 'Santiago Sanchez',
            'Tomas Preisseger', 'Araceli Gomez', 'Gonzalo Forneron', 'Tomas Avanzati',
            'Lucas Diaz', 'Yuliana Ramirez', 'Mario Rivera', 'Julio Quintana',
            'Agustin Colman', 'Pablo celen', 'Pablo abdala'
        ];

        notasTable.innerHTML = ''; 
        alumnos.forEach(alumno => {
            const row = notasTable.insertRow();
            row.insertCell().textContent = alumno;
            for (let i = 0; i < 7; i++) {
                const cell = row.insertCell();
                const input = document.createElement('input');
                input.type = 'number';
                input.min = '0';
                input.max = '10';
                input.step = '0.01';
                cell.appendChild(input);
            }
        });
    }

    function guardarNotas() {
        const notas = [];
        const inputs = notasTable.getElementsByTagName('input');
        let valid = true;

        for (let input of inputs) {
            if (input.value === '' || input.value < 0 || input.value > 10) {
                valid = false;
                break;
            }
            notas.push(input.value);
        }

        if (valid) {
           
            alert(`Notas guardadas para ${materiaSeleccionada} - ${cursoSeleccionado}: ${notas.join(', ')}`);
        } else {
            alert('asegúrate de que todas las notas estén entre 0 y 10 y que no estén vacías.');
        }
    }

    function logout() {
        
        window.location.href = 'index.html';
    }
});