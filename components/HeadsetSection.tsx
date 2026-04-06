import Scene from "./Scene";

const specs = [
  { label: "Marca", value: "HP" },
  { label: "Modelo", value: "DHE-8001" },
  { label: "Tipo", value: "Diadema on-ear/over-ear con cable" },
  { label: "Audio", value: "Estereo inmersivo" },
  { label: "Controladores", value: "40 mm (hasta 50 mm segun variante)" },
  { label: "Microfono", value: "Flexible y omnidireccional" },
  { label: "Conectividad", value: "Jack 3.5 mm + USB para LED" },
  { label: "Longitud del cable", value: "2 m" },
  { label: "Respuesta de frecuencia", value: "20 Hz - 20 KHz" },
  { label: "Sensibilidad", value: "125 dB +/- 3 dB" },
  { label: "Compatibilidad", value: "PC, PS4, Xbox One, moviles" },
  { label: "Controles", value: "Rueda de volumen en orejera" },
];

const features = [
  "Almohadillas acolchadas de cuero sintetico para sesiones largas.",
  "Diseno cerrado que ayuda a reducir el ruido ambiental.",
  "Microfono ajustable para comunicacion clara en juegos y llamadas.",
  "Iluminacion LED integrada para un look gaming llamativo.",
  "Conexion sencilla con jack 3.5 mm y USB solo para luz.",
  "Balance precio-rendimiento ideal para uso diario.",
];

export default function HeadsetSection() {
  return (
    <section
      id="audifonos"
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-4"
    >
      <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] lg:grid-cols-[minmax(0,1fr),minmax(0,420px)]">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
            Audio inmersivo
          </p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            HP DHE-8001
          </h2>
          <p className="text-sm text-white/70 sm:text-base">
            Auriculares gamer con diadema comoda, sonido estereo y microfono
            flexible. Incluyen iluminacion LED y compatibilidad amplia con
            consolas y PC mediante jack 3.5 mm.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">
              Especificaciones tecnicas
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {spec.label}
                  </span>
                  <span className="text-sm text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">
              Puntos destacados
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-white/70">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="hero-canvas-wrapper relative h-[320px] w-full">
            <Scene
              modelPath="/models/audifonos_hp.glb"
              modelOffsetX={-2.9}
              modelOffsetY={-1.55}
              modelScale={0.55}
            />
            <div className="model-shadow" aria-hidden="true" />
          </div>
          <p className="text-xs text-white/60">
            Vista 3D interactiva de los audifonos HP DHE-8001.
          </p>
        </div>
      </div>
    </section>
  );
}
