import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { Stat } from '@/lib/types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const Icon = stat.icon;
  const progressValue = (stat.actual / stat.target) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-[#1a1625] to-[#1e1a2e] backdrop-blur-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20`}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            <Badge
              variant="secondary"
              className="bg-white/5 text-white/80 border-white/10"
            >
              {stat.badge}
            </Badge>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-white/60">{stat.title}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            <Progress value={progressValue} className="h-1.5" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
