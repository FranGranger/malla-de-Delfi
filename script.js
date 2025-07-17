// --- MALLA DE MATERIAS ---

const materias = [
  // PRIMER AÑO - PRIMER SEMESTRE
  { id: "1", nombre: "Bioquímica" },
  { id: "2", nombre: "Biofísica" },
  { id: "3", nombre: "Biología celular y del desarrollo" },
  { id: "4", nombre: "Embriología y anatomía sistemática" },
  { id: "5", nombre: "Bioestadística" },

  // PRIMER AÑO - SEGUNDO SEMESTRE
  { id: "6", nombre: "Fisicoquímica aplicada a la fisiología veterinaria", requisitos: ["1", "2"] },
  { id: "7", nombre: "Microbiología I", requisitos: ["1", "3"] },
  { id: "8", nombre: "Histología", requisitos: ["3"] },

  // SEGUNDO AÑO - PRIMER CUATRIMESTRE
  { id: "9", nombre: "Fisiología", requisitos: ["4", "6", "8"] },
  { id: "10", nombre: "Inmunología animal básica", requisitos: ["1", "7", "8"] },
  { id: "11", nombre: "Anatomía veterinaria", requisitos: ["4"] },
  { id: "12", nombre: "Economía General y Sociología", requisitos: ["5"] },
  { id: "13", nombre: "Microbiología II", requisitos: ["7", "8"] },

  // SEGUNDO AÑO - SEGUNDO CUATRIMESTRE
  { id: "14", nombre: "Parasitología", requisitos: ["5", "6", "7", "8"] },
  { id: "15", nombre: "Patología general veterinaria", requisitos: ["4", "6", "8", "10"] },
  { id: "16", nombre: "Epidemiología y salud pública básica", requisitos: ["5"] },

  // EFIS TERCER AÑO
  { id: "efis3", nombre: "EFIS 3°", requisitos: ["1", "2", "3", "4", "5", "6", "7", "8"] },

  // TERCER AÑO
  { id: "17", nombre: "Zootecnia General", requisitos: ["9", "11", "12", "efis3"] },
  { id: "18", nombre: "Nutrición animal y alimentos", requisitos: ["9", "11", "12", "14", "efis3"] },
  { id: "19", nombre: "Patología especial", requisitos: ["9", "11", "13", "14", "15", "efis3"] },
  { id: "20", nombre: "Farmacología general", requisitos: ["9", "11", "15", "efis3"] },
  { id: "21", nombre: "Genética General", requisitos: ["15", "efis3"] },

  { id: "22", nombre: "Genética poblacional y mejoramiento animal", requisitos: ["17", "21"] },
  { id: "23", nombre: "Semiología", requisitos: ["9", "11", "15"] },
  { id: "24", nombre: "Farmacología general y toxicología", requisitos: ["13", "14", "20"] },
  { id: "25", nombre: "Inglés técnico" },

  // EFIS CUARTO AÑO
  { id: "efis4", nombre: "EFIS 4°", requisitos: ["9", "10", "11", "12", "13", "14", "15", "16"] },

  // CUARTO AÑO
  { id: "26", nombre: "Producción de aves y pilíferos", requisitos: ["18", "22", "efis4"] },
  { id: "27", nombre: "Producción de bovinos de carne", requisitos: ["17", "19", "20", "22", "efis4"] },
  { id: "28", nombre: "Infectología, zoonosis y enfermedades exóticas", requisitos: ["19", "23", "24", "efis4"] },
  { id: "29", nombre: "Cirugía I", requisitos: ["efis4"] },
  { id: "30", nombre: "Epidemiología aplicada", requisitos: ["17", "19", "23", "24", "efis4"] },
  { id: "31", nombre: "Producción porcina", requisitos: ["23", "17", "18", "19", "20", "22"] },
  { id: "32", nombre: "Producción de bovinos con leche", requisitos: ["23", "17", "18", "19", "20", "22"] },
  { id: "33", nombre: "Producción equina", requisitos: ["23", "17", "18", "19", "20", "22"] },
  { id: "34", nombre: "Producción ovina y caprina", requisitos: ["23", "17", "18", "19", "20", "22"] },
  { id: "35", nombre: "Enfermedades de rumiantes y cerdos", requisitos: ["17", "18", "23", "24", "28", "27", "30"] },
  { id: "36", nombre: "Gestión de empresa y economía agraria", requisitos: ["17", "18", "22"] },

  // EFIS QUINTO AÑO
  { id: "efis5", nombre: "EFIS 5°", requisitos: ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"] },

  // QUINTO AÑO
  { id: "37", nombre: "Tecnología aplicada a los productos alimenticios", requisitos: ["28", "35", "30", "27", "32", "26"] },
  { id: "38", nombre: "Teriogenología", requisitos: ["28", "30", "27", "32", "31", "34", "35"] },
  { id: "39", nombre: "Enfermedades de caninos y felinos", requisitos: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "efis5"] },
  { id: "40", nombre: "Enfermedades de los equinos", requisitos: ["33"] },
  { id: "41", nombre: "Enfermedades de aves y pilíferos", requisitos: ["26", "28"] },
  { id: "42", nombre: "Bromatología e inspección de alimentos", requisitos: ["37"] },
  { id: "43", nombre: "Análisis clínicos veterinarios", requisitos: ["35", "40", "39"] },
  { id: "44", nombre: "Métodos complementarios de diagnóstico", requisitos: ["40", "39"] },
  { id: "45", nombre: "Inmunobiología aplicada", requisitos: ["35", "41", "40", "39", "30", "28"] },
  { id: "46", nombre: "Biotecnología de la reproducción", requisitos: ["38"] },
  { id: "47", nombre: "Cirugía II y anestesiología", requisitos: ["35", "40", "39", "38"] },
  { id: "48", nombre: "Introducción a ciencia animales laboratorio", requisitos: ["28"] },

  // EFIS SEXTO AÑO
  { id: "efis6", nombre: "EFIS 6°", requisitos: ["26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"] },

  // SEXTO AÑO
  { id: "49", nombre: "Clínica de caninos y felinos", requisitos: ["39", "44", "43", "38"] },
  { id: "50", nombre: "Clínica y sanidad de los rumiantes", requisitos: ["35", "43", "45", "38"] },
  { id: "51", nombre: "Clínica de equinos", requisitos: ["40", "44", "43", "45", "46", "47", "38"] },
  { id: "52", nombre: "Clínica y sanidad de cerdos", requisitos: ["43", "45", "46", "38"] },
  { id: "53", nombre: "Bienestar animal", requisitos: ["efis6"] },
  { id: "54", nombre: "Ética y legislación veterinaria", requisitos: ["42"] },
  { id: "55", nombre: "Prácticas preprofesionales", requisitos: ["49", "50", "51", "52", "53", "54"] },
  { id: "56", nombre: "Optativa I" },
  { id: "57", nombre: "Optativa II" },
  { id: "58", nombre: "Optativa III" },
  { id: "59", nombre: "Informática" }
];

const estado = {};

function crearMalla() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";

  const materiasConBloques = materias.reduce((acum, mat) => {
    const año = obtenerAño(mat.id);
    if (!acum[año]) acum[año] = [];
    acum[año].push(mat);
    return acum;
  }, {});

  Object.entries(materiasConBloques).forEach(([año, lista]) => {
    const bloque = document.createElement("div");
    bloque.className = "bloque";
    bloque.innerHTML = `<h2>${año}</h2>`;
    lista.forEach(mat => {
      const div = document.createElement("div");
      div.className = `materia bloqueada`;
      div.id = `materia-${mat.id}`;
      div.innerHTML = `
        <span>${mat.nombre}</span>
        <button onclick="toggleAprobado('${mat.id}')">Aprobar</button>
      `;
      bloque.appendChild(div);
    });
    contenedor.appendChild(bloque);
  });

  actualizarEstados();
}

function obtenerAño(id) {
  const num = parseInt(id.replace("efis", ""));
  if (id.includes("efis")) return `EFIS - ${num}° año`;
  if (num <= 5) return "1° año - 1° semestre";
  if (num <= 8) return "1° año - 2° semestre";
  if (num <= 13) return "2° año - 1° semestre";
  if (num <= 16) return "2° año - 2° semestre";
  if (num <= 24) return "3° año";
  if (num <= 36) return "4° año";
  if (num <= 48) return "5° año";
  if (num <= 59) return "6° año";
  return "Otros";
}

function toggleAprobado(id) {
  estado[id] = !estado[id];
  actualizarEstados();
}

function actualizarEstados() {
  materias.forEach(mat => {
    const div = document.getElementById(`materia-${mat.id}`);
    const cumplidos = (mat.requisitos || []).every(req => estado[req]);
    const aprobada = estado[mat.id];

    div.className = "materia";
    if (!cumplidos) div.classList.add("bloqueada");
    else div.classList.add("desbloqueada");
    if (aprobada) div.classList.add("aprobada");
  });
}

window.onload = crearMalla;
