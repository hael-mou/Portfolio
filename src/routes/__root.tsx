import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    Outlet,
    createRootRouteWithContext,
    useRouter,
    HeadContent,
    Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function ComposantPageIntrouvable() {
    const router = useRouter();

    useEffect(() => {
        router.navigate({
            to: "/",
            replace: true,
        });
    }, [router]);

    return null;
}

function ComposantErreur({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    console.error(error);

    const router = useRouter();

    useEffect(() => {
        reportLovableError(error, {
            boundary: "tanstack_root_error_component",
        });
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
                <h1 className="text-xl font-semibold tracking-tight text-foreground">
                    Cette page n'a pas pu être chargée
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Une erreur est survenue de notre côté.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => {
                            router.invalidate();
                            reset();
                        }}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Réessayer
                    </button>

                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                        Retour à l'accueil
                    </a>
                </div>
            </div>
        </div>
    );
}

export const Route =
    createRootRouteWithContext<{
        queryClient: QueryClient;
    }>()({
        head: () => ({
            meta: [
                { charSet: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    title:
                        "Hamza El Moudden — Développeur Full Stack & Architecte Logiciel",
                },
                {
                    name: "description",
                    content:
                        "Portfolio de Hamza El Moudden — développeur full stack et architecte logiciel spécialisé dans la création de systèmes web modernes, d'API et d'infrastructures robustes.",
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
            ],

            links: [
                {
                    rel: "stylesheet",
                    href: appCss,
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossOrigin: "anonymous",
                },
                {
                    rel: "stylesheet",
                    href:
                        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
                },
                {
                    rel: "icon",
                    href: "/favicon.ico",
                    type: "image/x-icon",
                },
            ],
        }),

        shellComponent: CoqueRacine,
        component: ComposantRacine,
        notFoundComponent: ComposantPageIntrouvable,
        errorComponent: ComposantErreur,
    });

function CoqueRacine({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <HeadContent />
            </head>

            <body>
                {children}
                <Scripts />
            </body>
        </html>
    );
}

function ComposantRacine() {
    const { queryClient } = Route.useRouteContext();

    return (
        <QueryClientProvider client={queryClient}>
            <Outlet />
        </QueryClientProvider>
    );
}