export function Tag({ children, light }) {
  return (
    <span
      className={`text-md tracking-[0.3em] uppercase ${
        light ? "text-[#D4A53A]" : "text-[#D4A53A]"
      }`}
    >
      — {children}
    </span>
  );
}
