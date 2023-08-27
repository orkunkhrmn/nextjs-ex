export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        github: string;
        youtube: string;
        linkedin: string;
        instagram: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: 'Blog',
    description: 'Simple blog built with Next.js and TypeScript.',
    currentlyAt: "Ankara, Turkey",
    socialLinks: {
        twitter: "https://twitter.com/",
        github: "https://github.com/",
        youtube: "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
    }
}

export default siteConfig;