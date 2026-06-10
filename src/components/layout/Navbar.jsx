export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F7F3EB]/90 backdrop-blur-sm border-b border-[#3A2F28]/10">
      <div className=" md:mx-20 py-4 flex items-center justify-between">
        <span className="text-xl font-semibold tracking-[0.15em] uppercase">
          Pasta de Casa
        </span>
        <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-[#3A2F28]/70">
          <li>
            <a
              href="#productos"
              className="hover:text-[#D4A53A] transition-colors"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#proceso"
              className="hover:text-[#D4A53A] transition-colors"
            >
              Proceso
            </a>
          </li>
          <li>
            <a
              href="#encargo"
              className="hover:text-[#D4A53A] transition-colors"
            >
              Encargos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-[#D4A53A] transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
        <a
          href="#encargo"
          className="bg-[#3A2F28] text-[#F7F3EB] text-sm tracking-widest uppercase px-5 py-2.5 hover:bg-[#D4A53A] transition-colors"
        >
          Hacer un encargo
        </a>
      </div>
    </nav>
  );
}
