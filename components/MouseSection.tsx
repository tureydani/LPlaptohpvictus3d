import Scene from "./Scene";

const specs = [
  { label: "Marca", value: "HP" },
  { label: "Modelo", value: "M160 (843W8AA)" },
  { label: "Tipo", value: "Mouse gaming con cable" },
  { label: "Sensor", value: "Optico de alta definicion" },
  { label: "Resolucion (DPI)", value: "1000 / 1600 (ajustable)" },
  { label: "Numero de botones", value: "3 (2 clics + rueda)" },
  { label: "Iluminacion", value: "LED RGB con efecto breathing" },
  { label: "Conexion", value: "USB plug-and-play" },
  { label: "Longitud del cable", value: "1.3 m - 1.6 m" },
  { label: "Dimensiones", value: "118.5 x 64 x 37 mm" },
  { label: "Peso", value: "Aprox. 100 g" },
  { label: "Compatibilidad", value: "Windows XP/7/8/10, Linux" },
  { label: "Durabilidad", value: "3 millones de clics" },
];

const features = [
  "Seguimiento preciso con sensor optico en multiples superficies.",
  "DPI ajustable entre 1000 y 1600 para gaming y oficina.",
  "Diseno ergonomico y simetrico, apto para diestros y zurdos.",
  "Estetica gaming con iluminacion RGB de efecto respiracion.",
  "Conecta y usa: no requiere software ni controladores.",
  "Construccion resistente con botones certificados.",
];

export default function MouseSection() {
  return (
    <section
      id="mouse"
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-4"
    >
      <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] lg:grid-cols-[minmax(0,1fr),minmax(0,420px)]">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
            Precision accesible
          </p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            HP M160
          </h2>
          <p className="text-sm text-white/70 sm:text-base">
            El HP M160 es un mouse gaming con cable de diseno ergonomico y
            simetrico. Ofrece rendimiento optico confiable para gaming casual y
            trabajo diario, con iluminacion RGB y excelente relacion
            calidad-precio.
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
              Caracteristicas principales
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
              modelPath="/models/mouse_hp_m160.glb"
              modelOffsetX={0.3}
              modelOffsetY={-0.5}
              modelScale={0.55}
            />
            <div className="model-shadow" aria-hidden="true" />
          </div>
          <p className="text-xs text-white/60">
            Vista 3D interactiva del modelo HP M160.
          </p>
        </div>
      </div>
    </section>
  );
}
