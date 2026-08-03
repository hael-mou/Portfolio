import { useLanguage } from "../../hooks/use-language";
import { OptimizedImage } from "./OptimizedImage";
import { ArrowDown, IconLinkedIn, IconGitHub, IconInstagram, IconMail } from "./icons";

const profileColor2 = "/hero.jpeg";

export function Hero() {
  const { t } = useLanguage();

  const heroActions = [
    {
      href: t("hero.downloadCvLink"),
      label: t("hero.downloadCv"),
      icon: ArrowDown,
      target: "_blank",
      primary: true,
    },
    {
      href: "#projects",
      label: t("hero.viewProjects"),
      primary: false,
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/hael-mou",
      label: "LinkedIn",
      icon: IconLinkedIn,
    },
    {
      href: "https://github.com/hael-mou",
      label: "GitHub",
      icon: IconGitHub,
    },
    {
      href: "https://www.instagram.com/hamza_el_moudden",
      label: "Instagram",
      icon: IconInstagram,
    },
    {
      href: "mailto:ha.elmoudden@gmail.com",
      label: "Email",
      icon: IconMail,
    },
  ];

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <OptimizedImage
          src={profileColor2}
          alt={t("meta.title")}
          loading="eager"
          className="h-full w-full opacity-70"
          style={{ objectPosition: "center 20%" }}
          width={1200}
          height={1408}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </div>

      <div className="container-x flex min-h-screen flex-col justify-center pt-24 pb-16">
        <p className="eyebrow mb-6">{t("hero.eyebrow")}</p>

        <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          {t("hero.firstName")}
          <br />
          EL <span className="text-accent">{t("hero.lastName")}</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("hero.description")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {heroActions.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.label}
                href={action.href}
                target={action.target}
                className={
                  action.primary
                    ? "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    : "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent"
                }
              >
                {action.label}

                {Icon && <Icon className="h-4 w-4" />}
              </a>
            );
          })}
        </div>

        <div className="mt-14 flex items-center gap-5 text-muted-foreground">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border p-2.5 hover:border-accent hover:text-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground animate-bounce">
        {t("hero.scroll")}
      </div>
    </section>
  );
}
export default Hero;
