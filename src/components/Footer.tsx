export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-sm font-semibold text-black">Zain Adil</span>
        <span className="text-xs text-black/30">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
