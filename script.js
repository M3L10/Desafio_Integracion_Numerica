// ============================================================
// INTEGRACIÓN NUMÉRICA: EJERCICIOS 19 AL 27
// Cada ejercicio muestra:
// planteamiento → procedimiento → resultado → gráfica → conclusión
// ============================================================

const ejercicios = [
  {
    n: 19,
    titulo: "Distancia recorrida por un vehículo",
    planteamiento: [
      "La distancia recorrida se obtiene integrando la velocidad:",
      "d = ∫₀⁷ v(t) dt",
      "Como la velocidad está en mi/h y el tiempo en segundos:",
      "d (mi) = (1/3600) ∫₀⁷ v(t) dt"
    ],
    datos: "t (s): 0, 1, 2, 3, 4, 5, 6, 7",
    tabla: "v (mi/h): 0, 14, 39, 69, 95, 114, 129, 139",
    pasos: [
      "Paso 1. Número de intervalos y separación",
      "n = 7; h = 1 s.",
      "Paso 2. Regla del trapecio compuesto",
      "T = h/2 [v₀ + 2(v₁ + v₂ + v₃ + v₄ + v₅ + v₆) + v₇]",
      "T = 1/2 [0 + 2(14 + 39 + 69 + 95 + 114 + 129) + 139]",
      "T = 1/2 [0 + 920 + 139] = 529.5",
      "Paso 3. Conversión de unidades",
      "dT = 529.5/3600 = 0.147083 mi",
      "Paso 4. Simpson combinado",
      "De 0 a 4 se usa Simpson 1/3; de 4 a 7, Simpson 3/8.",
      "S₁ = (1/3)[0 + 95 + 4(14 + 69) + 2(39)] = 168.333333",
      "S₂ = (3/8)[95 + 139 + 3(114 + 129) + 2(0)] = 361.125",
      "dS = (168.333333 + 361.125)/3600 = 0.147072 mi"
    ],
    resultado: [
      "Trapecio: 0.147083 mi",
      "Simpson combinado: 0.147072 mi ≈ 236.69 m"
    ],
    conclusion:
      "La distancia se obtiene como el área bajo la curva velocidad-tiempo. Simpson combinado proporciona una estimación ligeramente menor que el trapecio.",
    x: [0, 1, 2, 3, 4, 5, 6, 7],
    y: [0, 14, 39, 69, 95, 114, 129, 139],
    tipo: "linea",
    xlabel: "Tiempo (s)",
    ylabel: "Velocidad (mi/h)"
  },

  {
    n: 20,
    titulo: "Trabajo realizado por una banda elástica",
    planteamiento: [
      "El trabajo es la integral de la fuerza respecto al desplazamiento:",
      "W = ∫₀²·⁸ F(x) dx",
      "El resultado se expresa en lb·in."
    ],
    datos: "x (in): 0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8",
    tabla: "F (lb): 0, 0.85, 1.30, 1.60, 1.87, 2.14, 2.34, 2.52",
    pasos: [
      "Paso 1. Separación uniforme",
      "h = 0.4 in; n = 7.",
      "Paso 2. Regla del trapecio",
      "T = h/2 [F₀ + 2ΣFᵢ + F₇]",
      "T = 0.2 [0 + 2(0.85 + 1.30 + 1.60 + 1.87 + 2.14 + 2.34) + 2.52]",
      "T = 0.2 [0 + 20.20 + 2.52] = 4.544 lb·in",
      "Paso 3. Simpson combinado",
      "Se aplican Simpson 1/3 en 4 intervalos y Simpson 3/8 en 3 intervalos.",
      "S₁ = (0.4/3)[F₀ + F₄ + 4(F₁ + F₃) + 2F₂]",
      "S₁ = (0.4/3)[0 + 1.87 + 4(0.85 + 1.60) + 2(1.30)]",
      "S₁ = 1.800 lb·in",
      "S₂ = (3 × 0.4/8)[F₄ + F₇ + 3(F₅ + F₆)]",
      "S₂ = 0.15[1.87 + 2.52 + 3(2.14 + 2.34)]",
      "S₂ = 2.777167 lb·in",
      "W = S₁ + S₂ = 4.577167 lb·in",
      "Conversión aproximada: W ≈ 4.577167 × 0.112985 = 0.517 J"
    ],
    resultado: [
      "Trapecio: 4.544000 lb·in",
      "Simpson combinado: 4.577167 lb·in ≈ 0.517 J"
    ],
    conclusion:
      "El trabajo equivale al área bajo la curva fuerza-desplazamiento. Simpson combinado aproxima el área usando polinomios de menor error para estos intervalos.",
    x: [0, 0.4, 0.8, 1.2, 1.6, 2, 2.4, 2.8],
    y: [0, 0.85, 1.3, 1.6, 1.87, 2.14, 2.34, 2.52],
    tipo: "linea",
    xlabel: "Desplazamiento (in)",
    ylabel: "Fuerza (lb)"
  },

  {
    n: 21,
    titulo: "Área bajo un perfil topográfico",
    planteamiento: [
      "El área aproximada bajo el perfil se expresa como:",
      "A = ∫₁¹⁰ y(x) dx",
      "Los valores de y se digitalizaron visualmente de una gráfica."
    ],
    datos: "x: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    tabla: "y: 1.3, 3.7, 4.6, 4.4, 2.7, 2.5, 3.6, 5.3, 6.0, 5.9",
    pasos: [
      "Paso 1. Separación",
      "h = (10 − 1)/9 = 1; n = 9.",
      "Paso 2. Trapecio compuesto",
      "T = h/2 [y₀ + 2Σyᵢ + y₉]",
      "T = 1/2 [1.3 + 2(3.7 + 4.6 + 4.4 + 2.7 + 2.5 + 3.6 + 5.3 + 6.0) + 5.9]",
      "T = 36.40 u²",
      "Paso 3. Simpson combinado",
      "Se aplica Simpson 1/3 en los primeros 8 intervalos.",
      "S₁ = (h/3)[y₀ + y₈ + 4(y₁ + y₃ + y₅ + y₇) + 2(y₂ + y₄ + y₆)]",
      "S₁ ≈ 31.60 u²",
      "En el intervalo final se utiliza el trapecio:",
      "Tfinal = h(y₈ + y₉)/2 = (6.0 + 5.9)/2 = 5.95 u²",
      "A ≈ S₁ + Tfinal ≈ 36.85 u²"
    ],
    resultado: [
      "Trapecio: ≈ 36.40 u²",
      "Simpson combinado: ≈ 36.85 u²"
    ],
    conclusion:
      "El área depende de las ordenadas extraídas de la gráfica. Como son datos digitalizados aproximados, el resultado también es una estimación.",
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1.3, 3.7, 4.6, 4.4, 2.7, 2.5, 3.6, 5.3, 6, 5.9],
    tipo: "linea",
    xlabel: "Posición x",
    ylabel: "Perfil y"
  },

  {
    n: 22,
    titulo: "Longitud de un cable con forma de catenaria",
    planteamiento: [
      "La ecuación del cable es:",
      "y = 24 cosh(x/24), −12 ≤ x ≤ 26",
      "La longitud de una curva se calcula mediante:",
      "L = ∫₋₁₂²⁶ √[1 + (dy/dx)²] dx"
    ],
    datos: "a = 24 ft; extremos x = −12 ft y x = 26 ft.",
    pasos: [
      "Paso 1. Derivar la función",
      "y = 24 cosh(x/24)",
      "y′ = sinh(x/24)",
      "Paso 2. Sustituir en la fórmula de longitud",
      "L = ∫₋₁₂²⁶ √[1 + sinh²(x/24)] dx",
      "Paso 3. Simplificar usando 1 + sinh²(u) = cosh²(u)",
      "L = ∫₋₁₂²⁶ cosh(x/24) dx",
      "Paso 4. Integrar",
      "L = 24 sinh(x/24) |₋₁₂²⁶",
      "L = 24[sinh(26/24) − sinh(−12/24)]",
      "L exacta ≈ 43.898841 ft",
      "Paso 5. Aproximaciones numéricas con n = 8",
      "Trapecio: L ≈ 44.042044 ft",
      "Simpson 1/3: L ≈ 43.899213 ft"
    ],
    resultado: [
      "Longitud exacta: 43.898841 ft",
      "Trapecio: 44.042044 ft",
      "Simpson 1/3: 43.899213 ft"
    ],
    conclusion:
      "El resultado de Simpson queda muy cerca de la longitud exacta. El método del trapecio presenta una diferencia mayor para esta catenaria.",
    x: Array.from({ length: 9 }, (_, i) => -12 + i * 4.75),
    y: Array.from({ length: 9 }, (_, i) => 24 * Math.cosh((-12 + i * 4.75) / 24)),
    tipo: "linea",
    xlabel: "x (ft)",
    ylabel: "y (ft)"
  },

  {
    n: 23,
    titulo: "Caudal de agua en una tubería circular",
    planteamiento: [
      "El caudal es la integral de la velocidad sobre la sección:",
      "Q = ∫₀ᴿ v(r) dA",
      "Para una sección circular: dA = 2πr dr",
      "v(r) = 80(1 − r/R)^(1/7), R = 0.25 in"
    ],
    datos: "Velocidad máxima en el centro: 80 in/s; radio: 0.25 in.",
    pasos: [
      "Paso 1. Plantear la integral",
      "Q = ∫₀ᴿ 2πr v(r) dr",
      "Paso 2. Sustituir la función de velocidad",
      "Q = ∫₀⁰·²⁵ 160πr(1 − r/0.25)^(1/7) dr",
      "Paso 3. Cambio de variable",
      "u = r/R; r = Ru; dr = R du",
      "Q = 160πR² ∫₀¹ u(1 − u)^(1/7) du",
      "Paso 4. Integración analítica",
      "La integral conduce a Q = 49π/12",
      "Q exacto ≈ 12.828170 in³/s",
      "Paso 5. Aproximación numérica con n = 8",
      "Trapecio: Q ≈ 11.681778 in³/s",
      "Simpson 1/3: Q ≈ 12.151244 in³/s"
    ],
    resultado: [
      "Valor exacto: 12.828170 in³/s",
      "Trapecio: 11.681778 in³/s",
      "Simpson 1/3: 12.151244 in³/s"
    ],
    conclusion:
      "El caudal se obtiene sumando la contribución de velocidad de todos los anillos circulares. La variación pronunciada de la velocidad cerca de la pared dificulta la aproximación numérica.",
    x: Array.from({ length: 9 }, (_, i) => i * 0.25 / 8),
    y: Array.from({ length: 9 }, (_, i) => {
      const r = i * 0.25 / 8;
      return 2 * Math.PI * r * 80 *
        Math.pow(Math.max(0, 1 - r / 0.25), 1 / 7);
    }),
    tipo: "linea",
    xlabel: "Radio r (in)",
    ylabel: "2πrv(r)"
  },

  {
    n: 24,
    titulo: "Longitud de una cardioide paramétrica",
    planteamiento: [
      "La curva está definida por:",
      "x(t) = 2b cos(t) − b cos(2t)",
      "y(t) = 2b sin(t) − b sin(2t)",
      "b = 5; 0 ≤ t ≤ 2π",
      "L = ∫₀²π √[(dx/dt)² + (dy/dt)²] dt"
    ],
    datos: "Parámetro b = 5; intervalo angular [0, 2π].",
    pasos: [
      "Paso 1. Derivar x(t)",
      "x′(t) = −2b sin(t) + 2b sin(2t)",
      "Paso 2. Derivar y(t)",
      "y′(t) = 2b cos(t) − 2b cos(2t)",
      "Paso 3. Sustituir en la longitud",
      "L = ∫₀²π √[(−2b sin(t) + 2b sin(2t))² + (2b cos(t) − 2b cos(2t))²] dt",
      "Paso 4. Simplificar",
      "La rapidez se reduce a 4b sin(t/2) en 0 ≤ t ≤ 2π.",
      "L = ∫₀²π 4b sin(t/2) dt",
      "Paso 5. Integrar",
      "L = −8b cos(t/2) |₀²π = 16b",
      "Con b = 5: L exacta = 80",
      "Aproximaciones con n = 8:",
      "Trapecio ≈ 78.969264; Simpson 1/3 ≈ 80.010767"
    ],
    resultado: [
      "Longitud exacta: 80",
      "Trapecio: 78.969264",
      "Simpson 1/3: 80.010767"
    ],
    conclusion:
      "La longitud exacta es 80 unidades. Simpson proporciona una aproximación cercana; la gráfica paramétrica muestra la forma completa de la curva.",
    x: Array.from({ length: 65 }, (_, i) => {
      const t = i * 2 * Math.PI / 64;
      return 10 * Math.cos(t) - 5 * Math.cos(2 * t);
    }),
    y: Array.from({ length: 65 }, (_, i) => {
      const t = i * 2 * Math.PI / 64;
      return 10 * Math.sin(t) - 5 * Math.sin(2 * t);
    }),
    tipo: "parametrica",
    xlabel: "x(t)",
    ylabel: "y(t)"
  },

  {
    n: 25,
    titulo: "Variación de energía potencial gravitatoria",
    planteamiento: [
      "Datos: m = 500 kg; g₀ = 9.81 m/s²",
      "Radio terrestre: R = 6 371 000 m",
      "Altura: H = 800 000 m",
      "ΔU = mg₀ ∫₀ᴴ [R/(R + y)]² dy"
    ],
    datos: "Se considera la variación de la gravedad con la altura.",
    pasos: [
      "Paso 1. Sacar las constantes de la integral",
      "ΔU = mg₀R² ∫₀ᴴ 1/(R + y)² dy",
      "Paso 2. Integrar",
      "∫(R + y)⁻² dy = −1/(R + y)",
      "ΔU = mg₀R²[−1/(R + y)]₀ᴴ",
      "Paso 3. Evaluar los límites",
      "ΔU = mg₀R²[1/R − 1/(R + H)]",
      "Paso 4. Simplificar",
      "ΔU = mg₀RH/(R + H)",
      "Paso 5. Sustituir valores",
      "ΔU = (500)(9.81)(6 371 000)(800 000)/(7 171 000)",
      "ΔU ≈ 3.486236787 × 10⁹ J",
      "Aproximación con n = 8:",
      "Trapecio ≈ 3.48662008 × 10⁹ J",
      "Simpson 1/3 ≈ 3.48623690 × 10⁹ J"
    ],
    resultado: [
      "Resultado analítico: 3.486236787 × 10⁹ J",
      "Trapecio: 3.48662008 × 10⁹ J",
      "Simpson 1/3: 3.48623690 × 10⁹ J"
    ],
    conclusion:
      "La energía potencial aumenta con la altura. Simpson aproxima con gran precisión el resultado analítico para estos datos.",
    x: Array.from({ length: 9 }, (_, i) => i * 100000),
    y: Array.from({ length: 9 }, (_, i) => {
      const R = 6371000;
      const h = i * 100000;
      return 500 * 9.81 * Math.pow(R / (R + h), 2);
    }),
    tipo: "linea",
    xlabel: "Altura (m)",
    ylabel: "Fuerza gravitatoria (N)"
  },

  {
    n: 26,
    titulo: "Área de un lago mediante anchuras",
    planteamiento: [
      "El área se estima integrando las anchuras del lago:",
      "A = ∫₄₀²⁶⁰ w(x) dx",
      "x es la distancia a lo largo del lago, en millas.",
      "w(x) es el ancho del lago, en millas."
    ],
    datos: "Intervalo: 40–260 mi; separación entre medidas: 20 mi.",
    pasos: [
      "Paso 1. Calcular el número de intervalos",
      "n = (260 − 40)/20 = 11",
      "Paso 2. Fórmula del trapecio",
      "T = h/2 [w₀ + 2(w₁ + w₂ + ... + w₁₀) + w₁₁]",
      "Con h = 20:",
      "T = 10 [w₀ + 2Σwᵢ + w₁₁]",
      "Paso 3. Simpson combinado",
      "Usar Simpson 1/3 en 8 intervalos y Simpson 3/8 en los 3 restantes.",
      "Paso 4. Comparar con el área de referencia",
      "Aref = 9940 mi²",
      "Error porcentual = 100 × |Aaprox − 9940|/9940",
      "No se puede evaluar numéricamente sin la tabla de anchuras."
    ],
    resultado: [
      "Área de referencia: 9940 mi²",
      "Área numérica: requiere las anchuras medidas"
    ],
    conclusion:
      "El método es válido, pero no existe un resultado numérico reproducible sin la tabla de anchuras digitalizadas. No se deben inventar los datos que faltan.",
    x: [],
    y: [],
    tipo: "vacio",
    xlabel: "Distancia (mi)",
    ylabel: "Ancho (mi)"
  },

  {
    n: 27,
    titulo: "Volumen y superficie de un objeto de revolución",
    planteamiento: [
      "El radio es la mitad del diámetro:",
      "r(z) = d(z)/2",
      "Volumen de revolución:",
      "V = π∫₀¹² r(z)² dz",
      "Superficie simplificada indicada en el enunciado:",
      "S = 2π∫₀¹² r(z) dz"
    ],
    datos: "z (in): 0, 1, 2, ..., 12",
    tabla: "d (in): 0, 2.6, 3.2, 4.8, 5.6, 6.0, 6.2, 6.0, 5.6, 4.8, 3.3, 2.6, 0",
    pasos: [
      "Paso 1. Obtener los radios",
      "r = d/2",
      "r = 0, 1.3, 1.6, 2.4, 2.8, 3.0, 3.1, 3.0, 2.8, 2.4, 1.65, 1.3, 0",
      "Paso 2. Volumen por trapecio compuesto",
      "V = π∫₀¹² r² dz",
      "Vₜ = π(h/2)[r₀² + 2Σrᵢ² + r₁₂²]",
      "Con h = 1: Vₜ ≈ 199.404740 in³",
      "Paso 3. Volumen por Simpson 1/3",
      "Vₛ = π(h/3)[r₀² + r₁₂² + 4Σr² impar + 2Σr² par]",
      "Vₛ ≈ 201.842092 in³",
      "Paso 4. Superficie simplificada",
      "S = 2π∫₀¹² r(z) dz",
      "Trapecio: Sₜ ≈ 159.278748 in²",
      "Simpson 1/3: Sₛ ≈ 162.315620 in²",
      "Paso 5. Superficie real de revolución",
      "Sreal = 2π∫₀¹² r(z)√[1 + (dr/dz)²] dz",
      "Esta fórmula requiere estimar la derivada dr/dz."
    ],
    resultado: [
      "Volumen trapecio: 199.404740 in³",
      "Volumen Simpson: 201.842092 in³",
      "Superficie simplificada: 159.278748 / 162.315620 in²"
    ],
    conclusion:
      "Simpson estima un volumen mayor que el trapecio. La fórmula S = 2π∫r dz es simplificada; la superficie geométrica real debe incluir la pendiente del perfil.",
    x: Array.from({ length: 13 }, (_, i) => i),
    y: [0, 1.3, 1.6, 2.4, 2.8, 3, 3.1, 3, 2.8, 2.4, 1.65, 1.3, 0],
    tipo: "linea",
    xlabel: "Altura z (in)",
    ylabel: "Radio r (in)"
  }
];

// ============================================================
// CREACIÓN DEL CONTENIDO
// ============================================================

function crearEjercicios() {
  const contenedor = document.getElementById("contenedor-ejercicios");

  contenedor.innerHTML = "";

  ejercicios.forEach(e => {
    const articulo = document.createElement("article");
    articulo.className = "ejercicio";
    articulo.id = `ejercicio-${e.n}`;

    const planteamientoHTML = e.planteamiento.map(p =>
      `<div class="matematica">${p}</div>`
    ).join("");

    const pasosHTML = e.pasos.map(p =>
      `<div class="paso matematica">${p}</div>`
    ).join("");

    const resultadoHTML = e.resultado.map(r =>
      `<p><strong>${r}</strong></p>`
    ).join("");

    articulo.innerHTML = `
      <h3>Ejercicio ${e.n}: ${e.titulo}</h3>

      <h4>1. Planteamiento matemático</h4>
      <div class="paso">${planteamientoHTML}</div>

      <h4>2. Datos del problema</h4>
      <p class="datos">${e.datos}</p>
      ${e.tabla ? `<p class="datos">${e.tabla}</p>` : ""}

      <h4>3. Procedimiento paso a paso</h4>
      ${pasosHTML}

      <h4>4. Resultado final</h4>
      <div class="resultados">
        ${resultadoHTML}
      </div>

      <h4>5. Gráfica</h4>
      <canvas
        id="grafico-${e.n}"
        class="grafico"
        role="img"
        aria-label="Gráfica del ejercicio ${e.n}">
      </canvas>

      <p class="datos">
        Eje horizontal: ${e.xlabel}. Eje vertical: ${e.ylabel}.
      </p>

      <h4>6. Conclusión del ejercicio</h4>
      <div class="conclusion">
        <strong>Conclusión:</strong> ${e.conclusion}
      </div>
    `;

    contenedor.appendChild(articulo);
  });

  dibujarTodos();
}

// ============================================================
// GRÁFICOS EN CANVAS
// ============================================================

function dibujarGrafico(canvas, e) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  canvas.width = Math.max(300, rect.width) * dpr;
  canvas.height = Math.max(220, rect.height) * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const W = Math.max(300, rect.width);
  const H = Math.max(220, rect.height);

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  if (!e.x.length || !e.y.length) {
    ctx.fillStyle = "#637089";
    ctx.font = "14px Arial";
    ctx.fillText("Gráfica pendiente: faltan los datos de anchuras.", 18, H / 2);
    return;
  }

  const n = Math.min(e.x.length, e.y.length);
  const xs = e.x.slice(0, n);
  const ys = e.y.slice(0, n);

  const left = 52;
  const right = 20;
  const top = 24;
  const bottom = 42;

  let xmin = Math.min(...xs);
  let xmax = Math.max(...xs);
  let ymin = Math.min(0, ...ys);
  let ymax = Math.max(...ys);

  if (e.tipo === "parametrica") {
    xmin = Math.min(...xs);
    xmax = Math.max(...xs);
    ymin = Math.min(...ys);
    ymax = Math.max(...ys);
  }

  if (xmin === xmax) xmax = xmin + 1;
  if (ymin === ymax) ymax = ymin + 1;

  const paddingY = (ymax - ymin) * 0.1;
  ymin -= paddingY;
  ymax += paddingY;

  const px = x =>
    left + (x - xmin) / (xmax - xmin) * (W - left - right);

  const py = y =>
    H - bottom - (y - ymin) / (ymax - ymin) * (H - top - bottom);

  // Cuadrícula y marcas
  ctx.strokeStyle = "#e6ebf3";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#637089";
  ctx.font = "11px Arial";

  for (let i = 0; i <= 4; i++) {
    const yy = top + i * (H - top - bottom) / 4;

    ctx.beginPath();
    ctx.moveTo(left, yy);
    ctx.lineTo(W - right, yy);
    ctx.stroke();

    const val = ymax - i * (ymax - ymin) / 4;
    ctx.fillText(val.toFixed(1), 4, yy + 4);
  }

  // Ejes
  ctx.strokeStyle = "#718096";
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, H - bottom);
  ctx.lineTo(W - right, H - bottom);
  ctx.stroke();

  // Área bajo la curva, excepto curva paramétrica
  if (e.tipo !== "parametrica") {
    ctx.beginPath();
    ctx.moveTo(px(xs[0]), py(0));

    for (let i = 0; i < n; i++) {
      ctx.lineTo(px(xs[i]), py(ys[i]));
    }

    ctx.lineTo(px(xs[n - 1]), py(0));
    ctx.closePath();

    ctx.fillStyle = "rgba(36, 87, 214, 0.13)";
    ctx.fill();
  }

  // Línea principal
  ctx.beginPath();
  ctx.strokeStyle = "#2457d6";
  ctx.lineWidth = 2.5;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      ctx.moveTo(px(xs[i]), py(ys[i]));
    } else {
      ctx.lineTo(px(xs[i]), py(ys[i]));
    }
  }

  ctx.stroke();

  // Puntos de datos
  if (e.tipo !== "parametrica") {
    ctx.fillStyle = "#147d55";

    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.arc(px(xs[i]), py(ys[i]), 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Etiquetas
  ctx.fillStyle = "#172033";
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.fillText(e.xlabel, W / 2, H - 8);

  ctx.save();
  ctx.translate(14, H / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(e.ylabel, 0, 0);
  ctx.restore();
}

function dibujarTodos() {
  ejercicios.forEach(e => {
    const canvas = document.getElementById(`grafico-${e.n}`);
    if (canvas) dibujarGrafico(canvas, e);
  });
}

crearEjercicios();

window.addEventListener("resize", dibujarTodos);