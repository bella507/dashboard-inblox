import { LucideIcon } from 'lucide-react';

export interface Alert {
  id: number;
  type: 'warning' | 'success' | 'info' | 'error';
  message: string;
  time: string;
  action: string;
}

export interface Stat {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: string;
  badge: string;
  target: number;
  actual: number;
}

export interface RevenueData {
  month: string;
  จองโต๊ะ: number;
  คอนเสิร์ต: number;
  อาหาร: number;
  target: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface HourlyData {
  time: string;
  customers: number;
  orders: number;
  revenue: number;
}

export interface CustomerSegment {
  segment: string;
  ทั้งหมด: number;
  ลูกค้าประจำ: number;
  ltv: number;
}

export interface SentimentData {
  subject: string;
  score: number;
  fullMark: number;
}

export interface PeakHour {
  time: string;
  revenue: number;
  capacity: number;
  orders: number;
  avgWait: number;
}

export interface TopProduct {
  name: string;
  quantity: number;
  revenue: number;
  ltv: number;
  trend: string;
}
