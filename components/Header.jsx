"use client";

import Image from "next/image";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Impresora", href: "#impresora" },
  { label: "Mouse", href: "#mouse" },
  { label: "Audifonos", href: "#audifonos" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="glass-header flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/images/hp.png"
            alt="HP Victus Bolivia"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="text-lg font-semibold text-white">Victus Bolivia</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="transition-colors duration-300 hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20"
          href="#productos"
        >
          Comprar
        </a>
      </div>
    </header>
  );
}
