export type FitnessGoal =
  | 'muscle_gain'
  | 'strength'
  | 'fat_loss'
  | 'general_fitness'
  | 'running'
  | 'cycling'
  | 'swimming'
  | 'triathlon'
  | 'strength_endurance'
  | 'athletic_performance';

export type CardioDiscipline = 'running' | 'cycling' | 'swimming' | 'walking' | 'rowing' | 'hiking';
export type TriathlonDistance = 'sprint' | 'olympic' | 'half_ironman' | 'ironman' | 'custom';
export type MuscleGroup = 'chest' | 'back' | 'quads' | 'hamstrings' | 'glutes' | 'shoulders' | 'biceps' | 'triceps' | 'core' | 'calves' | 'full_body';

export interface ExerciseDefinition {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  secondaryMuscles?: MuscleGroup[];
  equipment: 'barbell' | 'dumbbell' | 'cable' | 'machine' | 'bodyweight' | 'kettlebell' | 'resistance_band';
  instructions: string[];
  formCues: string[];
  defaultRestSeconds: number;
}

export interface WorkoutSet {
  id: string;
  setNumber: number;
  weightKg: number;
  reps: number;
  rpe?: number; // Rate of Perceived Exertion (6 - 10)
  isWarmup?: boolean;
  isCompleted: boolean;
  previousWeightKg?: number;
  previousReps?: number;
}

export interface ExerciseInWorkout {
  id: string;
  exercise: ExerciseDefinition;
  sets: WorkoutSet[];
  targetReps: string; // e.g. "8-10"
  targetRpe?: number;
  restSeconds: number;
  notes?: string;
  progressionNote?: string;
}

export interface WorkoutSession {
  id: string;
  name: string;
  type: 'strength' | 'cardio' | 'triathlon_brick' | 'hiit' | 'recovery_mobility';
  targetGoal: FitnessGoal;
  scheduledDate: string; // ISO format or day string
  durationMinutes: number;
  estimatedCalories: number;
  isCompleted: boolean;
  completedAt?: string;
  exercises: ExerciseInWorkout[];
  // Cardio specifics
  cardioDetails?: {
    discipline: CardioDiscipline;
    distanceKm: number;
    avgPacePerKm?: string; // e.g. "5:15"
    avgHeartRate?: number;
    maxHeartRate?: number;
    elevationGainMeters?: number;
    hrZones?: { zone1: number; zone2: number; zone3: number; zone4: number; zone5: number };
  };
  rpePostSession?: number;
  notes?: string;
  totalVolumeKg?: number;
  source: 'app_plan' | 'garmin_synced' | 'custom_logged';
}

export interface TriathlonTrainingPlan {
  id: string;
  name: string;
  distance: TriathlonDistance;
  raceDate?: string;
  weeksDuration: number;
  currentWeek: number;
  swimVolumeTargetKm: number;
  bikeVolumeTargetKm: number;
  runVolumeTargetKm: number;
  brickWorkoutsCount: number;
}

export interface RecoveryMetrics {
  readinessScore: number; // 1 - 100
  status: 'optimal' | 'moderate' | 'fatigued' | 'rest_recommended';
  hrvStatus: 'balanced' | 'elevated' | 'suppressed';
  restingHeartRate: number;
  sleepQualityHours: number;
  recommendedFocus: string;
  suggestedCalorieAdjustment: number;
}