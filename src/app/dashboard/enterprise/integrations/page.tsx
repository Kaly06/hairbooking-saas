"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plug, CheckCircle, Clock, AlertCircle, Settings, Code, Database, Cloud, Smartphone, CreditCard, Mail, MessageSquare } from "lucide-react";

export default function EnterpriseIntegrationsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
                        <p className="text-gray-600 mt-2">APIs e conectores para sistemas externos</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            New Integration
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            API Documentation
                        </button>
                    </div>
                </div>

                {/* Integration Status Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Integrations Ativas</p>
                                    <p className="text-2xl font-bold text-green-600">18</p>
                                    <p className="text-sm text-gray-500 mt-1">Funcionando</p>
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
                                    <p className="text-2xl font-bold text-yellow-600">3</p>
                                    <p className="text-sm text-gray-500 mt-1">Setup</p>
                                </div>
                                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-yellow-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Com Erro</p>
                                    <p className="text-2xl font-bold text-red-600">1</p>
                                    <p className="text-sm text-gray-500 mt-1">Needs attention</p>
                                </div>
                                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <AlertCircle className="h-6 w-6 text-red-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Chamadas API</p>
                                    <p className="text-2xl font-bold text-blue-600">45.2K</p>
                                    <p className="text-sm text-gray-500 mt-1">This month</p>
                                </div>
                                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Code className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Active Integrations */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plug className="h-5 w-5 text-purple-600" />
                            Integrations Ativas
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Payment Gateway */}
                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <CreditCard className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Stripe</h4>
                                            <p className="text-sm text-gray-600">Gateway de Payment</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs text-green-600">Online</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Transactions today:</span>
                                        <span className="font-medium">247</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Fee de sucesso:</span>
                                        <span className="font-medium text-green-600">98.5%</span>
                                    </div>
                                </div>
                                <button className="w-full mt-3 px-3 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                                    Configurar
                                </button>
                            </div>

                            {/* Email Service */}
                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">SendGrid</h4>
                                            <p className="text-sm text-gray-600">Service de Email</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs text-green-600">Online</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Emails sent:</span>
                                        <span className="font-medium">1.2K</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Fee de entrega:</span>
                                        <span className="font-medium text-green-600">97.8%</span>
                                    </div>
                                </div>
                                <button className="w-full mt-3 px-3 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                                    Configurar
                                </button>
                            </div>

                            {/* WhatsApp */}
                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <MessageSquare className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">WhatsApp Business</h4>
                                            <p className="text-sm text-gray-600">Messages</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs text-green-600">Online</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Messages hoje:</span>
                                        <span className="font-medium">89</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Fee de leitura:</span>
                                        <span className="font-medium text-green-600">94.2%</span>
                                    </div>
                                </div>
                                <button className="w-full mt-3 px-3 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                                    Configurar
                                </button>
                            </div>

                            {/* Google Calendar */}
                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <Cloud className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Google Calendar</h4>
                                            <p className="text-sm text-gray-600">Sync</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs text-green-600">Online</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Syncs:</span>
                                        <span className="font-medium">156</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Last sync:</span>
                                        <span className="font-medium text-blue-600">5 min ago</span>
                                    </div>
                                </div>
                                <button className="w-full mt-3 px-3 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                                    Configurar
                                </button>
                            </div>

                            {/* Slack */}
                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                            <MessageSquare className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Slack</h4>
                                            <p className="text-sm text-gray-600">Notifications</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs text-green-600">Online</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Notifications:</span>
                                        <span className="font-medium">45</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Canal ativo:</span>
                                        <span className="font-medium text-indigo-600">#alerts</span>
                                    </div>
                                </div>
                                <button className="w-full mt-3 px-3 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                                    Configurar
                                </button>
                            </div>

                            {/* Problematic Integration */}
                            <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <Database className="h-5 w-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">ERP Legacy</h4>
                                            <p className="text-sm text-gray-600">Sistema Legado</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-xs text-red-600">Erro</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Last success:</span>
                                        <span className="font-medium text-red-600">2h ago</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Erro:</span>
                                        <span className="font-medium text-red-600">Timeout</span>
                                    </div>
                                </div>
                                <button className="w-full mt-3 px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors">
                                    Diagnosticar
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Available Integrations */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Cloud className="h-5 w-5 text-purple-600" />
                            Available Integrations
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors cursor-pointer">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Smartphone className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h4 className="font-semibold mb-1">Zapier</h4>
                                    <p className="text-sm text-gray-600 mb-3">Workflow automation</p>
                                    <button className="w-full px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors">
                                        Conectar
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors cursor-pointer">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Database className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h4 className="font-semibold mb-1">Salesforce</h4>
                                    <p className="text-sm text-gray-600 mb-3">CRM empresarial</p>
                                    <button className="w-full px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors">
                                        Conectar
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors cursor-pointer">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Settings className="h-6 w-6 text-yellow-600" />
                                    </div>
                                    <h4 className="font-semibold mb-1">HubSpot</h4>
                                    <p className="text-sm text-gray-600 mb-3">Marketing automation</p>
                                    <button className="w-full px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors">
                                        Conectar
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 border border-gray-200 rounded-lg hover:border-purple-400 transition-colors cursor-pointer">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Code className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h4 className="font-semibold mb-1">Webhook</h4>
                                    <p className="text-sm text-gray-600 mb-3">API personalizada</p>
                                    <button className="w-full px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors">
                                        Configurar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* API Management */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* API Endpoints */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Code className="h-5 w-5 text-purple-600" />
                                APIs e Endpoints
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-sm">GET /api/appointments</p>
                                        <p className="text-xs text-gray-600">Listar bookings</p>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-sm">POST /api/clients</p>
                                        <p className="text-xs text-gray-600">Create client</p>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-sm">PUT /api/services</p>
                                        <p className="text-xs text-gray-600">Update service</p>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-sm">DELETE /api/users</p>
                                        <p className="text-xs text-gray-600">Remove user</p>
                                    </div>
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Beta</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <button className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    View Full Documentation
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Integration Logs */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Database className="h-5 w-5 text-purple-600" />
                                Integration Logs
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <div>
                                            <p className="text-sm font-medium">Stripe - Payment processado</p>
                                            <p className="text-xs text-gray-600">Transaction ID: tx_1234567890</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">14:30</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-blue-600" />
                                        <div>
                                            <p className="text-sm font-medium">SendGrid - Email enviado</p>
                                            <p className="text-xs text-gray-600">Booking confirmation</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">14:25</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-yellow-600" />
                                        <div>
                                            <p className="text-sm font-medium">Google Calendar - Sincronizando</p>
                                            <p className="text-xs text-gray-600">Aguardando resposta</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">14:20</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="h-4 w-4 text-red-600" />
                                        <div>
                                            <p className="text-sm font-medium">ERP Legacy - Connection failed</p>
                                            <p className="text-xs text-gray-600">Timeout after 30s</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">14:15</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <button className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    View Logs Completos
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
