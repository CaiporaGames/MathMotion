export type HomeLink = {
    title: string;

    description: string;

    href: string;

    tag?: string;
};

export type HomeCategory = {
    id: string;

    eyebrow: string;

    title: string;

    description: string;

    href: string;

    actionLabel: string;

    links: HomeLink[];
};