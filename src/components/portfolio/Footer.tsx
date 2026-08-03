import { useLanguage } from "../../hooks/use-language";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-[#0c0c0c]/40">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-8 text-xs text-muted-foreground md:flex-row">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>

        <p>{t("footer.designed")}</p>
      </div>
    </footer>
  );
}
export default Footer;
