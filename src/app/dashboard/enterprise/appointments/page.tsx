"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Building, Filter, Plus, Search, MoreHorizontal, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function EnterpriseAppointmentsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Bookings Enterprise</h1>
                        <p className="text-gray-600 mt-2">Centralized management of bookings em todas as unidades</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <Plus className="h-4 w-4 inline mr-2" />
                            New Booking
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <Filter className="h-4 w-4 inline mr-2" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Today</p>
                                    <p className="text-2xl font-bold text-gray-900">347</p>
                                    <p className="text-sm text-gray-500 mt-1">Todas as unidades</p>
                                </div>
                                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Confirmed</p>
                                    <p className="text-2xl font-bold text-green-600">312</p>
                                    <p className="text-sm text-gray-500 mt-1">89.9% do total</p>
                                </div>
                                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Pending</p>
                                    <p className="text-2xl font-bold text-yellow-600">23</p>
                                    <p className="text-sm text-gray-500 mt-1">Awaiting confirmation</p>
                                </div>
                                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Cancelled</p>
                                    <p className="text-2xl font-bold text-red-600">12</p>
                                    <p className="text-sm text-gray-500 mt-1">3.5% do total</p>
                                </div>
                                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <XCircle className="h-6 w-6 text-red-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters and Search */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <input
                                        type="text"
                                        placeholder="Search by client, professional or service..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>Todas as unidades</option>
                                    <option>Downtown Branch</option>
                                    <option>Shopping Branch</option>
                                    <option>North Zone Branch</option>
                                </select>
                                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>Today</option>
                                    <option>This week</option>
                                    <option>This month</option>
                                    <option>Custom period</option>
                                </select>
                                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>All os status</option>
                                    <option>Confirmed</option>
                                    <option>Pending</option>
                                    <option>Cancelled</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Appointments List */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-purple-600" />
                            Today's Bookings
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Appointment Item 1 */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Users className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">Maria Silva</h4>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Confirmed</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                14:30 - 15:30
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                Downtown Branch
                                            </div>
                                            <span>Haircut + Escova</span>
                                            <span>Ana Paula (Professional)</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">R$ 120,00</p>
                                        <p className="text-sm text-gray-600">Dinheiro</p>
                                    </div>
                                </div>
                                <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Appointment Item 2 */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Users className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">João Santos</h4>
                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                15:00 - 16:00
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                Shopping Branch
                                            </div>
                                            <span>Men's Haircut</span>
                                            <span>Carlos Lima (Professional)</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">R$ 45,00</p>
                                        <p className="text-sm text-gray-600">Card</p>
                                    </div>
                                </div>
                                <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Appointment Item 3 */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Users className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">Carla Oliveira</h4>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Confirmed</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                16:00 - 18:00
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                Downtown Branch
                                            </div>
                                            <span>Coloring + Haircut</span>
                                            <span>Fernanda Costa (Professional)</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">R$ 280,00</p>
                                        <p className="text-sm text-gray-600">PIX</p>
                                    </div>
                                </div>
                                <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Appointment Item 4 */}
                            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                        <Users className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">Pedro Costa</h4>
                                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Cancelled</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                17:00 - 17:45
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                North Zone Branch
                                            </div>
                                            <span>Barba + Bigode</span>
                                            <span>Motivo: Client cancelou</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-red-600 line-through">R$ 35,00</p>
                                        <p className="text-sm text-gray-600">Cancelled</p>
                                    </div>
                                </div>
                                <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <MoreHorizontal className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                Carregar Mais Bookings
                            </button>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <span>Daily Bookings Report</span>
                                <span className="text-purple-600">→</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <span>Set up automatic reminders</span>
                                <span className="text-purple-600">→</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <span>Gerenciar Times por Branch</span>
                                <span className="text-purple-600">→</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <span>Analysis of Occupancy</span>
                                <span className="text-purple-600">→</span>
                            </button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Performance por Branch</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Shopping Branch</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium">94%</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Downtown Branch</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium">89%</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">North Zone Branch</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium">65%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
