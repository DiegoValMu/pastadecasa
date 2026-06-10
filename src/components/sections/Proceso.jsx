import { Tag } from "../ui/Tag";
import { pasos } from "../data/productosData";

export function Proceso() {
  return (
    <section id="proceso" className="py-24 px-6 bg-[#3A2F28] text-[#F7F3EB]">
      <div className="max-w-6xl mx-auto">
        <Tag light>Cómo trabajamos</Tag>
        <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight mt-3 mb-16">
          Hecho con tiempo,
          <br />
          no con prisa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#F7F3EB]/10">
          {pasos.map((paso, i) => (
            <div key={paso.titulo} className="bg-[#3A2F28] p-8">
              <span className="text-[#D4A53A] text-5xl font-semibold leading-none mb-6 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                {paso.titulo}
              </h3>
              <p className="text-[#F7F3EB]/55 text-sm leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
