import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { useLanguage } from "../hooks/use-language";
import Header from "../components/portfolio/Header";
import Hero from "../components/portfolio/Hero";

const About = lazy(() => import("../components/portfolio/About"));
const Skills = lazy(() => import("../components/portfolio/Skills"));
const Experience = lazy(() => import("../components/portfolio/Experience"));
const Education = lazy(() => import("../components/portfolio/Education"));
const Projects = lazy(() => import("../components/portfolio/Projects"));
const Contact = lazy(() => import("../components/portfolio/Contact"));
const Footer = lazy(() => import("../components/portfolio/Footer"));
const LanguageModal = lazy(() => import("../components/portfolio/LanguageModal"));

const profileColor = "/me3.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hamza El Moudden — Full Stack Developer & Software Architect",
      },
      {
        name: "description",
        content:
          "Hamza El Moudden is a full stack developer and software architect specializing in Django, React, Next.js, TypeScript, Docker, and PostgreSQL. Discover his portfolio, experience, and selected projects.",
      },
      {
        name: "keywords",
        content:
          "Hamza El Moudden, full stack developer, software architect, Django developer, React developer, Next.js, TypeScript, PostgreSQL, Docker, portfolio, freelance developer",
      },
      {
        name: "author",
        content: "Hamza El Moudden",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "Hamza El Moudden — Full Stack Developer & Software Architect",
      },
      {
        property: "og:description",
        content:
          "Portfolio, experience, and selected projects of Hamza El Moudden — designing robust and scalable web systems from end to end.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        property: "og:image",
        content: profileColor,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Hamza El Moudden — Full Stack Developer",
      },
      {
        name: "twitter:description",
        content:
          "Full stack developer and software architect. Discover his portfolio and selected projects.",
      },
      {
        name: "twitter:image",
        content: profileColor,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Hamza El Moudden",
          jobTitle: "Full Stack Developer & Software Architect",
          email: "mailto:ha.elmoudden@gmail.com",
          image: profileColor,
          knowsAbout: [
            "Django",
            "React",
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Docker",
            "RabbitMQ",
            "Software Architecture",
          ],
          sameAs: [
            "https://www.linkedin.com/in/hael-mou",
            "https://github.com/hael-mou",
            "https://www.instagram.com/hamza_el_moudden",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function SectionLoader() {
  return (
    <div className="h-64 flex items-center justify-center text-muted-foreground opacity-30">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-current border-t-transparent" />
    </div>
  );
}

function Portfolio() {
  const { hasPreferenceSet, isReady } = useLanguage();

  return (
    <>
      <main
        className={`min-h-screen bg-background text-foreground transition-all duration-1000 ease-out ${
          isReady && !hasPreferenceSet ? "blur-xl pointer-events-none brightness-50" : ""
        }`}
      >
        <Header />
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>

      {/* Language selection modal shown overlay-style outside the blurred container */}
      <Suspense fallback={null}>
        <LanguageModal />
      </Suspense>
    </>
  );
}
