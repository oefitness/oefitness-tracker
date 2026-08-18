import React, { useState } from 'react';
import { Recipe } from '@/types/nutrition';
import { MOCK_RECIPES } from '@/data/mockData';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import {
  Heart,
  X,
  Info,
  Clock,
  Flame,
  Utensils,
  DollarSign,
  Sparkles,
  RotateCcw,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RecipeSwipeDeckProps {
  onSelectRecipe: (recipe: Recipe) => void;
}

export const RecipeSwipeDeck: React.FC<RecipeSwipeDeckProps> = ({ onSelectRecipe }) => {
  const { saveRecipeToBank, userProfile } = useApp();
  const [deck, setDeck] = useState<Recipe[]>(MOCK_RECIPES);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentRecipe = deck[currentIndex];

  const handleSwipeRight = () => {
    if (!currentRecipe) return;
    saveRecipeToBank(currentRecipe);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    setCurrentIndex(i => i + 1);
  };

  const handleSwipeLeft = () => {
    setCurrentIndex(i => i + 1);
  };

  const handleResetDeck = () => {
    setCurrentIndex(0);
  };

  if (!currentRecipe || currentIndex >= deck.length) {
    return (
      <Card className="rounded-3xl border text-center p-8 space-y-4 bg-muted/20">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold">You've explored all recipes for now!</h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Check your Recipe Bank for saved favourites or refresh the discovery feed.
          </p>
        </div>
        <Button
          onClick={handleResetDeck}
          variant="outline"
          className="rounded-2xl gap-2 text-xs font-semibold h-10"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Discovery Feed
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Swipeable Card */}
      <div className="relative rounded-3xl overflow-hidden border bg-card shadow-lg transition-all">
        <div className="relative h-80 w-full overflow-hidden bg-muted">
          <img
            src={currentRecipe.image}
            alt={currentRecipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <HealthScoreBadge healthScore={currentRecipe.healthScore} foodName={currentRecipe.name} size="md" />
            <Badge className="bg-black/60 backdrop-blur-md text-white font-mono text-xs">
              {currentIndex + 1} / {deck.length}
            </Badge>
          </div>

          {/* Bottom Card Overlay */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
            <div className="flex flex-wrap gap-1.5">
              {currentRecipe.dietaryTags.map(tag => (
                <Badge key={tag} className="bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold">
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="text-2xl font-black leading-tight drop-shadow-md">
              {currentRecipe.name}
            </h3>
            <p className="text-xs text-white/90 font-medium line-clamp-1">
              {currentRecipe.headline}
            </p>
          </div>
        </div>

        {/* Nutritional & Price strip */}
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-4 gap-2 text-center p-2.5 rounded-2xl bg-muted/40 border text-xs">
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>Time</span>
              </div>
              <p className="font-bold text-foreground mt-0.5">{currentRecipe.prepTimeMinutes + currentRecipe.cookTimeMinutes}m</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Cals</span>
              </div>
              <p className="font-bold text-foreground mt-0.5">{currentRecipe.macrosPerServing.calories}</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Utensils className="w-3.5 h-3.5 text-sky-500" />
                <span>Protein</span>
              </div>
              <p className="font-bold text-sky-600 dark:text-sky-400 mt-0.5">{currentRecipe.macrosPerServing.protein}g</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                <span>Cost</span>
              </div>
              <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{userProfile.currency}{currentRecipe.estimatedCostPerServing.toFixed(2)}</p>
            </div>
          </div>

          {/* Key Ingredients snippet */}
          <div className="text-xs space-y-1">
            <span className="text-muted-foreground font-semibold">Key Ingredients:</span>
            <p className="text-foreground/90 leading-relaxed font-medium">
              {currentRecipe.ingredients.map(i => i.name).join(' • ')}
            </p>
          </div>

          {/* Interactive Swipe / Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            {/* Dismiss (Swipe Left) */}
            <Button
              size="icon"
              variant="outline"
              onClick={handleSwipeLeft}
              className="h-14 w-14 rounded-full border-2 border-rose-400 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 shadow-md hover:scale-110 active:scale-95 transition-all"
              title="Dismiss (Swipe Left)"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* View Details */}
            <Button
              size="sm"
              variant="secondary"
              onClick={() => onSelectRecipe(currentRecipe)}
              className="h-11 px-4 rounded-2xl text-xs font-bold gap-1.5 bg-muted hover:bg-accent shadow-xs"
            >
              <Info className="w-4 h-4 text-primary" />
              Full Recipe
            </Button>

            {/* Save (Swipe Right) */}
            <Button
              size="icon"
              onClick={handleSwipeRight}
              className="h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:scale-110 active:scale-95 transition-all"
              title="Save to Recipe Bank (Swipe Right)"
            >
              <Heart className="w-6 h-6 fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};