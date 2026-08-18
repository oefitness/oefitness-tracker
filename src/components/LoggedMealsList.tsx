import React from 'react';
import { useApp } from '@/context/AppContext';
import { MealType } from '@/types/nutrition';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Coffee, UtensilsCrossed, Moon, Cookie } from 'lucide-react';

interface LoggedMealsListProps {
  onOpenQuickLog: (meal: MealType) => void;
}

export const LoggedMealsList: React.FC<LoggedMealsListProps> = ({ onOpenQuickLog }) => {
  const { loggedEntries, removeLoggedEntry, userProfile } = useApp();

  const meals: Array<{ type: MealType; title: string; icon: React.ElementType; color: string }> = [
    { type: 'breakfast', title: 'Breakfast', icon: Coffee, color: 'text-amber-500 bg-amber-500/10' },
    { type: 'lunch', title: 'Lunch', icon: UtensilsCrossed, color: 'text-emerald-500 bg-emerald-500/10' },
    { type: 'dinner', title: 'Dinner', icon: Moon, color: 'text-indigo-500 bg-indigo-500/10' },
    { type: 'snack', title: 'Snacks & Bites', icon: Cookie, color: 'text-rose-500 bg-rose-500/10' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-base">Today's Meals Log</h3>
        <span className="text-xs text-muted-foreground">{loggedEntries.length} logged items</span>
      </div>

      <div className="space-y-3">
        {meals.map(({ type, title, icon: Icon, color }) => {
          const items = loggedEntries.filter(e => e.mealType === type);
          const mealCalories = items.reduce((acc, curr) => acc + Math.round(curr.foodItem.macros.calories * curr.servings), 0);
          const mealProtein = items.reduce((acc, curr) => acc + Math.round(curr.foodItem.macros.protein * curr.servings), 0);

          return (
            <div key={type} className="rounded-2xl border bg-card overflow-hidden shadow-xs">
              <div className="p-3.5 bg-muted/20 border-b flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs capitalize">{title}</h4>
                    <span className="text-[11px] text-muted-foreground">
                      {mealCalories} kcal • {mealProtein}g protein
                    </span>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onOpenQuickLog(type)}
                  className="h-7 px-2.5 text-xs font-semibold rounded-lg gap-1 hover:bg-emerald-500/10 hover:text-emerald-600"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Food
                </Button>
              </div>

              <div className="p-2 divide-y divide-border/60">
                {items.length === 0 ? (
                  <p className="text-center py-3 text-xs text-muted-foreground italic">
                    Nothing logged for {title.toLowerCase()} yet.
                  </p>
                ) : (
                  items.map(entry => {
                    const cals = Math.round(entry.foodItem.macros.calories * entry.servings);
                    const prot = Math.round(entry.foodItem.macros.protein * entry.servings);<dyad-write path="src/components/LoggedMealsList.tsx" description="Component displaying logged items grouped by breakfast, lunch, dinner, and snacks with calories, health scores, and remove controls">
import React from 'react';
import { useApp } from '@/context/AppContext';
import { MealType } from '@/types/nutrition';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Coffee, UtensilsCrossed, Moon, Cookie } from 'lucide-react';

interface LoggedMealsListProps {
  onOpenQuickLog: (meal: MealType) => void;
}

export const LoggedMealsList: React.FC<LoggedMealsListProps> = ({ onOpenQuickLog }) => {
  const { loggedEntries, removeLoggedEntry } = useApp();

  const meals: Array<{ type: MealType;<dyad-write path="src/components/LoggedMealsList.tsx" description="Component displaying logged items grouped by breakfast, lunch, dinner, and snacks with calories, health scores, and remove controls">
import React from 'react';
import { useApp } from '@/context/AppContext';
import { MealType } from '@/types/nutrition';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Coffee, UtensilsCrossed, Moon, Cookie } from 'lucide-react';

interface LoggedMealsListProps {
  onOpenQuickLog: (meal: MealType) => void;
}

export const LoggedMealsList: React.FC<LoggedMealsListProps> = ({ onOpenQuickLog }) => {
  const { loggedEntries, removeLoggedEntry } = useApp();

  const meals: Array<{ type: MealType; title: string; icon: React.ElementType; color: string }> = [
    { type: 'breakfast', title: 'Breakfast', icon: Coffee, color: 'text-amber-500 bg-amber-500/10' },
    { type: 'lunch', title: 'Lunch', icon: UtensilsCrossed, color: 'text-emerald-500 bg-emerald-500/10' },
    { type: 'dinner', title: 'Dinner', icon: Moon, color: 'text-indigo-500 bg-indigo-500/10' },
    { type: 'snack', title: 'Snacks & Bites', icon: Cookie, color: 'text-rose-500 bg-rose-500/10' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-base">Today's Meals Log</h3>
        <span className="text-xs text-muted-foreground">{loggedEntries.length} logged items</span>
      </div>

      <div className="space-y-3">
        {meals.map(({ type, title, icon: Icon, color }) => {
          const items = loggedEntries.filter(e => e.mealType === type);
          const mealCalories = items.reduce((acc, curr) => acc + Math.round(curr.foodItem.macros.calories * curr.servings), 0);
          const mealProtein = items.reduce((acc, curr) => acc + Math.round(curr.foodItem.macros.protein * curr.servings), 0);

          return (
            <div key={type} className="rounded-2xl border bg-card overflow-hidden shadow-xs">
              <div className="p-3.5 bg-muted/20 border-b flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs capitalize">{title}</h4>
                    <span className="text-[11px] text-muted-foreground">
                      {mealCalories} kcal • {mealProtein}g protein
                    </span>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onOpenQuickLog(type)}
                  className="h-7 px-2.5 text-xs font-semibold rounded-lg gap-1 hover:bg-emerald-500/10 hover:text-emerald-600"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Food
                </Button>
              </div>

              <div className="p-2 divide-y divide-border/60">
                {items.length === 0 ? (
                  <p className="text-center py-3 text-xs text-muted-foreground italic">
                    Nothing logged for {title.toLowerCase()} yet.
                  </p>
                ) : (
                  items.map(entry => {
                    const cals = Math.round(entry.foodItem.macros.calories * entry.servings);
                    const prot = Math.round(entry.foodItem.macros.protein * entry.servings);

                    return (
                      <div key={entry.id} className="py-2 px-2 flex items-center justify-between text-xs hover:bg-muted/10 rounded-lg">
                        <div className="space-y-0.5 max-w-[60%]">
                          <p className="font-semibold text-foreground truncate">{entry.foodItem.name}</p>
                          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                            <span>{entry.servings}x portion</span>
                            <span>•</span>
                            <span className="font-mono">{cals} kcal</span>
                            <span>•</span>
                            <span className="text-sky-600 dark:text-sky-400">{prot}g P</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <HealthScoreBadge healthScore={entry.foodItem.healthScore} foodName={entry.foodItem.name} size="sm" />
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeLoggedEntry(entry.id)}
                            className="h-7 w-7 text-muted-foreground hover:text-rose-500"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};