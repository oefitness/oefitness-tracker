import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Waves, Bike, Footprints, Flame, Trophy, Calendar, Sparkles, Plus } from 'lucide-react';

export const TriathlonDashboard: React.FC<{ onLogCardio: () => void }> = ({ onLogCardio }) => {
  const { triathlonPlan, updateTriathlonPlan } = useApp();

  // Days to race
  const raceDateObj = triathlonPlan.raceDate ? new Date(triathlonPlan.raceDate) : new Date(Date.now() + 60 * 86400000);
  const diffDays = Math.max(0, Math.ceil((raceDateObj.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

  return (
    <Card className="rounded-3xl border bg-gradient-to-br from-card via-card to-sky-500/5 shadow-sm overflow-hidden">
      <CardContent className="p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-sm">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base">{triathlonPlan.name}</h3>
                <Badge variant="outline" className="capitalize text-[10px] font-bold text-sky-600 border-sky-400">
                  {triathlonPlan.distance.replace('_', ' ')}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5" />
                Race Day in <strong className="text-foreground">{diffDays} days</strong> (Week {triathlonPlan.currentWeek}/{triathlonPlan.weeksDuration})
              </p>
            </div>
          </div>

          <Button
            size="sm"
            onClick={onLogCardio}
            className="rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold gap-1.5 h-9"
          >
            <Plus className="w-3.5 h-3.5" />
            Log Multi-Sport Session
          </Button>
        </div>

        {/* 3 Disciplines Weekly Volume Tracker */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Swim */}
          <div className="p-3.5 rounded-2xl bg-muted/30 border space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                <Waves className="w-4 h-4" />
                <span>1. Swim</span>
              </div>
              <span className="text-xs font-mono font-bold">2.4 / {triathlonPlan.swimVolumeTargetKm} km</span>
            </div>
            <Progress value={68} className="h-2 [&>div]:bg-cyan-500" />
            <p className="text-[10px] text-muted-foreground text-right">68% of weekly target</p>
          </div>

          {/* Bike */}
          <div className="p-3.5 rounded-2xl bg-muted/30 border space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                <Bike className="w-4 h-4" />
                <span>2. Bike</span>
              </div>
              <span className="text-xs font-mono font-bold">48.5 / {triathlonPlan.bikeVolumeTargetKm} km</span>
            </div>
            <Progress value={74} className="h-2 [&>div]:bg-amber-500" />
            <p className="text-[10px] text-muted-foreground text-right">74% of weekly target</p>
          </div>

          {/* Run */}
          <div className="p-3.5 rounded-2xl bg-muted/30 border space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <Footprints className="w-4 h-4" />
                <span>3. Run</span>
              </div>
              <span className="text-xs font-mono font-bold">18.0 / {triathlonPlan.runVolumeTargetKm} km</span>
            </div>
            <Progress value={82} className="h-2 [&>div]:bg-emerald-500" />
            <p className="text-[10px] text-muted-foreground text-right">82% of weekly target</p>
          </div>
        </div>

        {/* Brick Workout Insight */}
        <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
            <span className="text-foreground">
              <strong>Upcoming Brick Session:</strong> 40km Bike at 85% FTP immediately followed by 5km Transition Run on Saturday.
            </span>
          </div>
          <Badge className="bg-sky-600 text-white text-[10px] shrink-0 ml-2">
            High Priority
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};