import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    Briefcase,
    Cookie,
    FileText,
    Handshake,
    Info,
    Lock,
    Newspaper,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";
import Footer from "@/components/layout/footer";
import { getInfoPage, infoPages } from "@/lib/info-pages";

const icons: Record<string, LucideIcon> = {
    about: Info,
    careers: Briefcase,
    partners: Handshake,
    press: Newspaper,
    terms: FileText,
    privacy: Lock,
    cookies: Cookie,
    "data-protection": ShieldCheck,
};

const siteLinks = [
    { name: "Home", href: "/#inicio" },
    { name: "About", href: "/#sobre" },
    { name: "Features", href: "/#servicos" },
    { name: "Plans", href: "/#planos" },
    { name: "Testimonials", href: "/#depoimentos" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contato" },
];

export function generateStaticParams() {
    return infoPages.map((page) => ({ slug: page.slug }));
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = getInfoPage(slug);
    if (!page) notFound();

    const Icon = icons[page.slug] ?? Info;
    const others = infoPages.filter((p) => p.slug !== page.slug).slice(0, 4);

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
            <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-indigo-100">
                <div className="container-width section-padding py-4 flex items-center justify-between">
                    <Link href="/" className="font-extrabold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        HairBooking
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
                        {siteLinks.map((item) => (
                            <Link key={item.href} href={item.href} className="hover:text-purple-700 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href="/"
                        className="md:hidden inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-purple-700 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Home
                    </Link>
                </div>
            </header>

            {/* Hero banner */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl" />
                <div className="container-width section-padding relative py-20 lg:py-24">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur mb-6 ring-1 ring-white/30">
                        <Icon className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">{page.title}</h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed">{page.intro}</p>
                </div>
            </section>

            {/* Content cards */}
            <section className="container-width section-padding py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    {page.sections.map((section, index) => (
                        <article
                            key={section.heading}
                            className={`group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                                page.sections.length % 2 === 1 && index === page.sections.length - 1 ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm font-bold shadow-md">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
                            </div>
                            <div className="space-y-3">
                                {section.body.map((paragraph, i) => (
                                    <p key={i} className="text-gray-600 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Related pages */}
            <section className="container-width section-padding pb-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore more</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {others.map((other) => {
                        const OtherIcon = icons[other.slug] ?? Info;
                        return (
                            <Link
                                key={other.slug}
                                href={`/info/${other.slug}`}
                                className="group flex items-center justify-between rounded-xl bg-white p-5 ring-1 ring-indigo-100 hover:ring-purple-300 hover:shadow-lg transition-all"
                            >
                                <span className="flex items-center gap-3 font-semibold text-gray-900">
                                    <OtherIcon className="w-5 h-5 text-purple-600" />
                                    {other.title}
                                </span>
                                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </main>
    );
}
