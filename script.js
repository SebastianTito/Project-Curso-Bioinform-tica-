// Objeto que contiene la información de los desafíos
const challenges = [
    {
        image: 'images/chromosomes-scattered.webp',
        correctAnswer: 'normal',
        options: ['normal', 'down', 'turner']
    },
    {
        image: 'images/karyotype-down.gif',
        correctAnswer: 'down',
        options: ['normal', 'down', 'klinefelter']
    },
    {
        image: 'images/karyotype-turner.jpg',
        correctAnswer: 'turner',
        options: ['turner', 'klinefelter', 'down']
    }
];

let currentChallengeIndex = 0;

// Elementos del DOM
const practiceImage = document.getElementById('practice-image');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');

/**
 * Función para verificar la respuesta seleccionada por el usuario
 * @param {string} selectedAnswer - La respuesta elegida ('normal', 'down', etc.)
 */
function checkAnswer(selectedAnswer) {
    const correct = challenges[currentChallengeIndex].correctAnswer;

    if (selectedAnswer === correct) {
        feedbackElement.textContent = '¡Correcto! Análisis preciso.';
        feedbackElement.style.color = '#28a745'; // Verde
    } else {
        feedbackElement.textContent = 'Análisis incorrecto. Intenta observar de nuevo los cromosomas clave.';
        feedbackElement.style.color = '#dc3545'; // Rojo
    }
    
    // Muestra el botón para pasar al siguiente desafío
    nextButton.style.display = 'inline-block';
}

/**
 * Función para cargar el siguiente desafío
 */
function nextKaryotype() {
    // Avanza al siguiente desafío, o vuelve al primero si es el último
    currentChallengeIndex = (currentChallengeIndex + 1) % challenges.length;
    
    // Actualiza la imagen del desafío
    practiceImage.src = challenges[currentChallengeIndex].image;
    
    // Resetea la retroalimentación y oculta el botón "siguiente"
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
}

// Carga el primer desafío cuando la página se carga por completo
document.addEventListener('DOMContentLoaded', () => {
    practiceImage.src = challenges[currentChallengeIndex].image;
});
