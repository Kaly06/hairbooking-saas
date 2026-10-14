"use client";

import { formatUSD } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CheckCircle,
    Calendar,
    Clock,
    MapPin,
    Phone,
    Mail,
    Download,
    Share2,
    Edit,
    Trash2,
    Plus,
    Scissors,
    Star,
    ArrowLeft
} from "lucide-react";

export default function BookingSuccessPage() {

    // Mock data for the booking confirmado
    const booking = {
        id: "BK-2024-001234",
        date: "2024-11-15",
        time: "14:30",
        duration: 90,
        total: 145.50,
        status: "confirmed",
        unit: {
            name: "Shopping Center Branch",
            address: "Independence Avenue, 4666 - Ridge, Accra",
            phone: "(21) 3325-4400"
        },
        customer: {
            name: "João Silva",
            email: "joao@email.com",
            phone: "(21) 99999-9999"
        },
        services: [
            { name: "Haircut", price: 45, duration: 45 },
            { name: "Hair Treatment", price: 65, duration: 60 },
            { name: "Eyebrow Design", price: 25, duration: 30 }
        ],
        professional: "Marina Silva",
        paymentMethod: "Credit Card"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                                <Scissors className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">HairBooking</h1>
                                <p className="text-xs text-gray-600">Booking confirmed</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="text-sm">New booking</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Success Message */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
                    <p className="text-gray-600 text-lg">Your appointment has been booked successfully</p>
                </div>

                {/* Booking Details */}
                <Card className="mb-8">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                        <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-green-600" />
                                <span>Booking Details</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                    Confirmed
                                </span>
                                <span className="text-sm text-gray-500">#{booking.id}</span>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Main Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Key Information</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <Calendar className="h-5 w-5 text-purple-600" />
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {new Date(booking.date).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                <p className="text-sm text-gray-600">Data do booking</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <Clock className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-900">{booking.time} - {
                                                    new Date(`2024-01-01 ${booking.time}`).getTime() + booking.duration * 60000 > 0
                                                        ? new Date(new Date(`2024-01-01 ${booking.time}`).getTime() + booking.duration * 60000).toTimeString().slice(0, 5)
                                                        : "16:00"
                                                }</p>
                                                <p className="text-sm text-gray-600">Duration: {booking.duration} minutes</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                            <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-gray-900">{booking.unit.name}</p>
                                                <p className="text-sm text-gray-600">{booking.unit.address}</p>
                                                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                                                    <Phone className="h-3 w-3" />
                                                    {booking.unit.phone}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Professional</h3>
                                    <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                            <Star className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-purple-900">{booking.professional}</p>
                                            <p className="text-sm text-purple-700">Specialist in haircuts and coloring</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                                                ))}
                                                <span className="text-xs text-purple-600 ml-1">4.9 (847 reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Services & Payment */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Selected Services</h3>
                                    <div className="space-y-3">
                                        {booking.services.map((service, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <Scissors className="h-4 w-4 text-purple-600" />
                                                    <div>
                                                        <p className="font-medium text-gray-900">{service.name}</p>
                                                        <p className="text-sm text-gray-600">{service.duration} min</p>
                                                    </div>
                                                </div>
                                                <span className="font-medium text-gray-900">{formatUSD(service.price)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Payment Summary</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Subtotal:</span>
                                            <span>{formatUSD(booking.total - 2.5)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Service fee:</span>
                                            <span>{formatUSD(2.5)}</span>
                                        </div>
                                        <div className="border-t pt-2 flex justify-between font-bold">
                                            <span>Total Paid:</span>
                                            <span className="text-green-600">{formatUSD(booking.total)}</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mt-2">
                                            <span>Forma de pagamento: {booking.paymentMethod}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-4">Your Details</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="font-medium">Name:</span>
                                            <span className="text-gray-600">{booking.customer.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Mail className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-600">{booking.customer.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Phone className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-600">{booking.customer.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <button className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-purple-300">
                        <Download className="h-5 w-5 text-purple-600" />
                        <span className="font-medium text-gray-900">Baixar Comprovante</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                        <Share2 className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-gray-900">Compartilhar</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-orange-300">
                        <Edit className="h-5 w-5 text-orange-600" />
                        <span className="font-medium text-gray-900">Reagendar</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 p-4 bg-white border border-red-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-red-400 text-red-600">
                        <Trash2 className="h-5 w-5" />
                        <span className="font-medium">Cancel</span>
                    </button>
                </div>

                {/* Important Notes */}
                <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-blue-900 mb-4">Important Information</h3>
                        <div className="space-y-3 text-sm text-blue-800">
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                <p>Please arrive 10 minutes early to avoid delays</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                <p>Cancellations must be made at least 2 hours in advance</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                <p>You will receive a notification 1 hour before your appointment</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                <p>For questions, please contact the branch by phone</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* New Booking CTA */}
                <div className="text-center mt-12">
                    <a
                        href="/booking"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <Plus className="h-5 w-5" />
                        <span>Book Again</span>
                    </a>
                    <p className="text-gray-600 text-sm mt-4">Enjoyed your visit? Book your next appointment!</p>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-16">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="text-center text-gray-600">
                        <p className="mb-2">© 2024 HairBooking. All rights reserved.</p>
                        <div className="flex items-center justify-center gap-6 text-sm">
                            <a href="#" className="hover:text-purple-600 transition-colors">Cancellation Policy</a>
                            <a href="#" className="hover:text-purple-600 transition-colors">Suporte</a>
                            <a href="#" className="hover:text-purple-600 transition-colors">Rate your visit</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
