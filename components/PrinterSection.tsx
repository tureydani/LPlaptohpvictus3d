import Scene from "./Scene";

export default function PrinterSection() {
  return (
    <section
      id="impresora"
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-4"
    >
      <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] lg:grid-cols-[minmax(0,1fr),minmax(0,420px)]">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
            Impresion inteligente
          </p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            HP Smart Tank 580
          </h2>
          <p className="text-sm text-white/70 sm:text-base">
            La HP Smart Tank 580 es una impresora multifuncional de inyeccion
            de tinta continua para alto volumen y bajo costo por pagina.
            Imprime, escanea y copia con conectividad inalambrica y WiFi
            Directo.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">
              Caracteristicas principales
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-white/70">
              <li>
                Sistema de tanque de tinta recargable con sensores de nivel.
              </li>
              <li>Velocidad: hasta 12 ppm en negro y 5 ppm a color.</li>
              <li>
                Conectividad: Wi-Fi 802.11b/g/n, Wi-Fi Directo y USB 2.0.
              </li>
              <li>
                Resolucion: hasta 1200 x 1200 ppp en negro y 4800 x 1200 ppp
                a color.
              </li>
              <li>
                Rendimiento: hasta 6,000 paginas en negro o 8,000 a color.
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              Tanque integrado
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              HP Smart
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              WiFi Directo
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="hero-canvas-wrapper relative h-[320px] w-full">
            <Scene
              modelPath="/models/impresora_hp_tank.glb"
              modelOffsetX={1.7}
              modelOffsetY={-0.2}
              modelScale={0.3}
            />
            <div className="model-shadow" aria-hidden="true" />
          </div>
          <p className="text-xs text-white/60">
            Vista 3D interactiva del modelo HP Smart Tank 580.
          </p>
        </div>
      </div>
    </section>
  );
}
