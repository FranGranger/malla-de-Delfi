const STORAGE_KEY = "materiasAprobadas";
const materias = Array.from(document.querySelectorAll(".materia"));
const aprobadas = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

function estaDesbloqueada(materia) {
  const requisitos = (materia.dataset.req || "").split(",").filter(r => r);
  if (requisitos.includes("all")) {
    return materias
      .filter(m => !["m56", "m57", "m58", "m59"].includes(m.dataset.id))
      .every(m => aprobadas.has(m.dataset.id));
  }
  return requisitos.every(req => aprobadas.has(req));
}

function actualizarEstado() {
  materias.forEach(materia => {
    const id = materia.dataset.id;
    const desbloqueada = estaDesbloqueada(materia);

    materia.classList.toggle("bloqueada", !desbloqueada);
    materia.classList.toggle("aprobada", aprobadas.has(id));
    materia.style.pointerEvents = desbloqueada ? "auto" : "none";
    materia.style.opacity = desbloqueada ? "1" : "0.5";
  });
}

function aprobarMateria(event) {
  const materia = event.currentTarget;
  const id = materia.dataset.id;

  if (!estaDesbloqueada(materia)) return;

  if (aprobadas.has(id)) {
    aprobadas.delete(id);
  } else {
    aprobadas.add(id);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(aprobadas)));
  actualizarEstado();
}

materias.forEach(materia => {
  materia.addEventListener("dblclick", aprobarMateria);
});

actualizarEstado();
