const STORAGE_KEY = 'mallaVetAprobadas';
const materias = Array.from(document.querySelectorAll('.materia'));
let aprobadas = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

function actualizarEstado() {
  materias.forEach(materia => {
    const id = materia.id;
    const requisitos = materia.dataset.requisitos ? materia.dataset.requisitos.split(',').filter(x => x) : [];

    // "all" significa que requiere todas las materias (menos optativas/efis)
    let desbloqueada = requisitos.every(req => {
      if (req === 'all') {
        return materias.filter(m => !['m56','m57','m58','m59'].includes(m.id)).every(m => aprobadas.has(m.id));
      }
      return aprobadas.has(req);
    });

    if (aprobadas.has(id)) {
      materia.classList.add('aprobada');
      materia.disabled = false; // permitir desmarcarla
      materia.setAttribute('title', 'Doble clic para desaprobar');
    } else if (desbloqueada) {
      materia.disabled = false;
      materia.classList.remove('aprobada');
      materia.setAttribute('title', 'Doble clic para aprobar');
    } else {
      materia.disabled = true;
      materia.classList.remove('aproba
