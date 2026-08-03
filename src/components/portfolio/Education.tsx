import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "./SectionHeader";

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location?: string;
  description: string;
  skills: string[];
}

export function Education() {
  const { t, tArray } = useLanguage();
  const items = tArray("education.items") as EducationItem[];

  return (
    <section id="education" className="section-y border-t border-border">
      <div className="container-x">
        <SectionHeader eyebrow={t("education.eyebrow")} title={t("education.title")} />

        <div className="space-y-8">
          {items.map((ed, idx) => (
            <article
              key={`${ed.school}-${ed.degree}-${idx}`}
              className="rounded-2xl border border-border bg-card/40 p-6 md:p-8"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{ed.degree}</h3>

                  <p className="mt-2 text-muted-foreground">
                    {ed.school}
                    {ed.location && ` • ${ed.location}`}
                  </p>
                </div>

                <span className="text-sm uppercase tracking-widest text-accent">{ed.period}</span>
              </div>

              <p className="mt-6 leading-relaxed text-muted-foreground">{ed.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {ed.skills &&
                  ed.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
