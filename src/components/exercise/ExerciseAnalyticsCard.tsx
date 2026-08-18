import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { TrendingUp, Award, Flame, Dumbbell } from 'lucide-react';

const STRENGTH_PROGRESSION_DATA = [
  { week: 'W1', bench1RM: 75, squat1RM: 95, volume: 4100 },
  { week: 'W2', bench1RM: 77.5, squat1RM: 100, volume: 4600 },
  { week: 'W3', bench1RM: 80, squat1RM: 102.5, volume: 5200 },
  { week: 'W4', bench1RM: 80, squat1RM: 105, volume: 5800 },
  { week: 'W5', bench1RM: 82.5, squat1RM: 110, volume: 6420 }
];

export const ExerciseAnalyticsCard: React.FC = () => {
  return (
    <Card className="rounded-3xl border bg-card shadow-sm">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">Exercise Progress & 1RM Progression</h3>
              <p className="text-xs text-muted-foreground">5-Week Strength & Tonnage Curve</p>
            </div>
          </div>
        </div>

        {/* Recharts 1RM Trend */}
        <div className="h-48 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={STRENGTH_PROGRESSION_DATA}>
              <defs>
                <linearGradient id="colorBench" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorSquat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="week" stroke="#888888" fontSize={11} tickLine={false} />
              <YAxis stroke="#888888" fontSize={11} tickLine={false} domain={['dataMin - 10', 'dataMax + 10']} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="squat1RM" name="Squat 1RM (kg)" stroke="#10b981" fillOpacity={1} fill="url(#colorSquat)" strokeWidth={2} />
              <Area type="monotone" dataKey="bench1RM" name="Bench 1RM (kg)" stroke="#0284c7" fillOpacity={1} fill="url(#colorBench)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs p-2.5 rounded-2xl bg-muted/30 border">
          <div>
            <span className="text-muted-foreground">Total Tonnage</span>
            <p className="font-extrabold text-foreground mt-0.5">6,420 kg</p>
          </div>
          <div>
            <span className="text-muted-foreground">Bench 1RM PR</span>
            <p className="font-extrabold text-sky-600 mt-0.5">82.5 kg (+7.5kg)</p>
          </div>
          <div>
            <span className="text-muted-foreground">Squat 1RM PR</span>
            <p className="font-extrabold text-emerald-600 mt-0.5">110 kg (+15kg)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};