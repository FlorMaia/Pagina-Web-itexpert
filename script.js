document.getElementById('submitBtn').addEventListener('click', function() {
    alert('Notas enviadas correctamente.');
    // Aquí puedes agregar la lógica para enviar los datos a un servidor o procesarlos
});

document.getElementById('resetBtn').addEventListener('click', function() {
    // Redirigir al inicio (puedes cambiar la URL a la que desees)
    window.location.href = 'http://127.0.0.1:5500/Alumnado/Inicioalumnado.html'; // Cambia 'index.html' por la URL de tu página de inicio
});



