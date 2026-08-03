import { useLanguage } from "../../hooks/use-language";
import { IconLinkedIn, IconGitHub, IconInstagram, IconMail } from "./icons";

export function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      href: "https://www.linkedin.com/in/hael-mou",
      label: "LinkedIn",
      icon: <IconLinkedIn />,
    },
    {
      href: "https://github.com/hael-mou",
      label: "GitHub",
      icon: <IconGitHub />,
    },
    {
      href: "https://www.instagram.com/hamza_el_moudden",
      label: "Instagram",
      icon: <IconInstagram />,
    },
  ];

  return (
    <section id="contact" className="section-y border-t border-border">
      <div className="container-x max-w-3xl text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        <p className="eyebrow mb-4">{t("contact.eyebrow")}</p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {t("contact.titleText")}
          <span className="text-accent">{t("contact.titleAccent")}</span>.
        </h2>

        <p className="mt-6 text-muted-foreground">{t("contact.description")}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors outline-none focus-visible:border-accent focus-visible:text-accent"
              aria-label={link.label}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:ha.elmoudden@gmail.com"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-base font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground outline-none focus-visible:bg-accent focus-visible:text-accent-foreground"
        >
          <IconMail />
          ha.elmoudden@gmail.com
        </a>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {t("contact.thanks")}
          <span className="text-accent">.</span>
        </p>
      </div>
    </section>
  );
}
export default Contact;
