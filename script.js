const STORAGE_KEY = "materiasAprobadas";
const aprobadas = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

function actualizarEstado() {
  document.querySelectorAll(".materia").forEach(materia => {
    const id = materia.dataset.id;
    const requisitos = (materia.dataset.req || "").split(",").filter(r => r);

    const desbloqueada = requisitos.every(req => aprobadas.has(req));
    materia.classList.toggle("bloqueada", !desbloqueada);
    materia.classList.toggle("aprobada", aprobadas.has(id));
    materia.style.pointerEvents = desbloqueada ? "auto" : "none";
    materia.style.opacity = desbloqueada ? "1" : "0.5";
  });
}

function aprobarMateria(event) {
  const materia = event.currentTarget;
  const id = materia.dataset.id;

  if (materia.classList.contains("bloqueada")) return;

  if (aprobadas.has(id)) {
    aprobadas.delete(id);
  } else {
    aprobadas.add(id);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(aprobadas)));
  actualizarEstado();
}

document.querySelectorAll(".materia").forEach(materia => {
  materia.addEventListener("dblclick", aprobarMateria);
});

actualizarEstado();
