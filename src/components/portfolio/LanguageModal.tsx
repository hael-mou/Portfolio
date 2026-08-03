import { useEffect, useRef, useState } from "react";
import { useLanguage, Language } from "../../hooks/use-language";

export function LanguageModal() {
  const { setLanguage, hasPreferenceSet, isReady } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<Language>("en");
  const enBtnRef = useRef<HTMLButtonElement>(null);
  const frBtnRef = useRef<HTMLButtonElement>(null);

  // Show modal only if client is ready and no preference is set
  useEffect(() => {
    if (isReady && !hasPreferenceSet) {
      setIsVisible(true);
      // Auto focus the first option
      setTimeout(() => {
        enBtnRef.current?.focus();
      }, 100);
    }
  }, [isReady, hasPreferenceSet]);

  if (!isVisible) return null;

  const handleSelect = (lang: Language) => {
    // Fade out first, then commit to state
    setIsVisible(false);
    // Allow animation to complete before setting state
    setTimeout(() => {
      setLanguage(lang);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      // Trap focus between the two buttons
      if (document.activeElement === enBtnRef.current) {
        frBtnRef.current?.focus();
      } else {
        enBtnRef.current?.focus();
      }
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      frBtnRef.current?.focus();
      setActiveTab("fr");
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      enBtnRef.current?.focus();
      setActiveTab("en");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/85 backdrop-blur-lg transition-opacity duration-500"
      onKeyDown={handleKeyDown}
    >
      <div className="container-x max-w-md w-full p-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 text-center shadow-2xl">
          {/* Logo Brand */}
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-xl font-bold tracking-widest text-accent animate-pulse">
            HEM
          </div>

          <h2
            id="modal-title"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Welcome <span className="text-muted-foreground">/</span> Bienvenue
          </h2>

          <p id="modal-desc" className="mt-3 text-sm text-muted-foreground">
            Please select your preferred language to continue.
            <br />
            <span className="italic text-xs opacity-80">
              Veuillez sélectionner votre langue pour continuer.
            </span>
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {/* English Option */}
            <button
              ref={enBtnRef}
              onClick={() => handleSelect("en")}
              onFocus={() => setActiveTab("en")}
              className={`group flex flex-col items-center justify-center rounded-xl border p-5 text-center transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeTab === "en"
                  ? "border-accent bg-accent/5 shadow-[0_0_20px_rgba(184,80,31,0.15)] text-foreground scale-102"
                  : "border-border bg-card/30 text-muted-foreground hover:border-border-hover hover:scale-101"
              }`}
              aria-label="Select English language"
            >
              <span className="text-2xl font-black tracking-wider text-foreground group-hover:text-accent transition-colors">
                EN
              </span>
              <span className="mt-2 text-sm font-semibold">English</span>
              <span className="mt-1 text-[10px] text-muted-foreground opacity-75">
                English version
              </span>
            </button>

            {/* French Option */}
            <button
              ref={frBtnRef}
              onClick={() => handleSelect("fr")}
              onFocus={() => setActiveTab("fr")}
              className={`group flex flex-col items-center justify-center rounded-xl border p-5 text-center transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeTab === "fr"
                  ? "border-accent bg-accent/5 shadow-[0_0_20px_rgba(184,80,31,0.15)] text-foreground scale-102"
                  : "border-border bg-card/30 text-muted-foreground hover:border-border-hover hover:scale-101"
              }`}
              aria-label="Sélectionner la langue française"
            >
              <span className="text-2xl font-black tracking-wider text-foreground group-hover:text-accent transition-colors">
                FR
              </span>
              <span className="mt-2 text-sm font-semibold">Français</span>
              <span className="mt-1 text-[10px] text-muted-foreground opacity-75">
                Version française
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LanguageModal;
