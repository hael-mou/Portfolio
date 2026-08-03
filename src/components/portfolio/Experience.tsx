import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "./SectionHeader";

interface Job {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

export function Experience() {
  const { t, tArray } = useLanguage();
  const jobs = tArray("experience.items") as Job[];

  return (
    <section id="experience" className="section-y border-t border-border">
      <div className="container-x">
        <SectionHeader eyebrow={t("experience.eyebrow")} title={t("experience.title")} />

        <ol className="space-y-8">
          {jobs.map((job, idx) => (
            <li
              key={`${job.company}-${job.role}-${idx}`}
              className="grid gap-8 rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-accent/50 md:grid-cols-4 md:p-8"
            >
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">{job.period}</p>

                  <p className="mt-2 text-lg font-semibold">{job.company}</p>

                  {job.location && (
                    <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                  )}
                </div>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold">{job.role}</h3>

                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {job.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent animate-pulse" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export default Experience;
