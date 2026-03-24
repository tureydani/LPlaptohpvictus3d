"use client";

import Scene from "./Scene";

export default function Hero3D() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center"
    >
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-10 top-48 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10">
        <div className="hero-canvas-wrapper relative h-[360px] w-full max-w-4xl">
          <Scene modelOffsetX={-1.9} modelOffsetY={-0.6} modelScale={0.40} />
          <div className="model-shadow" aria-hidden="true" />
        </div>

        <div className="flex max-w-2xl flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Nueva generacion
          </p>
          <h1 className="text-balance text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            HP Victus Bolivia
          </h1>
          <p className="text-base text-white/70 sm:text-lg">
            Potencia y rendimiento para gaming y desarrollo
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-white/20 transition hover:-translate-y-0.5 hover:shadow-white/30"
              href="#productos"
            >
              Ver mas
            </a>
            <a
              className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              href="#contacto"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
