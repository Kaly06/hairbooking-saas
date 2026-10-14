"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Abena Owusu",
            business: "Bella Hair Studio",
            text: "A practical system that organized our schedule. Clients love the online booking."
        },
        {
            name: "Kojo Mensah", 
            business: "Kojo's Barbershop",
            text: "The custom app brought real professionalism. Highly recommended."
        },
        {
            name: "Adwoa Sarpong",
            business: "Studio Adwoa", 
            text: "Revenue went up 40%. The reports help a lot."
        }
    ];

    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="container-width section-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What <span className="text-gray-600">our clients say</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            
                            <div>
                                <div className="font-medium text-gray-900 text-sm">
                                    {testimonial.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {testimonial.business}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
