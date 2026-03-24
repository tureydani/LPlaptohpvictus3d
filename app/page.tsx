import Header from "../components/Header";
import Hero3D from "../components/Hero3D";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero3D />
        <section
          id="productos"
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-20 pt-10"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Rendimiento premium con estilo futurista
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              Procesadores de ultima generacion, GPU dedicada y un chasis ligero
              con termicas optimizadas. Una laptop hecha para jugar, crear y
              desarrollar sin limites.
            </p>
          </div>
        </section>
        <section
          id="contacto"
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-24"
        >
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Listo para llevar tu setup al siguiente nivel?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Escribenos para disponibilidad y opciones de compra.
              </p>
            </div>
            <a
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              href="mailto:ventas@victusbolivia.com"
            >
              Contactar
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
