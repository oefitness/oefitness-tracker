import { ExerciseDefinition, WorkoutSession, TriathlonTrainingPlan, RecoveryMetrics } from '@/types/fitness';

export const MOCK_EXERCISES: ExerciseDefinition[] = [
  {
    id: 'ex-1',
    name: 'Barbell Flat Bench Press',
    muscleGroup: 'chest',
    secondaryMuscles: ['triceps', 'shoulders'],
    equipment: 'barbell',
    instructions: [
      'Lie flat on the bench with eyes directly under the bar.',
      'Grip the bar slightly wider than shoulder width with thumbs wrapped around.',
      'Unrack, retract scapulae, lower bar with control to mid-chest.',
      'Press upward explosively while keeping feet driven into the floor.'
    ],
    formCues: ['Tuck elbows to 45° angle', 'Maintain slight natural arch in lower back', 'Bar path is a slight curve'],
    defaultRestSeconds: 120
  },
  {
    id: 'ex-2',
    name: 'Barbell Back Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings', 'core'],
    equipment: 'barbell',
    instructions: [
      'Position bar across your traps/rear delts and unrack.',
      'Stand with feet shoulder-width apart, toes angled out slightly.',
      'Hinge hips and bend knees simultaneously, descending below parallel.',
      'Drive through mid-foot to stand back up to starting position.'
    ],
    formCues: ['Knees track over toes', 'Keep chest proud and brace core with 360° breath', 'Avoid knee collapse'],
    defaultRestSeconds: 150
  },
  {
    id: 'ex-3',
    name: 'Barbell Romanian Deadlift (RDL)',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['glutes', 'back', 'core'],
    equipment: 'barbell',
    instructions: [
      'Stand holding barbell with overhand grip at hip height.',
      'With soft knees, push your hips backwards towards the back wall.',
      'Lower bar along your shins until maximum hamstring stretch is felt.',
      'Contract glutes and hamstrings to return to vertical.'
    ],
    formCues: ['Maintain rigid neutral spine', 'Do not bend knees excessively', 'Keep bar close to body'],
    defaultRestSeconds: 120
  },
  {
    id: 'ex-4',
    name: 'Seated Cable Row',
    muscleGroup: 'back',
    secondaryMuscles: ['biceps', 'shoulders'],
    equipment: 'cable',
    instructions: [
      'Sit upright with feet on footrests and knees slightly bent.',
      'Pull handle toward lower ribcage, squeezing shoulder blades together.',
      'Hold contraction for 1 second, then return with control.'
    ],
    formCues: ['Do not swing torso excessively', 'Lead with elbows', 'Depress shoulder blades before pulling'],
    defaultRestSeconds: 90
  },
  {
    id: 'ex-5',
    name: 'Dumbbell Overhead Shoulder Press',
    muscleGroup: 'shoulders',
    secondaryMuscles: ['triceps', 'chest'],
    equipment: 'dumbbell',
    instructions: [
      'Sit on an inclined/vertical bench with dumbbells at shoulder level.',
      'Press dumbbells vertically until arms are fully extended overhead.',
      'Lower weights smoothly back to ear height.'
    ],
    formCues: ['Avoid excessive lower back hyperextension', 'Breathe out on the upward press', 'Keep wrists neutral'],
    defaultRestSeconds: 90
  },
  {
    id: 'ex-6',
    name: 'Incline Dumbbell Curl',
    muscleGroup: 'biceps',
    equipment: 'dumbbell',
    instructions: [
      'Lie back on a 45-60 degree incline bench holding dumbbells.',
      'Curl dumbbells upwards while supinating wrists at the top.',
      'Lower slowly to full stretch at the bottom.'
    ],
    formCues: ['Keep elbows stationary behind the torso', 'Controlled 3-second negative descent'],
    defaultRestSeconds: 60
  }
];

export const MOCK_SCHEDULED_WORKOUTS: WorkoutSession[] = [
  {
    id: 'ws-today',
    name: 'Upper Body Hypertrophy & Strength',
    type: 'strength',
    targetGoal: 'muscle_gain',
    scheduledDate: new Date().toISOString(),
    durationMinutes: 55,
    estimatedCalories: 380,
    isCompleted: false,
    source: 'app_plan',
    exercises: [
      {
        id: 'eiw-1',
        exercise: MOCK_EXERCISES[0], // Bench Press
        targetReps: '6-8',
        targetRpe: 8,
        restSeconds: 120,
        progressionNote: 'Last session: 80kg × 8 × 3. Target: 82.5kg for 6-8 reps.',
        sets: [
          { id: 's-1', setNumber: 1, weightKg: 82.5, reps: 8, rpe: 8, isCompleted: true, previousWeightKg: 80, previousReps: 8 },
          { id: 's-2', setNumber: 2, weightKg: 82.5, reps: 7, rpe: 8.5, isCompleted: true, previousWeightKg: 80, previousReps: 8 },
          { id: 's-3', setNumber: 3, weightKg: 82.5, reps: 6, rpe: 9, isCompleted: false, previousWeightKg: 80, previousReps: 8 }
        ]
      },
      {
        id: 'eiw-2',
        exercise: MOCK_EXERCISES[3], // Cable Row
        targetReps: '10-12',
        targetRpe: 8,
        restSeconds: 90,
        progressionNote: 'Increase load by 2.5kg if 12 reps completed on Set 1.',
        sets: [
          { id: 's-4', setNumber: 1, weightKg: 65, reps: 12, rpe: 8, isCompleted: false, previousWeightKg: 62.5, previousReps: 12 },
          { id: 's-5', setNumber: 2, weightKg: 65, reps: 10, rpe: 8.5, isCompleted: false, previousWeightKg: 62.5, previousReps: 11 },
          { id: 's-6', setNumber: 3, weightKg: 65, reps: 10, rpe: 9, isCompleted: false, previousWeightKg: 62.5, previousReps: 10 }
        ]
      },
      {
        id: 'eiw-3',
        exercise: MOCK_EXERCISES[4], // Dumbbell Shoulder Press
        targetReps: '8-10',
        targetRpe: 8,
        restSeconds: 90,
        sets: [
          { id: 's-7', setNumber: 1, weightKg: 24, reps: 10, isCompleted: false, previousWeightKg: 22, previousReps: 10 },
          { id: 's-8', setNumber: 2, weightKg: 24, reps: 8, isCompleted: false, previousWeightKg: 22, previousReps: 9 }
        ]
      }
    ]
  },
  {
    id: 'ws-tomorrow',
    name: 'Zone 2 Aerobic Base Run',
    type: 'cardio',
    targetGoal: 'running',
    scheduledDate: new Date(Date.now() + 86400000).toISOString(),
    durationMinutes: 45,
    estimatedCalories: 480,
    isCompleted: false,
    source: 'app_plan',
    cardioDetails: {
      discipline: 'running',
      distanceKm: 8.0,
      avgPacePerKm: '5:35',
      avgHeartRate: 142,
      maxHeartRate: 154,
      elevationGainMeters: 65,
      hrZones: { zone1: 15, zone2: 65, zone3: 20, zone4: 0, zone5: 0 }
    },
    exercises: []
  },
  {
    id: 'ws-yesterday',
    name: 'Lower Body Strength & Posterior Chain',
    type: 'strength',
    targetGoal: 'muscle_gain',
    scheduledDate: new Date(Date.now() - 86400000).toISOString(),
    durationMinutes: 50,
    estimatedCalories: 420,
    isCompleted: true,
    completedAt: new Date(Date.now() - 86400000).toISOString(),
    totalVolumeKg: 6420,
    source: 'app_plan',
    exercises: [
      {
        id: 'eiw-y1',
        exercise: MOCK_EXERCISES[1], // Squat
        targetReps: '6-8',
        restSeconds: 150,
        sets: [
          { id: 'sy-1', setNumber: 1, weightKg: 105, reps: 8, rpe: 8, isCompleted: true },
          { id: 'sy-2', setNumber: 2, weightKg: 105, reps: 8, rpe: 8.5, isCompleted: true },
          { id: 'sy-3', setNumber: 3, weightKg: 105, reps: 7, rpe: 9, isCompleted: true }
        ]
      },
      {
        id: 'eiw-y2',
        exercise: MOCK_EXERCISES[2], // RDL
        targetReps: '8-10',
        restSeconds: 120,
        sets: [
          { id: 'sy-4', setNumber: 1, weightKg: 90, reps: 10, rpe: 8, isCompleted: true },
          { id: 'sy-5', setNumber: 2, weightKg: 90, reps: 10, rpe: 8.5, isCompleted: true }
        ]
      }
    ]
  }
];

export const MOCK_TRIATHLON_PLAN: TriathlonTrainingPlan = {
  id: 'tri-olympic-1',
  name: 'London Olympic Triathlon 12-Week Prep',
  distance: 'olympic',
  raceDate: '2025-08-10',
  weeksDuration: 12,
  currentWeek: 5,
  swimVolumeTargetKm: 3.5,
  bikeVolumeTargetKm: 65.0,
  runVolumeTargetKm: 22.0,
  brickWorkoutsCount: 3
};

export const MOCK_RECOVERY_METRICS: RecoveryMetrics = {
  readinessScore: 88,
  status: 'optimal',
  hrvStatus: 'balanced',
  restingHeartRate: 54,
  sleepQualityHours: 7.8,
  recommendedFocus: 'High nervous system readiness. Ideal day for heavy compound lifts or Zone 4 intervals.',
  suggestedCalorieAdjustment: 0
};