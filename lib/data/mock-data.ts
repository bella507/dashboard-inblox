import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from 'lucide-react';
import type {
  Alert,
  Stat,
  RevenueData,
  CategoryData,
  HourlyData,
  CustomerSegment,
  SentimentData,
  PeakHour,
  TopProduct,
} from '@/lib/types';

export const initialAlerts: Alert[] = [
  {
    id: 1,
    type: 'warning',
    message: 'โต๊ะเต็ม 95% ควรเตรียมรับลูกค้า walk-in',
    time: '2 นาทีที่แล้ว',
    action: 'ดูรายละเอียด',
  },
  {
    id: 2,
    type: 'success',
    message: 'ยอดขายวันนี้ทะลุเป้า 120%!',
    time: '15 นาทีที่แล้ว',
    action: 'ดูกราฟ',
  },
  {
    id: 3,
    type: 'info',
    message: 'ลูกค้า VIP 3 คน มีการจองในเย็นนี้',
    time: '30 นาทีที่แล้ว',
    action: 'เตรียมโต๊ะพิเศษ',
  },
];

export const revenueData: RevenueData[] = [
  {
    month: 'ม.ค.',
    จองโต๊ะ: 85000,
    คอนเสิร์ต: 120000,
    อาหาร: 95000,
    target: 250000,
  },
  {
    month: 'ก.พ.',
    จองโต๊ะ: 95000,
    คอนเสิร์ต: 135000,
    อาหาร: 105000,
    target: 270000,
  },
  {
    month: 'มี.ค.',
    จองโต๊ะ: 110000,
    คอนเสิร์ต: 150000,
    อาหาร: 115000,
    target: 300000,
  },
  {
    month: 'เม.ย.',
    จองโต๊ะ: 125000,
    คอนเสิร์ต: 165000,
    อาหาร: 125000,
    target: 350000,
  },
  {
    month: 'พ.ค.',
    จองโต๊ะ: 140000,
    คอนเสิร์ต: 180000,
    อาหาร: 135000,
    target: 380000,
  },
  {
    month: 'มิ.ย.',
    จองโต๊ะ: 155000,
    คอนเสิร์ต: 195000,
    อาหาร: 145000,
    target: 420000,
  },
  {
    month: 'ก.ค.',
    จองโต๊ะ: 165000,
    คอนเสิร์ต: 205000,
    อาหาร: 152000,
    target: 450000,
  },
];

export const categoryData: CategoryData[] = [
  { name: 'บัตรคอนเสิร์ต', value: 543000, color: '#A63FFF' },
  { name: 'อาหาร', value: 437000, color: '#D91DCC' },
  { name: 'เครื่องดื่ม', value: 316000, color: '#7C3AED' },
  { name: 'อื่นๆ', value: 254000, color: '#EC4899' },
];

export const hourlyData: HourlyData[] = [
  { time: '08:00', customers: 45, orders: 32, revenue: 28500 },
  { time: '09:00', customers: 65, orders: 48, revenue: 42300 },
  { time: '10:00', customers: 82, orders: 61, revenue: 54200 },
  { time: '11:00', customers: 95, orders: 72, revenue: 68900 },
  { time: '12:00', customers: 125, orders: 95, revenue: 92500 },
  { time: '13:00', customers: 135, orders: 102, revenue: 98700 },
  { time: '14:00', customers: 118, orders: 89, revenue: 76500 },
  { time: '15:00', customers: 95, orders: 71, revenue: 61200 },
  { time: '16:00', customers: 108, orders: 82, revenue: 72800 },
  { time: '17:00', customers: 142, orders: 108, revenue: 95600 },
];

export const customerSegmentation: CustomerSegment[] = [
  { segment: 'VIP ลูกค้าประจำ', ทั้งหมด: 85, ลูกค้าประจำ: 85, ltv: 157250 },
  { segment: 'ลูกค้าปกติ', ทั้งหมด: 245, ลูกค้าประจำ: 125, ltv: 45600 },
  { segment: 'ลูกค้าใหม่', ทั้งหมด: 420, ลูกค้าประจำ: 65, ltv: 12800 },
  { segment: 'ลูกค้ากลุ่ม', ทั้งหมด: 180, ลูกค้าประจำ: 140, ltv: 89500 },
  { segment: 'ลูกค้าพิเศษ', ทั้งหมด: 150, ลูกค้าประจำ: 120, ltv: 125000 },
];

export const sentimentData: SentimentData[] = [
  { subject: 'บริการ', score: 85, fullMark: 100 },
  { subject: 'คุณภาพอาหาร', score: 92, fullMark: 100 },
  { subject: 'ความสะอาด', score: 88, fullMark: 100 },
  { subject: 'ความรวดเร็ว', score: 78, fullMark: 100 },
  { subject: 'ราคา', score: 82, fullMark: 100 },
  { subject: 'บรรยากาศ', score: 90, fullMark: 100 },
];

export const peakHours: PeakHour[] = [
  {
    time: '11:00-12:00',
    revenue: 85900,
    capacity: 92,
    orders: 72,
    avgWait: 8,
  },
  {
    time: '12:00-13:00',
    revenue: 92500,
    capacity: 101,
    orders: 95,
    avgWait: 15,
  },
  {
    time: '18:00-19:00',
    revenue: 87800,
    capacity: 94,
    orders: 82,
    avgWait: 10,
  },
];

export const topProducts: TopProduct[] = [
  {
    name: 'VIP Table (4 ที่นั่ง)',
    quantity: 45,
    revenue: 81850,
    ltv: 157250,
    trend: '+24%',
  },
  {
    name: 'Steak Premium Set',
    quantity: 128,
    revenue: 115200,
    ltv: 950,
    trend: '+18%',
  },
  {
    name: 'Concert VIP Pass',
    quantity: 89,
    revenue: 267000,
    ltv: 3000,
    trend: '+35%',
  },
];

export const stats: Stat[] = [
  {
    title: 'รายได้วันนี้',
    value: '฿1,388K',
    change: '+24.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-[#A63FFF] to-[#D91DCC]',
    badge: 'Target: ฿1.2M',
    target: 1200000,
    actual: 1388000,
  },
  {
    title: 'ยอดขาย',
    value: '1,680',
    change: '+18.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'from-[#D91DCC] to-[#A63FFF]',
    badge: 'เป้า: 1,500',
    target: 1500,
    actual: 1680,
  },
  {
    title: 'จำนวนลูกค้า',
    value: '2,847',
    change: '+17.8%',
    trend: 'up',
    icon: Users,
    color: 'from-[#7C3AED] to-[#EC4899]',
    badge: 'เป้า: 2,500',
    target: 2500,
    actual: 2847,
  },
  {
    title: 'อัตราการเติบโต',
    value: '32.5%',
    change: '+8.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-[#EC4899] to-[#7C3AED]',
    badge: 'MoM',
    target: 100,
    actual: 132.5,
  },
];
