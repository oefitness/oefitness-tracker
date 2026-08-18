import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { ActiveWorkoutLoggerModal } from '@/components/exercise/ActiveWorkoutLoggerModal';
import { CardioTrackerModal } from '@/components/exercise/CardioTrackerModal';
import { TriathlonDashboard } from '@/components/exercise/TriathlonDashboard';
import { RecoveryReadinessCard } from '@/components/exercise/RecoveryReadinessCard';
import { WorkoutNutritionSyncBanner } from '@/components/exercise/WorkoutNutritionSyncBanner';
import { ExerciseAnalyticsCard } from '@/components/exercise/ExerciseAnalyticsCard';
import { DetailedRecipeModal } from '@/components/DetailedRecipeModal';
import { WorkoutSession, FitnessGoal } from '@/types/fitness';
import { Recipe } from '@/types/nutrition';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dumbbell,
  Play,
  CheckCircle2,
  Calendar,
  Sparkles,
  Flame,
  Clock,
  Trophy,
  Activity,
  Plus,
  ArrowRight,
  TrendingUp,
  Footprints
} from 'lucide-react';
import confetti from 'canvas-confetti';

const ExercisePage: React.FC = () => {
  const { workouts, startWorkout, activeWorkout } = useApp();
  const [activeTab, setActiveTab] = useState<'today' | 'triathlon' | 'cardio' | 'analytics'>('today');
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const [isCardioModalOpen, setIsCardioModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const todayWorkout = workouts.find(w => !w.isCompleted) || workouts[0];
  const completedWorkouts = workouts.filter(w => w.isCompleted);

  const handleStartWorkout = (session: WorkoutSession) => {
    startWorkout(session);
    setIsLoggerOpen(true);
  };

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-emerald-600" />
              Exercise & Athletic Performance
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Intelligent strength tracking, cardio pacing, triathlon periodisation, and real-time Garmin energy balance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => setIsCardioModalOpen(true)}
              variant="outline"
              className="rounded-2xl text-xs font-bold gap-1.5 h-9"
            >
              <Footprints className="w-4 h-4 text-sky-500" />
              Log Cardio
            </Button>
            <Button
              size="sm"
              onClick={() => handleStartWorkout(todayWorkout)}
              className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5 h-9 shadow-sm"
            >
              <Play className="w-4 h-4 fill-white" />
              Start Today's Lift
            </Button>
          </div>
        </div>

        {/* Tab switcher */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="space-y-6">
          <TabsList className="grid grid-cols-4 rounded-2xl h-11 p-1 bg-muted/50 border max-w-md mx-auto">
            <TabsTrigger value="today" className="rounded-xl font-bold text-xs gap-1.5">
              <Dumbbell className="w-3.5 h-3.5" />
              Today
            </TabsTrigger>
            <TabsTrigger value="triathlon" className="rounded-xl font-bold text-xs gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-sky-600" />
              Triathlon
            </TabsTrigger>
            <TabsTrigger value="cardio" className="rounded-xl font-bold text-xs gap-1.5">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              Cardio
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-xl font-bold text-xs gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: TODAY'S WORKOUT & RECOVERY */}
          <TabsContent value="today" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main Today's Workout Card */}
              <Card className="md:col-span-2 rounded-3xl border bg-card shadow-sm overflow-hidden flex flex-col justify-between">
                <CardContent className="p-5 sm:p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                      Today's Scheduled Session
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">
                      ~{todayWorkout.durationMinutes} mins • {todayWorkout.estimatedCalories} kcal burn
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-2xl font-black">{todayWorkout.name}</h2>
                    <p className="text-xs text-muted-foreground">
                      {todayWorkout.exercises.length} Exercises • Progressive overload target based on previous performance.
                    </p>
                  </div>

                  {/* Exercises quick checklist preview */}
                  <div className="space-y-2">
                    {todayWorkout.exercises.map((eiw, idx) => (
                      <div key={eiw.id} className="p-3 rounded-2xl bg-muted/30 border text-xs flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-[10px]">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-bold text-foreground">{eiw.exercise.name}</span>
                            <p className="text-[11px] text-muted-foreground">{eiw.sets.length} sets × {eiw.targetReps} reps</p>
                          </div>
                        </div>

                        {eiw.progressionNote && (
                          <Badge variant="outline" className="text-[10px] text-amber-700 dark:text-amber-300 font-mono hidden sm:inline-flex">
                            {eiw.progressionNote}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleStartWorkout(todayWorkout)}
                    className="w-full h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    Open Live Gym Tracker
                  </Button>
                </CardContent>
              </Card>

              {/* Recovery Card on Side */}
              <div className="space-y-6">
                <RecoveryReadinessCard />
              </div>
            </div>

            {/* Pre/Post Workout Nutrition Sync */}
            <WorkoutNutritionSyncBanner onOpenRecipe={(recipe) => setSelectedRecipe(recipe)} />

            {/* Completed Workout History */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Recent Workout History
              </h3>

              <div className="space-y-2">
                {completedWorkouts.map(w => (
                  <div key={w.id} className="p-3.5 rounded-2xl bg-card border text-xs flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{w.name}</h4>
                      <p className="text-muted-foreground mt-0.5">
                        Completed {w.completedAt ? new Date(w.completedAt).toLocaleDateString() : 'Yesterday'} • {w.durationMinutes} mins • {w.totalVolumeKg ? `${w.totalVolumeKg.toLocaleString()} kg lifted` : 'Cardio'}
                      </p>
                    </div>

                    <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-mono text-xs">
                      +{w.estimatedCalories} kcal
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: TRIATHLON TRAINING MODE */}
          <TabsContent value="triathlon" className="space-y-6">
            <TriathlonDashboard onLogCardio={() => setIsCardioModalOpen(true)} />
            <WorkoutNutritionSyncBanner onOpenRecipe={(recipe) => setSelectedRecipe(recipe)} />
          </TabsContent>

          {/* TAB 3: CARDIO TRAINING */}
          <TabsContent value="cardio" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="rounded-3xl border p-5 space-y-3 bg-gradient-to-br from-card via-card to-sky-500/5">
                <div className="flex items-center justify-between">
                  <Badge className="bg-sky-500/10 text-sky-700 dark:text-sky-300 font-bold text-xs">
                    Garmin Sync Active
                  </Badge>
                  <Footprints className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="font-extrabold text-lg">Zone 2 Aerobic Base Run</h3>
                <p className="text-xs text-muted-foreground">
                  Target: 8.0 km at 5:35/km pace. Keep heart rate below 150 bpm to stimulate mitochondrial biogenesis.
                </p>
                <Button
                  onClick={() => setIsCardioModalOpen(true)}
                  className="w-full rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs h-9"
                >
                  Log Cardio Session
                </Button>
              </Card>

              <Card className="rounded-3xl border p-5 space-y-3 bg-gradient-to-br from-card via-card to-amber-500/5">
                <div className="flex items-center justify-between">
                  <Badge className="bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold text-xs">
                    Cycling Endurance
                  </Badge>
                  <Activity className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-extrabold text-lg">Tempo Cadence 45km Ride</h3>
                <p className="text-xs text-muted-foreground">
                  90 RPM target cadence. Hydrate with 500ml sodium + electrolyte solution every 45 minutes.
                </p>
                <Button
                  onClick={() => setIsCardioModalOpen(true)}
                  variant="outline"
                  className="w-full rounded-xl font-bold text-xs h-9"
                >
                  Log Ride
                </Button>
              </Card>
            </div>
          </TabsContent>

          {/* TAB 4: ANALYTICS & 1RM CURVE */}
          <TabsContent value="analytics" className="space-y-6">
            <ExerciseAnalyticsCard />
          </TabsContent>
        </Tabs>
      </main>

      {/* Modals */}
      <ActiveWorkoutLoggerModal
        isOpen={isLoggerOpen}
        onClose={() => setIsLoggerOpen(false)}
        workout={todayWorkout}
      />

      <CardioTrackerModal
        isOpen={isCardioModalOpen}
        onClose={() => setIsCardioModalOpen(false)}
      />

      <DetailedRecipeModal
        recipe={selectedRecipe}
        isOpen={selectedRecipe !== null}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default ExercisePage;