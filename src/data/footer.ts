import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Daret is more than an app. It's the future of collective saving, built on trust and community.",
    quickLinks: [
        {
            text: "About Us",
            url: "#about"
        },
        {
            text: "Legal Notice",
            url: "/legal-notice"
        },
        {
            text: "Privacy Policy",
            url: "#privacy"
        }
    ],
    email: 'contact@daret.io',
    telephone: '+44 7533 940212',
    socials: {
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        linkedin: 'https://www.linkedin.com/',
        instagram: 'https://www.instagram.com/',
    }
}