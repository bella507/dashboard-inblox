import Link from 'next/link';
import { ArrowRight, BarChart3, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0a1e] via-[#1a1625] to-[#0f0a1e]">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#A63FFF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" />
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-[#D91DCC] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Main content */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Hero section */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <span className="text-sm text-white/80">
                ✨ Admin Dashboard Platform
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Dashboard
              <span className="linear-text"> Inblox</span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              ระบบจัดการธุรกิจแบบครบวงจร พร้อมการวิเคราะห์ข้อมูลแบบเรียลไทม์
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-[#A63FFF] to-[#D91DCC] text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              เข้าสู่ Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              ดูตัวอย่าง
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-scale-in">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#A63FFF] to-[#D91DCC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                วิเคราะห์ข้อมูล
              </h3>
              <p className="text-white/60 text-sm">
                ติดตามและวิเคราะห์ข้อมูลธุรกิจแบบเรียลไทม์พร้อมกราฟที่สวยงาม
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#D91DCC] to-[#7C3AED] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                จัดการลูกค้า
              </h3>
              <p className="text-white/60 text-sm">
                ระบบจัดการข้อมูลลูกค้าและการวิเคราะห์พฤติกรรมอย่างละเอียด
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ประสิทธิภาพสูง
              </h3>
              <p className="text-white/60 text-sm">
                โหลดเร็ว ใช้งานง่าย พร้อม UI/UX ที่ออกแบบมาเพื่อความสะดวก
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-center text-white/40 text-sm">
            © 2025 Dashboard Inblox. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
