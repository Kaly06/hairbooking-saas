"use client";

import Link from "next/link";

export default function Services() {
    const features = [
        {
            image: "/services/online-booking.jpg",
            title: "Online Booking",
            description: "Website with 24/7 booking"
        },
        {
            image: "/services/mobile-app.jpg",
            title: "Mobile App",
            description: "Custom app with your own brand"
        },
        {
            image: "/services/reports.jpg",
            title: "Reports",
            description: "Complete business analytics"
        },
        {
            image: "/services/financial-management.jpg",
            title: "Financial Management",
            description: "Payment and commission tracking"
        }
    ];

    return (
        <section id="servicos" className="py-20 bg-white">
            <div className="container-width section-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Everything <span className="text-gray-600">your salon needs</span>
                    </h2>
                    <p className="text-gray-600">A complete management system</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="#planos" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        View Plans
                    </Link>
                </div>
            </div>
        </section>
    );
}
