import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dna, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Micronutrients } from '@/types/nutrition';

export const MicronutrientMatrix: React.FC = () => {
  const { targets, dailyLoggedTotals } = useApp();
  const [open, setOpen] = useState(false);

  const microEntries = Object.entries(targets.micros) as Array<[
    keyof Micronutrients,
    { target: number; unit: string; label: string }
  ]>;

  // Key quick preview items for dashboard card
  const previewKeys: Array<keyof Micronutrients> = ['iron', 'calcium', 'vitaminD', 'potassium', 'vitaminC', 'magnesium'];

  return (
    <>
      <Card className="rounded-3xl border bg-card shadow-sm">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Dna className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Micronutrients & Vitamins</h3>
                <p className="text-xs text-muted-foreground">Cellular health & immunity</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpen(true)}
              className="text-xs h-8 rounded-xl gap-1"
            >
              Full Breakdown
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Quick mini matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {previewKeys.map(key => {
              const info = targets.micros[key];
              const logged = dailyLoggedTotals.micros[key] || 0;
              const pct = Math.min(100, Math.round((logged / info.target) * 100));
              const isMet = logged >= info.target;

              return (
                <div key={key} className="p-2.5 rounded-xl bg-muted/30 border space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium truncate">{info.label}</span>
                    {isMet ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    ) : (
                      <span className="text-[10px] text-muted-foreground">{pct}%</span>
                    )}
                  </div>
                  <Progress value={pct} className="h-1.5" />
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>{logged.toFixed(1)}{info.unit}</span>
                    <span>/ {info.target}{info.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Comprehensive Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <Dna className="w-5 h-5 text-indigo-600" />
              Complete Micronutrient & Mineral Target Matrix
            </DialogTitle>
            <DialogDescription className="text-xs">
              Daily targets based on NHS / EFSA optimal health guidelines personalized for your biometrics.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {microEntries.map(([key, info]) => {
              const logged = dailyLoggedTotals.micros[key] || 0;
              const pct = Math.min(150, Math.round((logged / info.target) * 100));
              const isSodium = key === 'sodium';
              const isWarning = isSodium ? logged > info.target : logged < info.target * 0.4;

              return (
                <div
                  key={key}
                  className="p-3.5 rounded-2xl border bg-muted/20 space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm">{info.label}</span>
                      <p className="text-[11px] text-muted-foreground">
                        Target: {info.target} {info.unit}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs font-mono ${
                        isWarning
                          ? 'border-amber-400 text-amber-700 dark:text-amber-300 bg-amber-500/10'
                          : logged >= info.target
                          ? 'border-emerald-400 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {pct}%
                    </Badge>
                  </div>

                  <Progress
                    value={Math.min(100, pct)}
                    className={`h-2 ${isWarning && isSodium ? '[&>div]:bg-rose-500' : '[&>div]:bg-indigo-500'}`}
                  />

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Logged: <strong className="text-foreground">{logged.toFixed(1)} {info.unit}</strong></span>
                    {logged >= info.target && !isSodium && (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Target Met
                      </span>
                    )}
                    {isWarning && (
                      <span className="text-amber-600 dark:text-amber-400 font-semibold text-[11px] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Needs Attention
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};