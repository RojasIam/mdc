const textArray = [
    "Mar de Copas nació en 1991 —aunque su primer disco lo lanzó en 1993—, cautivó a varios jóvenes con sus primeras canciones y, poco a poco, se hicieron más conocidos con temas como Dulce y veloz, Mujer noche, Entre los árboles y País de tus sueños, lo cual generó que, pese al tiempo, el grupo de rock se ha mantenido vigente, traspasó generaciones y es una de las bandas más exitosas del Perú."
];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        const typedText = document.getElementById('typed-text');
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        const typedText = document.getElementById('typed-text');
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});

const randomImageUrls = [
    "../ztools/imagenes/image1.png",
    "../ztools/imagenes/image2.png",
    "../ztools/imagenes/image3.png",
    "../ztools/imagenes/image4.png",
    "../ztools/imagenes/image5.png"
];

let currentImageIndex = -1;

function showNextImage() {
    const randomImagesContainer = document.getElementById('random-images');

    // Mueve al índice de la próxima imagen
    currentImageIndex = (currentImageIndex + 1) % randomImageUrls.length;

    // Crea una nueva imagen
    const newImg = new Image();
    newImg.src = randomImageUrls[currentImageIndex];
    newImg.classList.add('visible'); // Asegura que la nueva imagen sea visible inicialmente

    // Escucha el evento de carga para asegurarse de que la imagen se ha cargado antes de mostrarla
    newImg.addEventListener('load', function() {
        // Añade la nueva imagen al contenedor y elimina la imagen anterior si existe
        randomImagesContainer.innerHTML = ''; // Limpia el contenedor antes de agregar la nueva imagen
        randomImagesContainer.appendChild(newImg);

        // Muestra la nueva imagen con transición después de un breve retraso
        setTimeout(() => {
            newImg.classList.add('visible');
        }, 50);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    showNextImage(); // Muestra la primera imagen al cargar la página
    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});


// funcion para canciones
let currentAudio = null;

function togglePlayPause(audioNumber) {
    var audio = document.getElementById('myAudio' + audioNumber);
    var playPauseButton = audio.parentElement.querySelector('.play-pause');

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        var currentButton = currentAudio.parentElement.querySelector('.play-pause');
        currentButton.textContent = '▶️';
    }

    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️';
        currentAudio = audio;
    } else {
        audio.pause();
        audio.currentTime = 0;
        playPauseButton.textContent = '▶️';
        currentAudio = null;
    }
}