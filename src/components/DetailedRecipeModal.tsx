import React, { useState } from 'react';
import { Recipe } from '@/types/nutrition';
import { useApp } from '@/context/AppContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import {
  Clock,
  Users,
  Utensils,
  Plus,
  Minus,
  Bookmark,
  BookmarkCheck,
  ShoppingCart,
  CheckCircle2,
  Sparkles,
  Flame,
  Scale,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DetailedRecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailedRecipeModal: React.FC<DetailedRecipeModalProps> = ({
  recipe,
  isOpen,
  onClose
}) => {
  const {
    saveRecipeToBank,
    removeRecipeFromBank,
    isRecipeSaved,
    logRecipe,
    addRecipeIngredientsToShoppingList,
    userProfile
  } = useApp();

  const [servings, setServings] = useState<number>(recipe?.defaultServings || 2);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!recipe) return null;

  const multiplier = servings / recipe.defaultServings;
  const isSaved = isRecipeSaved(recipe.id);

  // Scaled calculations
  const scaledCalories = Math.round(recipe.macrosPerServing.calories);
  const scaledTotalCost = +(recipe.estimatedCostPerServing * servings).toFixed(2);
  const costPerServing = recipe.estimatedCostPerServing.toFixed(2);

  const toggleStep = (index: number) => {
    setCompletedSteps(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSaveToggle = () => {
    if (isSaved) {
      removeRecipeFromBank(recipe.id);
    } else {
      saveRecipeToBank(recipe);
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.7 } });
    }
  };

  const handleLogNow = () => {
    logRecipe(recipe, 1, 'dinner');
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 rounded-3xl border">
        {/* Hero Image & Overlay */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* Action buttons on top */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-md shadow-md hover:bg-background"
              onClick={handleSaveToggle}
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 text-emerald-600" />
              ) : (
                <Bookmark className="w-5 h-5 text-foreground" />
              )}
            </Button>
          </div>

          {/* Badges on hero */}
          <div className="absolute bottom-4 left-5 right-5 space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <HealthScoreBadge healthScore={recipe.healthScore} foodName={recipe.name} size="md" />
              {recipe.dietaryTags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-md text-xs font-semibold">
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
              {recipe.name}
            </h2>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-4 gap-2 text-center p-3 rounded-2xl bg-muted/40 border text-xs">
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>Prep/Cook</span>
              </div>
              <p className="font-bold text-foreground mt-0.5">{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Energy</span>
              </div>
              <p className="font-bold text-foreground mt-0.5">{scaledCalories} kcal</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Utensils className="w-3.5 h-3.5 text-sky-500" />
                <span>Protein</span>
              </div>
              <p className="font-bold text-sky-600 dark:text-sky-400 mt-0.5">{recipe.macrosPerServing.protein}g</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                <span>Per Portion</span>
              </div>
              <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{userProfile.currency}{costPerServing}</p>
            </div>
          </div>

          {/* Servings Adjuster */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-bold text-sm">Servings Adjuster</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Auto-recalculates ingredients & cost ({userProfile.currency}{scaledTotalCost} total)
              </p>
            </div>

            <div className="flex items-center gap-3 bg-background p-1.5 rounded-2xl border shadow-xs">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-xl"
                onClick={() => setServings(s => Math.max(1, s - 1))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="font-extrabold text-sm w-5 text-center">{servings}</span>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-xl"
                onClick={() => setServings(s => s + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Ingredients & Substitution Suggestions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-600" />
                Ingredients ({recipe.ingredients.length})
              </h3>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-8 gap-1.5 rounded-xl"
                onClick={() => addRecipeIngredientsToShoppingList(recipe, servings)}
              >
                <ShoppingCart className="w-3.5 h-3.5 text-emerald-600" />
                Add to Shopping List
              </Button>
            </div>

            <div className="space-y-2">
              {recipe.ingredients.map(ing => {
                const scaledAmount = Math.round(ing.amount * multiplier * 10) / 10;
                const scaledCost = (ing.estimatedCost * multiplier).toFixed(2);

                return (
                  <div
                    key={ing.id}
                    className="p-3 rounded-xl bg-card border space-y-1.5 transition-colors hover:bg-muted/20"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">
                        <strong>{scaledAmount} {ing.unit}</strong> {ing.name}
                      </span>
                      <span className="text-muted-foreground font-mono">
                        {userProfile.currency}{scaledCost}
                      </span>
                    </div>

                    {/* Substitution Advisor */}
                    {ing.substitution && (
                      <div className="p-2 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-[11px] text-muted-foreground flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span><strong>Smart Swap:</strong> {ing.substitution.name} ({ing.substitution.reason})</span>
                        </div>
                        <Badge variant="outline" className="text-[10px] text-emerald-700 dark:text-emerald-300 font-mono ml-2 shrink-0">
                          Save {userProfile.currency}{Math.abs(ing.substitution.costDiff).toFixed(2)}
                        </Badge>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructions with Checkable Steps */}
          <div className="space-y-3">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Utensils className="w-4 h-4 text-emerald-600" />
              Step-by-Step Cooking Guide
            </h3>

            <div className="space-y-2.5">
              {recipe.instructions.map((step, idx) => {
                const isDone = completedSteps.includes(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isDone
                        ? 'bg-emerald-500/5 border-emerald-500/30 line-through opacity-70'
                        : 'bg-card hover:bg-muted/20'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                        isDone ? 'bg-emerald-600 text-white' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>
                    <p className="text-xs leading-relaxed text-foreground">{step}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Storage & Meal Prep Info */}
          {recipe.storageInfo && (
            <div className="p-3.5 rounded-2xl bg-muted/30 border text-xs space-y-1">
              <span className="font-bold text-foreground">Storage & Batch Prep:</span>
              <p className="text-muted-foreground leading-relaxed">{recipe.storageInfo}</p>
            </div>
          )}

          {/* Action Bar */}
          <div className="pt-2 flex items-center gap-3">
            <Button
              className="flex-1 h-12 rounded-2xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-sm shadow-md gap-2"
              onClick={handleLogNow}
            >
              <Utensils className="w-4 h-4" />
              Log 1 Serving to Today's Food
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};