import { useLanguage } from "../../hooks/use-language";
import { OptimizedImage } from "./OptimizedImage";

const profileBw = "/me.jpeg";
const profileBWSmall = "/me2.jpeg";

export function About() {
  const { t, tArray } = useLanguage();
  const paragraphs = tArray("about.paragraphs");

  return (
    <section
      id="about"
      className="section-y animate-in fade-in slide-in-from-bottom-6 duration-700"
    >
      <div className="container-x grid gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* Desktop Image */}
            <OptimizedImage
              src={profileBw}
              alt={t("about.eyebrow")}
              className="h-full w-full object-cover md:flex hidden aspect-[4/5]"
              width={1408}
              height={800}
            />
            {/* Mobile Image */}
            <OptimizedImage
              src={profileBWSmall}
              alt={t("about.eyebrow")}
              className="h-full w-full object-cover flex md:hidden aspect-[4/5]"
              width={1408}
              height={800}
            />
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col justify-center">
          <p className="eyebrow mb-3">{t("about.eyebrow")}</p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("about.title")}</h2>

          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
