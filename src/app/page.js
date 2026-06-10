import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Productos } from "@/components/sections/Productos";
import { Proceso } from "@/components/sections/Proceso";
import { Modalidades } from "@/components/sections/Modalidades";
import { Encargo } from "@/components/sections/Encargo";
import { Divisor } from "@/components/ui/Divisor";

export default function Home() {
  return (
    <main className="bg-[#F7F3EB] text-[#3A2F28] font-[Montserrat,sans-serif] w-full">
      <Navbar />
      <Hero />
      <Divisor />
      <Productos />
      <Proceso />
      <Modalidades />
      <Divisor />
      <Encargo />
      <Footer />
    </main>
  );
}
