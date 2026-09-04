/* Contenido de la Unidad 1 — Modelos de Psicopatología
   Asignatura: Psicopatología · UNITEC, Dirección Académica de Psicología (4.º cuatrimestre)
   Grounded en la bibliografía complementaria propuesta (ver CONTENT.bibliography). */

const CONTENT = {

course: "Psicopatología",
institution: "UNITEC · Dirección Académica de Psicología — 4.º cuatrimestre",
appUrl: "https://lenguajeclinico-git-main-josafatacostas-projects.vercel.app/",

unit: {
  id: "u1",
  label: "Unidad 1",
  title: "Modelos de Psicopatología",
  objetivo: "Identificar las particularidades de los diferentes modelos que abordan la psicopatología, para el reconocimiento de las alteraciones de los procesos psicológicos básicos que sustentan las conductas patológicas, así como su tratamiento.",
},

bibliography: [
  { tag: "B",  apa: "Belloch, A., Sandín, B., y Ramos, F. (2020). Manual de psicopatología (vols. I y II, 3.ª ed. rev.). McGraw-Hill Interamericana." },
  { tag: "C",  apa: "Caballo, V. E., Salazar, I. C., y Carrobles, J. A. (Dirs.). (2024). Manual de psicopatología y trastornos psicológicos: Adaptado al DSM-5-TR y a la CIE-11. Ediciones Pirámide." },
  { tag: "D",  apa: "American Psychiatric Association. (2023). DSM-5-TR: Manual diagnóstico y estadístico de los trastornos mentales, texto revisado (5.ª ed.). Editorial Médica Panamericana." },
  { tag: "DC", apa: "American Psychiatric Association. (2024). DSM-5-TR. Casos clínicos (5.ª ed.). Editorial Médica Panamericana." },
],

models: {

biologico: {
  key: "biologico", code: "1.1", name: "Modelo Biológico",
  tagline: "La conducta anormal como expresión de alteraciones del sistema nervioso.",
  definicion: "Explica la psicopatología como resultado de alteraciones en la estructura y función del sistema nervioso: factores genéticos, desequilibrios de neurotransmisores, disfunciones neuroanatómicas o neuroendocrinas.",
  supuestos: [
    "La conducta anormal tiene una base orgánica identificable, aunque no siempre visible con los medios actuales.",
    "Los síntomas pueden entenderse como manifestación de una disfunción cerebral o de un desequilibrio neuroquímico.",
    "Existe una vulnerabilidad biológica que puede heredarse o transmitirse genéticamente."
  ],
  mecanismo: "Alteraciones en neurotransmisores (serotonina, dopamina, GABA, entre otros), en circuitos neuronales específicos, o factores genéticos que incrementan la predisposición a desarrollar un trastorno.",
  autores: "Psiquiatría biológica; genética conductual.",
  aplicacion: "Farmacoterapia, estudios de neuroimagen, evaluación genética y familiar.",
  limites: "Riesgo de reduccionismo: por sí solo no explica la variabilidad cultural y contextual en la expresión de los síntomas.",
  svg: "biologico"
},

conductual: {
  key: "conductual", code: "1.2", name: "Modelo Conductual",
  tagline: "La conducta anormal se aprende con los mismos principios que la conducta normal.",
  definicion: "Entiende la conducta anormal como una conducta aprendida, explicable mediante los principios del condicionamiento clásico, el condicionamiento operante y el aprendizaje social.",
  supuestos: [
    "Los síntomas son respuestas aprendidas ante estímulos del ambiente.",
    "Una conducta se mantiene porque, de alguna forma, está siendo reforzada.",
    "Lo que se aprendió por asociación o consecuencias puede desaprenderse con los mismos principios."
  ],
  mecanismo: "Condicionamiento clásico (asociación estímulo–respuesta), condicionamiento operante (consecuencias que refuerzan o extinguen la conducta) y modelado (aprendizaje por observación, Bandura).",
  autores: "Watson, Skinner, Wolpe, Bandura.",
  aplicacion: "Terapias de exposición, desensibilización sistemática, técnicas de modificación de conducta.",
  limites: "Dificultad para explicar procesos internos (pensamientos, emociones) sin recurrir a variables cognitivas.",
  svg: "conductual"
},

cognitivo: {
  key: "cognitivo", code: "1.3", name: "Modelo Cognitivo",
  tagline: "No es el evento, sino su interpretación, lo que produce el malestar.",
  definicion: "Propone que los trastornos surgen de distorsiones o esquemas de pensamiento disfuncionales que median la relación entre un evento y la respuesta emocional o conductual que provoca.",
  supuestos: [
    "La forma en que la persona interpreta los eventos determina en gran medida su malestar.",
    "Existen esquemas cognitivos (creencias nucleares) que organizan cómo procesamos la información.",
    "Las distorsiones cognitivas (catastrofismo, sobregeneralización, pensamiento dicotómico) mantienen el trastorno."
  ],
  mecanismo: "Esquemas cognitivos, distorsiones cognitivas y la tríada cognitiva (visión negativa de uno mismo, el mundo y el futuro).",
  autores: "Aaron Beck, Albert Ellis.",
  aplicacion: "Terapia cognitivo-conductual (TCC), reestructuración cognitiva.",
  limites: "Puede subestimar el peso de los factores biológicos y sociales en el origen del trastorno.",
  svg: "cognitivo"
},

existencialista: {
  key: "existencialista", code: "1.4", name: "Modelo Existencialista",
  tagline: "El malestar surge al enfrentar la libertad y la responsabilidad de existir.",
  definicion: "Explica la psicopatología como resultado de la dificultad de la persona para encontrar sentido, autenticidad y responsabilidad frente a su propia existencia.",
  supuestos: [
    "El ser humano es libre y responsable de sus elecciones.",
    "El malestar surge al evadir esa libertad o al enfrentar los “datos últimos” de la existencia: muerte, libertad, aislamiento y falta de sentido.",
    "La angustia existencial no siempre es patológica: puede ser una señal de crecimiento."
  ],
  mecanismo: "Angustia existencial ante la muerte, la libertad, el aislamiento y la falta de sentido; evitación o negación de estos datos últimos.",
  autores: "Viktor Frankl, Rollo May, Irvin Yalom.",
  aplicacion: "Terapia existencial, logoterapia (búsqueda de sentido).",
  limites: "Menor operacionalización empírica; difícil de someter a validación experimental estricta.",
  svg: "existencialista"
},

fenomenologico: {
  key: "fenomenologico", code: "1.5", name: "Modelo Fenomenológico",
  tagline: "Comprender la experiencia del paciente tal como él o ella la vive.",
  definicion: "Busca comprender la experiencia subjetiva del paciente tal como la vive, aproximándose a su propio marco de referencia sin imponerle categorías externas.",
  supuestos: [
    "Para entender la psicopatología es necesario aproximarse a la vivencia consciente del sujeto (su “mundo vivido”).",
    "La comprensión empática precede a la explicación causal.",
    "El síntoma solo cobra sentido dentro de la experiencia global de la persona."
  ],
  mecanismo: "Suspensión de juicios previos (epojé) y descripción cuidadosa de la experiencia consciente del paciente, en su propio lenguaje.",
  autores: "Base filosófica en Husserl; psicopatología fenomenológica de Karl Jaspers; enfoque centrado en la persona de Carl Rogers.",
  aplicacion: "Entrevista fenomenológica, enfoque centrado en la persona.",
  limites: "Alto grado de subjetividad en la interpretación; complejo de estandarizar y comparar entre casos.",
  svg: "fenomenologico"
},

psicoanalista: {
  key: "psicoanalista", code: "1.6", name: "Modelo Psicoanalista",
  tagline: "El síntoma como expresión de un conflicto inconsciente no resuelto.",
  definicion: "Entiende la psicopatología como expresión de conflictos inconscientes no resueltos, frecuentemente originados en etapas tempranas del desarrollo.",
  supuestos: [
    "La mente tiene una estructura tópica (consciente, preconsciente, inconsciente) y una estructura psíquica (ello, yo, superyó).",
    "Los síntomas son “formaciones de compromiso” entre un impulso y la defensa que lo contiene.",
    "Las experiencias tempranas y los vínculos afectivos moldean la vida psíquica adulta."
  ],
  mecanismo: "Mecanismos de defensa (represión, proyección, negación, entre otros), conflicto intrapsíquico y transferencia en la relación terapéutica.",
  autores: "Sigmund Freud; desarrollos posteriores como Melanie Klein y la teoría del apego de Bowlby.",
  aplicacion: "Psicoanálisis, psicoterapias psicodinámicas.",
  limites: "Dificultad para contrastar empíricamente constructos inconscientes; procesos terapéuticos habitualmente prolongados.",
  svg: "psicoanalista"
},

etnopsicopatologico: {
  key: "etnopsicopatologico", code: "1.8", name: "Modelo Etnopsicopatológico",
  tagline: "La cultura moldea cómo se expresa y se nombra el malestar.",
  definicion: "Analiza cómo la cultura moldea la expresión, interpretación y significado de los síntomas psicológicos, incluyendo los llamados síndromes ligados a la cultura.",
  supuestos: [
    "No existe una expresión universal e idéntica de la enfermedad mental en todas las culturas.",
    "Los síntomas y su significado varían según el contexto cultural del paciente.",
    "El diagnóstico debe considerar el “idioma del malestar” propio de cada grupo cultural."
  ],
  mecanismo: "Síndromes culturales (p. ej., el llamado “ataque de nervios”) y formas culturalmente aceptadas de expresar el sufrimiento psíquico.",
  autores: "Etnopsiquiatría y antropología médica; Entrevista de Formulación Cultural del DSM-5-TR.",
  aplicacion: "Entrevista de Formulación Cultural (DSM-5-TR), atención a síndromes culturales en el diagnóstico diferencial.",
  limites: "Riesgo de relativismo extremo que dificulte la comparación diagnóstica entre contextos.",
  svg: "etnopsicopatologico"
},

social: {
  key: "social", code: "1.9", name: "Modelo Social",
  tagline: "El trastorno no puede comprenderse aislado de su contexto social.",
  definicion: "Enfatiza el papel de las condiciones sociales, económicas y relacionales —pobreza, discriminación, aislamiento, estructura familiar— en el origen y curso de los trastornos.",
  supuestos: [
    "El individuo está inmerso en sistemas interdependientes: familia, comunidad, sociedad.",
    "Los determinantes sociales de la salud mental (pobreza, exclusión, redes de apoyo) inciden en el riesgo y la evolución del trastorno.",
    "La intervención eficaz suele requerir actuar también sobre el contexto, no solo sobre el individuo."
  ],
  mecanismo: "Modelo ecológico: el individuo se entiende anidado dentro de la familia, la comunidad y la sociedad, cada nivel influyendo en los demás.",
  autores: "Psicología social clínica; modelos ecológicos del desarrollo (Bronfenbrenner).",
  aplicacion: "Intervención comunitaria, prevención, psicología social clínica.",
  limites: "Puede subestimar el peso de los factores biológicos individuales.",
  svg: "social"
},

diatesisestres: {
  key: "diatesisestres", code: "1.10", name: "Modelo de Diátesis-estrés",
  tagline: "Vulnerabilidad + estresor ambiental, por encima de un umbral.",
  definicion: "Modelo integrador que propone que el trastorno surge de la interacción entre una vulnerabilidad predisponente (diátesis) y un factor estresante ambiental que actúa como desencadenante.",
  supuestos: [
    "Ni la vulnerabilidad ni el estrés, por separado, son siempre suficientes para producir el trastorno.",
    "Es la combinación de ambos, por encima de un umbral individual, la que desencadena la aparición del trastorno.",
    "El umbral varía de una persona a otra, según su nivel de vulnerabilidad."
  ],
  mecanismo: "Una diátesis (vulnerabilidad genética, biológica o de personalidad) se combina con un estresor ambiental; si la suma supera el umbral de la persona, aparece el trastorno.",
  autores: "Formulación clásica de Zubin y Spring.",
  aplicacion: "Modelo base de la psicopatología del desarrollo; usado para explicar esquizofrenia, depresión y TEPT, entre otros.",
  limites: "Es un modelo general: requiere especificar qué diátesis y qué estresores son relevantes para cada trastorno en particular.",
  svg: "diatesisestres"
}

},

sessions: [

  { // ---------------- S1 ----------------
    id: "s1", semana: 1, sesion: "1ª", fecha: "15/09/2025",
    titulo: "Encuadre y presentación de la materia",
    modelos: [],
    intro: "Antes de entrar a los modelos explicativos, conviene fijar qué estudia la psicopatología y por qué conviene mirar el mismo fenómeno desde varios modelos a la vez. Ningún modelo, por sí solo, explica por completo la complejidad de la conducta humana; cada uno aporta una pieza distinta del mismo rompecabezas — y esa es precisamente la idea que organiza toda la Unidad 1.",
    flashcards: [
      { term: "Psicopatología", def: "Disciplina científica que estudia el origen, desarrollo, manifestaciones y tratamiento de los trastornos mentales." },
      { term: "Conducta anormal", def: "Patrón de pensamiento, emoción o comportamiento que se aparta significativamente de lo esperado y genera malestar o disfunción." },
      { term: "Criterio de anormalidad", def: "Parámetro —estadístico, funcional, social o subjetivo— usado para decidir si una conducta se considera patológica." },
      { term: "Modelo explicativo", def: "Marco teórico que propone cómo y por qué se origina un trastorno psicológico." },
    ],
    quiz: [
      { q: "¿Cuál de las siguientes disciplinas estudia científicamente el origen, las manifestaciones y el tratamiento de los trastornos mentales?",
        options: ["Psicopatología", "Neurología", "Antropología", "Sociología"], correct: 0,
        feedback: "La psicopatología es precisamente la disciplina dedicada a este objeto de estudio (Belloch et al., 2020)." },
      { q: "Según el objetivo general de la carta descriptiva, conocer los modelos de psicopatología sirve principalmente para...",
        options: ["Memorizar el DSM-5-TR completo", "Reconocer alteraciones de los procesos psicológicos básicos que sustentan las conductas patológicas y su tratamiento", "Diagnosticar sin supervisión clínica", "Sustituir al psiquiatra"], correct: 1,
        feedback: "Así lo plantea el objetivo general de la asignatura." },
      { q: "¿Por qué conviene conocer varios modelos explicativos en lugar de uno solo?",
        options: ["Porque lo exige el DSM-5-TR", "Porque ningún modelo por sí solo explica completamente la complejidad de la conducta humana", "Porque así se evitan los criterios diagnósticos", "Porque solo el modelo biológico es válido"], correct: 1,
        feedback: "Cada modelo aporta una perspectiva parcial y complementaria (Belloch et al., 2020)." },
    ],
    cases: [], comparative: null
  },

  { // ---------------- S2 ----------------
    id: "s2", semana: 1, sesion: "2ª", fecha: "18/09/2025",
    titulo: "Modelos Biológico, Conductual y Cognitivo",
    modelos: ["biologico", "conductual", "cognitivo"],
    intro: "Estos tres modelos comparten una mirada relativamente “objetivable” de la conducta anormal: buscan su origen en el cuerpo, en el aprendizaje o en el procesamiento de información, respectivamente.",
    flashcards: [
      { term: "Neurotransmisor", def: "Sustancia química que transmite señales entre neuronas a través de la sinapsis (p. ej., serotonina, dopamina, GABA)." },
      { term: "Condicionamiento clásico", def: "Aprendizaje por asociación entre un estímulo neutro y uno que provoca de forma automática una respuesta." },
      { term: "Condicionamiento operante", def: "Aprendizaje en el que la conducta se modifica según sus consecuencias (refuerzo o castigo)." },
      { term: "Refuerzo", def: "Consecuencia que aumenta la probabilidad de que una conducta se repita." },
      { term: "Modelado (Bandura)", def: "Aprendizaje de una conducta por observación de otra persona." },
      { term: "Esquema cognitivo", def: "Estructura mental que organiza cómo interpretamos la información y los eventos." },
      { term: "Distorsión cognitiva", def: "Error sistemático en el procesamiento de la información, como el catastrofismo o la sobregeneralización." },
      { term: "Tríada cognitiva", def: "Visión negativa de uno mismo, el mundo y el futuro, propuesta por Aaron Beck para explicar la depresión." },
    ],
    quiz: [
      { q: "Según el modelo biológico, ¿cuál es un supuesto central?",
        options: ["Los síntomas son aprendidos por reforzamiento", "La vulnerabilidad a los trastornos puede tener base genética y neuroquímica", "El malestar surge de la falta de sentido existencial", "El síntoma es siempre un síndrome cultural"], correct: 1,
        feedback: "El modelo biológico busca la base orgánica —genética, neuroquímica— de la conducta anormal (Belloch et al., 2020)." },
      { q: "En el condicionamiento operante, ¿qué elemento incrementa la probabilidad de que una conducta se repita?",
        options: ["La extinción", "El castigo", "El refuerzo", "La habituación"], correct: 2,
        feedback: "El refuerzo —positivo o negativo— aumenta la probabilidad de repetición de la conducta." },
      { q: "Para Beck, la tríada cognitiva depresiva incluye una visión negativa de:",
        options: ["Uno mismo, el mundo y el futuro", "El pasado, el presente y el futuro", "La familia, la escuela y el trabajo", "El cuerpo, la mente y el espíritu"], correct: 0,
        feedback: "Uno mismo, el mundo y el futuro son los tres componentes clásicos de la tríada cognitiva de Beck." },
      { q: "¿Qué autor se asocia principalmente al modelo conductual?",
        options: ["Aaron Beck", "B. F. Skinner", "Viktor Frankl", "Sigmund Freud"], correct: 1,
        feedback: "Skinner es la figura central del condicionamiento operante, base del modelo conductual." },
      { q: "Una crítica frecuente al modelo biológico es que...",
        options: ["Ignora por completo el cerebro", "Puede caer en el reduccionismo y no explicar por sí solo la variabilidad cultural de los síntomas", "Impide el uso de fármacos", "Solo aplica a los trastornos de ansiedad"], correct: 1,
        feedback: "Es la limitación señalada por Belloch et al. (2020): riesgo de reduccionismo biológico." },
    ],
    cases: [{
      titulo: "Caso: Ana y el metro",
      vineta: "Ana, de 29 años, comenzó a sentir palpitaciones y sudoración intensa cada vez que debía tomar el metro, después de presenciar un asalto hace ocho meses. Desde entonces evita por completo el transporte público, lo que ya le costó dos empleos. Refiere: “en cuanto pienso en el metro, ya siento que algo terrible va a pasar”.",
      opciones: [
        { modelo: "biologico", correcta: false, explicacion: "Podría contribuir una vulnerabilidad biológica de base, pero la viñeta no aporta evidencia directa de ello (no hay antecedentes familiares ni datos biológicos); no es la explicación central de este caso." },
        { modelo: "conductual", correcta: true, explicacion: "El asalto (estímulo incondicionado) se asoció al metro (estímulo neutro → condicionado); la evitación se mantiene porque reduce la ansiedad a corto plazo (reforzamiento negativo)." },
        { modelo: "cognitivo", correcta: true, explicacion: "La frase “siento que algo terrible va a pasar” es una distorsión catastrofista que dispara la respuesta de ansiedad — el mecanismo central del modelo cognitivo." },
      ],
      pregunta: "¿Qué modelo(s) explican mejor el caso de Ana? (selecciona todos los que apliquen)"
    }],
    comparative: {
      escenario: "Un joven de 20 años ha aumentado notablemente su consumo de alcohol en el último año, coincidiendo con el inicio de su vida universitaria.",
      prompt: "Explica, en tus propias palabras, cómo abordaría este caso cada uno de los tres modelos revisados en esta sesión.",
      columnas: ["Biológico", "Conductual", "Cognitivo"],
      respuestaSugerida: [
        "Biológico: indagaría antecedentes familiares de dependencia, posible predisposición genética al abuso de sustancias y su efecto sobre el sistema de recompensa cerebral.",
        "Conductual: analizaría qué está reforzando el consumo (reducción de ansiedad social, aceptación del grupo) y en qué contextos ambientales ocurre.",
        "Cognitivo: exploraría las creencias del joven sobre el alcohol (“necesito beber para socializar”) y cómo esas interpretaciones mantienen la conducta."
      ]
    }
  },

  { // ---------------- S3 ----------------
    id: "s3", semana: 2, sesion: "1ª", fecha: "22/09/2025",
    titulo: "Modelos Existencialista, Fenomenológico y Psicoanalista",
    modelos: ["existencialista", "fenomenologico", "psicoanalista"],
    intro: "Estos modelos comparten una raíz filosófica común (el estructuralismo y la fenomenología frente al positivismo) y ponen el acento en la experiencia subjetiva, el sentido y los procesos inconscientes, más que en variables directamente observables.",
    flashcards: [
      { term: "Angustia existencial", def: "Malestar que surge al enfrentar la libertad, la muerte, el aislamiento o la falta de sentido." },
      { term: "Logoterapia", def: "Enfoque terapéutico centrado en la búsqueda de sentido, desarrollado por Viktor Frankl." },
      { term: "Epojé (reducción fenomenológica)", def: "Suspensión de juicios previos para comprender la experiencia tal como se vive." },
      { term: "Mundo vivido", def: "La experiencia subjetiva e inmediata de la persona; marco central del enfoque fenomenológico." },
      { term: "Inconsciente", def: "Contenidos mentales fuera de la conciencia que, según el psicoanálisis, influyen en la conducta." },
      { term: "Mecanismo de defensa", def: "Estrategia inconsciente para reducir la ansiedad ante un conflicto psíquico." },
      { term: "Transferencia", def: "Reactualización, dentro de la relación terapéutica, de vínculos afectivos tempranos del paciente." },
      { term: "Ello / Yo / Superyó", def: "Las tres instancias de la estructura psíquica según Freud." },
    ],
    quiz: [
      { q: "Los “datos últimos de la existencia” del modelo existencialista incluyen la muerte, la libertad, el aislamiento y...",
        options: ["La falta de sentido", "La ansiedad", "El estrés", "La represión"], correct: 0,
        feedback: "Son los cuatro datos últimos descritos en la tradición existencial (Frankl, Yalom)." },
      { q: "El enfoque fenomenológico busca ante todo...",
        options: ["Medir variables conductuales observables", "Comprender la experiencia subjetiva del paciente en su propio marco de referencia", "Identificar neurotransmisores alterados", "Clasificar síndromes según la cultura"], correct: 1,
        feedback: "Es la aproximación central del enfoque fenomenológico, siguiendo a Jaspers y Rogers." },
      { q: "En la teoría psicoanalítica, la instancia psíquica que opera según el principio de realidad es:",
        options: ["El ello", "El yo", "El superyó", "El inconsciente colectivo"], correct: 1,
        feedback: "El yo media entre los impulsos del ello, las exigencias del superyó y la realidad externa." },
      { q: "¿Qué autor es considerado el padre de la logoterapia, vinculada al modelo existencialista?",
        options: ["Carl Rogers", "Viktor Frankl", "Karl Jaspers", "Melanie Klein"], correct: 1,
        feedback: "Frankl desarrolló la logoterapia centrada en la búsqueda de sentido." },
      { q: "Un mecanismo de defensa, en términos psicoanalíticos, es:",
        options: ["Una técnica de exposición gradual", "Una estrategia inconsciente para manejar la ansiedad ante un conflicto", "Un reforzador negativo", "Un esquema cognitivo disfuncional"], correct: 1,
        feedback: "Los mecanismos de defensa (represión, proyección, negación...) operan de forma inconsciente." },
    ],
    cases: [{
      titulo: "Caso: Jorge tras el duelo",
      vineta: "Jorge, de 45 años, acude a consulta tras la muerte de su padre. No presenta síntomas depresivos clínicamente significativos, pero relata sentirse “vacío, como si nada de lo que hago tuviera ya sentido”, y ha comenzado a cuestionar radicalmente sus decisiones de vida.",
      opciones: [
        { modelo: "existencialista", correcta: true, explicacion: "El duelo confronta a Jorge con la muerte y la falta de sentido — dos de los “datos últimos” que este modelo aborda directamente." },
        { modelo: "fenomenologico", correcta: true, explicacion: "Antes de interpretar el caso, conviene comprender cómo Jorge mismo describe su vacío, en sus propios términos y sin categorías impuestas." },
        { modelo: "psicoanalista", correcta: false, explicacion: "Podría explorarse un posible conflicto inconsciente no resuelto con la figura paterna, pero la viñeta no ofrece evidencia de ello; sería una hipótesis a explorar, no la lectura más directa del caso." },
      ],
      pregunta: "¿Qué modelo(s) explican mejor el caso de Jorge? (selecciona todos los que apliquen)"
    }],
    comparative: {
      escenario: "Una mujer de 38 años relata que, tras un divorcio reciente, siente que “ya no sabe quién es” y evita tomar cualquier decisión importante sobre su vida.",
      prompt: "Explica cómo abordaría este caso cada uno de los tres modelos revisados en esta sesión.",
      columnas: ["Existencialista", "Fenomenológico", "Psicoanalista"],
      respuestaSugerida: [
        "Existencialista: interpretaría la crisis como una confrontación con la libertad y la responsabilidad de reconstruir su proyecto de vida.",
        "Fenomenológico: se centraría en describir, en las propias palabras de la paciente, cómo vive ese “no saber quién es”, antes de interpretarlo.",
        "Psicoanalista: exploraría qué vínculos y conflictos inconscientes tempranos se reactivan con la pérdida de la relación de pareja."
      ]
    }
  },

  { // ---------------- S4 ----------------
    id: "s4", semana: 2, sesion: "2ª", fecha: "25/09/2025",
    titulo: "Modelos Etnopsicopatológico, Social y de Diátesis-estrés",
    modelos: ["etnopsicopatologico", "social", "diatesisestres"],
    intro: "Estos tres modelos amplían la mirada más allá del individuo: la cultura, el contexto social y la interacción entre vulnerabilidad y ambiente. El modelo de diátesis-estrés, en particular, funciona como un puente integrador entre todos los modelos revisados en la unidad.",
    flashcards: [
      { term: "Síndrome ligado a la cultura", def: "Patrón de síntomas reconocido y nombrado dentro de un grupo cultural específico (p. ej., el “ataque de nervios”)." },
      { term: "Idioma del malestar", def: "Forma culturalmente aceptada de expresar el sufrimiento psicológico." },
      { term: "Modelo ecológico", def: "Perspectiva que analiza al individuo dentro de sus sistemas: familia, comunidad y sociedad." },
      { term: "Determinantes sociales de la salud mental", def: "Condiciones sociales y económicas (pobreza, exclusión, redes de apoyo) que influyen en el riesgo de un trastorno." },
      { term: "Diátesis", def: "Vulnerabilidad predisponente —genética, biológica o de personalidad— a desarrollar un trastorno." },
      { term: "Estresor", def: "Evento o condición ambiental que actúa como desencadenante del trastorno." },
      { term: "Umbral de vulnerabilidad", def: "Punto en el que la combinación de diátesis y estrés desencadena la aparición del trastorno." },
      { term: "Entrevista de Formulación Cultural", def: "Herramienta del DSM-5-TR para incorporar el significado cultural del malestar en la evaluación diagnóstica." },
    ],
    quiz: [
      { q: "Un ejemplo de síndrome ligado a la cultura mencionado en el enfoque etnopsicopatológico es:",
        options: ["El trastorno bipolar", "El “ataque de nervios”", "La esquizofrenia", "El TDAH"], correct: 1,
        feedback: "El “ataque de nervios” es un ejemplo clásico de síndrome culturalmente configurado." },
      { q: "El modelo social pone énfasis particularmente en:",
        options: ["Los neurotransmisores", "Los mecanismos de defensa", "Las condiciones sociales, económicas y relacionales del individuo", "Los esquemas cognitivos"], correct: 2,
        feedback: "El modelo social sitúa al individuo dentro de su contexto familiar, comunitario y social." },
      { q: "En el modelo de diátesis-estrés, el trastorno aparece cuando...",
        options: ["Solo existe una alta vulnerabilidad biológica", "Solo hay un evento estresante intenso", "La combinación de vulnerabilidad y estrés supera un umbral", "El paciente no tiene apoyo social"], correct: 2,
        feedback: "Es precisamente la combinación —por encima de un umbral— la que produce el trastorno, no cada factor por separado." },
      { q: "¿Quiénes formularon clásicamente el modelo de diátesis-estrés?",
        options: ["Beck y Ellis", "Zubin y Spring", "Freud y Klein", "Rogers y Maslow"], correct: 1,
        feedback: "Zubin y Spring propusieron la formulación clásica de este modelo integrador." },
      { q: "La Entrevista de Formulación Cultural del DSM-5-TR busca...",
        options: ["Sustituir el diagnóstico clínico", "Incorporar el significado cultural del malestar en la evaluación diagnóstica", "Medir el coeficiente intelectual", "Clasificar el trastorno según la CIE-11"], correct: 1,
        feedback: "Es una herramienta complementaria al diagnóstico, no un sustituto de este." },
    ],
    cases: [{
      titulo: "Caso: Rosa y el “ataque de nervios”",
      vineta: "Rosa, migrante de una comunidad rural, acude a urgencias reportando “un ataque de nervios”: temblores, sensación de calor que sube por el cuerpo, gritos y llanto incontrolable tras una fuerte discusión familiar. Vive en condiciones de hacinamiento, con ingresos económicos inestables desde hace dos años.",
      opciones: [
        { modelo: "etnopsicopatologico", correcta: true, explicacion: "El “ataque de nervios” es, en sí mismo, un síndrome culturalmente reconocido — el propio idioma del malestar que usa Rosa para nombrar su sufrimiento." },
        { modelo: "social", correcta: true, explicacion: "El hacinamiento y la inestabilidad económica sostenida son determinantes sociales de riesgo relevantes en este caso." },
        { modelo: "diatesisestres", correcta: true, explicacion: "La discusión familiar actúa como el estresor agudo que, sumado a la vulnerabilidad acumulada por las condiciones de vida, desencadena la crisis." },
      ],
      pregunta: "¿Qué modelo(s) explican mejor el caso de Rosa? (selecciona todos los que apliquen — aquí los tres son complementarios)"
    }],
    comparative: {
      escenario: "Un adolescente de una comunidad indígena presenta episodios de “susto” (pérdida del alma, según la explicación tradicional de su comunidad) después de mudarse a la ciudad y enfrentar discriminación en su nueva escuela.",
      prompt: "Explica cómo abordaría este caso cada uno de los tres modelos revisados en esta sesión.",
      columnas: ["Etnopsicopatológico", "Social", "Diátesis-estrés"],
      respuestaSugerida: [
        "Etnopsicopatológico: reconocería el “susto” como un síndrome cultural válido para el adolescente y usaría una Entrevista de Formulación Cultural antes de traducirlo a una categoría del DSM-5-TR.",
        "Social: consideraría el desarraigo, la discriminación escolar y el cambio de contexto como determinantes sociales centrales del malestar.",
        "Diátesis-estrés: entendería la migración y la discriminación como estresores agudos que, sobre una posible vulnerabilidad previa, superaron el umbral del adolescente."
      ]
    }
  }

]
};
