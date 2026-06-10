export function Footer() {
  return (
    <footer id="contacto" className="bg-[#3A2F28] text-[#F7F3EB] py-16">
      <div className="max-w-6x mx-10 flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <p className="text-xl font-semibold tracking-[0.15em] uppercase mb-2">
            Pasta de Casa
          </p>
          <p className="text-[#F7F3EB]/45 text-sm tracking-widest uppercase">
            Fresca · Congelada · Por encargo
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[#F7F3EB]/60">
          <p className="text-[#F7F3EB]/30 text-xs tracking-widest uppercase mb-1">
            Contacto
          </p>
          <a
            href="mailto:hola@pastadecasa.cl"
            className="hover:text-[#D4A53A] transition-colors"
          >
            hola@pastadecasa.cl
          </a>
          <a
            href="https://instagram.com/pastadecasa"
            className="hover:text-[#D4A53A] transition-colors"
          >
            @pastadecasa
          </a>
          <a
            href="https://wa.me/56912345678"
            className="hover:text-[#D4A53A] transition-colors"
          >
            +56 9 1234 5678
          </a>
        </div>
        <div className="text-xs text-[#F7F3EB]/25 tracking-widest uppercase self-end">
          © {new Date().getFullYear()} Pasta de Casa
        </div>
      </div>
    </footer>
  );
}
