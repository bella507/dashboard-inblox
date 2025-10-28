import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card } from '@/components/ui/card';
import type { RevenueData } from '@/lib/types';

interface RevenueChartProps {
  data: RevenueData[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-[#1a1625] to-[#1e1a2e] border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">
        รายได้ตามหมวดหมู่
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTable" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A63FFF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#A63FFF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorConcert" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D91DCC" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#D91DCC" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="จองโต๊ะ"
            stroke="#A63FFF"
            fillOpacity={1}
            fill="url(#colorTable)"
          />
          <Area
            type="monotone"
            dataKey="คอนเสิร์ต"
            stroke="#D91DCC"
            fillOpacity={1}
            fill="url(#colorConcert)"
          />
          <Area
            type="monotone"
            dataKey="อาหาร"
            stroke="#7C3AED"
            fillOpacity={1}
            fill="url(#colorFood)"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#EC4899"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}
