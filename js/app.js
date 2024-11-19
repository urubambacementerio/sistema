import { pdfMap } from './dataPDF.js';

// Manejo del cambio de tipo de nicho
document.getElementById('tipoNicho').addEventListener('change', function () {
    const tipoNicho = this.value;
    document.getElementById('seccionMunicipalidadContainer').style.display = (tipoNicho === 'municipalidad') ? 'block' : 'none';
    document.getElementById('nombreParticularContainer').style.display = (tipoNicho === 'particular') ? 'block' : 'none';
});

// Asegurar que el input de "Nombre Particular" solo acepte texto en minúsculas
document.getElementById('nombreParticular').addEventListener('input', function () {
    // Convertir automáticamente el texto a minúsculas
    this.value = this.value.toLowerCase();
});

// Manejo del botón de búsqueda
document.getElementById('buscarBtn').addEventListener('click', function () {
    const tipoNicho = document.getElementById('tipoNicho').value;
    const seccionMunicipalidad = document.getElementById('seccionMunicipalidad').value;
    const nombreParticular = document.getElementById('nombreParticular').value.trim().toLowerCase(); // Convertir a minúsculas para búsqueda
    const visorPdf = document.getElementById('visorPdf');
    let pdfEncontrado;

    // Buscar según el tipo de nicho
    if (tipoNicho === 'municipalidad' && seccionMunicipalidad) {
        pdfEncontrado = pdfMap[seccionMunicipalidad]; // Búsqueda directa
    } else if (tipoNicho === 'particular' && nombreParticular) {
        pdfEncontrado = pdfMap[`${nombreParticular}`]; // Buscar con el nombre en minúsculas
    }

    // Mostrar el resultado
    if (pdfEncontrado) {
        const embedLink = `https://drive.google.com/file/d/${pdfEncontrado.id}/preview`;
        visorPdf.innerHTML = `<iframe src="${embedLink}" width="100%" height="700px"></iframe>`;
    } else {
        visorPdf.innerHTML = `<p style="color: red;">No se encontró una ficha que coincida con los criterios de búsqueda.</p>`;
    }
});
