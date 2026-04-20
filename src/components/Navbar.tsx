import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#price" },
  { label: "Блог", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export { NAV_LINKS };

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,229,255,0.08)] bg-[rgba(7,11,18,0.85)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border border-neon flex items-center justify-center animate-pulse-neon">
            <Icon name="Cpu" size={16} className="text-neon" />
          </div>
          <span className="font-mono text-lg font-semibold tracking-wider text-white">
            S<span className="text-neon">Bitoc</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-neon transition-colors duration-200 font-mono tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#diagnosis" className="hidden md:block neon-btn px-5 py-2 rounded text-sm font-semibold font-mono tracking-wide">
          Заказать диагностику
        </a>

        <button
          className="md:hidden text-muted-foreground hover:text-neon transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[rgba(7,11,18,0.98)] border-t border-[rgba(0,229,255,0.08)] px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-neon transition-colors font-mono py-1"
            >
              {l.label}
            </a>
          ))}
          <a href="#diagnosis" onClick={() => setMenuOpen(false)} className="neon-btn px-5 py-2 rounded text-sm font-semibold font-mono text-center mt-2">
            Заказать диагностику
          </a>
        </div>
      )}
    </nav>
  );
}
