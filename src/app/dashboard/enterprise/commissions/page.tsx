"use client";

import { formatUSD } from "@/lib/utils";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, TrendingUp, DollarSign, Award, BarChart3, Star, Target, Calendar, Settings } from "lucide-react";

export default function EnterpriseCommissionsPage() {
    return (
        <DashboardLayout plan="enterprise">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Commissions & performance</h1>
                        <p className="text-gray-600 mt-2">Advanced commission and incentive management across branches</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                            <Settings className="h-4 w-4 inline mr-2" />
                            Configure plans
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Monthly Report
                        </button>
                    </div>
                </div>

                {/* Commission Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Commissions Pagas</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatUSD(89200)}</p>
                                    <div className="flex items-center mt-1">
                                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                        <span className="text-sm text-green-600">+15.8% vs last month</span>
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
                                    <p className="text-sm font-medium text-gray-600">Professionals Active</p>
                                    <p className="text-2xl font-bold text-gray-900">47</p>
                                    <div className="flex items-center mt-1">
                                        <Users className="h-3 w-3 text-blue-500 mr-1" />
                                        <span className="text-sm text-blue-600">Across 12 units</span>
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
                                    <p className="text-sm font-medium text-gray-600">Average Performance</p>
                                    <p className="text-2xl font-bold text-purple-600">18.4%</p>
                                    <div className="flex items-center mt-1">
                                        <Trophy className="h-3 w-3 text-purple-500 mr-1" />
                                        <span className="text-sm text-purple-600">Commission rate</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Award className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">Top Performer</p>
                                    <p className="text-2xl font-bold text-orange-600">{formatUSD(8500)}</p>
                                    <div className="flex items-center mt-1">
                                        <Star className="h-3 w-3 text-orange-500 mr-1" />
                                        <span className="text-sm text-orange-600">Abena Owusu</span>
                                    </div>
                                </div>
                                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Trophy className="h-6 w-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Top Performers */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-purple-600" />
                            Top 10 Professionals - Commissions this month
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Rank 1 */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">1</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-yellow-900">Abena Owusu</p>
                                        <p className="text-sm text-yellow-700">Shopping Branch • Senior Hairdresser</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-yellow-900">{formatUSD(8532)}</p>
                                    <p className="text-sm text-yellow-700">147 services • 22.5%</p>
                                </div>
                            </div>

                            {/* Rank 2 */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">2</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Kwabena Mensah</p>
                                        <p className="text-sm text-gray-700">Osu Branch • Barber Specialist</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">{formatUSD(7284)}</p>
                                    <p className="text-sm text-gray-700">129 services • 19.8%</p>
                                </div>
                            </div>

                            {/* Rank 3 */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">3</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-orange-900">Afia Asante</p>
                                        <p className="text-sm text-orange-700">Shopping Branch • Colorist</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-orange-900">{formatUSD(6947)}</p>
                                    <p className="text-sm text-orange-700">118 services • 21.2%</p>
                                </div>
                            </div>

                            {/* Remaining Top 10 */}
                            <div className="space-y-2">
                                {[
                                    { name: "Esi Amoah", unit: "Osu", role: "Manicurist", commission: "6.451", services: "98", rate: "18.7%" },
                                    { name: "Samuel Tetteh", unit: "Airport Residential", role: "Hairdresser", commission: "5.873", services: "85", rate: "17.9%" },
                                    { name: "Lucia Ferreira", unit: "Shopping", role: "Esthetician", commission: "5.629", services: "92", rate: "19.3%" },
                                    { name: "Joseph Quaye", unit: "Osu", role: "Barber", commission: "5.284", services: "74", rate: "16.8%" },
                                    { name: "Grace Oppong", unit: "Airport Residential", role: "Hairdresser", commission: "4.932", services: "67", rate: "18.1%" },
                                    { name: "Fred Agyeman", unit: "Shopping", role: "Barber", commission: "4.657", services: "71", rate: "17.2%" },
                                    { name: "Mavis Ansah", unit: "Osu", role: "Colorist", commission: "4.389", services: "59", rate: "20.4%" }
                                ].map((professional, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-gray-700 font-medium text-sm">{index + 4}</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{professional.name}</p>
                                                <p className="text-sm text-gray-600">{professional.unit} • {professional.role}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">{formatUSD(professional.commission)}</p>
                                            <p className="text-sm text-gray-600">{professional.services} services • {professional.rate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Commission Structures and Unit Performance */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Commission Structures */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-purple-600" />
                                Commission structures
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Basic Plan */}
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-blue-900">Basic Plan</h4>
                                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">15 professionals</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-700">{formatUSD(0)} - {formatUSD(3000)}:</span>
                                        <span className="font-medium text-blue-900">15%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-700">{formatUSD(3001)} - {formatUSD(6000)}:</span>
                                        <span className="font-medium text-blue-900">18%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-blue-700">Acima de {formatUSD(6000)}:</span>
                                        <span className="font-medium text-blue-900">20%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Plan */}
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-green-900">Plan Professional</h4>
                                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">22 professionals</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-green-700">{formatUSD(0)} - {formatUSD(4000)}:</span>
                                        <span className="font-medium text-green-900">18%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-green-700">{formatUSD(4001)} - {formatUSD(8000)}:</span>
                                        <span className="font-medium text-green-900">22%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-green-700">Acima de {formatUSD(8000)}:</span>
                                        <span className="font-medium text-green-900">25%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-purple-900">Plan Premium</h4>
                                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">10 professionals</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-purple-700">{formatUSD(0)} - {formatUSD(5000)}:</span>
                                        <span className="font-medium text-purple-900">20%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-purple-700">{formatUSD(5001)} - {formatUSD(10000)}:</span>
                                        <span className="font-medium text-purple-900">25%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-purple-700">Acima de {formatUSD(10000)}:</span>
                                        <span className="font-medium text-purple-900">30%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Unit Performance */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-purple-600" />
                                Performance by branch
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Unit 1 */}
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-blue-900">Shopping Branch</h4>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                        <span className="text-sm font-medium text-blue-900">Top Unit</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-blue-700">Commissions Pagas:</p>
                                        <p className="font-bold text-blue-900">{formatUSD(42800)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Professionals:</p>
                                        <p className="font-bold text-blue-900">18</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Individual Average:</p>
                                        <p className="font-bold text-blue-900">{formatUSD(2378)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-700">Average fee:</p>
                                        <p className="font-bold text-blue-900">21.6%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Unit 2 */}
                            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-green-900">Osu Branch</h4>
                                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Growth</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-green-700">Commissions Pagas:</p>
                                        <p className="font-bold text-green-900">{formatUSD(28700)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-700">Professionals:</p>
                                        <p className="font-bold text-green-900">15</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-700">Individual Average:</p>
                                        <p className="font-bold text-green-900">{formatUSD(1913)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-700">Average fee:</p>
                                        <p className="font-bold text-green-900">18.4%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Unit 3 */}
                            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-orange-900">Airport Residential Branch</h4>
                                    <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full">Potencial</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-orange-700">Commissions Pagas:</p>
                                        <p className="font-bold text-orange-900">{formatUSD(17700)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-orange-700">Professionals:</p>
                                        <p className="font-bold text-orange-900">14</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-orange-700">Individual Average:</p>
                                        <p className="font-bold text-orange-900">{formatUSD(1264)}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-orange-700">Average fee:</p>
                                        <p className="font-bold text-orange-900">15.2%</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Monthly Trends and Incentives */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Monthly Commission Trends */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-purple-600" />
                                Monthly Commission Trend
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                                <div className="text-center">
                                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Commission trend chart</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                    <p className="text-lg font-bold text-blue-600">{formatUSD(89000)}</p>
                                    <p className="text-xs text-gray-600">November</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                    <p className="text-lg font-bold text-green-600">{formatUSD(77000)}</p>
                                    <p className="text-xs text-gray-600">October</p>
                                </div>
                                <div className="text-center p-3 bg-purple-50 rounded-lg">
                                    <p className="text-lg font-bold text-purple-600">+15.8%</p>
                                    <p className="text-xs text-gray-600">Growth</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Incentive Programs */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-purple-600" />
                                Incentive programmes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                {/* Monthly Goal */}
                                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-green-900">Monthly Target</h4>
                                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Active</span>
                                    </div>
                                    <p className="text-sm text-green-700 mb-3">{formatUSD(500)} bonus for anyone reaching {formatUSD(8)} in commissions</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Eligible:</span>
                                            <span className="font-medium">8 professionals</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Already earned:</span>
                                            <span className="font-medium text-green-600">3 professionals</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quarterly Challenge */}
                                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-blue-900">Quarterly challenge</h4>
                                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Q4 2024</span>
                                    </div>
                                    <p className="text-sm text-blue-700 mb-3">Top 5 receive a training trip + bonus</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Participantes:</span>
                                            <span className="font-medium">47 professionals</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Current leader:</span>
                                            <span className="font-medium text-blue-600">Abena Owusu</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Team Achievement */}
                                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-semibold text-purple-900">Team target</h4>
                                        <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">87%</span>
                                    </div>
                                    <p className="text-sm text-purple-700 mb-3">{formatUSD(100000)} in commissions = team celebration</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Target:</span>
                                            <span className="font-medium">{formatUSD(100000)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Atual:</span>
                                            <span className="font-medium text-purple-600">{formatUSD(87200)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Detailed Analytics */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                            Detailed performance analysis
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Distribution by Tier</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                        <span className="text-sm font-medium text-red-800">{formatUSD(0)} - {formatUSD(2000)}</span>
                                        <span className="font-bold text-red-600">12 professionals</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                                        <span className="text-sm font-medium text-yellow-800">{formatUSD(2001)} - {formatUSD(5000)}</span>
                                        <span className="font-bold text-yellow-600">18 professionals</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                        <span className="text-sm font-medium text-green-800">{formatUSD(5001)} - {formatUSD(8000)}</span>
                                        <span className="font-bold text-green-600">12 professionals</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                        <span className="text-sm font-medium text-blue-800">Acima de {formatUSD(8000)}</span>
                                        <span className="font-bold text-blue-600">5 professionals</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Goals & achievements</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-sm font-medium text-green-800">Targets achieved</p>
                                        <p className="text-2xl font-bold text-green-600">28</p>
                                        <p className="text-xs text-green-600">59.6% of professionals</p>
                                    </div>
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-sm font-medium text-blue-800">In progress</p>
                                        <p className="text-2xl font-bold text-blue-600">13</p>
                                        <p className="text-xs text-blue-600">27.7% of professionals</p>
                                    </div>
                                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                        <p className="text-sm font-medium text-orange-800">Necessitam Support</p>
                                        <p className="text-2xl font-bold text-orange-600">6</p>
                                        <p className="text-xs text-orange-600">12.7% of professionals</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Recommended Actions</h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                                        <p className="text-sm font-medium text-purple-800">Training for North Zone</p>
                                        <p className="text-xs text-purple-600">Performance 23% below average</p>
                                    </div>
                                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-sm font-medium text-blue-800">Mentoria New Professionals</p>
                                        <p className="text-xs text-blue-600">6 professionals abaixo de {formatUSD(1500)}</p>
                                    </div>
                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-sm font-medium text-green-800">Recognition program</p>
                                        <p className="text-xs text-green-600">Keep top performers motivated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
