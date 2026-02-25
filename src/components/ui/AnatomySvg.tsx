import styles from './AnatomySvg.module.css'

export default function AnatomySvg() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 400 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Cercles d'énergie — fond ── */}
      <circle cx="200" cy="290" r="160" stroke="#c9a96e" strokeWidth="0.5" strokeDasharray="3 14" opacity="0.18" className={styles.rotSlow} />
      <circle cx="200" cy="290" r="200" stroke="#c9a96e" strokeWidth="0.3" strokeDasharray="2 18" opacity="0.10" className={styles.rotSlowRev} />

      {/* ── Crâne ── */}
      {/* Boîte crânienne */}
      <ellipse cx="200" cy="85" rx="52" ry="58" stroke="#c9a96e" strokeWidth="1.2" opacity="0.75" />
      {/* Suture sagittale */}
      <line x1="200" y1="30" x2="200" y2="105" stroke="#c9a96e" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.45" />
      {/* Suture coronale */}
      <path d="M152 68 Q200 74 248 68" stroke="#c9a96e" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.45" />
      {/* Orbites */}
      <ellipse cx="183" cy="98" rx="13" ry="10" stroke="#c9a96e" strokeWidth="0.9" opacity="0.6" />
      <ellipse cx="217" cy="98" rx="13" ry="10" stroke="#c9a96e" strokeWidth="0.9" opacity="0.6" />
      {/* Nez */}
      <path d="M200 110 L193 126 Q200 130 207 126 Z" stroke="#c9a96e" strokeWidth="0.7" opacity="0.45" fill="none" />
      {/* Mâchoire */}
      <path d="M160 122 Q160 148 200 152 Q240 148 240 122" stroke="#c9a96e" strokeWidth="1" opacity="0.55" fill="none" />
      {/* Dents stylisées */}
      <path d="M175 148 L175 153 M185 150 L185 155 M195 151 L195 156 M205 151 L205 156 M215 150 L215 155 M225 148 L225 153" stroke="#c9a96e" strokeWidth="0.7" opacity="0.35" />

      {/* ── Cou / C1–C2 ── */}
      <rect x="188" y="156" width="24" height="11" rx="2" stroke="#c9a96e" strokeWidth="0.9" fill="rgba(201,169,110,0.04)" opacity="0.7" />
      <rect x="186" y="170" width="28" height="11" rx="2" stroke="#c9a96e" strokeWidth="0.9" fill="rgba(201,169,110,0.04)" opacity="0.7" />

      {/* ── Clavicules ── */}
      <path d="M200 186 Q170 182 148 190" stroke="#c9a96e" strokeWidth="1.1" opacity="0.65" fill="none" />
      <path d="M200 186 Q230 182 252 190" stroke="#c9a96e" strokeWidth="1.1" opacity="0.65" fill="none" />

      {/* ── Colonne vertébrale ── */}
      {/* Cervicales C3–C7 */}
      <rect x="185" y="184" width="30" height="11" rx="2" stroke="#c9a96e" strokeWidth="0.9" fill="rgba(201,169,110,0.04)" opacity="0.7" />
      <rect x="183" y="198" width="34" height="11" rx="2" stroke="#c9a96e" strokeWidth="0.9" fill="rgba(201,169,110,0.04)" opacity="0.7" />
      <rect x="182" y="212" width="36" height="12" rx="2" stroke="#c9a96e" strokeWidth="0.9" fill="rgba(201,169,110,0.04)" opacity="0.7" />
      {/* Dorsales T1–T12 */}
      <rect x="181" y="227" width="38" height="12" rx="2" stroke="#c9a96e" strokeWidth="1"   fill="rgba(201,169,110,0.04)" opacity="0.72" />
      <rect x="180" y="242" width="40" height="12" rx="2" stroke="#c9a96e" strokeWidth="1"   fill="rgba(201,169,110,0.04)" opacity="0.72" />
      <rect x="180" y="257" width="40" height="12" rx="2" stroke="#c9a96e" strokeWidth="1"   fill="rgba(201,169,110,0.04)" opacity="0.72" />
      <rect x="181" y="272" width="38" height="12" rx="2" stroke="#c9a96e" strokeWidth="1"   fill="rgba(201,169,110,0.04)" opacity="0.72" />
      <rect x="181" y="287" width="38" height="12" rx="2" stroke="#c9a96e" strokeWidth="1"   fill="rgba(201,169,110,0.04)" opacity="0.72" />
      {/* Lombaires L1–L5 */}
      <rect x="179" y="302" width="42" height="13" rx="3" stroke="#c9a96e" strokeWidth="1.1" fill="rgba(201,169,110,0.05)" opacity="0.78" />
      <rect x="178" y="318" width="44" height="13" rx="3" stroke="#c9a96e" strokeWidth="1.1" fill="rgba(201,169,110,0.05)" opacity="0.78" />
      <rect x="178" y="334" width="44" height="13" rx="3" stroke="#c9a96e" strokeWidth="1.1" fill="rgba(201,169,110,0.05)" opacity="0.78" />
      <rect x="179" y="350" width="42" height="12" rx="3" stroke="#c9a96e" strokeWidth="1.1" fill="rgba(201,169,110,0.05)" opacity="0.78" />

      {/* ── Sternum ── */}
      <rect x="194" y="190" width="12" height="110" rx="4" stroke="#c9a96e" strokeWidth="0.8" fill="rgba(201,169,110,0.03)" opacity="0.45" />

      {/* ── Côtes — 6 paires ── */}
      <g opacity="0.5" stroke="#c9a96e" strokeWidth="0.85" fill="none">
        {/* Paire 1 */}
        <path d="M185 198 Q155 192 138 204 Q128 216 144 224 Q163 229 185 222" />
        <path d="M215 198 Q245 192 262 204 Q272 216 256 224 Q237 229 215 222" />
        {/* Paire 2 */}
        <path d="M183 213 Q150 206 130 220 Q119 235 138 243 Q159 248 183 240" />
        <path d="M217 213 Q250 206 270 220 Q281 235 262 243 Q241 248 217 240" />
        {/* Paire 3 */}
        <path d="M181 228 Q145 220 123 236 Q111 252 132 260 Q155 266 181 256" />
        <path d="M219 228 Q255 220 277 236 Q289 252 268 260 Q245 266 219 256" />
        {/* Paire 4 */}
        <path d="M180 243 Q141 235 118 253 Q106 270 129 278 Q153 285 180 273" />
        <path d="M220 243 Q259 235 282 253 Q294 270 271 278 Q247 285 220 273" />
        {/* Paire 5 — flottante */}
        <path d="M180 258 Q147 252 128 265 Q119 276 133 284 Q151 289 180 281" strokeDasharray="5 3" opacity="0.35" />
        <path d="M220 258 Q253 252 272 265 Q281 276 267 284 Q249 289 220 281" strokeDasharray="5 3" opacity="0.35" />
        {/* Paire 6 — flottante */}
        <path d="M181 273 Q152 268 137 278 Q130 287 141 293" strokeDasharray="4 4" opacity="0.25" />
        <path d="M219 273 Q248 268 263 278 Q270 287 259 293" strokeDasharray="4 4" opacity="0.25" />
      </g>

      {/* ── Bassin / Sacrum ── */}
      {/* Iliums */}
      <path d="M178 365 Q148 360 136 380 Q130 405 150 420 Q170 432 200 435 Q230 432 250 420 Q270 405 264 380 Q252 360 222 365" stroke="#c9a96e" strokeWidth="1.1" fill="rgba(201,169,110,0.03)" opacity="0.62" />
      {/* Sacrum */}
      <path d="M178 365 Q178 390 200 400 Q222 390 222 365" stroke="#c9a96e" strokeWidth="1" fill="rgba(201,169,110,0.04)" opacity="0.65" />
      {/* Pubis */}
      <path d="M170 420 Q200 430 230 420" stroke="#c9a96e" strokeWidth="0.8" opacity="0.45" />
      {/* Acétabula (hanches) */}
      <circle cx="154" cy="418" r="10" stroke="#c9a96e" strokeWidth="0.8" opacity="0.5" fill="none" />
      <circle cx="246" cy="418" r="10" stroke="#c9a96e" strokeWidth="0.8" opacity="0.5" fill="none" />

      {/* ── Point central lumineux ── */}
      <circle cx="200" cy="290" r="5"   fill="#c9a96e" opacity="0.35" className={styles.pulse} />
      <circle cx="200" cy="290" r="2.5" fill="#c9a96e" opacity="0.8"  className={styles.pulse} />
      <circle cx="200" cy="290" r="1"   fill="#c9a96e" opacity="1" />

      {/* Lignes d'énergie depuis le centre */}
      <line x1="200" y1="285" x2="200" y2="230" stroke="#c9a96e" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.2" />
      <line x1="200" y1="295" x2="200" y2="350" stroke="#c9a96e" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.2" />
    </svg>
  )
}