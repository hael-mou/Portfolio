import { useLanguage } from "../../hooks/use-language";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-widest outline-none focus-visible:text-accent"
        >
          {t("nav.logo")}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-pointer font-medium transition-colors hover:text-foreground outline-none focus-visible:text-foreground focus-visible:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Switcher and Contact Button */}
        <div className="flex items-center gap-4">
          {/* Language Switcher Pill */}
          <div
            className="flex items-center gap-0.5 rounded-full border border-border bg-card/60 p-0.5"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                language === "en"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                language === "fr"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Passer en français"
            >
              FR
            </button>
          </div>

          {/* <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent outline-none focus-visible:border-accent focus-visible:text-accent"
          >
            {t("nav.contactButton")}
          </a> */}
        </div>
      </div>
    </header>
  );
}
export default Header;
