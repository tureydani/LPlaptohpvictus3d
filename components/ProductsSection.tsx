export default function ProductsSection() {
  return (
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
  );
}
