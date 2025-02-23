document.addEventListener('DOMContentLoaded', () => {
    const usersTableBody = document.querySelector('#usersTable tbody');
    const adduserBtn = document.getElementById('adduser Btn');

    // Simulación de datos de usuarios
    let users = [
        { name: 'Martha ines', type: 'Administrador' },
        { name: 'Matias fernandez', type: 'Profesor' },
        { name: 'Florencia Vergara', type: 'Estudiante' }
    ];

    // Función para cargar usuarios en la tabla
    function loadUsers() {
        usersTableBody.innerHTML = ''; // Limpiar la tabla
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.type}</td>
                <td>
                    <button onclick="editUser (${index})">Editar</button>
                    <button onclick="deleteUser (${index})">Eliminar</button>
                </td>
            `;
            usersTableBody.appendChild(row);
        });
    }

    // Función para agregar un nuevo usuario (simulación)
    adduserBtn.addEventListener('click', () => {
        const newUser  = { name: 'Nuevo Usuario', type: 'Estudiante' }; // Simulación de nuevo usuario
        users.push(newUser );
        loadUsers();
    });

    // Función para editar un usuario (simulación)
    window.editUser  = (index) => {
        alert(`Editar usuario: ${users[index].name}`);
        // Aquí podrías implementar la lógica para editar el usuario
    };

    // Función para eliminar un usuario
    window.deleteUser  = (index) => {
        if (confirm(`¿Estás seguro de que deseas eliminar a ${users[index].name}?`)) {
            users.splice(index, 1);
            loadUsers();
        }
    };

    // Cargar usuarios al inicio
    loadUsers();
});
  