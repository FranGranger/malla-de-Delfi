const materias = [
  { id: 1, nombre: "Bioquimica", requisitos: [] },
  { id: 2, nombre: "Biofisica", requisitos: [] },
  { id: 3, nombre: "Biologia celular y del desarrollo", requisitos: [] },
  { id: 4, nombre: "Embriologia y anatomia sistematica", requisitos: [] },
  { id: 5, nombre: "Bioestadistica", requisitos: [] },
  { id: 6, nombre: "Fisicoquimica aplicada a la fisiologia veterinaria", requisitos: [1, 2] },
  { id: 7, nombre: "Microbiologia I", requisitos: [1, 3] },
  { id: 8, nombre: "Histologia", requisitos: [3] },
  { id: 9, nombre: "Fisiologia", requisitos: [4, 6, 8] },
  { id: 10, nombre: "Inmunologia animal basica", requisitos: [1, 7, 8] },
  { id: 11, nombre: "Anatomia veterinaria", requisitos: [4] },
  { id: 12, nombre: "Economia General y sociologia", requisitos: [5] },
  { id: 13, nombre: "Microbiologia II", requisitos: [7, 8] },
  { id: 14, nombre: "Parasitologia", requisitos: [5, 6, 7, 8] },
  { id: 15, nombre: "Patologia general veterinaria", requisitos: [4, 6, 8, 10] },
  { id: 16, nombre: "Epidemiologia y salud publica basica", requisitos: [5] },
  { id: "efis3", nombre: "EFIS 3°", requisitos: [1,2,3,4,5,6,7,8] },
  { id: 17, nombre: "Zootecnia General", requisitos: [9,11,12,"efis3"] },
  { id: 18, nombre: "Nutricion animal y alimentos", requisitos: [9,11,12,14,"efis3"] },
  { id: 19, nombre: "Patologia especial", requisitos: [9,11,13,14,15,"efis3"] },
  { id: 20, nombre: "Farmacologia general", requisitos: [9,11,15,"efis3"] },
  { id: 21, nombre: "Genetica General", requisitos: [15,"efis3"] },
  { id: 22, nombre: "Genetica de poblaciones y mejoramiento animal", requisitos: [17,21] },
  { id: 23, nombre: "Semiologia", requisitos: [9,11,15] },
  { id: 24, nombre: "Farmacologia general y toxicologia", requisitos: [13,14,20] },
  { id: 25, nombre: "Ingles tecnico", requisitos: [] },
  // Más materias pueden agregarse acá...
];

const estadoMaterias = {}; // Guarda si están aprobadas o no

function estaDesbloqueada(materia) {
  return materia.requisitos.every(req => estadoMaterias[req]);
}

function renderMaterias() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  materias.forEach(m => {
    const div = document.createElement('div');
    div.classList.add('materia');
    const aprobada = estadoMaterias[m.id];
    const desbloqueada = estaDesbloqueada(m);

    if (aprobada) div.classList.add('aprobada');
    else if (desbloqueada) div.classList.add('desbloqueada');
    else div.classList.add('bloqueada');

    div.textContent = m.nombre;
    div.addEventListener('dblclick', () => {
      if (estaDesbloqueada(m)) {
        estadoMaterias[m.id] = !estadoMaterias[m.id];
        renderMaterias();
      }
    });

    const requisitos = document.createElement('div');
    requisitos.classList.add('requisitos');
    if (m.requisitos.length) {
      requisitos.textContent = `Requiere: ${m.requisitos.map(rid => {
        const req = materias.find(m => m.id === rid);
        return req ? req.nombre : rid;
      }).join(', ')}`;
    } else {
      requisitos.textContent = "Sin requisitos";
    }

    div.appendChild(requisitos);
    contenedor.appendChild(div);
  });
}

renderMaterias();
