export type InfoSection = { heading: string; body: string[] };

export type InfoPage = {
    slug: string;
    title: string;
    intro: string;
    sections: InfoSection[];
};

export const infoPages: InfoPage[] = [
    {
        slug: "about",
        title: "About us",
        intro: "HairBooking is a booking and management platform built for hair salons and barbershops in Ghana and beyond.",
        sections: [
            {
                heading: "Our mission",
                body: [
                    "We help salon owners fill their chairs, keep their clients coming back and run the business without paper diaries.",
                    "Clients can book in seconds, from any device, at any hour.",
                ],
            },
            {
                heading: "What we offer",
                body: [
                    "Online booking, client profiles and reminders, staff scheduling, sales and performance reports, and mobile money or card payments.",
                ],
            },
            {
                heading: "Where we operate",
                body: ["Our partner salons are in Accra, Kumasi, Takoradi and Cape Coast."],
            },
        ],
    },
    {
        slug: "careers",
        title: "Careers",
        intro: "We are a small, fast-moving team. We look for people who care about salons, clients and good software.",
        sections: [
            {
                heading: "Open roles",
                body: [
                    "We are always interested in product designers, front-end and back-end engineers, customer success specialists and salon onboarding staff.",
                    "Send your CV and a short note about the work you are proud of to careers@hairbooking.com.",
                ],
            },
            {
                heading: "How we work",
                body: [
                    "Remote-friendly, with regular time together in Accra. We value clear communication, shipping small improvements often and listening to salon owners.",
                ],
            },
        ],
    },
    {
        slug: "partners",
        title: "Partners",
        intro: "We work with salon groups, suppliers and payment providers to make running a salon simpler.",
        sections: [
            {
                heading: "Salon partners",
                body: [
                    "Multi-location salon groups can run every branch from one dashboard, with shared pricing and staff rosters.",
                ],
            },
            {
                heading: "Payment partners",
                body: [
                    "Card and mobile money payments are processed by trusted local and international providers.",
                ],
            },
            {
                heading: "Become a partner",
                body: ["Email partners@hairbooking.com with your business name and what you would like to explore together."],
            },
        ],
    },
    {
        slug: "press",
        title: "Press",
        intro: "News, media resources and contact details for journalists covering HairBooking.",
        sections: [
            {
                heading: "Media enquiries",
                body: ["For interviews, quotes or images, email press@hairbooking.com. We aim to reply within one business day."],
            },
            {
                heading: "Boilerplate",
                body: [
                    "HairBooking is a SaaS platform that lets hair salons and barbershops take online bookings, manage clients and grow their revenue.",
                ],
            },
        ],
    },
    {
        slug: "terms",
        title: "Terms of use",
        intro: "These terms govern your use of the HairBooking website and platform.",
        sections: [
            {
                heading: "Using the platform",
                body: [
                    "You must provide accurate information when you create an account or make a booking, and keep your login details private.",
                ],
            },
            {
                heading: "Bookings and payments",
                body: [
                    "Salons set their own service prices and cancellation rules. Payments are processed by our payment partners.",
                ],
            },
            {
                heading: "Acceptable use",
                body: ["Do not misuse the platform, attempt to access other accounts or interfere with other users."],
            },
            {
                heading: "Changes",
                body: ["We may update these terms. We will post the latest version on this page with a revised date."],
            },
        ],
    },
    {
        slug: "privacy",
        title: "Privacy policy",
        intro: "This page explains what personal data we collect, why we collect it and how you can control it.",
        sections: [
            {
                heading: "What we collect",
                body: [
                    "Contact details, appointment history, payment references and device information needed to run the service.",
                ],
            },
            {
                heading: "How we use it",
                body: [
                    "To manage bookings, send confirmations and reminders, process payments and improve the platform.",
                ],
            },
            {
                heading: "Sharing",
                body: [
                    "We share data only with the salon you book with and with service providers such as payment processors, under strict contracts.",
                ],
            },
            {
                heading: "Your rights",
                body: ["You can ask to see, correct or delete your personal data by emailing privacy@hairbooking.com."],
            },
        ],
    },
    {
        slug: "cookies",
        title: "Cookies",
        intro: "We use cookies to keep you signed in, remember your preferences and understand how the site is used.",
        sections: [
            {
                heading: "Types of cookies",
                body: [
                    "Essential cookies keep the booking flow working. Preference cookies remember settings. Analytics cookies show us which pages are useful.",
                ],
            },
            {
                heading: "Managing cookies",
                body: [
                    "You can clear or block cookies in your browser settings. Blocking essential cookies may stop bookings from working.",
                ],
            },
        ],
    },
    {
        slug: "data-protection",
        title: "Data Protection",
        intro: "How we protect the personal data entrusted to us, in line with applicable data protection laws.",
        sections: [
            {
                heading: "Our commitments",
                body: [
                    "We collect only the data we need, encrypt it in transit, restrict access to authorised staff and keep it only as long as necessary.",
                ],
            },
            {
                heading: "Data requests",
                body: ["To make a data access, correction or deletion request, email dpo@hairbooking.com. We will respond within 30 days."],
            },
            {
                heading: "Breaches",
                body: ["If a breach affects your data, we will notify you and the relevant authority as required by law."],
            },
        ],
    },
];

export function getInfoPage(slug: string) {
    return infoPages.find((page) => page.slug === slug);
}
