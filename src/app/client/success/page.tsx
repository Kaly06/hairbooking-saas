"use client";

import { formatUSD } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
    Check,
    Calendar,
    Clock,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    Download,
    Share2
} from "lucide-react";

export default function BookingSuccessPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                            <Check className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-black">HairBooking</h1>
                            <p className="text-sm text-gray-600">Booking Confirmed</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Success Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-black mb-4">Booking Confirmed!</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your booking was successful. You will receive a confirmation email shortly.
                    </p>
                </div>

                {/* Booking Details */}
                <Card className="max-w-2xl mx-auto mb-8 border-gray-200">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold text-black mb-6">Booking Details</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Calendar className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Date & Time</h3>
                                    <p className="text-gray-600">Tuesday, November 12, 2024</p>
                                    <p className="text-gray-600">14:30 - 15:15</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Local</h3>
                                    <p className="text-gray-600">Osu Branch</p>
                                    <p className="text-gray-600">Oxford Street, 123 - Osu, Accra</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Services</h3>
                                    <p className="text-gray-600">Haircut</p>
                                    <p className="text-gray-600">Duration: 45 minutes</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-5 w-5 text-black" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-black">Branch Contact</h3>
                                    <p className="text-gray-600">+233 24 325 4400</p>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium text-black">Total paid</span>
                                    <span className="text-2xl font-bold text-black">{formatUSD(47.5)}</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Payment processed successfully</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="max-w-2xl mx-auto space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200">
                            <Download className="h-4 w-4" />
                            Download Receipt
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">
                            <Share2 className="h-4 w-4" />
                            Share
                        </button>
                    </div>

                    <button
                        onClick={() => window.location.href = '/client'}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-200"
                    >
                        Make a New Booking
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Important Information */}
                <Card className="max-w-2xl mx-auto mt-8 border-gray-200">
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-black mb-4">Important Information</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Arrive 10 minutes early</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Cancellations must be made at least 2 hours in advance</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>For questions, please contact the branch</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>You will receive an email reminder 1 day before your booking</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="text-center text-gray-600">
                        <p className="mb-4">© 2024 HairBooking. All rights reserved.</p>
                        <div className="flex items-center justify-center gap-8 text-sm">
                            <a href="#" className="hover:text-black transition-colors font-medium">Terms of Use</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Privacy Policy</a>
                            <a href="#" className="hover:text-black transition-colors font-medium">Suporte</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
