 // Función para cargar dinámicamente el contenido de somos.html en la sección #quienes-somos
 document.addEventListener('DOMContentLoaded', function() {
    var quienesSomosContent = document.getElementById('lista-canciones-content');

    // Realizar la solicitud Ajax
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../lista_canciones/lista_canciones.html', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Éxito en la solicitud
            quienesSomosContent.innerHTML = xhr.responseText;
        } else {
            // Error en la solicitud
            quienesSomosContent.innerHTML = '<p>Error al cargar el contenido.</p>';
        }
    };

    xhr.onerror = function() {
        // Error de red
        quienesSomosContent.innerHTML = '<p>Error de red al cargar el contenido.</p>';
    };

    xhr.send();
});