import styles from './AnatomySvg.module.css'

export default function AnatomySvg() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Skull / head */}
      <ellipse cx="200" cy="90" rx="50" ry="60" stroke="#c8b98c" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="200" cy="90" rx="30" ry="40" stroke="#c8b98c" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />

      {/* Vertebrae */}
      <g opacity="0.6">
        <rect x="185" y="155" width="30" height="14" rx="3" stroke="#c8b98c" strokeWidth="0.8" fill="rgba(200,185,140,0.03)" />
        <rect x="182" y="175" width="36" height="14" rx="3" stroke="#c8b98c" strokeWidth="0.8" fill="rgba(200,185,140,0.03)" />
        <rect x="180" y="195" width="40" height="14" rx="3" stroke="#c8b98c" strokeWidth="0.8" fill="rgba(200,185,140,0.03)" />
        <rect x="181" y="215" width="38" height="14" rx="3" stroke="#c8b98c" strokeWidth="0.8" fill="rgba(200,185,140,0.03)" />
        <rect x="183" y="235" width="34" height="14" rx="3" stroke="#c8b98c" strokeWidth="0.8" fill="rgba(200,185,140,0.03)" />
      </g>

      {/* Torso outline */}
      <path d="M130 150 Q100 200 110 300 Q140 380 200 400 Q260 380 290 300 Q300 200 270 150" stroke="#c8b98c" strokeWidth="0.8" opacity="0.3" fill="none" />

      {/* Ribs */}
      <g opacity="0.25" stroke="#c8b98c" strokeWidth="0.7">
        <path d="M185 170 Q150 165 130 175 Q120 185 135 195 Q155 200 185 195" />
        <path d="M215 170 Q250 165 270 175 Q280 185 265 195 Q245 200 215 195" />
        <path d="M183 187 Q145 180 123 192 Q112 205 130 215 Q152 220 183 213" />
        <path d="M217 187 Q255 180 277 192 Q288 205 270 215 Q248 220 217 213" />
        <path d="M181 204 Q140 197 118 210 Q107 224 127 233 Q150 238 181 231" />
        <path d="M219 204 Q260 197 282 210 Q293 224 273 233 Q250 238 219 231" />
      </g>

      {/* Pelvis */}
      <ellipse cx="200" cy="330" rx="65" ry="45" stroke="#c8b98c" strokeWidth="0.8" opacity="0.3" fill="none" />
      <ellipse cx="200" cy="330" rx="35" ry="25" stroke="#c8b98c" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.2" fill="none" />

      {/* Energy circles */}
      <circle cx="200" cy="250" r="85"  stroke="#c8b98c" strokeWidth="0.4" strokeDasharray="2 8"  opacity="0.2" />
      <circle cx="200" cy="250" r="130" stroke="#c8b98c" strokeWidth="0.3" strokeDasharray="2 12" opacity="0.12" />

      {/* Shoulder belt */}
      <path d="M130 150 Q200 140 270 150" stroke="#c8b98c" strokeWidth="0.8" opacity="0.4" fill="none" />

      {/* Centre dot */}
      <circle cx="200" cy="250" r="4"   fill="#c8b98c" opacity="0.5" />
      <circle cx="200" cy="250" r="1.5" fill="#c8b98c" opacity="0.9" />
    </svg>
  )
}
