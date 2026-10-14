"use client";

import { Award, Clock, Heart, Shield, Users, TrendingUp, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

const CARD_WIDTH = 320;
const CARD_GAP = 50;
const AUTOPLAY_MS = 3000;

export default function About() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const features = [
        {
            icon: Clock,
            title: "24/7 Bookings",
            description: "Your clients can book at any time, even while you're asleep."
        },
        {
            icon: DollarSign,
            title: "Grow Your Revenue",
            description: "A smart system that optimizes your schedule and increases earnings."
        },
        {
            icon: Users,
            title: "Client Management",
            description: "Full client history and automatic reminders to keep clients coming back."
        },
        {
            icon: Shield,
            title: "Secure Data",
            description: "Bank-level protection and automatic backups of your data."
        },
        {
            icon: TrendingUp,
            title: "Sales Reports",
            description: "Track revenue and performance in real time."
        },
        {
            icon: Award,
            title: "Dedicated Support",
            description: "Specialized team and free training for your staff."
        }
    ];

    const total = features.length;

    // Automatically advance the carousel. Paused on hover/focus and when the
    // user prefers reduced motion.
    useEffect(() => {
        if (paused) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % total);
        }, AUTOPLAY_MS);

        return () => clearInterval(timer);
    }, [paused, total]);

    // Position each card relative to the active one, wrapping around so the
    // carousel loops endlessly.
    const getOffset = (index: number) => {
        let offset = (index - active + total) % total;
        if (offset > total / 2) offset -= total;
        return offset;
    };

    return (
        <section
            id="sobre"
            className="relative overflow-hidden bg-gray-50 py-20"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="container-width section-padding">
                <div className="section-header text-center max-w-3xl mx-auto pb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 mb-4">
                        <Heart className="w-4 h-4 mr-2 text-red-500" />
                        Why choose HairBooking
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Turn your salon into a
                        <span className="gradient-text"> digital business</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Our platform gives you every tool you need to
                        modernize your salon and grow your revenue.
                    </p>
                </div>

                <div
                    className="relative overflow-hidden"
                    style={{ perspective: "1000px", height: "360px", width: "100%" }}
                    aria-roledescription="carousel"
                    aria-live={paused ? "polite" : "off"}
                >
                    {features.map((feature, index) => {
                        const offset = getOffset(index);
                        const distance = Math.abs(offset);
                        const isVisible = distance <= 1;
                        return (
                            <div
                                key={feature.title}
                                className="absolute bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
                                style={{
                                    width: `${CARD_WIDTH}px`,
                                    height: "280px",
                                    left: "50%",
                                    top: "50%",
                                    transform: `translate(-50%, -50%) translateX(${offset * (CARD_WIDTH + CARD_GAP)}px) scale(${offset === 0 ? 1 : 0.8}) rotateY(${-offset * 15}deg)`,
                                    opacity: isVisible ? (offset === 0 ? 1 : 0.5) : 0,
                                    zIndex: total - distance,
                                    transition: "transform 0.8s ease, opacity 0.8s ease",
                                    willChange: "transform, opacity",
                                    pointerEvents: offset === 0 ? "auto" : "none",
                                }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-6 mx-auto">
                                    <feature.icon className="w-8 h-8 text-gray-700" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed text-center">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {features.map((feature, index) => (
                        <button
                            key={feature.title}
                            type="button"
                            onClick={() => setActive(index)}
                            aria-label={`Show ${feature.title}`}
                            className={`h-2 rounded-full transition-all duration-300 ${index === active ? "w-6 bg-gray-900" : "w-2 bg-gray-300"}`}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-24">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">+40%</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Revenue Increase</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">-60%</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Fewer Cancellations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">24/7</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Online Bookings</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
                        <div className="text-xs sm:text-sm lg:text-base text-gray-600">Organized Schedule</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
