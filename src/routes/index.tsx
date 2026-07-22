import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const profileColor = "/hero.jpeg";
const profileBw = "/me.jpeg";
const profileBWSmall = "/me2.jpeg";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            {
                title:
                    "Hamza El Moudden — Développeur Full Stack & Architecte Logiciel",
            },
            {
                name: "description",
                content:
                    "Hamza El Moudden est un développeur full stack et architecte logiciel spécialisé dans Django, React, Next.js, TypeScript, Docker et PostgreSQL. Découvrez son portfolio, son expérience et ses projets sélectionnés.",
            },
            {
                name: "keywords",
                content:
                    "Hamza El Moudden, développeur full stack, architecte logiciel, développeur Django, développeur React, Next.js, TypeScript, PostgreSQL, Docker, portfolio, développeur freelance",
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
                content:
                    "Hamza El Moudden — Développeur Full Stack & Architecte Logiciel",
            },
            {
                property: "og:description",
                content:
                    "Portfolio, expériences et projets sélectionnés de Hamza El Moudden — conception de systèmes web robustes et évolutifs de bout en bout.",
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
                content:
                    "Hamza El Moudden — Développeur Full Stack",
            },
            {
                name: "twitter:description",
                content:
                    "Développeur full stack et architecte logiciel. Découvrez son portfolio et ses projets sélectionnés.",
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
                    jobTitle:
                        "Développeur Full Stack & Architecte Logiciel",
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
                        "Architecture Logicielle",
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

// === data : =======================================================================
const navItems = [
    {
        label: "À propos",
        href: "#about",
    },
    {
        label: "Compétences",
        href: "#skills",
    },
    {
        label: "Expérience",
        href: "#experience",
    },
    {
        label: "Projets",
        href: "#projects",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const heroActions = [
    {
        href: "/hamzaElmoudden_4_2026.pdf",
        label: "Télécharger le CV",
        icon: ArrowDown,
        target: "_blank",
        primary: true,
    },
    {
        href: "#projects",
        label: "Découvrir mes projets",
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

const aboutContent = {
    eyebrow: "À propos",
    title:
        "Concevoir des logiciels avec vision — de la première ligne de code jusqu'au déploiement en production.",
    paragraphs: [
        "Je suis un développeur Full Stack et architecte logiciel passionné par la conception de systèmes modernes, performants et évolutifs. J'apprécie l'ensemble de la chaîne technique : modélisation des bases de données, conception d'API, architecture logicielle, déploiement et expérience utilisateur.",

        "Ma philosophie est simple : privilégier des technologies stables, écrire un code clair et maintenable, automatiser les tâches répétitives et prendre des décisions basées sur des données plutôt que sur des suppositions. Chaque choix d'architecture représente un compromis qui doit être compris et assumé.",

        "J'accorde une grande importance à la simplicité, à la qualité du code, au sens des responsabilités et à la livraison de solutions concrètes qui apportent une réelle valeur aux utilisateurs et aux entreprises.",
    ],
};

const skillsContent = {
    eyebrow: "Compétences",
    title: "Mon expertise technique",
};

const skillGroups = [
    {
        title: "Frontend Development",
        items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Responsive Design",
            "Progressive Web Apps",
        ],
    },
    {
        title: "Backend Development",
        items: [
            "Python",
            "Django",
            "Express.js",
            "REST APIs",
            "API Integration",
            "Authentication",
            "Authorization",
        ],
    },
    {
        title: "Languages",
        items: [
            "C",
            "C++",
            "Object-Oriented Programming",
            "Algorithms",
            "Data Structures",
        ],
    },
    {
        title: "Database & Messaging",
        items: [
            "PostgreSQL",
            "Database Design",
            "SQL Optimization",
            "RabbitMQ",
            "Asynchronous Processing",
        ],
    },
    {
        title: "DevOps",
        items: [
            "Docker",
            "Virtualization",
            "Linux",
            "Nginx",
            "CI/CD Pipelines",
            "GitHub Actions",
        ],
    },
    {
        title: "Software Architecture",
        items: [
            "System Design",
            "Software Architecture",
            "Design Patterns",
            "Microservices",
            "Distributed Systems",
            "Performance Optimization",
        ],
    },
    {
        title: "Tools & Collaboration",
        items: [
            "Git",
            "GitHub",
            "Agile Methodologies",
            "Technical Documentation",
            "Code Review",
            "Team Collaboration",
        ],
    },
    {
        title: "Professional Skills",
        items: [
            "Creative Problem Solving",
            "Research Skills",
            "Self-Learning",
            "Adaptability",
            "Creativity",
            "Leadership",
            "Communication",
            "Critical Thinking",
            "Time Management",
        ],
    },
];

const experienceContent = {
    eyebrow: "Expérience",
    title: "Mon parcours professionnel",
};

const experience = [
    {
        role: "Développeur Full Stack Freelance",
        company: "Revo Advertising",
        period: "Juil. 2025 — Aujourd'hui",
        location: "Casablanca, Maroc",
        points: [
            "Développement et maintenance de plateformes web à forte valeur métier.",
            "Conception d'architectures logicielles robustes et évolutives.",
            "Mise en place de pipelines CI/CD, déploiement Docker et optimisation des performances.",
            "Collaboration directe avec les équipes métiers afin de transformer les besoins fonctionnels en solutions logicielles concrètes.",
            "Participation aux décisions techniques et à l'évolution de l'infrastructure des projets.",
        ],
    },
    {
        role: "Développeur Full Stack (Stage PFE)",
        company: "Revo Advertising",
        period: "Févr. 2025 — Juil. 2025",
        location: "Casablanca, Maroc",
        points: [
            "Conception et développement d'applications web modernes destinées aux besoins internes et aux clients de l'entreprise.",
            "Développement d'interfaces utilisateur performantes avec React, Next.js et TypeScript.",
            "Conception d'API, modélisation de bases de données et amélioration des performances applicatives.",
            "Participation au déploiement, à la maintenance et à l'amélioration continue des solutions en production.",
        ],
    },
    {
        role: "Développeur Full Stack Freelance",
        company: "Freelance",
        period: "Févr. 2022 — 2024",
        location: "Maroc",
        points: [
            "Conception et développement de sites web et d'outils numériques sur mesure pour diverses entreprises.",
            "Développement de blogs modernes avec React et Next.js.",
            "Création de systèmes de gestion de signatures électroniques et de génération automatique d'images de signature.",
            "Développement d'applications métier, d'API REST et d'interfaces d'administration.",
            "Prise en charge complète des projets : analyse des besoins, architecture, développement, déploiement et maintenance.",
        ],
    },
    {
        role: "Développeur Mobile & Systèmes Embarqués (Stage PFE)",
        company: "DropLeet",
        period: "Mai 2021 — Juil. 2021",
        location: "Khouribga, Maroc",
        points: [
            "Développement d'un système intelligent de gestion de restaurant intégrant une application mobile et des services embarqués.",
            "Conception de fonctionnalités de réservation, gestion des listes d'attente et suivi des commandes en cuisine.",
            "Intégration de robots serveurs afin d'améliorer l'expérience client et l'efficacité opérationnelle.",
            "Participation à la conception des échanges entre les applications mobiles, les services backend et les équipements connectés.",
        ],
    },
];


const education = [
    {
        degree: "RNCP Niveau 7 - Administrateur Systèmes, Cybersécurité",
        school: "1337",
        period: "Oct. 2025 — Aujourd'hui",
        location: "Tetouan, Maroc",
        description:
            "Formation avancée orientée administration des infrastructures, sécurité informatique, cloud computing, automatisation et conception d'architectures distribuées sécurisées.",

        skills: [
            "Administration Linux",
            "Cybersécurité",
            "Sécurité des réseaux",
            "Docker & Kubernetes",
            "Cloud Computing",
            "CI/CD",
            "Monitoring & Observabilité",
            "Infrastructure as Code",
            "Architecture distribuée",
            "Sécurisation des systèmes",
            "DevSecOps",
        ],
    },
    {
        degree: "Architecte en Technologies du Numérique",
        school: "1337",
        period: "Oct. 2022 — Déc. 2024",
        location: "Tetouan, Maroc",
        description:
            "Formation intensive basée sur l'apprentissage par projets (peer-learning), axée sur l'ingénierie logicielle, les algorithmes avancés, le développement Full Stack et la conception de systèmes complexes.",

        skills: [
            "Algorithmique avancée",
            "Structures de données",
            "Programmation système (C/C++)",
            "Développement Full Stack",
            "Architecture logicielle",
            "Conception de systèmes",
            "Docker & Virtualisation",
            "Linux",
            "Réseaux",
            "Travail collaboratif",
            "Gestion de projets techniques",
        ],
    },
    {
        degree:
            "Licence Professionnelle en Systèmes Informatiques Embarqués",
        school: "Université Ibn Zohr",
        period: "Janv. 2019 — Déc. 2021",
        location: "Agadir, Maroc",
        description:
            "Formation spécialisée dans les systèmes embarqués, la programmation bas niveau et l'intégration de solutions matérielles et logicielles.",

        skills: [
            "Programmation C/C++",
            "Systèmes embarqués",
            "Microcontrôleurs",
            "Programmation orientée objet",
            "Développement mobile",
            "Réseaux informatiques",
            "Bases de données",
            "Systèmes temps réel",
            "Conception UML",
        ],
    },
];

const projects = [
{
    name: "SKATYS",
    category: "Site Corporate",
    image: "/projects/skatys_website2.png",
    blurb:
        "Site corporate multilingue dédié aux solutions SAP et à la transformation numérique.",
    description:
        "Développement d'un site moderne avec Next.js et rendu statique (SSG) pour améliorer les performances et le SEO. Mise en place de l'i18n, gestion avancée des métadonnées, optimisation du référencement et déploiement automatisé avec GitHub Actions. Administration du VPS avec Docker, Nginx, firewall et configuration d'un environnement de production sécurisé.",
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
    accent:
        "linear-gradient(135deg,#FF7A00 0%,#141414 100%)",
},

{
    name: "CFMDV",
    category: "Site Institutionnel",
    image: "/projects/cfmdv_website.png",
    blurb:
        "Site institutionnel moderne pour le Centre de Formation aux Métiers du Digital et de la Valorisation (UM6P).",
    description:
        "Création d'une plateforme institutionnelle avec Next.js optimisée pour les performances, l'accessibilité et le référencement naturel. Développement d'une architecture moderne avec gestion multilingue, métadonnées SEO, design responsive et optimisation de l'expérience utilisateur pour présenter les formations et services du centre.",
    tech: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SEO",
        "i18n",
        "Docker",
    ],
    live: "https://www.cfmdv.ma/",
    accent:
        "linear-gradient(135deg,#003A6D 0%,#0F172A 100%)",
},

{
    name: "ENI Signature Generator",
    category: "Outil Interne",
    image: "/projects/eni_signature_generator.png",
    blurb:
        "Outil automatique de génération de signatures email professionnelles pour le groupe ENI.",
    description:
        "Développement d'une application Python permettant de générer automatiquement des signatures email conformes à la charte graphique de l'entreprise. Création d'une interface simple avec Streamlit pour modifier les informations utilisateur et génération dynamique des images avec traitement graphique via Pillow.",
    tech: [
        "Python",
        "Streamlit",
        "Pillow",
        "Image Processing",
        "Automation",
    ],
    live: "https://eni-sig.streamlit.app/",
    accent:
        "linear-gradient(135deg,#2563EB 0%,#172554 100%)",
},

{
    name: "Inception of Things",
    category: "DevOps & Kubernetes",
    image: "/projects/k8s.jpeg",
    blurb:
        "Infrastructure cloud native basée sur Kubernetes et GitOps.",
    description:
        "Déploiement d'une infrastructure Kubernetes avec K3s et automatisation des applications via GitOps. Mise en place d'environnements multiples, gestion des déploiements avec ArgoCD, configuration des services et orchestration des conteneurs Docker pour créer une architecture cloud native robuste.",
    tech: [
        "Kubernetes",
        "K3s",
        "ArgoCD",
        "Docker",
        "GitOps",
        "Vagrant",
    ],
    github:
        "https://github.com/hael-mou/Inception-of-Things",
    accent:
        "linear-gradient(135deg,#326CE5 0%,#0F172A 100%)",
},

{
    name: "ArgoCheck",
    category: "Application Web",
    image: "/projects/argo.png",
    blurb:
        "Plateforme Full Stack de collecte et gestion des avis clients.",
    description:
        "Développement d'une application Full Stack avec Next.js et Django permettant aux clients de partager leurs avis sur les produits. Mise en place d'un système sécurisé avec limitation par adresse IP, protection anti-spam et stockage des commentaires dans PostgreSQL.",
    tech: [
        "Next.js",
        "Django",
        "PostgreSQL",
        "Docker",
        "REST API",
        "Security",
    ],
    github:
        "https://github.com/hael-mou/argoCheck",
    accent:
        "linear-gradient(135deg,#7C3AED 0%,#1E1B4B 100%)",
    attachment: {
        label:"video",
        url: "https://drive.google.com/file/d/1IIrhrVh_hVYYWv9sulJoB1vqc469C4OI/view"
    }
},

{
    name: "CBT Dashboard",
    category: "Dashboard Business",
    image: "/projects/cbt.png",
    blurb:
        "Dashboard analytique pour le suivi des données économiques et marketing.",
    description:
        "Création d'un tableau de bord moderne permettant la visualisation de données business provenant d'API externes. Développement d'une interface dynamique avec React et Vite, intégration de Supabase pour la gestion des données et création d'une expérience utilisateur optimisée pour l'analyse et la modification des informations.",
    tech: [
        "React",
        "Vite",
        "Supabase",
        "Charts",
        "REST API",
        "UI/UX",
    ],
    live:
        "https://cbt-vert.vercel.app",
    accent:
        "linear-gradient(135deg,#10B981 0%,#064E3B 100%)",
},

{
    name: "Revo Advertising",
    category: "Site Corporate",
    image: "/projects/revo_website.png",
    blurb:
        "Site vitrine moderne pour une agence de communication et publicité.",
    description:
        "Développement d'un site corporate avec Next.js pour présenter les services, réalisations et projets d'une agence publicitaire. Création d'une interface moderne, responsive et optimisée pour offrir une meilleure visibilité digitale aux futurs clients.",
    tech: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Responsive Design",
        "SEO",
    ],
    live:
        "https://revo.ma",
    accent:
        "linear-gradient(135deg,#F97316 0%,#431407 100%)",
},
{
    name: "WNT Hiring Challenge",
    category: "Backend Engineering",
    image: "/projects/wnt.png",
    blurb:
        "Optimisation et amélioration d'une API de billetterie événementielle Django.",
    description:
        "Refonte d'une API backend Django pour améliorer la qualité du code, la maintenabilité et les performances. Restructuration du projet avec une architecture par fonctionnalités, optimisation des requêtes SQL pour supprimer les problèmes N+1, ajout de cache dynamique, sécurisation des achats avec gestion des transactions et prévention des problèmes de concurrence.",
    tech: [
        "Django",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Caching",
        "Database Optimization",
    ],
    github:
        "https://github.com/hael-mou/wnt-hiring-challenge",
    accent:
        "linear-gradient(135deg,#DC2626 0%,#450A0A 100%)",
},

{
    name: "Global Health Care",
    category: "Site Santé",
    image: "/projects/ghc.png",
    blurb:
        "Site vitrine moderne pour un centre médical présentant ses services.",
    description:
        "Développement d'une plateforme web destinée à améliorer la présence digitale d'un centre de santé. Création d'une interface moderne et responsive avec React et Vite pour présenter les services médicaux, les informations du centre et offrir une expérience utilisateur claire aux visiteurs.",
    tech: [
        "React",
        "Vite",
        "TailwindCSS",
        "Responsive Design",
        "UI/UX",
    ],
    live:
        "https://global-health-care.vercel.app/",
    accent:
        "linear-gradient(135deg,#0891B2 0%,#083344 100%)",
},

{
    name: "ft_transcendence",
    category: "Application Temps Réel",
    image: "/projects/transcendence.png",
    blurb:
        "Plateforme multijoueur de Pong avec chat et système de tournois.",
    description:
        "Développement d'une plateforme de jeu temps réel dans le cadre du cursus 42. Conception d'une architecture basée sur des microservices avec communication synchrone et asynchrone. Intégration de WebSockets pour les parties et le chat, RabbitMQ pour la communication entre services, JWT pour l'authentification et gestion complète des utilisateurs, matchs et tournois.",
    tech: [
        "Django",
        "JavaScript",
        "WebSocket",
        "RabbitMQ",
        "JWT",
        "Docker",
        "Microservices",
    ],
    github:
        "https://github.com/hael-mou/ft_transcendence",
    accent:
        "linear-gradient(135deg,#9333EA 0%,#2E1065 100%)",
},
{
    name: "Inception",
    category: "DevOps",
    image: "/projects/inception.png",
    blurb:
        "Infrastructure Docker complète pour déployer un environnement WordPress sécurisé.",
    description:
        "Mise en place d'une architecture conteneurisée complète avec Docker Compose. Configuration de plusieurs services incluant Nginx, WordPress et MariaDB avec gestion des volumes persistants, réseaux Docker, certificats SSL et sécurisation de l'environnement Linux.",
    tech: [
        "Docker",
        "Docker Compose",
        "WordPress",
        "MariaDB",
        "Nginx",
        "Linux",
        "SSL",
    ],
    github:
        "https://github.com/hael-mou/Inception-42",
    accent:
        "linear-gradient(135deg,#2563EB 0%,#172554 100%)",
},

{
    name: "Webserv",
    category: "Système & Réseau",
    image: "/projects/webserv.png",
    blurb:
        "Serveur HTTP développé en C++ avec une architecture événementielle.",
    description:
        "Développement d'un serveur web HTTP en C++ inspiré de Nginx dans le cadre du cursus 42. Implémentation de la gestion des connexions réseau, requêtes HTTP, fichiers statiques, CGI et configuration serveur. Utilisation du pattern Reactor avec une approche événementielle pour gérer efficacement les communications.",
    tech: [
        "C++",
        "HTTP",
        "Sockets",
        "Reactor Pattern",
        "CGI",
        "Network Programming",
    ],
    github:
        "https://github.com/hael-mou/webserv",
    accent:
        "linear-gradient(135deg,#EA580C 0%,#431407 100%)",
},

{
    name: "Cub3D",
    category: "Jeu Vidéo",
    image:
        "/projects/cub3d.png",
    blurb:
        "Moteur graphique 3D basé sur le raycasting inspiré de Wolfenstein 3D.",
    description:
        "Création d'un jeu de tir en vue subjective en langage C utilisant la technique du raycasting. Développement d'un moteur graphique temps réel avec gestion des textures, déplacements, collisions, événements clavier et rendu 3D via la bibliothèque MiniLibX.",
    tech: [
        "C",
        "MiniLibX",
        "Raycasting",
        "Graphics Programming",
        "Game Engine",
    ],
    github:
        "https://github.com/hael-mou/Cub3d",
    accent:
        "linear-gradient(135deg,#F59E0B 0%,#451A03 100%)",
      attachment: {
        label: "Article",
        url: "https://www.linkedin.com/posts/oussama-ezzaou_cprogramming-graphicsprogramming-raycasting-ugcPost-7308175907557437440-wFKE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACuQcnwBwXvPmtKJ6oXlS-uSz9gtic2l8qM"
    }
},
]

const contactContent = {
    eyebrow: "Contact",
    title: (
        <>
            Construisons quelque chose de{" "}
            <span className="text-accent">remarquable</span>.
        </>
    ),
    description:
        "Je suis ouvert aux collaborations, missions freelance et opportunités professionnelles stimulantes.",
    thanks: "Merci de votre visite et à bientôt"
};

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

// === components : =================================================================
function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-md">
            <div className="container-x flex h-16 items-center justify-between">
                <a
                    href="#top"
                    className="text-sm font-semibold tracking-widest"
                >
                    HEM<span className="text-accent">.</span>
                </a>

                <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="cursor-pointer font-medium transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
                >
                    Me contacter
                </a>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section
            id="top"
            className="relative isolate overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <img
                    src={profileColor}
                    alt="Portrait de Hamza El Moudden"
                    className="h-full w-full object-cover object-[center_20%] opacity-70"
                    width={1200}
                    height={1408}
                />

                <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/35" />

                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/70" />
            </div>

            <div className="container-x flex min-h-screen flex-col justify-center pt-24 pb-16">
                <p className="eyebrow mb-6">
                    Développeur Full Stack · Architecte Logiciel
                </p>

                <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
                    HAMZA
                    <br />
                    EL <span className="text-accent">MOUDDEN</span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Je conçois et développe des systèmes robustes,
                    depuis la conception des bases de données et des API
                    jusqu'aux interfaces modernes auxquelles les utilisateurs
                    font confiance. Rigoureux, pragmatique et passionné par
                    l'ingénierie logicielle.
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
                                        ? "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                                        : "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                                }
                            >
                                {action.label}

                                {Icon && (
                                    <Icon className="h-4 w-4" />
                                )}
                            </a>
                        );
                    })}
                </div>

                <div className="mt-14 flex items-center gap-5 text-muted-foreground">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <SocialLink
                                key={social.label}
                                href={social.href}
                                label={social.label}
                            >
                                <Icon />
                            </SocialLink>
                        );
                    })}
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground">
                -- Scroll --
            </div>
        </section>
    );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

function About() {
    return (
        <section
            id="about"
            className="section-y"
        >
            <div className="container-x grid gap-12 md:grid-cols-5 md:gap-16">
                <div className="md:col-span-2">
                    <div className="overflow-hidden rounded-2xl border border-border">
                        <img
                            src={profileBw}
                            alt="Portrait cinématographique de Hamza El Moudden"
                            className="h-full w-full object-cover md:flex hidden"
                            loading="lazy"
                            width={1408}
                            height={800}
                        />
                        <img
                            src={profileBWSmall}
                            alt="Portrait cinématographique de Hamza El Moudden"
                            className="h-full w-full object-cover flex md:hidden"
                            loading="lazy"
                            width={1408}
                            height={800}
                        />
                    </div>
                </div>

                <div className="md:col-span-3">
                    <p className="eyebrow mb-3">
                        {aboutContent.eyebrow}
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {aboutContent.title}
                    </h2>

                    <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                        {aboutContent.paragraphs.map(
                            (paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section
            id="skills"
            className="section-y border-t border-border"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow={skillsContent.eyebrow}
                    title={skillsContent.title}
                />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-lg font-semibold">
                                    {group.title}
                                </h3>

                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            </div>

                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
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

function Experience() {
    return (
        <section
            id="experience"
            className="section-y border-t border-border"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow={experienceContent.eyebrow}
                    title={experienceContent.title}
                />

                <ol className="space-y-8">
                    {experience.map((job) => (
                        <li
                            key={`${job.company}-${job.role}-${job.period}`}
                            className="grid gap-8 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/50 md:grid-cols-4 md:p-8"
                        >
                            <div className="space-y-3">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-accent">
                                        {job.period}
                                    </p>

                                    <p className="mt-2 text-lg font-semibold">
                                        {job.company}
                                    </p>

                                    {job.location && (
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {job.location}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="md:col-span-3">
                                <h3 className="text-xl font-semibold">
                                    {job.role}
                                </h3>

                                <ul className="mt-5 space-y-3 text-muted-foreground">
                                    {job.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />

                                            <span className="leading-relaxed">
                                                {point}
                                            </span>
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

function Education() {
    return (
        <section
            id="education"
            className="section-y border-t border-border"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow="Formation"
                    title="Parcours académique"
                />

                <div className="space-y-8">
                    {education.map((ed) => (
                        <article
                            key={`${ed.school}-${ed.degree}`}
                            className="rounded-2xl border border-border bg-card/40 p-6 md:p-8"
                        >
                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {ed.degree}
                                    </h3>

                                    <p className="mt-2 text-muted-foreground">
                                        {ed.school}
                                        {ed.location &&
                                            ` • ${ed.location}`}
                                    </p>
                                </div>

                                <span className="text-sm uppercase tracking-widest text-accent">
                                    {ed.period}
                                </span>
                            </div>

                            <p className="mt-6 leading-relaxed text-muted-foreground">
                                {ed.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {ed.skills.map((skill) => (
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

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const loadMore = () => {
        setVisibleProjects((prev) =>
            Math.min(prev + 3, projects.length),
        );
    };

    const scrollToTop = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section
            id="projects"
            className="section-y border-t border-border"
        >
            <div className="container-x">
                <SectionHeader
                    eyebrow="Projets"
                    title="Quelques réalisations et projets sélectionnés."
                />

                <div className="space-y-6">
                    {projects
                        .slice(0, visibleProjects)
                        .map((p) => (
                            <article
                                key={p.name}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-card
                                    md:grid
                                    md:grid-cols-5
                                "
                            >
                                {/* Image */}
                                <div className="relative md:col-span-2 max-h-100">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        loading="lazy"
                                        className="
                                            h-72
                                            w-full
                                            object-cover
                                            object-top
                                            transition-transform
                                            duration-500
                                            group-hover:scale-101
                                            md:h-full
                                            z-1
                                        "
                                    />

                                    <div className="absolute inset-0 bg-black/30" />

                                    <div className="absolute bottom-5 left-5">
                                        <p
                                            className="
                                                text-xs
                                                uppercase
                                                tracking-widest
                                                text-white/70
                                            "
                                        >
                                            {p.category}
                                        </p>

                                        <h3
                                            className="
                                                mt-1
                                                text-xl
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {p.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:col-span-3 md:p-8 z-2 bg-[#181818] border">
                                    <h3 className="text-2xl font-semibold">
                                        {p.name}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            leading-relaxed
                                            text-muted-foreground
                                        "
                                    >
                                        {p.description}
                                    </p>

                                    <ul className="mt-5 flex flex-wrap gap-2">
                                        {p.tech.map((tech) => (
                                            <li
                                                key={tech}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-border
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    text-muted-foreground
                                                "
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>

                                    <div
                                        className="
                                            mt-6
                                            flex
                                            flex-wrap
                                            gap-5
                                            text-sm
                                        "
                                    >
                                        {p.live && (
                                            <a
                                                href={p.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    text-accent
                                                    hover:underline
                                                "
                                            >
                                                Voir le site
                                                <IconArrowUpRight />
                                            </a>
                                        )}

                                        {p.github && (
                                            <a
                                                href={p.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    text-muted-foreground
                                                    hover:text-foreground
                                                "
                                            >
                                                Code source
                                                <IconArrowUpRight />
                                            </a>
                                        )}

                                        {p.attachment && (
                                            <a
                                                href={p.attachment.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    text-accent/70
                                                    hover:text-accent
                                                "
                                            >
                                                {p.attachment.label}
                                                <IconArrowUpRight />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                </div>

                {/* Buttons */}
                <div className="mt-12 flex justify-center">
                    {visibleProjects < projects.length ? (
                        <button
                            onClick={loadMore}
                            className="
                                rounded-full
                                border
                                border-border
                                px-6
                                py-3
                                text-sm
                                font-medium
                                transition-colors
                                hover:border-accent
                                hover:text-accent
                                cursor-pointer
                            "
                        >
                            Voir plus de projets
                        </button>
                    ) : (
                        <button
                            onClick={scrollToTop}
                            className="
                                rounded-full
                                border
                                border-accent/40
                                bg-accent/10
                                px-6
                                py-3
                                text-sm
                                font-medium
                                text-accent
                                transition-colors
                                hover:bg-accent
                                hover:text-accent-foreground
                                cursor-pointer
                            "
                        >
                            Retour en haut
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section
            id="contact"
            className="section-y border-t border-border"
        >
            <div className="container-x max-w-3xl text-center">
                <p className="eyebrow mb-4">
                    {contactContent.eyebrow}
                </p>

                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    {contactContent.title}
                </h2>

                <p className="mt-6 text-muted-foreground">
                    {contactContent.description}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    {contactLinks.map((link) => (
                        <ContactPill
                            key={link.label}
                            href={link.href}
                            icon={link.icon}
                            label={link.label}
                        />
                    ))}
                </div>

                <a
                    href="mailto:ha.elmoudden@gmail.com"
                    className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-base font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                    <IconMail />
                    ha.elmoudden@gmail.com
                </a>

                <p className="mt-12 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    {contactContent.thanks}
                    <span className="text-accent">.</span>
                </p>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="container-x flex flex-col items-center justify-between gap-3 py-8 text-xs text-muted-foreground md:flex-row">
                <p>
                    © {new Date().getFullYear()} Hamza El Moudden. Tous droits réservés.
                </p>

                <p>Conçu avec passion.</p>
            </div>
        </footer>
    );
}

function ContactPill({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className=" cursor-pointer inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-border p-2.5 hover:border-accent hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.32-.03-3-1.84-3-1.84 0-2.13 1.44-2.13 2.9V21h-4z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
