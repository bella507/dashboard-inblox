'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  StatCard,
  AlertNotification,
  DashboardHeader,
  RevenueChart,
} from '@/components/dashboard';
import { initialAlerts, revenueData, stats } from '@/lib/data/mock-data';
import type { Alert } from '@/lib/types';

export function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDismissAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0a1e] via-[#1a1625] to-[#0f0a1e] p-8">
      <div className="max-w-[1600px] mx-auto">
        <DashboardHeader currentTime={currentTime} alertCount={alerts.length} />

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="bg-white/5 border-white/10 p-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-linear-to-r data-[state=active]:from-[#A63FFF] data-[state=active]:to-[#D91DCC] text-white"
            >
              ภาพรวม
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-linear-to-r data-[state=active]:from-[#A63FFF] data-[state=active]:to-[#D91DCC] text-white"
            >
              การวิเคราะห์
            </TabsTrigger>
            <TabsTrigger
              value="customers"
              className="data-[state=active]:bg-linear-to-r data-[state=active]:from-[#A63FFF] data-[state=active]:to-[#D91DCC] text-white"
            >
              ลูกค้า
            </TabsTrigger>
            <TabsTrigger
              value="ai-insights"
              className="data-[state=active]:bg-linear-to-r data-[state=active]:from-[#A63FFF] data-[state=active]:to-[#D91DCC] text-white"
            >
              AI Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Alerts Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                การแจ้งเตือนสำคัญ
              </h2>
              <AlertNotification
                alerts={alerts}
                onDismiss={handleDismissAlert}
              />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={stat.title} stat={stat} index={index} />
              ))}
            </div>

            {/* Revenue Chart */}
            <RevenueChart data={revenueData} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-white mb-2">
                การวิเคราะห์ขั้นสูง
              </h3>
              <p className="text-white/60">
                ส่วนนี้จะแสดงการวิเคราะห์ข้อมูลเชิงลึก
              </p>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-white mb-2">
                ข้อมูลลูกค้า
              </h3>
              <p className="text-white/60">
                ส่วนนี้จะแสดงข้อมูลและพฤติกรรมของลูกค้า
              </p>
            </div>
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-white mb-2">
                AI Insights
              </h3>
              <p className="text-white/60">ส่วนนี้จะแสดงข้อมูลเชิงลึกจาก AI</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
