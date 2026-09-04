/* Ilustraciones SVG inline por modelo de psicopatología.
   Paleta controlada por variables CSS (--ink, --accent, --accent-soft, --paper)
   definidas en css/styles.css, así el mismo SVG se ve bien en claro/oscuro. */

const ILLUSTRATIONS = {

biologico: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-bio">
  <title id="t-bio">Vías de neurotransmisión entre dos neuronas</title>
  <path d="M46 60 C 85 30, 95 90, 140 70 C 150 68, 155 75, 150 85" fill="none" class="stroke-ink" stroke-width="3"/>
  <circle cx="46" cy="60" r="18" class="fill-soft stroke-ink" stroke-width="2"/>
  <path d="M150 85 C 200 60, 224 130, 288 110" fill="none" class="stroke-ink" stroke-width="3"/>
  <circle cx="288" cy="110" r="18" class="fill-soft stroke-ink" stroke-width="2"/>
  <g class="fill-accent">
    <circle cx="168" cy="90" r="3.5"/><circle cx="178" cy="86" r="3.5"/><circle cx="172" cy="98" r="3.5"/>
    <circle cx="184" cy="95" r="3.5"/><circle cx="190" cy="85" r="3.5"/>
  </g>
  <text x="150" y="130" class="label" text-anchor="middle">Espacio sináptico</text>
  <text x="46" y="97" class="label" text-anchor="middle">Neurona A</text>
  <text x="288" y="145" class="label" text-anchor="middle">Neurona B</text>
  <text x="170" y="170" class="tag" text-anchor="middle">Serotonina · Dopamina · GABA</text>
  <text text-anchor="middle" class="cap">
    <tspan x="170" y="192">La disponibilidad de neurotransmisores</tspan>
    <tspan x="170" y="204">modula el estado de ánimo y la conducta</tspan>
  </text>
</svg>`,

conductual: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-con">
  <title id="t-con">Ciclo de condicionamiento operante</title>
  <g class="stroke-ink" stroke-width="2.5" fill="none">
    <rect x="20" y="80" width="86" height="54" rx="10" class="fill-soft"/>
    <rect x="130" y="80" width="86" height="54" rx="10" class="fill-soft"/>
    <rect x="240" y="80" width="82" height="54" rx="10" class="fill-soft"/>
  </g>
  <text x="63" y="102" class="label" text-anchor="middle">Estímulo</text>
  <text x="63" y="120" class="cap" text-anchor="middle">antecedente</text>
  <text x="173" y="102" class="label" text-anchor="middle">Respuesta</text>
  <text x="173" y="120" class="cap" text-anchor="middle">conducta</text>
  <text x="281" y="102" class="label" text-anchor="middle">Consecuencia</text>
  <text x="281" y="120" class="cap" text-anchor="middle">refuerzo / castigo</text>
  <path d="M106 107 H128" class="stroke-accent" stroke-width="3" marker-end="url(#arrow)"/>
  <path d="M216 107 H238" class="stroke-accent" stroke-width="3" marker-end="url(#arrow)"/>
  <path d="M281 134 C 281 175, 63 175, 63 134" fill="none" class="stroke-accent" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="170" y="192" class="tag" text-anchor="middle">El refuerzo aumenta la probabilidad de que la respuesta se repita</text>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" class="fill-accent"/>
    </marker>
  </defs>
</svg>`,

cognitivo: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-cog">
  <title id="t-cog">Triángulo cognitivo: pensamiento, emoción y conducta</title>
  <g class="stroke-accent" stroke-width="2.5" fill="none">
    <path d="M170 34 L 60 168" marker-end="url(#arr2)"/>
    <path d="M60 168 L 280 168" marker-end="url(#arr2)"/>
    <path d="M280 168 L 170 34" marker-end="url(#arr2)"/>
  </g>
  <circle cx="170" cy="34" r="30" class="fill-soft stroke-ink" stroke-width="2"/>
  <circle cx="60" cy="168" r="30" class="fill-soft stroke-ink" stroke-width="2"/>
  <circle cx="280" cy="168" r="30" class="fill-soft stroke-ink" stroke-width="2"/>
  <text x="170" y="30" class="label" text-anchor="middle">Pensamiento</text>
  <text x="170" y="44" class="cap" text-anchor="middle">interpretación</text>
  <text x="60" y="164" class="label" text-anchor="middle">Emoción</text>
  <text x="280" y="164" class="label" text-anchor="middle">Conducta</text>
  <text x="170" y="205" class="tag" text-anchor="middle">No es el evento, sino su interpretación, lo que genera el malestar</text>
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" class="fill-accent"/>
    </marker>
  </defs>
</svg>`,

existencialista: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-exi">
  <title id="t-exi">La persona frente a los cuatro datos últimos de la existencia</title>
  <circle cx="170" cy="110" r="26" class="fill-soft stroke-ink" stroke-width="2.5"/>
  <path d="M170 90 v-8 M170 130 v8 M150 110 h-8 M190 110 h8" class="stroke-ink" stroke-width="2"/>
  <g class="cap-box">
    <rect x="10" y="10" width="96" height="40" rx="8" class="fill-soft stroke-ink" stroke-width="1.5"/>
    <text x="58" y="34" class="label" text-anchor="middle">Muerte</text>
    <rect x="234" y="10" width="96" height="40" rx="8" class="fill-soft stroke-ink" stroke-width="1.5"/>
    <text x="282" y="34" class="label" text-anchor="middle">Libertad</text>
    <rect x="10" y="170" width="96" height="40" rx="8" class="fill-soft stroke-ink" stroke-width="1.5"/>
    <text x="58" y="194" class="label" text-anchor="middle">Aislamiento</text>
    <rect x="234" y="170" width="96" height="40" rx="8" class="fill-soft stroke-ink" stroke-width="1.5"/>
    <text x="282" y="194" class="label" text-anchor="middle">Falta de sentido</text>
  </g>
  <g class="stroke-accent" stroke-width="1.5" stroke-dasharray="4 4">
    <path d="M106 40 L150 100"/><path d="M234 40 L190 100"/>
    <path d="M106 180 L150 120"/><path d="M234 180 L190 120"/>
  </g>
</svg>`,

fenomenologico: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-fen">
  <title id="t-fen">Encuentro entre el mundo objetivo y el mundo vivido</title>
  <circle cx="130" cy="110" r="72" class="fill-soft" style="opacity:.55" />
  <circle cx="210" cy="110" r="72" class="fill-accent-soft" style="opacity:.55"/>
  <circle cx="130" cy="110" r="72" fill="none" class="stroke-ink" stroke-width="2"/>
  <circle cx="210" cy="110" r="72" fill="none" class="stroke-accent" stroke-width="2"/>
  <text x="90" y="60" class="label" text-anchor="middle">Mundo</text>
  <text x="90" y="76" class="label" text-anchor="middle">objetivo</text>
  <text x="250" y="60" class="label" text-anchor="middle">Mundo</text>
  <text x="250" y="76" class="label" text-anchor="middle">vivido</text>
  <text x="170" y="115" class="tag" text-anchor="middle">comprensión</text>
  <text x="170" y="130" class="tag" text-anchor="middle">empática</text>
  <text text-anchor="middle" class="cap">
    <tspan x="170" y="197">Se aproxima a la vivencia consciente del paciente,</tspan>
    <tspan x="170" y="209">sin categorías impuestas</tspan>
  </text>
</svg>`,

psicoanalista: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-psi">
  <title id="t-psi">Iceberg de la mente: consciente, preconsciente e inconsciente</title>
  <path d="M60 30 H280 L 260 78 H80 Z" class="fill-soft stroke-ink" stroke-width="2"/>
  <path d="M0 78 H340 V84 H0 Z" class="stroke-accent" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M80 78 L 40 205 H300 L260 78 Z" class="fill-accent-soft stroke-ink" stroke-width="2"/>
  <text x="170" y="58" class="label" text-anchor="middle">Consciente</text>
  <text x="170" y="96" class="label" text-anchor="middle">Preconsciente</text>
  <text x="170" y="150" class="label" text-anchor="middle">Inconsciente</text>
  <text x="170" y="168" class="cap" text-anchor="middle">conflictos, impulsos, defensas</text>
</svg>`,

etnopsicopatologico: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-etn">
  <title id="t-etn">La cultura moldea la expresión de los síntomas</title>
  <circle cx="170" cy="110" r="80" class="fill-soft stroke-ink" stroke-width="2"/>
  <path d="M90 110 H250 M170 30 V190 M113 52 C150 90, 190 90, 227 52 M113 168 C150 130, 190 130, 227 168" fill="none" class="stroke-ink" stroke-width="1.3" style="opacity:.5"/>
  <g class="fill-accent">
    <circle cx="120" cy="70" r="5"/><circle cx="235" cy="95" r="5"/><circle cx="110" cy="150" r="5"/><circle cx="225" cy="160" r="5"/>
  </g>
  <rect x="240" y="40" width="86" height="34" rx="8" class="fill-accent-soft stroke-ink" stroke-width="1.2"/>
  <text x="283" y="61" class="cap" text-anchor="middle">“ataque de nervios”</text>
  <rect x="6" y="130" width="90" height="34" rx="8" class="fill-accent-soft stroke-ink" stroke-width="1.2"/>
  <text x="51" y="151" class="cap" text-anchor="middle">somatización</text>
  <text x="170" y="205" class="tag" text-anchor="middle">Mismo malestar, distintos “idiomas” culturales para expresarlo</text>
</svg>`,

social: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-soc">
  <title id="t-soc">Modelo ecológico: individuo, familia, comunidad y sociedad</title>
  <circle cx="170" cy="110" r="95" class="fill-soft stroke-ink" stroke-width="1.5"/>
  <circle cx="170" cy="110" r="66" class="fill-accent-soft stroke-ink" stroke-width="1.5"/>
  <circle cx="170" cy="110" r="38" class="fill-soft stroke-ink" stroke-width="1.5"/>
  <circle cx="170" cy="110" r="14" class="fill-accent stroke-ink" stroke-width="1.5"/>
  <text x="170" y="114" class="cap-inv" text-anchor="middle">Individuo</text>
  <text x="170" y="82" class="label" text-anchor="middle">Familia</text>
  <text x="170" y="52" class="label" text-anchor="middle">Comunidad</text>
  <text x="170" y="22" class="label" text-anchor="middle">Sociedad</text>
</svg>`,

diatesisestres: `
<svg viewBox="0 0 340 220" role="img" aria-labelledby="t-dia">
  <title id="t-dia">Umbral de diátesis-estrés</title>
  <line x1="30" y1="185" x2="320" y2="185" class="stroke-ink" stroke-width="2"/>
  <line x1="30" y1="185" x2="30" y2="20" class="stroke-ink" stroke-width="2"/>
  <line x1="30" y1="70" x2="300" y2="70" class="stroke-accent" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="300" y="64" class="cap" text-anchor="end">umbral</text>
  <rect x="70" y="140" width="46" height="45" class="fill-soft stroke-ink" stroke-width="1.5"/>
  <text x="93" y="200" class="cap" text-anchor="middle">Diátesis</text>
  <rect x="150" y="100" width="46" height="85" class="fill-accent-soft stroke-ink" stroke-width="1.5"/>
  <text x="173" y="200" class="cap" text-anchor="middle">+ Estrés</text>
  <rect x="230" y="55" width="46" height="130" class="fill-accent stroke-ink" stroke-width="1.5"/>
  <text x="253" y="200" class="cap" text-anchor="middle">Trastorno</text>
  <text x="170" y="15" class="tag" text-anchor="middle">Vulnerabilidad + estrés ambiental, por encima del umbral</text>
</svg>`

};

/* Iconos de interfaz para la guía de instalación (mismo sistema de color por variables CSS). */
const ICONS = {
  share: `<svg viewBox="0 0 24 24" class="ui-icon" role="img" aria-label="Icono de compartir de iOS"><path d="M12 3v12" class="stroke-accent" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M7.5 7.5L12 3l4.5 4.5" class="stroke-accent" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 11h-.5A1.5 1.5 0 0 0 3 12.5v7A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H19" class="stroke-ink" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  addSquare: `<svg viewBox="0 0 24 24" class="ui-icon" role="img" aria-label="Icono de añadir a pantalla de inicio"><rect x="3" y="3" width="18" height="18" rx="5" class="fill-soft stroke-ink" stroke-width="2"/><path d="M12 8v8M8 12h8" class="stroke-accent" stroke-width="2" stroke-linecap="round"/></svg>`,
  menuDots: `<svg viewBox="0 0 24 24" class="ui-icon" role="img" aria-label="Icono de menú de tres puntos"><circle cx="12" cy="5" r="1.8" class="fill-ink"/><circle cx="12" cy="12" r="1.8" class="fill-ink"/><circle cx="12" cy="19" r="1.8" class="fill-ink"/></svg>`,
  addressBar: `<svg viewBox="0 0 24 24" class="ui-icon" role="img" aria-label="Icono de barra de direcciones"><rect x="2" y="6" width="20" height="12" rx="3" class="fill-soft stroke-ink" stroke-width="2"/><circle cx="17.5" cy="12" r="2.6" class="stroke-accent" stroke-width="1.6" fill="none"/><path d="M17.5 9.8v4.4M15.3 12h4.4" class="stroke-accent" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" class="ui-icon" role="img" aria-label="Icono de instalación completa"><circle cx="12" cy="12" r="10" class="fill-accent"/><path d="M7.5 12.5l3 3 6-6.5" class="stroke-ink" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--accent-ink)"/></svg>`,
};
