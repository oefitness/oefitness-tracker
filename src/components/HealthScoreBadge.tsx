import React, { useState } from 'react';
import { HealthScoreDetails } from '@/types/nutrition';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, CheckCircle2, AlertTriangle, Info, Sparkles, Apple } from 'lucide-react';

interface HealthScoreBadgeProps {
  healthScore: HealthScoreDetails;
  size?: 'sm' | 'md' | 'lg';
  showDetailsOnClick?: boolean;
  foodName?: string;
}

export const HealthScoreBadge: React.FC<HealthScoreBadgeProps> = ({
  healthScore,
  size = 'md',
  showDetailsOnClick = true,
  foodName = 'This Item'
}) => {
  const [open, setOpen] = useState(false);
  const score = healthScore?.score || 80;

  const getColor = (s: number) => {
    if (s >= 85) return { bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-300 dark:border-emerald-800' };
    if (s >= 70) return { bg: 'bg-teal-50 dark:bg-teal-950/40', text: 'text-teal-700 dark:text-teal-400', border: 'border-teal-300 dark:border-teal-800' };
    if (s >= 50) return { bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-300 dark:border-amber-800' };
    return { bg: 'bg-rose-50 dark:bg-rose-950/40', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-300 dark:border-rose-800' };
  };

  const colors = getColor(score);

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 font-semibold gap-1',
    md: 'text-xs md:text-sm px-2.5 py-1 font-bold gap-1.5',
    lg: 'text-base px-3 py-1.5 font-bold gap-2'
  };

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          if (showDetailsOnClick) {
            e.stopPropagation();
            setOpen(true);
          }
        }}
        className={`inline-flex items-center rounded-full border shadow-sm transition-all hover:scale-105 active:scale-95 ${colors.bg} ${colors.text} ${colors.border} ${sizeClasses[size]}`}
        title="Click to view full health score breakdown"
      >
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Health Score: {score}/100</span>
      </button>

      {showDetailsOnClick && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto rounded-3xl">
            <DialogHeader className="text-left space-y-1">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs font-medium">
                  {healthScore?.processingLevel || 'Whole Food Matrix'}
                </Badge>
                <span className="text-xs text-muted-foreground">NutriSense Algorithm v2.4</span>
              </div>
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                Health Score Analysis
              </DialogTitle>
              <DialogDescription className="text-sm font-medium text-foreground/80">
                {foodName}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl border bg-muted/30 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold flex items-baseline gap-1">
                    <span className={colors.text}>{score}</span>
                    <span className="text-sm text-muted-foreground font-normal">/ 100</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {score >= 85 ? 'Optimal Nutrient Density' : score >= 70 ? 'Nutritious & Balanced' : score >= 50 ? 'Moderate Nutritional Quality' : 'Ultra-Processed / High Free Sugar'}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <Apple className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>

              {healthScore?.summary && (
                <p className="text-xs leading-relaxed text-muted-foreground bg-accent/40 p-3 rounded-xl border">
                  {healthScore.summary}
                </p>
              )}

              {/* Positive Factors */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Healthy Nutritional Factors (+Points)
                </h4>
                <div className="space-y-1.5">
                  {healthScore?.positiveFactors?.map((f, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 text-xs flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-emerald-900 dark:text-emerald-200">{f.title}</p>
                        <p className="text-muted-foreground mt-0.5">{f.description}</p>
                      </div>
                      <Badge className="bg-emerald-600 text-white font-mono text-[10px] ml-2 shrink-0">
                        +{f.weight}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Negative Factors */}
              {healthScore?.negativeFactors && healthScore.negativeFactors.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Areas of Caution (-Impact)
                  </h4>
                  <div className="space-y-1.5">
                    {healthScore.negativeFactors.map((f, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 text-xs flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-amber-900 dark:text-amber-200">{f.title}</p>
                          <p className="text-muted-foreground mt-0.5">{f.description}</p>
                        </div>
                        <Badge variant="outline" className="border-amber-400 text-amber-800 dark:text-amber-300 font-mono text-[10px] ml-2 shrink-0">
                          -{f.weight}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 pt-1 border-t">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Health score is calculated using bioavailable micronutrients, fiber ratio, added sugars, sodium, and NOVA food processing classifications.</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};