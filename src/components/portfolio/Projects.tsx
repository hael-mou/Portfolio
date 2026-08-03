import { useState } from "react";
import { useLanguage } from "../../hooks/use-language";
import { SectionHeader } from "./SectionHeader";
import { OptimizedImage } from "./OptimizedImage";
import { IconArrowUpRight } from "./icons";

interface Project {
  name: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
  accent: string;
  attachment?: {
    label: "video" | "article";
    url: string;
  };
}

const projectsList: Project[] = [
  {
    name: "SKATYS",
    image: "/projects/skatys_website2.png",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "SEO",
      "i18n",
      "Linux",
    ],
    live: "https://skatys.com/",
    accent: "linear-gradient(135deg,#FF7A00 0%,#141414 100%)",
  },
  {
    name: "CFMDV",
    image: "/projects/cfmdv_website.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "SEO", "i18n", "Docker"],
    live: "https://www.cfmdv.ma/",
    accent: "linear-gradient(135deg,#003A6D 0%,#0F172A 100%)",
  },
  {
    name: "ENI Signature Generator",
    image: "/projects/eni_signature_generator.png",
    tech: ["Python", "Streamlit", "Pillow", "Image Processing", "Automation"],
    live: "https://eni-sig.streamlit.app/",
    accent: "linear-gradient(135deg,#2563EB 0%,#172554 100%)",
  },
  {
    name: "Inception of Things",
    image: "/projects/k8s.jpeg",
    tech: ["Kubernetes", "K3s", "ArgoCD", "Docker", "GitOps", "Vagrant"],
    github: "https://github.com/hael-mou/Inception-of-Things",
    accent: "linear-gradient(135deg,#326CE5 0%,#0F172A 100%)",
  },
  {
    name: "ArgoCheck",
    image: "/projects/argo.png",
    tech: ["Next.js", "Django", "PostgreSQL", "Docker", "REST API", "Security"],
    github: "https://github.com/hael-mou/argoCheck",
    accent: "linear-gradient(135deg,#7C3AED 0%,#1E1B4B 100%)",
    attachment: {
      label: "video",
      url: "https://drive.google.com/file/d/1IIrhrVh_hVYYWv9sulJoB1vqc469C4OI/view",
    },
  },
  {
    name: "CBT Dashboard",
    image: "/projects/cbt.png",
    tech: ["React", "Vite", "Supabase", "Charts", "REST API", "UI/UX"],
    live: "https://cbt-vert.vercel.app",
    accent: "linear-gradient(135deg,#10B981 0%,#064E3B 100%)",
  },
  {
    name: "Revo Advertising",
    image: "/projects/revo_website.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Responsive Design", "SEO"],
    live: "https://revo.ma",
    accent: "linear-gradient(135deg,#F97316 0%,#431407 100%)",
  },
  {
    name: "WNT Hiring Challenge",
    image: "/projects/wnt.png",
    tech: ["Django", "PostgreSQL", "Redis", "Docker", "Caching", "Database Optimization"],
    github: "https://github.com/hael-mou/wnt-hiring-challenge",
    accent: "linear-gradient(135deg,#DC2626 0%,#450A0A 100%)",
  },
  {
    name: "Global Health Care",
    image: "/projects/ghc.png",
    tech: ["React", "Vite", "TailwindCSS", "Responsive Design", "UI/UX"],
    live: "https://global-health-care.vercel.app/",
    accent: "linear-gradient(135deg,#0891B2 0%,#083344 100%)",
  },
  {
    name: "ft_transcendence",
    image: "/projects/transcendence.png",
    tech: ["Django", "JavaScript", "WebSocket", "RabbitMQ", "JWT", "Docker", "Microservices"],
    github: "https://github.com/hael-mou/ft_transcendence",
    accent: "linear-gradient(135deg,#9333EA 0%,#2E1065 100%)",
  },
  {
    name: "Inception",
    image: "/projects/inception.png",
    tech: ["Docker", "Docker Compose", "WordPress", "MariaDB", "Nginx", "Linux", "SSL"],
    github: "https://github.com/hael-mou/Inception-42",
    accent: "linear-gradient(135deg,#2563EB 0%,#172554 100%)",
  },
  {
    name: "Webserv",
    image: "/projects/webserv.png",
    tech: ["C++", "HTTP", "Sockets", "Reactor Pattern", "CGI", "Network Programming"],
    github: "https://github.com/hael-mou/webserv",
    accent: "linear-gradient(135deg,#EA580C 0%,#431407 100%)",
  },
  {
    name: "Cub3D",
    image: "/projects/cub3d.png",
    tech: ["C", "MiniLibX", "Raycasting", "Graphics Programming", "Game Engine"],
    github: "https://github.com/hael-mou/Cub3d",
    accent: "linear-gradient(135deg,#F59E0B 0%,#451A03 100%)",
    attachment: {
      label: "article",
      url: "https://www.linkedin.com/posts/oussama-ezzaou_cprogramming-graphicsprogramming-raycasting-ugcPost-7308175907557437440-wFKE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuQcnwBwXvPmtKJ6oXlS-uSz9gtic2l8qM",
    },
  },
];

export function Projects() {
  const { t } = useLanguage();
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsList.length));
  };

  const scrollToTop = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="projects" className="section-y border-t border-border">
      <div className="container-x">
        <SectionHeader eyebrow={t("projects.eyebrow")} title={t("projects.title")} />

        <div className="space-y-6">
          {projectsList.slice(0, visibleProjects).map((p) => {
            const category = t(`projects.items.${p.name}.category`);
            const blurb = t(`projects.items.${p.name}.blurb`);
            const description = t(`projects.items.${p.name}.description`);

            return (
              <article
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card md:grid md:grid-cols-5"
              >
                {/* Cover Image */}
                <div className="relative md:col-span-2 max-h-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-72 w-full object-cover object-top transition-transform duration-500 group-hover:scale-101 md:h-full z-1"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs uppercase tracking-widest text-white/70">{category}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-6 md:col-span-3 md:p-8 z-2 bg-[#181818] border ">
                  <h3 className="text-2xl font-semibold">{p.name}</h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent hover:underline outline-none focus-visible:underline"
                      >
                        {t("projects.viewSite")}
                        <IconArrowUpRight />
                      </a>
                    )}

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground outline-none focus-visible:text-foreground"
                      >
                        {t("projects.sourceCode")}
                        <IconArrowUpRight />
                      </a>
                    )}

                    {p.attachment && (
                      <a
                        href={p.attachment.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent/70 hover:text-accent outline-none focus-visible:text-accent"
                      >
                        {t(`projects.${p.attachment.label}`)}
                        <IconArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          {visibleProjects < projectsList.length ? (
            <button
              onClick={loadMore}
              className="rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer outline-none focus-visible:bg-accent focus-visible:text-accent-foreground"
            >
              {t("projects.viewMore")}
            </button>
          ) : (
            <button
              onClick={scrollToTop}
              className="rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer outline-none focus-visible:bg-accent focus-visible:text-accent-foreground"
            >
              {t("projects.backToTop")}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
export default Projects;
