import { Tag } from "../ui/Tag";
import { modalidades } from "../data/productosData";

export function Modalidades() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Tag>Disponibilidad</Tag>
        <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight mt-3 mb-16">
          Tres formas
          <br />
          de llevarla
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modalidades.map((m) => (
            <div
              key={m.titulo}
              className="relative p-10 border border-[#3A2F28]/10"
            >
              <div className="w-10 h-10 rounded-full bg-[#E6C16A]/30 mb-6" />
              <h3 className="text-2xl font-semibold uppercase tracking-wide mb-3">
                {m.titulo}
              </h3>
              <p className="text-[#3A2F28]/60 text-sm leading-relaxed">
                {m.descripcion}
              </p>
              <span className="absolute top-6 right-6 text-[#D4A53A] text-3xl font-semibold opacity-30">
                {m.icono}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
