import Header from "../components/Header";
import Hero3D from "../components/Hero3D";
import ContactSection from "../components/ContactSection";
import MouseSection from "../components/MouseSection";
import PrinterSection from "../components/PrinterSection";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero3D />
        <PrinterSection />
        <MouseSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </div>
  );
}
