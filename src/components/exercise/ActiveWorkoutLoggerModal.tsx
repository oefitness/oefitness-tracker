import React, { useState, useEffect } from 'react';
import { WorkoutSession } from '@/types/fitness';
import { useApp } from '@/context/AppContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dumbbell,
  Check,
  Plus,
  Clock,
  Flame,
  Award,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Info,
  Timer,
  Play,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ActiveWorkoutLoggerModalProps {
  isOpen: boolean;
  onClose: () => void;
  workout: WorkoutSession | null;
}

export const ActiveWorkoutLoggerModal: React.FC<ActiveWorkoutLoggerModalProps> = ({
  isOpen,
  onClose,
  workout
}) => {
  const { updateActiveSet, addSetToExercise, completeWorkout } = useApp();
  const [restSecondsLeft, setRestSecondsLeft] = useState<number | null>(null);
  const [workoutRpe, setWorkoutRpe] = useState<number>(8);
  const [notes, setNotes] = useState<string>('');

  // Simple Rest Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (restSecondsLeft !== null && restSecondsLeft > 0) {
      interval = setInterval(() => {
        setRestSecondsLeft(s => (s !== null && s > 0 ? s - 1 : null));
      }, 1000);
    } else if (restSecondsLeft === 0) {
      setRestSecondsLeft(null);
    }
    return () => clearInterval(interval);
  }, [restSecondsLeft]);

  if (!workout) return null;

  // Brzycki 1RM formula: Weight × (36 / (37 - Reps))
  const calculate1RM = (weight: number, reps: number) => {
    if (reps === 1) return weight;
    if (reps > 12) return Math.round(weight * 1.33);
    return Math.round(weight * (36 / (37 - reps)));
  };

  const handleToggleSet = (exerciseId: string, setIndex: number, currentCompleted: boolean, restSeconds: number) => {
    updateActiveSet(exerciseId, setIndex, { isCompleted: !currentCompleted });
    if (!currentCompleted) {
      setRestSecondsLeft(restSeconds || 90);
    }
  };

  const handleFinish = () => {
    confetti({ particleCount: 100, spread: 75, origin: { y: 0.6 } });
    completeWorkout(workout.id, notes, workoutRpe);
    onClose();
  };

  // Calculate live volume
  let liveVolume = 0;
  let completedCount = 0;
  let totalSets = 0;

  workout.exercises.forEach(ex => {
    ex.sets.forEach(s => {
      totalSets++;
      if (s.isCompleted) {
        completedCount++;
        liveVolume += (s.weightKg * s.reps);
      }
    });
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-6 rounded-3xl">
        <DialogHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
              Live Workout Tracking
            </Badge>
            <span className="text-xs font-mono text-muted-foreground">{workout.targetGoal.replace('_', ' ')}</span>
          </div>

          <DialogTitle className="text-2xl font-black flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-emerald-600" />
            {workout.name}
          </DialogTitle>
          <DialogDescription className="text-xs">
            Log sets with 1RM projections and progressive overload suggestions.
          </DialogDescription>
        </DialogHeader>

        {/* Live Metrics & Rest Timer Bar */}
        <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-muted/40 border text-xs">
          <div>
            <span className="text-muted-foreground font-medium">Sets Done</span>
            <p className="text-base font-extrabold text-foreground mt-0.5">
              {completedCount}/{totalSets}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground font-medium">Lifted Volume</span>
            <p className="text-base font-extrabold text-sky-600 dark:text-sky-400 mt-0.5">
              {liveVolume.toLocaleString()} kg
            </p>
          </div>
          <div>
            <span className="text-muted-foreground font-medium">Rest Timer</span>
            <p className={`text-base font-extrabold mt-0.5 flex items-center justify-center gap-1 ${
              restSecondsLeft ? 'text-amber-600 animate-pulse' : 'text-muted-foreground'
            }`}>
              <Timer className="w-3.5 h-3.5" />
              {restSecondsLeft !== null ? `${restSecondsLeft}s` : 'Ready'}
            </p>
          </div>
        </div>

        {/* Exercise List */}
        <div className="space-y-4 pt-2">
          {workout.exercises.map(eiw => (
            <div key={eiw.id} className="p-4 rounded-2xl bg-card border space-y-3 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                    {eiw.exercise.name}
                    <Badge variant="outline" className="text-[10px] capitalize font-normal">
                      {eiw.exercise.muscleGroup}
                    </Badge>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Target: {eiw.targetReps} reps • Rest: {eiw.restSeconds}s
                  </p>
                </div>

                {eiw.progressionNote && (
                  <div className="px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{eiw.progressionNote}</span>
                  </div>
                )}
              </div>

              {/* Sets Table */}
              <div className="space-y-1.5">
                <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-muted-foreground uppercase px-2">
                  <span className="col-span-2">Set</span>
                  <span className="col-span-3">Previous</span>
                  <span className="col-span-3">Weight (kg)</span>
                  <span className="col-span-2">Reps</span>
                  <span className="col-span-2 text-right">Done</span>
                </div>

                {eiw.sets.map((set, idx) => {
                  const est1RM = calculate1RM(set.weightKg, set.reps);

                  return (
                    <div
                      key={set.id}
                      className={`grid grid-cols-12 gap-2 items-center p-2 rounded-xl border text-xs transition-colors ${
                        set.isCompleted ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-muted/20'
                      }`}
                    >
                      <span className="col-span-2 font-bold font-mono pl-1">
                        #{set.setNumber}
                      </span>

                      <span className="col-span-3 text-[11px] text-muted-foreground truncate">
                        {set.previousWeightKg ? `${set.previousWeightKg}kg × ${set.previousReps}` : '—'}
                      </span>

                      <div className="col-span-3">
                        <Input
                          type="number"
                          value={set.weightKg}
                          onChange={(e) => updateActiveSet(eiw.id, idx, { weightKg: Number(e.target.value) })}
                          className="h-8 rounded-lg text-xs font-mono font-bold"
                        />
                      </div>

                      <div className="col-span-2">
                        <Input
                          type="number"
                          value={set.reps}
                          onChange={(e) => updateActiveSet(eiw.id, idx, { reps: Number(e.target.value) })}
                          className="h-8 rounded-lg text-xs font-mono font-bold"
                        />
                      </div>

                      <div className="col-span-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => handleToggleSet(eiw.id, idx, set.isCompleted, eiw.restSeconds)}
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                            set.isCompleted
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-muted hover:bg-emerald-500/20 text-muted-foreground'
                          }`}
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add Set Button & Est 1RM display */}
              <div className="flex items-center justify-between pt-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => addSetToExercise(eiw.id)}
                  className="text-xs h-7 gap-1 font-semibold rounded-lg text-muted-foreground hover:text-foreground"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Set
                </Button>

                {eiw.sets.length > 0 && (
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3 h-3 text-sky-500" />
                    Est. 1RM: <strong className="text-foreground">{calculate1RM(eiw.sets[0].weightKg, eiw.sets[0].reps)} kg</strong>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Post-Session Feedback & Finish */}
        <div className="space-y-3 pt-3 border-t">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold">Session RPE (Exertion 1-10):</span>
            <div className="flex items-center gap-1">
              {[6, 7, 8, 9, 10].map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setWorkoutRpe(r)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold ${
                    workoutRpe === r ? 'bg-emerald-600 text-white' : 'bg-muted text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleFinish}
            className="w-full h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md gap-2"
          >
            <Check className="w-5 h-5" />
            Finish & Log Workout (+{workout.estimatedCalories} kcal)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};