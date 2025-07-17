const STORAGE_KEY = "materiasAprobadas";
const aprobadas = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

function estaDesbloqueada(materia) {
  const requisitos = (materia.dataset.req || "").split(",").filter(r => r);

  if (requisitos.includes("all")) {
    // "all" significa que requiere TODAS las demás materias excepto EFIS
    const todasMenosEfis = Array.from(document.querySelectorAll(".materia"))
      .filter(m => !m.classList.contains("efi"))
      .map(m => m.dataset.id);
    return todasMenosEfis.every(id => aprobadas.has(id));
  }

  return requisitos.every(req => aprobadas.has(req));
}

function actualizarEstado() {
  document.querySelectorAll(".materia").forEach(materia => {
    const id = materia.dataset.id;
    const desbloqueada = estaDesbloqueada(materia);
    const aprobada = aprobadas.has(id);

    // Estilo visual
    materia.classList.toggle("aprobada", aprobada);
    materia.classList.toggle("bloqueada", !desbloqueada && !aprobada); // si está aprobada no la bloquea
    materia.style.opacity = desbloqueada || aprobada ? "1" : "0.5";
    materia.style.pointerEvents = desbloqueada || aprobada ? "auto" : "none";
  });
}

function toggleAprobada(event) {
  const materia = event.currentTarget;
  const id = materia.dataset.id;

  // Si NO está desbloqueada y no está ya aprobada, no permitas aprobar
  if (!estaDesbloqueada(materia) && !aprobadas.has(id)) return;

  if (aprobadas.has(id)) {
    aprobadas.delete(id);
  } else {
    aprobadas.add(id);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(aprobadas)));
  actualizarEstado();
}

document.querySelectorAll(".materia").forEach(materia => {
  materia.addEventListener("dblclick", toggleAprobada);
});

// Inicial
actualizarEstado();
