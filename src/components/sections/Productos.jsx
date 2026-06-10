import { Tag } from "../ui/Tag";
import { productos } from "../data/productosData";

export function Productos() {
  return (
    <section id="productos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Tag>Nuestra carta</Tag>
        <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight mt-3 mb-16">
          Pastas de la semana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div
              key={p.nombre}
              className="group border border-[#3A2F28]/10 p-8 hover:border-[#D4A53A] transition-colors"
            >
              <div className="w-full aspect-square bg-[#E6C16A]/15 mb-6 flex items-center justify-center text-[#D4A53A]/40 text-xs tracking-widest uppercase">
                foto
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#D4A53A] mb-2">
                {p.tipo}
              </p>
              <h3 className="text-xl font-semibold uppercase tracking-wide mb-3">
                {p.nombre}
              </h3>
              <p className="text-[#3A2F28]/60 text-sm leading-relaxed mb-5">
                {p.descripcion}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{p.precio}</span>
                <span className="text-xs tracking-widest uppercase border border-[#3A2F28]/20 px-3 py-1.5 group-hover:border-[#D4A53A] transition-colors">
                  {p.presentacion}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
