import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Activity, Moon, BatteryCharging, ShieldCheck, Zap } from 'lucide-react';

export const RecoveryReadinessCard: React.FC = () => {
  const { recoveryMetrics, userProfile } = useApp();

  const score = recoveryMetrics.readinessScore;

  return (
    <Card className="rounded-3xl border bg-card shadow-sm">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <BatteryCharging className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Recovery & Training Readiness</h3>
              <p className="text-xs text-muted-foreground">Garmin HRV & Central Nervous System</p>
            </div>
          </div>

          <Badge className="bg-emerald-600 text-white font-bold text-xs">
            {score}/100 Readiness
          </Badge>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-muted/30 border space-y-0.5">
            <div className="flex items-center justify-center gap-1 text-muted-foreground text-[11px]">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              <span>HRV Status</span>
            </div>
            <p className="font-extrabold capitalize text-foreground">{recoveryMetrics.hrvStatus}</p>
          </div>

          <div className="p-2.5 rounded-xl bg-muted/30 border space-y-0.5">
            <div className="flex items-center justify-center gap-1 text-muted-foreground text-[11px]">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Resting HR</span>
            </div>
            <p className="font-extrabold text-foreground">{recoveryMetrics.restingHeartRate} bpm</p>
          </div>

          <div className="p-2.5 rounded-xl bg-muted/30 border space-y-0.5">
            <div className="flex items-center justify-center gap-1 text-muted-foreground text-[11px]">
              <Moon className="w-3.5 h-3.5 text-indigo-500" />
              <span>Sleep Duration</span>
            </div>
            <p className="font-extrabold text-foreground">{recoveryMetrics.sleepQualityHours} hrs</p>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground bg-muted/20 p-3 rounded-xl border">
          💡 <strong>Coach Advice:</strong> {recoveryMetrics.recommendedFocus}
        </p>
      </CardContent>
    </Card>
  );
};