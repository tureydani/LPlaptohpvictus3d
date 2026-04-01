export default function ContactSection() {
  return (
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
  );
}
