"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        );
    };

    const faqs = [
        {
            question: "How does the platform get set up in my salon?",
            answer: "The process is simple and quick. Our technical team sets up the entire platform with your salon's data, adds your services and prices, trains your staff and migrates client data (if needed). Full setup takes about 2-3 working days."
        },
        {
            question: "Do I need technical knowledge to use the platform?",
            answer: "No! Our platform is designed to be intuitive and easy to use. We provide full training for you and your team, plus ongoing support. Most salons can use all the features on day one."
        },
        {
            question: "Are my data and my clients' data safe?",
            answer: "Yes! We use industry-best security practices, including data encryption, automatic backups and secure servers. All data stays protected and is accessible only to you and your authorised team."
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Yes! There is no long-term contract. You can cancel whenever you like and keep access to the platform until the end of the paid period. We provide a full backup of your data for download."
        },
        {
            question: "How will the platform grow my revenue?",
            answer: "The platform cuts cancellations by up to 70%, enables 24/7 bookings, automates reminders, organises your schedule, makes rescheduling easy and gives you reports to make data-driven decisions."
        },
        {
            question: "Do I need a specific computer or tablet?",
            answer: "No! Our platform works on any device: computer, tablet, smartphone or laptop. All you need is an internet connection. We also offer basic offline support."
        },
        {
            question: "What if my internet goes down during an appointment?",
            answer: "The platform has offline features that let you keep working on bookings and appointments without internet. When the connection returns, everything syncs automatically."
        },
        {
            question: "Can I customise the platform with my brand?",
            answer: "Yes! On the Professional and Enterprise plans you can customise colours, logo and salon name in the app and website. Your clients will see your brand at every touchpoint, for a consistent experience."
        },
        {
            question: "How does technical support work?",
            answer: "We offer support via WhatsApp (Professional), phone and video calls (Enterprise). Our team is available Monday to Saturday to quickly answer any question or solve any problem."
        },
        {
            question: "Can I connect my current payment system?",
            answer: "Yes! Our platform integrates with the main payment gateways, including Mercado Pago, PagSeguro, Stripe and others. We also support cards, PIX and cash."
        },
        {
            question: "How many professionals can use the platform?",
            answer: "It depends on the plan: Starter (up to 3 professionals), Professional (up to 10 professionals) and Enterprise (unlimited). You can upgrade at any time as your salon grows."
        },
        {
            question: "Does the platform generate financial reports?",
            answer: "Yes! We generate full reports on revenue, commissions, best-selling services, performance by professional, cash flow and more. Everything is real-time, so you can track your business."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-width section-padding">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                        <HelpCircle className="w-4 h-4 mr-2 text-gray-700" />
                        Frequently Asked Questions
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Get your
                        <span className="gradient-text"> questions answered</span>
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Answers to the most common questions about our platform,
                        setup and how it can transform your salon.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0">
                                        {openItems.includes(index) ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                </button>

                                {openItems.includes(index) && (
                                    <div className="px-8 pb-6">
                                        <div className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our team is ready to answer any question and
                        help you see how our platform can transform your salon.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-primary">
                            <HelpCircle className="w-5 h-5 mr-2" />
                            Talk to a Specialist
                        </button>
                        <button className="btn-secondary">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
