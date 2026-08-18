import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, HelpCircle, ShieldCheck, DollarSign, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AiRecommendationsCard: React.FC<{ onOpenRecipe?: (recipe: any) => void }> = ({ onOpenRecipe }) => {
  const { aiCoachSuggestions, userProfile } = useApp();
  const navigate = useNavigate();

  return (
    <Card className="rounded-3xl border bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/5 shadow-sm">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Smart Food & Budget Coach</h3>
              <p className="text-xs text-muted-foreground">Answers your 4 core eating decisions</p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-card border flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
            <span className="font-medium">1. What to eat?</span>
          </div>
          <div className="p-2.5 rounded-xl bg-card border flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="font-medium">2. Is it healthy?</span>
          </div>
          <div className="p-2.5 rounded-xl bg-card border flex items-center gap-2">
            <Target className="w-4 h-4 text-sky-500 shrink-0" />
            <span className="font-medium">3. Fits my goals?</span>
          </div>
          <div className="p-2.5 rounded-xl bg-card border flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="font-medium">4. Can I afford it?</span>
          </div>
        </div>

        {/* Active Insights */}
        <div className="space-y-2.5 pt-1">
          {aiCoachSuggestions.map(sug => (
            <div
              key={sug.id}
              className="p-3.5 rounded-2xl bg-card border space-y-2 shadow-xs transition-all hover:border-emerald-500/40"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-bold text-xs text-foreground">{sug.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {sug.message}
                  </p>
                </div>
              </div>

              {sug.recipe && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-full h-8 text-xs font-semibold rounded-xl justify-between bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                  onClick={() => {
                    if (onOpenRecipe) onOpenRecipe(sug.recipe);
                    else navigate('/recipes');
                  }}
                >
                  <span>{sug.actionLabel || 'View Recipe'} ({userProfile.currency}{sug.recipe.estimatedCostPerServing}/portion)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};