import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const BudgetGaugeCard: React.FC = () => {
  const { userProfile, weeklyBudgetStats } = useApp();

  return (
    <Card className="rounded-3xl border bg-card shadow-sm overflow-hidden">
      <CardContent className="p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Weekly Food Budget Limit
            </span>
            <div className="text-3xl font-extrabold text-foreground flex items-baseline gap-2">
              <span>{userProfile.currency}{weeklyBudgetStats.spentThisWeek.toFixed(2)}</span>
              <span className="text-sm font-normal text-muted-foreground">
                spent of {userProfile.currency}{userProfile.weeklyBudget} limit
              </span>
            </div>
          </div>

          <Badge
            className={`text-xs font-bold px-3 py-1.5 self-start sm:self-auto ${
              weeklyBudgetStats.status === 'good'
                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                : weeklyBudgetStats.status === 'warning'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
                : 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30'
            }`}
          >
            {weeklyBudgetStats.status === 'good' && '🟢 On Track & Within Budget'}
            {weeklyBudgetStats.status === 'warning' && '🟡 80%+ of Budget Reached'}
            {weeklyBudgetStats.status === 'exceeded' && '🔴 Budget Exceeded'}
          </Badge>
        </div>

        {/* Budget Bar */}
        <div className="space-y-1.5">
          <Progress
            value={weeklyBudgetStats.percentageUsed}
            className={`h-3 bg-muted ${
              weeklyBudgetStats.status === 'good'
                ? '[&>div]:bg-emerald-500'
                : weeklyBudgetStats.status === 'warning'
                ? '[&>div]:bg-amber-500'
                : '[&>div]:bg-rose-500'
            }`}
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{weeklyBudgetStats.percentageUsed}% of weekly funds consumed</span>
            <span className="font-bold text-foreground">
              {userProfile.currency}{weeklyBudgetStats.remaining} remaining for the week
            </span>
          </div>
        </div>

        {/* Stats Breakdown Bar */}
        <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-muted/40 border text-xs">
          <div>
            <span className="text-muted-foreground">Daily Allowance</span>
            <p className="font-bold text-foreground mt-0.5">
              {userProfile.currency}{(userProfile.weeklyBudget / 7).toFixed(2)}/day
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Current Cart Cost</span>
            <p className="font-bold text-sky-600 dark:text-sky-400 mt-0.5">
              {userProfile.currency}{weeklyBudgetStats.shoppingListCost.toFixed(2)}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Projected End Spend</span>
            <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {userProfile.currency}{weeklyBudgetStats.projectedEndSpend}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};