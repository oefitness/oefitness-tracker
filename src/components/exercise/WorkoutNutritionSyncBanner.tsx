import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Utensils, Sparkles, ArrowRight, Zap, Dumbbell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const WorkoutNutritionSyncBanner: React.FC<{ onOpenRecipe?: (recipe: any) => void }> = ({ onOpenRecipe }) => {
  const { getPrePostWorkoutRecommendations, userProfile } = useApp();
  const navigate = useNavigate();

  const { preWorkoutRecipe, postWorkoutRecipe, guidance } = getPrePostWorkoutRecommendations();

  return (
    <Card className="rounded-3xl border bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/5 shadow-sm">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Workout & Recovery Meal Pairing</h3>
              <p className="text-xs text-muted-foreground">Synchronised with your training demand</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {guidance}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Pre Workout */}
          <div className="p-3.5 rounded-2xl bg-card border space-y-2 flex flex-col justify-between">
            <div className="space-y-1">
              <Badge variant="outline" className="text-[10px] text-amber-700 dark:text-amber-300 border-amber-300 bg-amber-500/10 font-bold">
                ⚡ Ideal Pre-Workout Fuel
              </Badge>
              <h5 className="font-bold text-xs text-foreground line-clamp-1">{preWorkoutRecipe.name}</h5>
              <p className="text-[11px] text-muted-foreground">
                {preWorkoutRecipe.macrosPerServing.carbs}g Carbs • {preWorkoutRecipe.macrosPerServing.protein}g Protein ({userProfile.currency}{preWorkoutRecipe.estimatedCostPerServing}/portion)
              </p>
            </div>

            <Button
              size="sm"
              variant="secondary"
              className="w-full h-8 text-xs font-semibold rounded-xl justify-between mt-2"
              onClick={() => {
                if (onOpenRecipe) onOpenRecipe(preWorkoutRecipe);
                else navigate('/recipes');
              }}
            >
              <span>View Recipe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Post Workout */}
          <div className="p-3.5 rounded-2xl bg-card border space-y-2 flex flex-col justify-between">
            <div className="space-y-1">
              <Badge variant="outline" className="text-[10px] text-sky-700 dark:text-sky-300 border-sky-300 bg-sky-500/10 font-bold">
                🥩 Post-Workout Muscle Recovery
              </Badge>
              <h5 className="font-bold text-xs text-foreground line-clamp-1">{postWorkoutRecipe.name}</h5>
              <p className="text-[11px] text-muted-foreground">
                {postWorkoutRecipe.macrosPerServing.protein}g High-Bio Protein • {postWorkoutRecipe.macrosPerServing.calories} kcal ({userProfile.currency}{postWorkoutRecipe.estimatedCostPerServing}/portion)
              </p>
            </div>

            <Button
              size="sm"
              variant="secondary"
              className="w-full h-8 text-xs font-semibold rounded-xl justify-between mt-2"
              onClick={() => {
                if (onOpenRecipe) onOpenRecipe(postWorkoutRecipe);
                else navigate('/recipes');
              }}
            >
              <span>View Recipe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};