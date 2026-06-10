import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center relative">
      <span className="absolute left-[12%] top-[40%] w-2.5 h-2.5 rounded-full bg-[#D4A53A] opacity-60" />
      <span className="absolute right-[12%] top-[40%] w-2.5 h-2.5 rounded-full bg-[#D4A53A] opacity-60" />

      <div className="w-56 h-56 bg-[#E6C16A]/20 rounded-full border-2 border-[#3A2F28]/20 flex items-center justify-center relative mb-5">
        <div className="md:mt-4  rounded-full flex items-center justify-center">
          <Image src="/logo.png" width={250} height={200} alt="logo"></Image>
        </div>
      </div>

      <p className="text-sm tracking-[0.4em] uppercase text-[#D4A53A] mb-4">
        Pasta artesanal
      </p>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight uppercase leading-none mb-6">
        Pasta de Casa
      </h1>
      <p className="max-w-md text-lg text-[#3A2F28]/65 leading-relaxed mb-10">
        Elaborada a mano con ingredientes seleccionados. Lista para cocinar,
        congelar o pedir a tu medida.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#productos"
          className="bg-[#D4A53A] text-[#F7F3EB] px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-[#3A2F28] transition-colors"
        >
          Ver productos
        </a>
        <a
          href="#encargo"
          className="border border-[#3A2F28] px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-[#3A2F28] hover:text-[#F7F3EB] transition-colors"
        >
          Hacer un encargo
        </a>
      </div>
    </section>
  );
}
