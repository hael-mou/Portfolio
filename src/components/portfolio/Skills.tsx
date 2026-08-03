import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "./SectionHeader";

interface SkillGroup {
  title: string;
  items: string[];
}

export function Skills() {
  const { t, tArray } = useLanguage();
  const skillGroups = tArray("skills.groups") as SkillGroup[];

  return (
    <section id="skills" className="section-y border-t border-border">
      <div className="container-x">
        <SectionHeader eyebrow={t("skills.eyebrow")} title={t("skills.title")} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/60"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{group.title}</h3>

                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-px w-3 bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
