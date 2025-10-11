const karyotypes = [
    {
        id: 'normal_male',
        image: 'https://i.ibb.co/6Pnvk1c/normal-male.png',
        diagnosis: '46, XY (Masculino Normal)'
    },
    {
        id: 'down_syndrome',
        image: 'https://i.ibb.co/3k5fS4M/down-syndrome.png',
        diagnosis: '47, XY, +21 (Síndrome de Down)'
    },
    {
        id: 'turner_syndrome',
        image: 'https://i.ibb.co/gDFRypd/turner-syndrome.png',
        diagnosis: '45, X0 (Síndrome de Turner)'
    }
];

let currentKaryotypeIndex = 0;
const practiceImage = document.getElementById('practice-karyotype');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');

function checkAnswer(selectedId) {
    const correctId = karyotypes[currentKaryotypeIndex].id;
    if (selectedId === correctId) {
        feedbackElement.textContent = '¡Correcto! Este es un cariotipo ' + karyotypes[currentKaryotypeIndex].diagnosis + '.';
        feedbackElement.style.color = '#28a745'; // Verde
    } else {
        feedbackElement.textContent = 'Incorrecto. Intenta de nuevo. Pista: Observa con atención el par 21 y los cromosomas sexuales.';
        feedbackElement.style.color = '#dc3545'; // Rojo
    }
    nextButton.style.display = 'inline-block';
}

function nextKaryotype() {
    currentKaryotypeIndex = (currentKaryotypeIndex + 1) % karyotypes.length;
    practiceImage.src = karyotypes[currentKaryotypeIndex].image;
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
}

// Cargar el primer cariotipo al iniciar
document.addEventListener('DOMContentLoaded', () => {
    practiceImage.src = karyotypes[currentKaryotypeIndex].image;
});
