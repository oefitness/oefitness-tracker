import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, Flame, Heart, RefreshCw, Footprints, Zap, ArrowRight } from 'lucide-react';

export const GarminWidget: React.FC = () => {
  const { userProfile, targets, syncGarmin } = useApp();

  return (
    <Card className="rounded-2xl border bg-gradient-to-br from-card via-card to-emerald-500/5 overflow-hidden shadow-sm">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-sm">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">Garmin Connect™</span>
                <Badge variant="secondary" className="text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold">
                  Live Synced
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">Updated {userProfile.garminLastSync}</p>
            </div>
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={syncGarmin}
            className="h-8 gap-1.5 text-xs rounded-lg hover:bg-muted"
          >
            <RefreshCw className="w-3 h-3" />
            Sync Now
          </Button>
        </div>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-muted/40 border text-center space-y-0.5">
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Active Burn</span>
            </div>
            <p className="text-base font-extrabold text-amber-600 dark:text-amber-400">
              +{userProfile.garminActiveCalories} <span className="text-[10px] font-normal text-muted-foreground">kcal</span>
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-muted/40 border text-center space-y-0.5">
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Footprints className="w-3.5 h-3.5 text-cyan-500" />
              <span>Steps</span>
            </div>
            <p className="text-base font-extrabold">
              {userProfile.garminSteps.toLocaleString()}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-muted/40 border text-center space-y-0.5">
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Resting HR</span>
            </div>
            <p className="text-base font-extrabold">
              {userProfile.garminHeartRate} <span className="text-[10px] font-normal text-muted-foreground">bpm</span>
            </p>
          </div>
        </div>

        {/* Transparent Target Recalculation Equation */}
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap font-mono">
            <span className="font-semibold text-foreground">Base: {targets.dailyCalories} kcal</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold">Burn: {userProfile.garminActiveCalories} kcal</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">Total: {targets.adjustedCaloriesWithGarmin} kcal</span>
          </div>
          <Zap className="w-4 h-4 text-cyan-600 shrink-0 ml-2" />
        </div>
      </CardContent>
    </Card>
  );
};