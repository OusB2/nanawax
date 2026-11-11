export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center font-display font-semibold lowercase leading-none tracking-tight ${className}`} aria-label="NANAWAX">
      <span>nana</span>
      <span className="ml-[0.12em] inline-flex h-[1.75em] w-[1.75em] items-center justify-center rounded-full bg-black text-white">wax</span>
    </span>
  );
}
