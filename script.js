const materias = [
  // --- PRIMER AÑO ---
  {
    anio: 1,
    semestre: "Primer semestre",
    nombre: "Bioquimica", id: "1", requisitos: []
  },
  { nombre: "Biofisica", id: "2", requisitos: [] },
  { nombre: "Biologia celular y del desarrollo", id: "3", requisitos: [] },
  { nombre: "Embriologia y anatomia sistematica", id: "4", requisitos: [] },
  { nombre: "Bioestadistica", id: "5", requisitos: [] },
  {
    semestre: "Segundo semestre",
    nombre: "Fisicoquimica aplicada a la fisiología veterinaria", id: "6", requisitos: ["1", "2"]
  },
  { nombre: "Microbiologia I", id: "7", requisitos: ["1", "3"] },
  { nombre: "Histologia", id: "8", requisitos: ["3"] },

  // --- SEGUNDO AÑO ---
  {
    anio: 2,
    semestre: "Primer cuatrimestre",
    nombre: "Fisiologia", id: "9", requisitos: ["4", "6", "8"]
  },
  { nombre: "Inmunologia animal basica", id: "10", requisitos: ["1", "7", "8"] },
  { nombre: "Anatomia veterinaria", id: "11", requisitos: ["4"] },
  { nombre: "Economia general y sociologia", id: "12", requisitos: ["5"] },
  { nombre: "Microbiologia II", id: "13", requisitos: ["7", "8"] },
  {
    semestre: "Segundo cuatrimestre",
    nombre: "Parasitologia", id: "14", requisitos: ["5", "6", "7", "8"]
  },
  { nombre: "Patologia general veterinaria", id: "15", requisitos: ["4", "6", "8", "10"] },
  { nombre: "Epidemiologia y salud publica basica", id: "16", requisitos: ["5"] },

  // --- TERCER AÑO ---
  {
    anio: 3,
    efis: true,
    semestre: "Primer cuatrimestre",
    nombre: "Zootecnia General", id: "17", requisitos: ["9", "11", "12"]
  },
  { nombre: "Nutricion animal y alimentos", id: "18", requisitos: ["9", "11", "12", "14"] },
  { nombre: "Patologia especial", id: "19", requisitos: ["9", "11", "13", "14", "15"] },
  { nombre: "Farmacologia general", id: "20", requisitos: ["9", "11", "15"] },
  { nombre: "Genetica General", id: "21", requisitos: ["15"] },
  {
    semestre: "Segundo cuatrimestre",
    nombre: "Genetica de poblaciones y mejoramiento animal", id: "22", requisitos: ["17", "21"]
  },
  { nombre: "Semiologia", id: "23", requisitos: ["9", "11", "15"] },
  { nombre: "Farmacologia general y toxicologia", id: "24", requisitos: ["13", "14", "20"] },
  { nombre: "Ingles tecnico", id: "25", requisitos: [] },

  // --- CUARTO AÑO ---
  {
    anio: 4,
    efis: true,
    semestre: "Primer cuatrimestre",
    nombre: "Produccion de aves y piliferos", id: "26", requisitos: ["18", "22"]
  },
  { nombre: "Produccion de bovinos de carne", id: "27", requisitos: ["17", "19", "20", "22"] },
  { nombre: "Infectologia, zoonosis y enfermedades exoticas y emergentes", id: "28", requisitos: ["19", "23", "24"] },
  { nombre: "Cirugia I", id: "29", requisitos: ["efis3"] },
  { nombre: "Epidemiologia y salud publica aplicada", id: "30", requisitos: ["17", "19", "23", "24"] },
  {
    semestre: "Segundo cuatrimestre",
    nombre: "Produccion porcina", id: "31", requisitos: ["23", "17", "18", "19", "20", "22"]
  },
  { nombre: "Produccion de bovinos con leche", id: "32", requisitos: ["23", "17", "18", "19", "20", "22"] },
  { nombre: "Produccion equina", id: "33", requisitos: ["23", "17", "18", "19", "20", "22"] },
  { nombre: "Produccion ovina y caprina", id: "34", requisitos: ["23", "17", "18", "19", "20", "22"] },
  { nombre: "Enfermedades de rumiantes y cerdos", id: "35", requisitos: ["17", "18", "23", "24", "28", "27", "30"] },
  { nombre: "Gestion de empresa y economia agraria", id: "36", requisitos: ["18", "17", "22"] },

  // --- QUINTO AÑO ---
  {
    anio: 5,
    efis: true,
    semestre: "Primer cuatrimestre",
    nombre: "Tecnologia aplicada a productos alimenticios", id: "37", requisitos: ["28", "35", "30", "27", "32", "26"]
  },
  { nombre: "Teriogenologia", id: "38", requisitos: ["28", "30", "27", "32", "31", "34", "35"] },
  { nombre: "Enfermedades de caninos y felinos domesticos", id: "39", requisitos: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"] },
  { nombre: "Enfermedades de equinos", id: "40", requisitos: ["33"] },
  { nombre: "Enfermedades de aves y piliferos", id: "41", requisitos: ["26", "28"] },
  {
    semestre: "Segundo cuatrimestre",
    nombre: "Bromatologia, higiene e inspección", id: "42", requisitos: ["37"]
  },
  { nombre: "Analisis clinicos veterinarios", id: "43", requisitos: ["35", "40", "39"] },
  { nombre: "Metodos complementarios de diagnostico", id: "44", requisitos: ["40", "39"] },
  { nombre: "Inmunobiologia aplicada", id: "45", requisitos: ["35", "41", "40", "39", "30", "28"] },
  { nombre: "Ciencia de animales de laboratorio", id: "48", requisitos: ["28"] },
  { nombre: "Biotecnologia de la reproduccion", id: "46", requisitos: ["38"] },
  { nombre: "Cirugia II y anestesiologia", id: "47", requisitos: ["35", "40", "39", "38"] },

  // --- SEXTO AÑO ---
  {
    anio: 6,
    efis: true,
    semestre: "Primer cuatrimestre",
    nombre: "Clinica de equinos", id: "51", requisitos: ["40", "44", "43", "45", "46", "47", "38"]
  },
  { nombre: "Clinica y sanidad de cerdos", id: "52", requisitos: ["43", "45", "46", "38"] },
  { nombre: "Clinica de caninos y felinos", id: "49", requisitos: ["39", "44", "43", "38"] },
  { nombre: "Clinica y sanidad de rumiantes", id: "50", requisitos: ["35", "43", "45", "38"] },
  { nombre: "Bienestar animal", id: "53", requisitos: ["efis4"] },
  { nombre: "Etica y legislacion", id: "54", requisitos: ["42"] },
  {
    semestre: "Segundo cuatrimestre",
    nombre: "Practicas pre profesionales", id: "55", requisitos: ["efis5"]
  },
  { nombre: "Optativa I", id: "56", requisitos: [] },
  { nombre: "Optativa II", id: "57", requisitos: [] },
  { nombre: "Optativa III", id: "58", requisitos: [] },
  { nombre: "Informatica", id: "59", requisitos: [] },
];

const gridContainer = document.getElementById("grid-container");

// Agrupar materias por año y semestre
const materiasPorAnio = {};
materias.forEach(m => {
  if (!materiasPorAnio[m.anio]) materiasPorAnio[m.anio] = {};
  const semestre = m.semestre || "Sin semestre";
  if (!materiasPorAnio[m.anio][semestre]) materiasPorAnio[m.anio][semestre] = [];
  materiasPorAnio[m.anio][semestre].push(m);
});

// Renderizar materias
for (const anio in materiasPorAnio) {
  const yearBlock = document.createElement("div");
  yearBlock.className = "year-block";

  const title = document.createElement("div");
  title.className = "year-title";
  title.textContent = `Año ${anio}`;
  yearBlock.appendChild(title);

  for (const semestre in materiasPorAnio[anio]) {
    const semestreBlock = document.createElement("div");
    semestreBlock.className = "semester";

    const semTitle = document.createElement("div");
    semTitle.className = "semester-title";
    semTitle.textContent = semestre;
    semestreBlock.appendChild(semTitle);

    materiasPorAnio[anio][semestre].forEach(m => {
      const div = document.createElement("div");
      div.className = "subject locked";
      div.textContent = m.nombre;
      div.dataset.id = m.id;
      if (m.efis) div.dataset.efis = "true";

      div.addEventListener("click", () => {
        if (div.classList.contains("locked")) return;
        div.classList.toggle("completed");
        actualizarDesbloqueos();
      });

      semestreBlock.appendChild(div);
    });

    yearBlock.appendChild(semestreBlock);
  }

  gridContainer.appendChild(yearBlock);
}

// Lógica para desbloquear materias según requisitos
function actualizarDesbloqueos() {
  const completadas = new Set([...document.querySelectorAll(".subject.completed")]
    .map(e => e.dataset.id));

  // EFIS aprobadas automáticamente si todas las materias del año están aprobadas
  for (const anio in materiasPorAnio) {
    const todas = document.querySelectorAll(`.year-block:nth-child(${anio}) .subject`);
    const aprobadas = [...todas].filter(e => e.classList.contains("completed"));
    if (aprobadas.length === todas.length) completadas.add("efis" + anio);
  }

  document.querySelectorAll(".subject").forEach(div => {
    const id = div.dataset.id;
    const mat = materias.find(m => m.id === id);
    if (!mat) return;

    const requisitos = mat.requisitos || [];
    const cumplidos = requisitos.every(r => completadas.has(r));
    if (cumplidos || requisitos.length === 0) {
      div.classList.remove("locked");
    } else {
      div.classList.add("locked");
    }
  });
}

actualizarDesbloqueos();

