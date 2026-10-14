"use client";

import Link from "next/link";
import {
    Scissors,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Twitter,
    Clock,
    Heart
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: [
            { name: "How it works", href: "#como-funciona" },
            { name: "Our services", href: "#servicos" },
            { name: "Plans & pricing", href: "#planos" },
            { name: "Locations", href: "#localizacao" }
        ],
        support: [
            { name: "Help center", href: "#ajuda" },
            { name: "Contact us", href: "#contato" },
            { name: "WhatsApp", href: "#whatsapp" },
            { name: "Platform status", href: "#status" }
        ],
        company: [
            { name: "About us", href: "#sobre" },
            { name: "Careers", href: "#carreiras" },
            { name: "Partners", href: "#parceiros" },
            { name: "Press", href: "#imprensa" }
        ],
        legal: [
            { name: "Terms of use", href: "#termos" },
            { name: "Privacy policy", href: "#privacidade" },
            { name: "Cookies", href: "#cookies" },
            { name: "LGPD", href: "#lgpd" }
        ]
    };

    const socialLinks = [
        { name: "Instagram", icon: Instagram, href: "#instagram" },
        { name: "Facebook", icon: Facebook, href: "#facebook" },
        { name: "Twitter", icon: Twitter, href: "#twitter" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container-width section-padding py-16">
                <div className="grid lg:grid-cols-6 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                                <Scissors className="w-4 h-4 text-gray-900" />
                            </div>
                            <span className="text-xl font-bold text-white">HairBooking</span>
                        </Link>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            The platform that transforms the salon experience,
                            connecting you with the best professionals through cutting-edge technology
                            and personalized service.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <Phone className="w-4 h-4 mr-3" />
                                <span className="text-sm">(11) 4000-0000</span>
                            </div>

                            <div className="flex items-center text-gray-300">
                                <Mail className="w-4 h-4 mr-3" />
                                <span className="text-sm">contato@hairbooking.com</span>
                            </div>

                            <div className="flex items-start text-gray-300">
                                <MapPin className="w-4 h-4 mr-3 mt-0.5" />
                                <span className="text-sm">
                                    Rua Augusta, 123 - Centro<br />
                                    São Paulo, SP - 01305-000
                                </span>
                            </div>

                            <div className="flex items-start text-gray-300">
                                <Clock className="w-4 h-4 mr-3 mt-0.5" />
                                <span className="text-sm">
                                    Support: Mon-Fri 8am to 6pm<br />
                                    24/7 support via WhatsApp
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Platform</h3>
                        <ul className="space-y-3">
                            {footerLinks.platform.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Stay up to date
                            </h3>
                            <p className="text-gray-300">
                                Get beauty tips, exclusive offers and platform news
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none"
                            />
                            <button className="btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container-width section-padding py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-sm text-gray-400">
                            © {currentYear} HairBooking. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400 mr-2">Follow us:</span>
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4 text-gray-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Made with love */}
                        <div className="flex items-center text-sm text-gray-400">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 mx-1 text-red-500" />
                            <span>in São Paulo</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
