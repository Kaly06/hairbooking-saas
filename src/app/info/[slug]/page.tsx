import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import { getInfoPage, infoPages } from "@/lib/info-pages";

export function generateStaticParams() {
    return infoPages.map((page) => ({ slug: page.slug }));
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = getInfoPage(slug);
    if (!page) notFound();

    return (
        <main>
            <header className="bg-white border-b border-gray-200">
                <div className="container-width section-padding py-4 flex items-center justify-between">
                    <Link href="/" className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        HairBooking
                    </Link>
                    <Link href="/" className="text-sm font-medium text-blue-700 hover:text-purple-700">
                        ← Back to home
                    </Link>
                </div>
            </header>

            <section className="bg-white">
                <div className="container-width section-padding py-16 max-w-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{page.title}</h1>
                    <p className="text-lg text-gray-600 mb-12">{page.intro}</p>
                    <div className="space-y-10">
                        {page.sections.map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.heading}</h2>
                                {section.body.map((paragraph, i) => (
                                    <p key={i} className="text-gray-600 leading-relaxed mb-3">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
