"use client";

import { Calendar, BarChart3, Smartphone, CreditCard } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const features = [
        {
            icon: Calendar,
            title: "Online Booking",
            description: "Website with 24/7 booking"
        },
        {
            icon: Smartphone,
            title: "App Mobile",
            description: "Custom app with your brand"
        },
        {
            icon: BarChart3,
            title: "Reports",
            description: "Complete business analytics"
        },
        {
            icon: CreditCard,
            title: "Financial management",
            description: "Payment and commission tracking"
        }
    ];

    return (
        <section id="servicos" className="py-20 bg-white">
            <div className="container-width section-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Everything your <span className="text-gray-600">salon needs</span>
                    </h2>
                    <p className="text-gray-600">Complete management system</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4">
                                <feature.icon className="w-6 h-6 text-gray-700" />
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
                        View plans
                    </Link>
                </div>
            </div>
        </section>
    );
}
