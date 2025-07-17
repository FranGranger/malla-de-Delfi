const STORAGE_KEY = 'mallaVetAprobadas';
const materias = Array.from(document.querySelectorAll('.materia'));
let aprobadas = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

function actualizarEstado() {
  materias.forEach(materia => {
    const id = materia.id;
    const requisitos = materia.dataset.requisitos ? materia.dataset.requisitos.split(',').filter(x => x) : [];

    // "all" significa que requiere todas las materias (menos optativas)
    let desbloqueada = requisitos.every(req => {
      if (req === 'all') {
        return materias.filter(m => !['m56','m57','m58','m59'].includes(m.id)).every(m => aprobadas.has(m.id));
      }
      return aprobadas.has(req);
    });

    if (aprobadas.has(id)) {
      materia.classList.add('aprobada');
      materia.disabled = true;
      materia.setAttribute('title', 'Materia aprobada');
    } else if (desbloqueada) {
      materia.disabled = false;
      materia.classList.remove('aprobada');
      materia.removeAttribute('title');
    } else {
      materia.disabled = true;
      materia.classList.remove('aprobada');
      materia.removeAttribute('title');
    }
  });
}

function aprobarMateria(event) {
  const btn = event.target;
  if (btn.disabled) return;

  if (aprobadas.has(btn.id)) {
    aprobadas.delete(btn.id);
  } else {
    aprobadas.add(btn.id);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(aprobadas)));
  actualizarEstado();
}


function init() {
  materias.forEach(materia => {
    materia.addEventListener('dblclick', aprobarMateria);
  });

  actualizarEstado();
}

window.addEventListener('load', init);
