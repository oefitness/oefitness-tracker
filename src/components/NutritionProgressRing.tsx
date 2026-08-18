import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Flame, Utensils, Zap, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const NutritionProgressRing: React.FC = () => {
  const { targets, dailyLoggedTotals, userProfile } = useApp();

  const totalTarget = targets.adjustedCaloriesWithGarmin;
  const consumed = dailyLoggedTotals.calories;
  const remaining = Math.max(0, totalTarget - consumed);
  const percentage = Math.min(100, Math.round((consumed / totalTarget) * 100));

  // Circular stroke calculations
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const proteinPct = Math.min(100, Math.round((dailyLoggedTotals.protein / targets.proteinGrams) * 100));
  const carbsPct = Math.min(100, Math.round((dailyLoggedTotals.carbs / targets.carbsGrams) * 100));
  const fatPct = Math.min(100, Math.round((dailyLoggedTotals.fat / targets.fatGrams) * 100));
  const fiberPct = Math.min(100, Math.round((dailyLoggedTotals.fiber / targets.fiberGrams) * 100));

  return (
    <Card className="rounded-3xl border bg-card shadow-sm overflow-hidden">
      <CardContent className="p-5 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">Daily Energy & Macros</h2>
            <p className="text-xs text-muted-foreground">Live real-time metabolic balance</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Avg Score: {dailyLoggedTotals.healthScoreAverage}/100
          </div>
        </div>

        {/* Circular Ring and Calorie Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
          <div className="relative flex items-center justify-center">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 160 160">
              {/* Background Ring */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="text-muted/40 stroke-current"
                strokeWidth="12"
                fill="transparent"
              />
              {/* Progress Ring */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="text-emerald-500 stroke-current transition-all duration-700 ease-out"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Remaining</span>
              <span className="text-3xl font-extrabold text-foreground">{remaining}</span>
              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">of {totalTarget} kcal</span>
            </div>
          </div>

          {/* Breakdown Stats */}
          <div className="space-y-3 w-full sm:w-auto flex-1 max-w-xs">
            <div className="flex items-center justify-between p-2 rounded-xl bg-muted/30 border text-xs">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Food Logged</span>
              </div>
              <span className="font-bold">{consumed} kcal</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="text-amber-800 dark:text-amber-300">Garmin Burn</span>
              </div>
              <span className="font-bold text-amber-700 dark:text-amber-400">+{userProfile.garminActiveCalories} kcal</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-800 dark:text-emerald-300">Net Balance</span>
              </div>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">{consumed - (totalTarget)} kcal</span>
            </div>
          </div>
        </div>

        {/* Macronutrient Bars */}
        <div className="space-y-3 pt-2 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Protein */}
            <div className="p-3 rounded-2xl bg-muted/30 border space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-sky-600 dark:text-sky-400">Protein</span>
                <span className="font-semibold">{dailyLoggedTotals.protein}/{targets.proteinGrams}g</span>
              </div>
              <Progress value={proteinPct} className="h-2 bg-muted [&>div]:bg-sky-500" />
              <p className="text-[10px] text-muted-foreground text-right">{proteinPct}% of target</p>
            </div>

            {/* Carbs */}
            <div className="p-3 rounded-2xl bg-muted/30 border space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-600 dark:text-amber-400">Carbs</span>
                <span className="font-semibold">{dailyLoggedTotals.carbs}/{targets.carbsGrams}g</span>
              </div>
              <Progress value={carbsPct} className="h-2 bg-muted [&>div]:bg-amber-500" />
              <p className="text-[10px] text-muted-foreground text-right">{carbsPct}% of target</p>
            </div>

            {/* Fat */}
            <div className="p-3 rounded-2xl bg-muted/30 border space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-purple-600 dark:text-purple-400">Fat</span>
                <span className="font-semibold">{dailyLoggedTotals.fat}/{targets.fatGrams}g</span>
              </div>
              <Progress value={fatPct} className="h-2 bg-muted [&>div]:bg-purple-500" />
              <p className="text-[10px] text-muted-foreground text-right">{fatPct}% of target</p>
            </div>

            {/* Fiber */}
            <div className="p-3 rounded-2xl bg-muted/30 border space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Fiber</span>
                <span className="font-semibold">{dailyLoggedTotals.fiber}/{targets.fiberGrams}g</span>
              </div>
              <Progress value={fiberPct} className="h-2 bg-muted [&>div]:bg-emerald-500" />
              <p className="text-[10px] text-muted-foreground text-right">{fiberPct}% of target</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};