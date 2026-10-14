"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Download, Calendar, FileText, Filter, PieChart, LineChart, Target, Users, DollarSign, Clock, Building } from "lucide-react";

export default function EnterpriseReportsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Reports Executivos</h1>
                        <p className="text-gray-600 mt-2">Business intelligence and advanced analytics across branches</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <Download className="h-4 w-4 inline mr-2" />
                            Exportar Dashboard
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <Filter className="h-4 w-4 inline mr-2" />
                            Advanced Filters
                        </button>
                    </div>
                </div>

                {/* Quick Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Revenue YTD</p>
                                    <p className="text-2xl font-bold text-gray-900">R$ 5.24M</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+24.7% vs ano anterior</span>
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
                                    <p className="text-sm font-medium text-gray-600">Atendimentos YTD</p>
                                    <p className="text-2xl font-bold text-gray-900">98.547</p>
                                    <div className="flex items-center mt-1">
                                        <Users className="h-3 w-3 text-blue-500 mr-1" />
                                        <span className="text-sm text-blue-600">+18.3% vs ano anterior</span>
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
                                    <p className="text-sm font-medium text-gray-600">NPS Score</p>
                                    <p className="text-2xl font-bold text-purple-600">87</p>
                                    <div className="flex items-center mt-1">
                                        <Target className="h-3 w-3 text-purple-500 mr-1" />
                                        <span className="text-sm text-purple-600">Excelente qualidade</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Target className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Average Occupancy</p>
                                    <p className="text-2xl font-bold text-orange-600">84.2%</p>
                                    <div className="flex items-center mt-1">
                                        <Clock className="h-3 w-3 text-orange-500 mr-1" />
                                        <span className="text-sm text-orange-600">+6.1% vs ano anterior</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Report Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Financial Reports */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-green-600" />
                                Reports Financeiros
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <button className="w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-green-900">DRE Consolidado</p>
                                        <p className="text-sm text-green-700">Income statement by branch</p>
                                    </div>
                                    <Download className="h-4 w-4 text-green-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-green-900">Fluxo de Caixa</p>
                                        <p className="text-sm text-green-700">Inflow and outflow analysis by period</p>
                                    </div>
                                    <Download className="h-4 w-4 text-green-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-green-900">Margin por Service</p>
                                        <p className="text-sm text-green-700">Analysis of rentabilidade detalhada</p>
                                    </div>
                                    <Download className="h-4 w-4 text-green-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-green-900">ROI por Branch</p>
                                        <p className="text-sm text-green-700">Retorno sobre investimento</p>
                                    </div>
                                    <Download className="h-4 w-4 text-green-600" />
                                </div>
                            </button>
                        </CardContent>
                    </Card>

                    {/* Operational Reports */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-blue-600" />
                                Reports Operacionais
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <button className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-blue-900">Performance de Professionals</p>
                                        <p className="text-sm text-blue-700">Ranking e produtividade individual</p>
                                    </div>
                                    <Download className="h-4 w-4 text-blue-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-blue-900">Occupancy by Time Slot</p>
                                        <p className="text-sm text-blue-700">Peak and idle hour analysis</p>
                                    </div>
                                    <Download className="h-4 w-4 text-blue-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-blue-900">Cancelamentos e No-shows</p>
                                        <p className="text-sm text-blue-700">Analysis of perdas operacionais</p>
                                    </div>
                                    <Download className="h-4 w-4 text-blue-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-blue-900">Efficiency por Branch</p>
                                        <p className="text-sm text-blue-700">Comparativo de performance</p>
                                    </div>
                                    <Download className="h-4 w-4 text-blue-600" />
                                </div>
                            </button>
                        </CardContent>
                    </Card>

                    {/* Customer Reports */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-purple-600" />
                                Reports de Clients
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <button className="w-full p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-purple-900">Advanced Segmentation</p>
                                        <p className="text-sm text-purple-700">Client profile and behavior</p>
                                    </div>
                                    <Download className="h-4 w-4 text-purple-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-purple-900">Churn Analysis</p>
                                        <p className="text-sm text-purple-700">Client loss analysis</p>
                                    </div>
                                    <Download className="h-4 w-4 text-purple-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-purple-900">LTV (Lifetime Value)</p>
                                        <p className="text-sm text-purple-700">Customer lifetime value</p>
                                    </div>
                                    <Download className="h-4 w-4 text-purple-600" />
                                </div>
                            </button>

                            <button className="w-full p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-purple-900">Satisfaction (NPS)</p>
                                        <p className="text-sm text-purple-700">Feedback and recommendation analysis</p>
                                    </div>
                                    <Download className="h-4 w-4 text-purple-600" />
                                </div>
                            </button>
                        </CardContent>
                    </Card>
                </div>

                {/* Advanced Analytics Dashboard */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <LineChart className="h-5 w-5 text-purple-600" />
                            Advanced Analytics Dashboard
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Revenue Forecast */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Revenue Forecast (Next 6 months)</h4>
                                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                        <p className="text-gray-500">Forecast chart with Machine Learning</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <p className="text-lg font-bold text-blue-600">R$ 2.8M</p>
                                        <p className="text-xs text-gray-600">Forecast Q1</p>
                                    </div>
                                    <div className="text-center p-3 bg-green-50 rounded-lg">
                                        <p className="text-lg font-bold text-green-600">R$ 3.1M</p>
                                        <p className="text-xs text-gray-600">Forecast Q2</p>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                                        <p className="text-lg font-bold text-purple-600">+15.7%</p>
                                        <p className="text-xs text-gray-600">Crescimento</p>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Behavior Analysis */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Analysis of Comportamento de Clients</h4>
                                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                        <p className="text-gray-500">Heatmap de Comportamento</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                                        <span className="text-sm">Fidelidade Alta (8+ visitas/ano)</span>
                                        <span className="font-medium text-blue-600">42.3%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                                        <span className="text-sm">Average Loyalty (4-7 visits/year)</span>
                                        <span className="font-medium text-green-600">35.7%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                                        <span className="text-sm">Fidelidade Baixa (1-3 visitas/ano)</span>
                                        <span className="font-medium text-orange-600">22.0%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Performance by Unit Comparison */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-purple-600" />
                            Comparativo Detalhado por Branch
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 font-semibold">Branch</th>
                                        <th className="text-right py-3 px-4 font-semibold">Revenue YTD</th>
                                        <th className="text-right py-3 px-4 font-semibold">Atendimentos</th>
                                        <th className="text-right py-3 px-4 font-semibold">Average Ticket</th>
                                        <th className="text-right py-3 px-4 font-semibold">Occupancy</th>
                                        <th className="text-right py-3 px-4 font-semibold">NPS</th>
                                        <th className="text-right py-3 px-4 font-semibold">Performance</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-blue-50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                <span className="font-medium">Shopping Center</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-right font-bold text-blue-600">R$ 2.14M</td>
                                        <td className="py-3 px-4 text-right">42.389</td>
                                        <td className="py-3 px-4 text-right">R$ 135</td>
                                        <td className="py-3 px-4 text-right">91.2%</td>
                                        <td className="py-3 px-4 text-right">92</td>
                                        <td className="py-3 px-4 text-right">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Excelente
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-green-50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                <span className="font-medium">Centro</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-right font-bold text-green-600">R$ 1.68M</td>
                                        <td className="py-3 px-4 text-right">34.256</td>
                                        <td className="py-3 px-4 text-right">R$ 118</td>
                                        <td className="py-3 px-4 text-right">87.4%</td>
                                        <td className="py-3 px-4 text-right">89</td>
                                        <td className="py-3 px-4 text-right">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Muito Bom
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-orange-50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                                <span className="font-medium">Zona Norte</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-right font-bold text-orange-600">R$ 1.42M</td>
                                        <td className="py-3 px-4 text-right">21.902</td>
                                        <td className="py-3 px-4 text-right">R$ 104</td>
                                        <td className="py-3 px-4 text-right">76.8%</td>
                                        <td className="py-3 px-4 text-right">81</td>
                                        <td className="py-3 px-4 text-right">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Melhorar
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Automated Reports and Insights */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Scheduled Reports */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-purple-600" />
                                Automatic Reports
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <div>
                                        <p className="font-medium text-green-900">Daily Report</p>
                                        <p className="text-sm text-green-700">Sent at 22:00 to managers</p>
                                    </div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div>
                                        <p className="font-medium text-blue-900">Resumo Semanal</p>
                                        <p className="text-sm text-blue-700">Sent Monday at 09:00</p>
                                    </div>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                    <div>
                                        <p className="font-medium text-purple-900">Dashboard Executivo</p>
                                        <p className="text-sm text-purple-700">Enviado mensalmente para diretoria</p>
                                    </div>
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                    <div>
                                        <p className="font-medium text-orange-900">Alertas de Performance</p>
                                        <p className="text-sm text-orange-700">Notifications em tempo real</p>
                                    </div>
                                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    Configurar New Reports
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* AI Insights */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-purple-600" />
                                Insights de IA
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium text-blue-900">Oportunidade de Crescimento</p>
                                            <p className="text-sm text-blue-700">North Zone branch has potential for +30% revenue with optimization of schedules.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium text-green-900">Positive Trend</p>
                                            <p className="text-sm text-green-700">VIP clients grew 45% in the last 3 months. Consider a program de fidelidade premium.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium text-orange-900">Alerta de Sazonalidade</p>
                                            <p className="text-sm text-orange-700">Dezembro historicamente tem queda de 15%. Planejar campanhas promocionais.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                    <div className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-medium text-purple-900">Demand Forecast</p>
                                            <p className="text-sm text-purple-700">Next week will see a 23% demand peak. Consider professionals extras.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Custom Report Builder */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-purple-600" />
                            Construtor de Reports Personalizado
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Available Dimensions</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        "Tempo", "Branch", "Professional", "Service",
                                        "Client", "Payment Method", "Time", "Day of the Week",
                                        "Product", "Category", "Promotion", "Acquisition Channel"
                                    ].map((dimension) => (
                                        <button key={dimension} className="p-2 text-sm bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-200 rounded transition-colors">
                                            {dimension}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Available Metrics</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        "Revenue", "Quantity", "Average Ticket", "Margin",
                                        "Occupancy", "Conversion", "Churn", "LTV",
                                        "NPS", "Satisfaction", "ROI", "EBITDA"
                                    ].map((metric) => (
                                        <button key={metric} className="p-2 text-sm bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-200 rounded transition-colors">
                                            {metric}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex gap-3">
                                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    Create Report Personalizado
                                </button>
                                <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    Save Template
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
