"use client";

import { formatUSD } from "@/lib/utils";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Calendar,
    DollarSign,
    Users,
    Star,
    Scissors,
    Download,
    Target,
    Award,
    Zap
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalReports() {
    const [dateRange, setDateRange] = useState("thisMonth");
    const [reportType, setReportType] = useState("overview");

    // Mock data for advanced reports
    const advancedData = {
        revenue: {
            current: 18450,
            previous: 15230,
            target: 20000,
            growth: 21.1
        },
        appointments: {
            current: 234,
            previous: 198,
            target: 250,
            growth: 18.2
        },
        clients: {
            current: 142,
            previous: 128,
            newClients: 14,
            retention: 89.4
        },
        averageTicket: {
            current: 78.85,
            previous: 76.92,
            growth: 2.5
        },
        satisfaction: {
            current: 4.7,
            previous: 4.5,
            totalReviews: 189
        }
    };

    // Performance data by professional
    const professionalPerformance = [
        {
            name: "Ama Owusu",
            appointments: 89,
            revenue: 8920,
            averageTicket: 100.22,
            satisfaction: 4.8,
            growth: 15.3,
            efficiency: 92
        },
        {
            name: "Kwesi Asare",
            appointments: 78,
            revenue: 4680,
            averageTicket: 60.00,
            satisfaction: 4.6,
            growth: 8.2,
            efficiency: 88
        },
        {
            name: "Akua Darko",
            appointments: 67,
            revenue: 4850,
            averageTicket: 72.39,
            satisfaction: 4.9,
            growth: 12.7,
            efficiency: 95
        }
    ];

    // Analysis of services
    const serviceAnalysis = [
        {
            name: "Haircut + Coloring",
            quantity: 45,
            revenue: 8100,
            averagePrice: 180,
            margin: 65,
            growth: 22.5,
            satisfaction: 4.8
        },
        {
            name: "Women's haircut",
            quantity: 52,
            revenue: 3640,
            averagePrice: 70,
            margin: 70,
            growth: 15.8,
            satisfaction: 4.7
        },
        {
            name: "Escova Progressiva",
            quantity: 18,
            revenue: 4320,
            averagePrice: 240,
            margin: 60,
            growth: 33.3,
            satisfaction: 4.9
        },
        {
            name: "Men's Haircut",
            quantity: 64,
            revenue: 2240,
            averagePrice: 35,
            margin: 75,
            growth: 12.3,
            satisfaction: 4.5
        }
    ];

    // Peak hours analysis
    const peakHours = [
        { hour: "08:00", appointments: 8, revenue: 560 },
        { hour: "09:00", appointments: 15, revenue: 1200 },
        { hour: "10:00", appointments: 18, revenue: 1440 },
        { hour: "11:00", appointments: 12, revenue: 840 },
        { hour: "14:00", appointments: 22, revenue: 1760 },
        { hour: "15:00", appointments: 25, revenue: 2000 },
        { hour: "16:00", appointments: 20, revenue: 1600 },
        { hour: "17:00", appointments: 16, revenue: 1280 },
        { hour: "18:00", appointments: 14, revenue: 980 }
    ];

    // Trends and forecasts
    const trends = {
        nextMonthPrediction: {
            revenue: 19200,
            appointments: 245,
            confidence: 87
        },
        seasonalTrends: [
            { month: "Jan", revenue: 16800, appointments: 210 },
            { month: "Fev", revenue: 15200, appointments: 190 },
            { month: "Mar", revenue: 18450, appointments: 234 },
            { month: "Abr", revenue: 19200, appointments: 245 }
        ],
        recommendations: [
            "Increase availability between 2pm-4pm (peak hours)",
            "Promote coloring services (higher margin and growth)",
            "Focus on retaining new clients (14 new this month)",
            "Optimise Ama Owusu's schedule (highest performance)"
        ]
    };

    const getMaxAppointments = () => Math.max(...peakHours.map(hour => hour.appointments));
    const getMaxRevenue = () => Math.max(...peakHours.map(hour => hour.revenue));

    return (
        <DashboardLayout plan="professional">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                            <BarChart3 className="w-6 h-6 text-purple-600 mr-2" />
                            Advanced Reports
                        </h1>
                        <p className="text-gray-600">Complete analytics with insights and forecasts</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <select
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="overview">Overview</option>
                            <option value="performance">Performance</option>
                            <option value="financial">Financial</option>
                            <option value="predictive">Preditivo</option>
                        </select>
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="thisWeek">This Week</option>
                            <option value="thisMonth">This Month</option>
                            <option value="lastMonth">Last Month</option>
                            <option value="quarter">Trimestre</option>
                            <option value="year">Year</option>
                        </select>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            Exportar
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <div className={`flex items-center ${advancedData.revenue.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {advancedData.revenue.growth > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                <span className="text-sm font-medium">{advancedData.revenue.growth.toFixed(1)}%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Revenue</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                {formatUSD(advancedData.revenue.current.toLocaleString('en-US'))}
                            </p>
                            <div className="mt-2 bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${(advancedData.revenue.current / advancedData.revenue.target) * 100}%` }}
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                {((advancedData.revenue.current / advancedData.revenue.target) * 100).toFixed(1)}% da meta
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className={`flex items-center ${advancedData.appointments.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {advancedData.appointments.growth > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                <span className="text-sm font-medium">{advancedData.appointments.growth.toFixed(1)}%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Bookings</p>
                            <p className="text-2xl font-semibold text-gray-900">{advancedData.appointments.current}</p>
                            <div className="mt-2 bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${(advancedData.appointments.current / advancedData.appointments.target) * 100}%` }}
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                {((advancedData.appointments.current / advancedData.appointments.target) * 100).toFixed(1)}% da meta
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="text-blue-600">
                                <span className="text-sm font-medium">+{advancedData.clients.newClients}</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Clients</p>
                            <p className="text-2xl font-semibold text-gray-900">{advancedData.clients.current}</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-sm text-gray-600">Retention: </span>
                                <span className="text-sm font-medium text-green-600 ml-1">{advancedData.clients.retention}%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <Target className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className={`flex items-center ${advancedData.averageTicket.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {advancedData.averageTicket.growth > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                <span className="text-sm font-medium">{advancedData.averageTicket.growth.toFixed(1)}%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Average Ticket</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                {formatUSD(advancedData.averageTicket.current.toFixed(2))}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                +{formatUSD((advancedData.averageTicket.current - advancedData.averageTicket.previous).toFixed(2))} vs previous period
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-yellow-100 rounded-lg">
                                <Star className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div className="text-green-600">
                                <span className="text-sm font-medium">+{(advancedData.satisfaction.current - advancedData.satisfaction.previous).toFixed(1)}</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                            <p className="text-2xl font-semibold text-gray-900">{advancedData.satisfaction.current.toFixed(1)}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                {advancedData.satisfaction.totalReviews} reviews
                            </p>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Professional Performance */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Professional performance</h3>
                        <div className="space-y-4">
                            {professionalPerformance.map((professional, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-medium text-gray-900">{professional.name}</h4>
                                        <div className="flex items-center space-x-2">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${professional.growth > 10 ? 'bg-green-100 text-green-800' :
                                                    professional.growth > 5 ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                }`}>
                                                {professional.growth > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                                {professional.growth.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Bookings</p>
                                            <p className="font-medium">{professional.appointments}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Revenue</p>
                                            <p className="font-medium text-green-600">{formatUSD(professional.revenue.toLocaleString('en-US'))}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Average Ticket</p>
                                            <p className="font-medium">{formatUSD(professional.averageTicket.toFixed(2))}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Satisfaction</p>
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                <span className="font-medium">{professional.satisfaction}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex items-center justify-between text-sm mb-1">
                                            <span className="text-gray-600">Efficiency</span>
                                            <span className="font-medium">{professional.efficiency}%</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-300 ${professional.efficiency > 90 ? 'bg-green-600' :
                                                        professional.efficiency > 80 ? 'bg-yellow-600' :
                                                            'bg-red-600'
                                                    }`}
                                                style={{ width: `${professional.efficiency}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Service Analysis */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Services Analysis</h3>
                        <div className="space-y-4">
                            {serviceAnalysis.map((service, index) => (
                                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                            <Scissors className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{service.name}</p>
                                            <p className="text-xs text-gray-500">{service.quantity} services • Margin {service.margin}%</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-green-600">
                                            {formatUSD(service.revenue.toLocaleString('en-US'))}
                                        </p>
                                        <div className="flex items-center">
                                            {service.growth > 0 ? <TrendingUp className="w-3 h-3 text-green-600 mr-1" /> : <TrendingDown className="w-3 h-3 text-red-600 mr-1" />}
                                            <span className={`text-xs font-medium ${service.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {service.growth.toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Peak Hours Analysis */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Peak Hours Analysis</h3>
                    <div className="space-y-4">
                        {peakHours.map((hour, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-16 text-sm font-medium text-gray-600">{hour.hour}</div>
                                <div className="flex-1 mx-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="bg-gray-200 rounded-full h-4">
                                            <div
                                                className="bg-blue-600 h-4 rounded-full transition-all duration-300 flex items-center justify-end pr-2"
                                                style={{ width: `${(hour.appointments / getMaxAppointments()) * 100}%` }}
                                            >
                                                <span className="text-xs text-white font-medium">{hour.appointments}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Bookings</p>
                                    </div>
                                    <div>
                                        <div className="bg-gray-200 rounded-full h-4">
                                            <div
                                                className="bg-green-600 h-4 rounded-full transition-all duration-300 flex items-center justify-end pr-2"
                                                style={{ width: `${(hour.revenue / getMaxRevenue()) * 100}%` }}
                                            >
                                                <span className="text-xs text-white font-medium">{formatUSD(hour.revenue)}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Predictions & Recommendations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                            <Zap className="w-5 h-5 text-purple-600 mr-2" />
                            Forecast for Next Month
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Revenue Previsto</p>
                                    <p className="text-2xl font-semibold text-blue-600">
                                        {formatUSD(trends.nextMonthPrediction.revenue.toLocaleString('en-US'))}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Confidence</p>
                                    <p className="text-lg font-medium text-blue-600">{trends.nextMonthPrediction.confidence}%</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Bookings Previstos</p>
                                    <p className="text-2xl font-semibold text-green-600">{trends.nextMonthPrediction.appointments}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">vs Atual</p>
                                    <p className="text-lg font-medium text-green-600">
                                        +{((trends.nextMonthPrediction.appointments - advancedData.appointments.current) / advancedData.appointments.current * 100).toFixed(1)}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                            <Award className="w-5 h-5 text-orange-600 mr-2" />
                            Smart Recommendations
                        </h3>
                        <div className="space-y-3">
                            {trends.recommendations.map((recommendation, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-medium text-orange-600">{index + 1}</span>
                                    </div>
                                    <p className="text-sm text-gray-700">{recommendation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
