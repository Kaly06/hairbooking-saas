"use client";

import { formatUSD } from "@/lib/utils";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, Star, TrendingUp, Search, Filter, Mail, Phone, Calendar, DollarSign, Building } from "lucide-react";

export default function EnterpriseClientsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Clients Enterprise</h1>
                        <p className="text-gray-600 mt-2">Advanced CRM with unified client management across all branches</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <UserPlus className="h-4 w-4 inline mr-2" />
                            New Client
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Exportar Lista
                        </button>
                    </div>
                </div>

                {/* Client Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Total Clients</p>
                                    <p className="text-2xl font-bold text-gray-900">8.547</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+156 this month</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Clients VIP</p>
                                    <p className="text-2xl font-bold text-purple-600">1.247</p>
                                    <p className="text-sm text-gray-500 mt-1">14.6% do total</p>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Star className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Average Ticket</p>
                                    <p className="text-2xl font-bold text-green-600">{formatUSD(127)}</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+8.2%</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Fee de Retention</p>
                                    <p className="text-2xl font-bold text-orange-600">87.3%</p>
                                    <p className="text-sm text-gray-500 mt-1">Last 12 months</p>
                                </div>
                                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <TrendingUp className="h-6 w-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Search and Filters */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <input
                                        type="text"
                                        placeholder="Search by nome, email, telefone ou CPF..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>Todas as unidades</option>
                                    <option>Downtown Branch</option>
                                    <option>Shopping Branch</option>
                                    <option>North Zone Branch</option>
                                </select>
                                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>All os segmentos</option>
                                    <option>VIP</option>
                                    <option>Frequentes</option>
                                    <option>Ocasionais</option>
                                    <option>Inativos</option>
                                </select>
                                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Filter className="h-4 w-4 inline mr-2" />
                                    Mais Filters
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Client Segmentation */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Client Segmentation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-sm">VIP Premium</span>
                                    </div>
                                    <span className="font-medium">14.6%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm">Frequentes</span>
                                    </div>
                                    <span className="font-medium">32.1%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm">Ocasionais</span>
                                    </div>
                                    <span className="font-medium">41.8%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <span className="text-sm">Inativos</span>
                                    </div>
                                    <span className="font-medium">11.5%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Distribution by Branch</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Shopping Branch</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                                        </div>
                                        <span className="text-sm font-medium">3.846</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Downtown Branch</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                                        </div>
                                        <span className="text-sm font-medium">2.991</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">North Zone Branch</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 bg-gray-200 rounded-full h-2">
                                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                                        </div>
                                        <span className="text-sm font-medium">1.710</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-sm">Reactivation Campaign</span>
                                <span className="text-purple-600">→</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-sm">Programa de Fidelidade</span>
                                <span className="text-purple-600">→</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-sm">Analysis of Comportamento</span>
                                <span className="text-purple-600">→</span>
                            </button>
                        </CardContent>
                    </Card>
                </div>

                {/* Client List */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-purple-600" />
                            List of Clients
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Client Item 1 */}
                            <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        MS
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">Maria Silva Santos</h4>
                                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">VIP</span>
                                        </div>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Mail className="h-4 w-4" />
                                                maria.silva@email.com
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Phone className="h-4 w-4" />
                                                (11) 99999-9999
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                Shopping Branch
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                Last visit: 15/10/2024
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-purple-600">{formatUSD(2450)}</p>
                                        <p className="text-sm text-gray-600">Gasto total</p>
                                        <p className="text-sm text-gray-600">28 visitas</p>
                                    </div>
                                </div>
                            </div>

                            {/* Client Item 2 */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        JS
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">João Santos</h4>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Frequente</span>
                                        </div>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Mail className="h-4 w-4" />
                                                joao.santos@email.com
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Phone className="h-4 w-4" />
                                                (11) 88888-8888
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                Downtown Branch
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                Last visit: 20/10/2024
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">{formatUSD(890)}</p>
                                        <p className="text-sm text-gray-600">Gasto total</p>
                                        <p className="text-sm text-gray-600">15 visitas</p>
                                    </div>
                                </div>
                            </div>

                            {/* Client Item 3 */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        CO
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">Carla Oliveira</h4>
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Ocasional</span>
                                        </div>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Mail className="h-4 w-4" />
                                                carla.oliveira@email.com
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Phone className="h-4 w-4" />
                                                (11) 77777-7777
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                North Zone Branch
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                Last visit: 05/10/2024
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">{formatUSD(320)}</p>
                                        <p className="text-sm text-gray-600">Gasto total</p>
                                        <p className="text-sm text-gray-600">6 visitas</p>
                                    </div>
                                </div>
                            </div>

                            {/* Client Item 4 */}
                            <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        PC
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900">Pedro Costa</h4>
                                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Inactive</span>
                                        </div>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Mail className="h-4 w-4" />
                                                pedro.costa@email.com
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Phone className="h-4 w-4" />
                                                (11) 66666-6666
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Building className="h-4 w-4" />
                                                Downtown Branch
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                Last visit: 15/08/2024
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-red-600">{formatUSD(180)}</p>
                                        <p className="text-sm text-gray-600">Gasto total</p>
                                        <p className="text-sm text-gray-600">3 visitas</p>
                                        <p className="text-xs text-red-600">Inactive for 67 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                Carregar Mais Clients
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
