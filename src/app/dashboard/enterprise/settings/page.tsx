"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, Bell, Shield, Globe, Palette, Database, Mail, Smartphone, Key, Lock, Eye } from "lucide-react";

export default function EnterpriseSettingsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Settings Enterprise</h1>
                        <p className="text-gray-600 mt-2">Advanced settings for multi-branch administration</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            Save Todas as Settings
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Exportar Settings
                        </button>
                    </div>
                </div>

                {/* Configuration Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* General Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5 text-purple-600" />
                                Settings Gerais
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name da Empresa</label>
                                    <input type="text" value="HairBooking Enterprise" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">CNPJ</label>
                                    <input type="text" value="00.000.000/0001-00" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                                </div>

                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Fuso Time</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                        <option>America/Sao_Paulo</option>
                                        <option>America/Brasilia</option>
                                        <option>America/Recife</option>
                                    </select>
                                </div>

                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                        <option>USD - US Dollar</option>
                                    </select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* User Management */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-blue-600" />
                                Management de Users
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-blue-900">Administradores</span>
                                        <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">5 users</span>
                                    </div>
                                    <button className="text-sm text-blue-600 hover:text-blue-800">Gerenciar administradores</button>
                                </div>

                                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-green-900">Gerentes de Branch</span>
                                        <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded">12 users</span>
                                    </div>
                                    <button className="text-sm text-green-600 hover:text-green-800">Gerenciar gerentes</button>
                                </div>

                                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-purple-900">Professionals</span>
                                        <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">47 users</span>
                                    </div>
                                    <button className="text-sm text-purple-600 hover:text-purple-800">Gerenciar profissionais</button>
                                </div>

                                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-orange-900">Atendentes</span>
                                        <span className="text-sm bg-orange-200 text-orange-800 px-2 py-1 rounded">18 users</span>
                                    </div>
                                    <button className="text-sm text-orange-600 hover:text-orange-800">Gerenciar atendentes</button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Security Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-red-600" />
                                Security
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Lock className="h-4 w-4 text-red-600" />
                                        <span className="text-sm font-medium text-red-900">Two-Factor Auth (2FA)</span>
                                    </div>
                                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Ativado</button>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Key className="h-4 w-4 text-yellow-600" />
                                        <span className="text-sm font-medium text-yellow-900">Password Policies</span>
                                    </div>
                                    <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">Configurar</button>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-4 w-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-900">Auditoria de Acesso</span>
                                    </div>
                                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Active</button>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Database className="h-4 w-4 text-blue-600" />
                                        <span className="text-sm font-medium text-blue-900">Automatic Backup</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Daily</button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Notification Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-purple-600" />
                            Notification Settings
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Notifications por Email</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-green-900">Daily Reports</p>
                                            <p className="text-sm text-green-700">Daily activity summary</p>
                                        </div>
                                        <button className="w-12 h-6 bg-green-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-blue-900">Alertas de Sistema</p>
                                            <p className="text-sm text-blue-700">Notifications importantes</p>
                                        </div>
                                        <button className="w-12 h-6 bg-blue-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">Marketing</p>
                                            <p className="text-sm text-gray-700">Campaigns and promotions</p>
                                        </div>
                                        <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Notifications Push</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-purple-900">New Bookings</p>
                                            <p className="text-sm text-purple-700">Em tempo real</p>
                                        </div>
                                        <button className="w-12 h-6 bg-purple-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-orange-900">Cancelamentos</p>
                                            <p className="text-sm text-orange-700">Imediatos</p>
                                        </div>
                                        <button className="w-12 h-6 bg-orange-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-red-900">Emergencies</p>
                                            <p className="text-sm text-red-700">Critical alerts</p>
                                        </div>
                                        <button className="w-12 h-6 bg-red-500 rounded-full relative">
                                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Integration Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-purple-600" />
                            Integrations e APIs
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Integrations Ativas</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">$</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-green-900">Stripe Payment</p>
                                                <p className="text-sm text-green-700">Processamento de pagamentos</p>
                                            </div>
                                        </div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Mail className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-blue-900">SendGrid</p>
                                                <p className="text-sm text-blue-700">Envio de emails transacionais</p>
                                            </div>
                                        </div>
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                                <Smartphone className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-purple-900">Twilio SMS</p>
                                                <p className="text-sm text-purple-700">Notifications por SMS</p>
                                            </div>
                                        </div>
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Available APIs</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-900">API REST v2</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Ativa</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">Acesso completo aos dados</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800">View documentation</button>
                                    </div>

                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-900">Webhooks</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Configurado</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">Eventos em tempo real</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800">Configurar endpoints</button>
                                    </div>

                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-900">GraphQL</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Beta</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">Flexible queries</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800">Solicitar acesso</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Branding and Customization */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Palette className="h-5 w-5 text-purple-600" />
                            Brand Customization
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Appearance</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Logo Principal</label>
                                        <div className="w-32 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                                            <span className="text-purple-600 text-sm">Logo Atual</span>
                                        </div>
                                        <button className="text-sm text-purple-600 hover:text-purple-800">Alterar logo</button>
                                    </div>

                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-purple-600 rounded-full border-2 border-gray-300"></div>
                                            <input type="text" value="#9333EA" className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                        </div>
                                    </div>

                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-gray-300"></div>
                                            <input type="text" value="#2563EB" className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">White Label</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-blue-900">Custom Domain</span>
                                            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Active</span>
                                        </div>
                                        <p className="text-sm text-blue-700">booking.suasalao.com.br</p>
                                        <button className="text-sm text-blue-600 hover:text-blue-800 mt-1">Change domain</button>
                                    </div>

                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-green-900">Certificado SSL</span>
                                            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">Valid</span>
                                        </div>
                                        <p className="text-sm text-green-700">Expira em 12/03/2025</p>
                                    </div>

                                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-purple-900">App Mobile</span>
                                            <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Available</span>
                                        </div>
                                        <p className="text-sm text-purple-700">iOS & Android customizados</p>
                                        <button className="text-sm text-purple-600 hover:text-purple-800 mt-1">Configurar apps</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Backup and Recovery */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Database className="h-5 w-5 text-purple-600" />
                            Backup & Recovery
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Automatic Backup</h4>
                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-sm font-medium text-green-900 mb-1">Frequency: Daily</p>
                                    <p className="text-sm text-green-700 mb-1">Hora: 02:00 AM</p>
                                    <p className="text-sm text-green-700">Last backup: Today, 02:15</p>
                                </div>
                                <button className="w-full px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                                    Configurar Backup
                                </button>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Retention de Data</h4>
                                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm font-medium text-blue-900 mb-1">Backups locais: 30 dias</p>
                                    <p className="text-sm text-blue-700 mb-1">Cloud backup: 1 ano</p>
                                    <p className="text-sm text-blue-700">Arquivos: 2 anos</p>
                                </div>
                                <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                                    Change Policy
                                </button>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Recovery</h4>
                                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                    <p className="text-sm font-medium text-purple-900 mb-1">RTO: &lt; 1 hora</p>
                                    <p className="text-sm text-purple-700 mb-1">RPO: &lt; 15 minutos</p>
                                    <p className="text-sm text-purple-700">Last recovery: N/A</p>
                                </div>
                                <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700">
                                    Recovery Test
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
