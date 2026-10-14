"use client";

import { MapPin, Smartphone, Globe, Monitor, CheckCircle, Users } from "lucide-react";
import Link from "next/link";

export default function Location() {
    const platformFeatures = [
        {
            icon: Globe,
            title: "Online Presence",
            description: "A custom website for your salon",
            benefits: ["Your own domain", "Exclusive design", "SEO optimized", "Responsive"]
        },
        {
            icon: Smartphone,
            title: "App Mobile",
            description: "An app with your brand",
            benefits: ["Custom logo", "Brand colors", "Push notifications", "Offline mode"]
        },
        {
            icon: Monitor,
            title: "Admin Dashboard",
            description: "Complete business management",
            benefits: ["Real-time dashboard", "Detailed reports", "Staff management", "Full history"]
        }
    ];

    const supportAreas = [
        {
            title: "Setup",
            description: "We configure the entire platform with your salon's data",
            items: ["Service setup", "Schedule configuration", "Photo uploads", "Team training"]
        },
        {
            title: "Technical Support",
            description: "A specialized team to solve any issue",
            items: ["WhatsApp support", "Video calls", "Remote access", "Available 6 days a week"]
        },
        {
            title: "Digital Marketing",
            description: "We help promote your salon online",
            items: ["Google Business Profile setup", "Social media integration", "Post templates", "Email campaigns"]
        }
    ];

    const coverage = [
        { state: "Greater Accra", regions: "Accra, Tema", status: "active" },
        { state: "Ashanti", regions: "Kumasi and surroundings", status: "active" },
        { state: "Western", regions: "Takoradi, Tarkwa", status: "active" },
        { state: "Central", regions: "Cape Coast, Winneba", status: "active" },
        { state: "Eastern", regions: "Koforidua, Nkawkaw", status: "active" },
        { state: "Bono", regions: "Sunyani, Berekum", status: "active" },
        { state: "Northern", regions: "Tamale and surroundings", status: "coming-soon" },
        { state: "Volta", regions: "Ho and surroundings", status: "coming-soon" }
    ];

    return (
        <section id="cobertura" className="py-24 bg-gray-50">
            <div className="container-width section-padding overflow-hidden">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 mb-4">
                        <Globe className="w-4 h-4 mr-2 text-blue-500" />
                        Nationwide Coverage
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Your salon
                        <span className="gradient-text"> anywhere</span>
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Our platform works across Ghana. Wherever your salon is located,
                        you get full access to all features.
                    </p>
                </div>

                {/* Platform Features */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-full overflow-hidden">
                    {platformFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-6">
                                <feature.icon className="w-6 h-6 text-gray-700" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {feature.description}
                            </p>

                            <ul className="space-y-2">
                                {feature.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Support Areas */}
                <div className="bg-white rounded-2xl p-12 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Support & Guidance
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We don't leave you on your own. Our team supports you from setup
                            through the growth of your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-full overflow-hidden">
                        {supportAreas.map((area, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6">
                                    <Users className="w-8 h-8 text-gray-700" />
                                </div>

                                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                    {area.title}
                                </h4>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {area.description}
                                </p>

                                <ul className="space-y-2 text-left">
                                    {area.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coverage Map */}
                <div className="bg-white rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Available Across Ghana
                        </h3>
                        <p className="text-gray-600">
                            We're constantly expanding to serve salons in every region
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full overflow-hidden">
                        {coverage.map((location, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-xl border ${location.status === 'active'
                                    ? 'bg-green-50 border-green-200'
                                    : 'bg-yellow-50 border-yellow-200'
                                    }`}
                            >
                                <div className="flex items-center mb-2">
                                    <MapPin className={`w-4 h-4 mr-2 ${location.status === 'active' ? 'text-green-500' : 'text-yellow-500'
                                        }`} />
                                    <div className={`font-semibold ${location.status === 'active' ? 'text-green-900' : 'text-yellow-900'
                                        }`}>
                                        {location.state}
                                    </div>
                                </div>
                                <div className={`text-sm mb-2 ${location.status === 'active' ? 'text-green-700' : 'text-yellow-700'
                                    }`}>
                                    {location.regions}
                                </div>
                                <div className={`text-xs font-medium ${location.status === 'active' ? 'text-green-600' : 'text-yellow-600'
                                    }`}>
                                    {location.status === 'active' ? 'Available' : 'Coming soon'}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-600 mb-4">
                            Want to be a pioneer in your region? Get in touch!
                        </p>
                        <Link href="#planos" className="btn-primary">
                            <Smartphone className="w-5 h-5 mr-2" />
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
