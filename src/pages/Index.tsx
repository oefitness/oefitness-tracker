import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { NutritionProgressRing } from '@/components/NutritionProgressRing';
import { GarminWidget } from '@/components/GarminWidget';
import { MicronutrientMatrix } from '@/components/MicronutrientMatrix';
import { AiRecommendationsCard } from '@/components/AiRecommendationsCard';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { QuickLogModal } from '@/components/QuickLogModal';
import { DetailedRecipeModal } from '@/components/DetailedRecipeModal';
import { ActiveWorkoutLoggerModal } from '@/components/exercise/ActiveWorkoutLoggerModal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MealType, Recipe } from '@/types/nutrition';
import {
  Plus,
  Trash2,
  Utensils,
  SunMedium,
  Sunset,
  Moon,
  Cookie,
  Sparkles,
  TrendingUp,
  ChevronRight,
  Dumbbell,
  Play,
  BatteryCharging
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mealMeta: Record<MealType, { label: string; icon: React.ElementType; color: string }> = {
  breakfast: { label: 'Breakfast', icon: SunMedium, color: 'text-amber-500 bg-amber-500/10' },
  lunch: { label: 'Lunch', icon: Utensils, color: 'text-sky-500 bg-sky-500/10' },
  dinner: { label: 'Dinner', icon: Sunset, color: 'text-indigo-500 bg-indigo-500/10' },
  snack: { label: 'Snacks & Extras', icon: Cookie, color: 'text-purple-500 bg-purple-500/10' }
};

const Index = () => {
  const { userProfile, loggedEntries, removeLoggedEntry, workouts, startWorkout, recoveryMetrics } = useApp();
  const navigate = useNavigate();
  const [quickLogMeal, setQuickLogMeal] = useState<MealType | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isWorkoutLoggerOpen, setIsWorkoutLoggerOpen] = useState(false);

  const todayWorkout = workouts.find(w => !w.isCompleted) || workouts[0];

  const getEntriesForMeal = (meal: MealType) =>
    loggedEntries.filter(entry => entry.mealType === meal);

  const handleStartWorkout = () => {
    startWorkout(todayWorkout);
    setIsWorkoutLoggerOpen(true);
  };

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Good day, {userProfile.name} 👋
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Goal: <strong className="capitalize text-foreground">{userProfile.goal.replace('_', ' ')}</strong> • Budget: <strong>{userProfile.currency}{userProfile.weeklyBudget}/wk</strong>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => setQuickLogMeal('lunch')}
              className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Log Food
            </Button>
          </div>
        </div>

        {/* Top Section: Progress Ring & Garmin Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NutritionProgressRing />
          </div>
          <div className="space-y-6">
            <GarminWidget />
            <AiRecommendationsCard onOpenRecipe={(recipe) => setSelectedRecipe(recipe)} />
          </div>
        </div>

        {/* COMBINED ECOSYSTEM: Today's Training & Recovery Card */}
        <Card className="rounded-3xl border bg-gradient-to-r from-card via-card to-emerald-500/5 shadow-sm overflow-hidden">
          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-1">
                  <Dumbbell className="w-3.5 h-3.5" />
                  Today's Training
                </Badge>
                <Badge variant="outline" className="text-xs font-mono">
                  {recoveryMetrics.readinessScore}/100 Readiness
                </Badge>
              </div>
              <h3 className="text-lg font-black text-foreground">{todayWorkout.name}</h3>
              <p className="text-xs text-muted-foreground">
                {todayWorkout.durationMinutes} mins • {todayWorkout.exercises.length} Exercises • ~{todayWorkout.estimatedCalories} kcal burn
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/exercise')}
                className="rounded-xl text-xs font-bold h-9"
              >
                View Plan
              </Button>
              <Button
                size="sm"
                onClick={handleStartWorkout}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5 h-9 shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Start Lift
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Micronutrient Matrix Row */}
        <MicronutrientMatrix />

        {/* Daily Meal Log Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Today's Meals & Logged Foods</h2>
              <p className="text-xs text-muted-foreground">
                {loggedEntries.length} items logged today
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-emerald-600 dark:text-emerald-400 font-bold"
              onClick={() => setQuickLogMeal('breakfast')}
            >
              + Add Item
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(['breakfast', 'lunch', 'dinner', 'snack'] as MealType[]).map(meal => {
              const entries = getEntriesForMeal(meal);
              const { label, icon: MealIcon, color } = mealMeta[meal];
              const mealCalories = entries.reduce((acc, curr) => acc + Math.round(curr.foodItem.macros.calories * curr.servings), 0);
              const mealProtein = entries.reduce((acc, curr) => acc + Math.round(curr.foodItem.macros.protein * curr.servings), 0);

              return (
                <Card key={meal} className="rounded-3xl border shadow-xs bg-card overflow-hidden">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${color}`}>
                          <MealIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm">{label}</h3>
                          <span className="text-[11px] text-muted-foreground">
                            {mealCalories} kcal • {mealProtein}g protein
                          </span>
                        </div>
                      </div>

                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full hover:bg-muted"
                        onClick={() => setQuickLogMeal(meal)}
                        title={`Add food to ${label}`}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Meal items */}
                    {entries.length === 0 ? (
                      <div className="py-4 text-center text-xs text-muted-foreground/70 flex flex-col items-center justify-center space-y-1">
                        <span>No foods logged for {label.toLowerCase()} yet.</span>
                        <button
                          onClick={() => setQuickLogMeal(meal)}
                          className="text-emerald-600 dark:text-emerald-400 font-semibold underline text-xs"
                        >
                          Log {label}
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {entries.map(entry => (
                          <div
                            key={entry.id}
                            className="p-2.5 rounded-2xl bg-muted/30 border text-xs flex items-center justify-between gap-2 transition-colors hover:bg-muted/50"
                          >
                            <div className="space-y-0.5 min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-foreground truncate">
                                  {entry.foodItem.name}
                                </span>
                                <HealthScoreBadge healthScore={entry.foodItem.healthScore} foodName={entry.foodItem.name} size="sm" />
                              </div>
                              <p className="text-[11px] text-muted-foreground">
                                {entry.servings}x portion • {Math.round(entry.foodItem.macros.calories * entry.servings)} kcal • {Math.round(entry.foodItem.macros.protein * entry.servings)}g protein
                              </p>
                            </div>

                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7 text-muted-foreground hover:text-rose-600 rounded-lg shrink-0"
                              onClick={() => removeLoggedEntry(entry.id)}
                              title="Delete entry"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick link banner to Recipes, Fitness & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <Card
            onClick={() => navigate('/recipes')}
            className="rounded-3xl border bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-4 cursor-pointer hover:border-emerald-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Recipe Discovery
                </span>
                <h4 className="font-extrabold text-sm">Swipe & find meals under £3</h4>
              </div>
              <ChevronRight className="w-5 h-5 text-emerald-600 shrink-0" />
            </div>
          </Card>

          <Card
            onClick={() => navigate('/exercise')}
            className="rounded-3xl border bg-gradient-to-r from-sky-500/10 to-indigo-500/10 p-4 cursor-pointer hover:border-sky-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 flex items-center gap-1">
                  <Dumbbell className="w-3.5 h-3.5" />
                  Fitness & Triathlon
                </span>
                <h4 className="font-extrabold text-sm">Gym Sets, Pace & 1RM</h4>
              </div>
              <ChevronRight className="w-5 h-5 text-sky-600 shrink-0" />
            </div>
          </Card>

          <Card
            onClick={() => navigate('/budget')}
            className="rounded-3xl border bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4 cursor-pointer hover:border-amber-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Supermarket Budget
                </span>
                <h4 className="font-extrabold text-sm">Cheapest vs Healthiest</h4>
              </div>
              <ChevronRight className="w-5 h-5 text-amber-600 shrink-0" />
            </div>
          </Card>
        </div>
      </main>

      {/* Modals */}
      <QuickLogModal
        isOpen={quickLogMeal !== null}
        onClose={() => setQuickLogMeal(null)}
        defaultMeal={quickLogMeal || 'lunch'}
      />

      <DetailedRecipeModal
        recipe={selectedRecipe}
        isOpen={selectedRecipe !== null}
        onClose={() => setSelectedRecipe(null)}
      />

      <ActiveWorkoutLoggerModal
        isOpen={isWorkoutLoggerOpen}
        onClose={() => setIsWorkoutLoggerOpen(false)}
        workout={todayWorkout}
      />
    </div>
  );
};

export default Index;