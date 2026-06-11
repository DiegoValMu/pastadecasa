import { Tag } from "../ui/Tag";

export function Encargo() {
  return (
    <section id="encargo" className="py-24 px-6 bg-[#E6C16A]/10">
      <div className="max-w-2xl mx-auto text-center">
        <Tag>Pedidos especiales</Tag>
        <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight mt-3 mb-6">
          ¿Algo en especial?
        </h2>
        <p className="text-[#3A2F28]/65 leading-relaxed mb-10">
          Elaboramos tu pasta fresca, lisa o rellena, con los sabores de tu
          elección. Reserva con un mínimo de 48 horas de anticipación para
          garantizar la mejor preparación.
        </p>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#3A2F28] text-[#F7F3EB] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#D4A53A] transition-colors"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
