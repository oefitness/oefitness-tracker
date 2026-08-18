import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  UserProfile,
  NutritionTargets,
  LoggedFoodEntry,
  Recipe,
  ShoppingListItem,
  SupermarketProduct,
  FoodItem,
  MealType
} from '@/types/nutrition';
import { WorkoutSession, FitnessGoal, WorkoutSet, ExerciseInWorkout, TriathlonTrainingPlan, RecoveryMetrics } from '@/types/fitness';
import { MOCK_FOODS, MOCK_RECIPES, MOCK_SUPERMARKET_CATALOGUE } from '@/data/mockData';
import { MOCK_SCHEDULED_WORKOUTS, MOCK_TRIATHLON_PLAN, MOCK_RECOVERY_METRICS } from '@/data/mockFitnessData';
import { toast } from 'sonner';

interface AppContextType {
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  targets: NutritionTargets;
  
  // Logged meals
  loggedEntries: LoggedFoodEntry[];
  logFood: (foodItem: FoodItem, servings: number, mealType: MealType, customGrams?: number) => void;
  logRecipe: (recipe: Recipe, servings: number, mealType: MealType) => void;
  removeLoggedEntry: (id: string) => void;
  
  // Recipe Bank
  savedRecipes: Recipe[];
  saveRecipeToBank: (recipe: Recipe) => void;
  removeRecipeFromBank: (recipeId: string) => void;
  isRecipeSaved: (recipeId: string) => boolean;

  // Grocery Shopping list & Supermarket Budget
  shoppingList: ShoppingListItem[];
  addToShoppingList: (product: SupermarketProduct, quantity?: number) => void;
  removeFromShoppingList: (id: string) => void;
  toggleShoppingItem: (id: string) => void;
  swapShoppingItem: (id: string, newProduct: SupermarketProduct) => void;
  addRecipeIngredientsToShoppingList: (recipe: Recipe, servings?: number) => void;
  
  // Garmin wearable sync simulator
  syncGarmin: () => void;
  adjustGarminBurn: (calories: number) => void;

  // Daily totals calculated
  dailyLoggedTotals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    healthScoreAverage: number;
    micros: Record<string, number>;
  };
  
  // Budget stats
  weeklyBudgetStats: {
    budget: number;
    spentThisWeek: number;
    shoppingListCost: number;
    remaining: number;
    percentageUsed: number;
    projectedEndSpend: number;
    status: 'good' | 'warning' | 'exceeded';
  };

  // Smart suggestions
  aiCoachSuggestions: Array<{
    id: string;
    type: 'nutrient' | 'budget' | 'garmin' | 'swap' | 'fitness';
    title: string;
    message: string;
    actionLabel?: string;
    actionType?: string;
    recipe?: Recipe;
  }>;

  // EXERCISE & FITNESS SYSTEM
  workouts: WorkoutSession[];
  activeWorkout: WorkoutSession | null;
  startWorkout: (workout: WorkoutSession) => void;
  updateActiveSet: (exerciseId: string, setIndex: number, updatedSet: Partial<WorkoutSet>) => void;
  addSetToExercise: (exerciseId: string) => void;
  completeWorkout: (workoutId: string, notes?: string, rpe?: number) => void;
  logCustomCardioWorkout: (cardioSession: Partial<WorkoutSession>) => void;
  rescheduleWorkout: (workoutId: string, newDate: string) => void;
  triathlonPlan: TriathlonTrainingPlan;
  updateTriathlonPlan: (plan: Partial<TriathlonTrainingPlan>) => void;
  recoveryMetrics: RecoveryMetrics;
  
  // Pre / Post Workout Nutrition Pairing
  getPrePostWorkoutRecommendations: () => {
    preWorkoutRecipe: Recipe;
    postWorkoutRecipe: Recipe;
    guidance: string;
  };
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Alex Morgan',
  age: 29,
  gender: 'female',
  heightCm: 168,
  weightKg: 64,
  activityLevel: 'moderate',
  dietaryPreference: 'high_protein',
  allergies: [],
  goal: 'build_muscle',
  weeklyBudget: 65,
  currency: '£',
  supermarket: 'Tesco',
  garminConnected: true,
  garminActiveCalories: 450,
  garminSteps: 8420,
  garminHeartRate: 64,
  garminLastSync: 'Just now'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('nutrisense_user_profile');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return DEFAULT_PROFILE;
  });

  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem('nutrisense_saved_recipes');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [MOCK_RECIPES[0], MOCK_RECIPES[3]];
  });

  const [loggedEntries, setLoggedEntries] = useState<LoggedFoodEntry[]>(() => {
    const saved = localStorage.getItem('nutrisense_logged_entries');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'log-init-1',
        foodItem: MOCK_FOODS[0],
        servings: 1.5,
        mealType: 'breakfast',
        loggedAt: new Date().toISOString()
      },
      {
        id: 'log-init-2',
        foodItem: MOCK_FOODS[2],
        servings: 1,
        mealType: 'breakfast',
        loggedAt: new Date().toISOString()
      }
    ];
  });

  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>(() => {
    const saved = localStorage.getItem('nutrisense_shopping_list');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: 'sl-1',
        product: MOCK_SUPERMARKET_CATALOGUE[0],
        quantity: 1,
        isPurchased: false,
        alternativeSuggestions: [MOCK_SUPERMARKET_CATALOGUE[1], MOCK_SUPERMARKET_CATALOGUE[2]]
      },
      {
        id: 'sl-2',
        product: MOCK_SUPERMARKET_CATALOGUE[5],
        quantity: 2,
        isPurchased: true,
        alternativeSuggestions: [MOCK_SUPERMARKET_CATALOGUE[3], MOCK_SUPERMARKET_CATALOGUE[4]]
      }
    ];
  });

  // FITNESS STATES
  const [workouts, setWorkouts] = useState<WorkoutSession[]>(() => {
    const saved = localStorage.getItem('nutrisense_workouts');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return MOCK_SCHEDULED_WORKOUTS;
  });

  const [activeWorkout, setActiveWorkout] = useState<WorkoutSession | null>(() => {
    return MOCK_SCHEDULED_WORKOUTS[0]; // today's session
  });

  const [triathlonPlan, setTriathlonPlan] = useState<TriathlonTrainingPlan>(() => {
    const saved = localStorage.getItem('nutrisense_triathlon_plan');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return MOCK_TRIATHLON_PLAN;
  });

  const [recoveryMetrics, setRecoveryMetrics] = useState<RecoveryMetrics>(MOCK_RECOVERY_METRICS);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('nutrisense_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('nutrisense_saved_recipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  useEffect(() => {
    localStorage.setItem('nutrisense_logged_entries', JSON.stringify(loggedEntries));
  }, [loggedEntries]);

  useEffect(() => {
    localStorage.setItem('nutrisense_shopping_list', JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem('nutrisense_workouts', JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('nutrisense_triathlon_plan', JSON.stringify(triathlonPlan));
  }, [triathlonPlan]);

  // Target calculation with Garmin active burn
  const targets: NutritionTargets = useMemo(() => {
    const { weightKg, heightCm, age, gender, activityLevel, goal, customDailyCalories, weeklyBudget, garminConnected, garminActiveCalories } = userProfile;

    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    if (gender === 'male') bmr += 5;
    else bmr -= 161;

    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very_active: 1.725,
      extra_active: 1.9
    };
    const tdee = Math.round(bmr * (activityMultipliers[activityLevel] || 1.4));

    let baseCalories = tdee;
    if (goal === 'lose_fat') baseCalories -= 450;
    else if (goal === 'build_muscle') baseCalories += 300;

    const dailyCalories = customDailyCalories || baseCalories;
    const extraGarmin = garminConnected ? garminActiveCalories : 0;
    const adjustedCaloriesWithGarmin = dailyCalories + extraGarmin;

    let proteinGrams = Math.round(weightKg * 2.0);
    if (userProfile.dietaryPreference === 'high_protein' || goal === 'build_muscle') {
      proteinGrams = Math.round(weightKg * 2.2);
    }
    const fatGrams = Math.round((adjustedCaloriesWithGarmin * 0.28) / 9);
    const carbsGrams = Math.max(50, Math.round((adjustedCaloriesWithGarmin - (proteinGrams * 4) - (fatGrams * 9)) / 4));
    const fiberGrams = Math.round(Math.max(30, (adjustedCaloriesWithGarmin / 1000) * 14));

    return {
      dailyCalories,
      adjustedCaloriesWithGarmin,
      proteinGrams,
      carbsGrams,
      fatGrams,
      fiberGrams,
      weeklyBudget,
      dailyBudget: +(weeklyBudget / 7).toFixed(2),
      micros: {
        sodium: { target: 2000, unit: 'mg', label: 'Sodium (max)' },
        potassium: { target: 3500, unit: 'mg', label: 'Potassium' },
        calcium: { target: 1000, unit: 'mg', label: 'Calcium' },
        iron: { target: gender === 'female' && age < 50 ? 14.8 : 8.7, unit: 'mg', label: 'Iron' },
        magnesium: { target: 300, unit: 'mg', label: 'Magnesium' },
        zinc: { target: 9.5, unit: 'mg', label: 'Zinc' },
        vitaminA: { target: 800, unit: 'mcg', label: 'Vitamin A' },
        vitaminC: { target: 90, unit: 'mg', label: 'Vitamin C' },
        vitaminD: { target: 15, unit: 'mcg', label: 'Vitamin D3' },
        vitaminE: { target: 12, unit: 'mg', label: 'Vitamin E' },
        vitaminK: { target: 75, unit: 'mcg', label: 'Vitamin K' },
        vitaminB12: { target: 2.5, unit: 'mcg', label: 'Vitamin B12' },
        folate: { target: 200, unit: 'mcg', label: 'Folate (B9)' }
      }
    };
  }, [userProfile]);

  // Logged totals
  const dailyLoggedTotals = useMemo(() => {
    let calories = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;
    let fiber = 0;
    let scoreSum = 0;
    const micros: Record<string, number> = {
      sodium: 0, potassium: 0, calcium: 0, iron: 0, magnesium: 0, zinc: 0,
      vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0, vitaminK: 0, vitaminB12: 0, folate: 0
    };

    loggedEntries.forEach(entry => {
      const s = entry.servings;
      calories += entry.foodItem.macros.calories * s;
      protein += entry.foodItem.macros.protein * s;
      carbs += entry.foodItem.macros.carbs * s;
      fat += entry.foodItem.macros.fat * s;
      fiber += entry.foodItem.macros.fiber * s;
      scoreSum += (entry.foodItem.healthScore.score || 80) * s;

      Object.keys(micros).forEach(k => {
        const key = k as keyof typeof entry.foodItem.micros;
        if (entry.foodItem.micros && entry.foodItem.micros[key]) {
          micros[k] += (entry.foodItem.micros[key] || 0) * s;
        }
      });
    });

    const totalServings = loggedEntries.reduce((acc, curr) => acc + curr.servings, 0);
    const healthScoreAverage = totalServings > 0 ? Math.round(scoreSum / totalServings) : 0;

    return {
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),
      fiber: Math.round(fiber),
      healthScoreAverage,
      micros
    };
  }, [loggedEntries]);

  // Budget stats
  const weeklyBudgetStats = useMemo(() => {
    const budget = userProfile.weeklyBudget;
    const spentThisWeek = 38.60;
    const shoppingListCost = shoppingList.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const remaining = Math.max(0, +(budget - spentThisWeek).toFixed(2));
    const percentageUsed = Math.min(100, Math.round((spentThisWeek / budget) * 100));
    const projectedEndSpend = +(spentThisWeek + (shoppingListCost * 0.8)).toFixed(2);
    
    let status: 'good' | 'warning' | 'exceeded' = 'good';
    if (spentThisWeek > budget) status = 'exceeded';
    else if (percentageUsed >= 80) status = 'warning';

    return {
      budget,
      spentThisWeek,
      shoppingListCost: +shoppingListCost.toFixed(2),
      remaining,
      percentageUsed,
      projectedEndSpend,
      status
    };
  }, [userProfile.weeklyBudget, shoppingList]);

  // AI Suggestions with Exercise & Nutrition Cross-link
  const aiCoachSuggestions = useMemo(() => {
    const list: AppContextType['aiCoachSuggestions'] = [];
    const remainingProtein = targets.proteinGrams - dailyLoggedTotals.protein;

    // Check today's workout
    const todayWorkout = workouts.find(w => !w.isCompleted);
    if (todayWorkout) {
      if (todayWorkout.type === 'strength') {
        list.push({
          id: 'sug-fit-strength',
          type: 'fitness',
          title: `Pre-Workout Fuel: ${todayWorkout.name}`,
          message: `Scheduled today! For peak muscle protein synthesis, consume 30-40g protein and 40g slow carbs 90 mins prior.`,
          actionLabel: 'View Pre-Workout Oats',
          actionType: 'recipe',
          recipe: MOCK_RECIPES[3]
        });
      } else if (todayWorkout.type === 'cardio') {
        list.push({
          id: 'sug-fit-cardio',
          type: 'fitness',
          title: `Zone 2 Cardio Planned (${todayWorkout.cardioDetails?.distanceKm || 8} km)`,
          message: `Carbohydrate replenishment is key. Hydrate with electrolytes and pair with the Spiced Dahl for easy digestion.`,
          actionLabel: 'See High-Carb Recipe',
          actionType: 'recipe',
          recipe: MOCK_RECIPES[1]
        });
      }
    }

    if (remainingProtein > 20) {
      list.push({
        id: 'sug-protein',
        type: 'nutrient',
        title: `Need ${remainingProtein}g more protein today`,
        message: `You're at ${dailyLoggedTotals.protein}g / ${targets.proteinGrams}g target. Here's a high-protein dinner under £2.80.`,
        actionLabel: 'View Recipe',
        actionType: 'recipe',
        recipe: MOCK_RECIPES[0]
      });
    }

    if (userProfile.garminConnected && userProfile.garminActiveCalories > 300) {
      list.push({
        id: 'sug-garmin',
        type: 'garmin',
        title: `Garmin: +${userProfile.garminActiveCalories} kcal active burn!`,
        message: `Your base calorie target adjusted to ${targets.adjustedCaloriesWithGarmin} kcal to maintain optimal recovery and prevent fatigue.`,
        actionLabel: 'View Energy Breakdown',
        actionType: 'garmin'
      });
    }

    return list;
  }, [targets, dailyLoggedTotals, workouts, userProfile]);

  const updateUserProfile = (newProfile: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...newProfile }));
    toast.success('Profile & fitness targets updated!');
  };

  const logFood = (foodItem: FoodItem, servings: number, mealType: MealType, customGrams?: number) => {
    const entry: LoggedFoodEntry = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      foodItem,
      servings,
      mealType,
      loggedAt: new Date().toISOString(),
      customGrams
    };
    setLoggedEntries(prev => [entry, ...prev]);
    toast.success(`Logged ${foodItem.name} (${servings}x) to ${mealType}`);
  };

  const logRecipe = (recipe: Recipe, servings: number, mealType: MealType) => {
    const foodEquivalent: FoodItem = {
      id: `recipe-food-${recipe.id}`,
      name: recipe.name,
      category: 'Prepared Recipe',
      servingSize: `${servings} serving(s)`,
      servingSizeGrams: 350 * servings,
      macros: recipe.macrosPerServing,
      micros: recipe.microsPerServing,
      healthScore: recipe.healthScore,
      priceEstimate: recipe.estimatedCostPerServing,
      image: recipe.image
    };
    logFood(foodEquivalent, servings, mealType);
  };

  const removeLoggedEntry = (id: string) => {
    setLoggedEntries(prev => prev.filter(e => e.id !== id));
    toast.info('Item removed from log');
  };

  const saveRecipeToBank = (recipe: Recipe) => {
    if (!savedRecipes.some(r => r.id === recipe.id)) {
      setSavedRecipes(prev => [recipe, ...prev]);
      toast.success(`Saved "${recipe.name}" to Recipe Bank!`);
    }
  };

  const removeRecipeFromBank = (recipeId: string) => {
    setSavedRecipes(prev => prev.filter(r => r.id !== recipeId));
    toast.info('Recipe removed from Recipe Bank');
  };

  const isRecipeSaved = (recipeId: string) => {
    return savedRecipes.some(r => r.id === recipeId);
  };

  const addToShoppingList = (product: SupermarketProduct, quantity = 1) => {
    setShoppingList(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      const alternatives = MOCK_SUPERMARKET_CATALOGUE.filter(p => p.equivalentGroup === product.equivalentGroup && p.id !== product.id);
      return [...prev, {
        id: `sl-${Date.now()}`,
        product,
        quantity,
        isPurchased: false,
        alternativeSuggestions: alternatives
      }];
    });
    toast.success(`Added ${product.name} to Shopping List`);
  };

  const removeFromShoppingList = (id: string) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev => prev.map(item => item.id === id ? { ...item, isPurchased: !item.isPurchased } : item));
  };

  const swapShoppingItem = (id: string, newProduct: SupermarketProduct) => {
    setShoppingList(prev => prev.map(item => {
      if (item.id === id) {
        const alternatives = MOCK_SUPERMARKET_CATALOGUE.filter(p => p.equivalentGroup === newProduct.equivalentGroup && p.id !== newProduct.id);
        return {
          ...item,
          product: newProduct,
          alternativeSuggestions: alternatives
        };
      }
      return item;
    }));
    toast.success(`Swapped item to ${newProduct.name}`);
  };

  const addRecipeIngredientsToShoppingList = (recipe: Recipe) => {
    recipe.ingredients.forEach(ing => {
      const match = MOCK_SUPERMARKET_CATALOGUE.find(p => p.name.toLowerCase().includes(ing.name.toLowerCase().split(' ')[0])) || MOCK_SUPERMARKET_CATALOGUE[0];
      if (match) addToShoppingList(match, 1);
    });
    toast.success(`Added ${recipe.ingredients.length} ingredients for "${recipe.name}" to shopping list!`);
  };

  const syncGarmin = () => {
    const randomBurnDelta = Math.floor(Math.random() * 80) - 40;
    const newBurn = Math.max(250, userProfile.garminActiveCalories + randomBurnDelta);
    const newSteps = userProfile.garminSteps + Math.floor(Math.random() * 450) + 100;
    
    // Also randomly adjust HRV and sleep
    setRecoveryMetrics(prev => ({
      ...prev,
      readinessScore: Math.min(98, Math.max(72, prev.readinessScore + Math.floor(Math.random() * 6) - 3)),
      restingHeartRate: Math.max(48, userProfile.garminHeartRate - 1)
    }));

    setUserProfile(prev => ({
      ...prev,
      garminActiveCalories: newBurn,
      garminSteps: newSteps,
      garminLastSync: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }));
    toast.success(`Garmin synced! Burn: +${newBurn} kcal, Steps: ${newSteps.toLocaleString()}`);
  };

  const adjustGarminBurn = (calories: number) => {
    setUserProfile(prev => ({ ...prev, garminActiveCalories: Math.max(0, calories) }));
  };

  // EXERCISE METHODS
  const startWorkout = (workout: WorkoutSession) => {
    setActiveWorkout(workout);
    toast.success(`Started workout: ${workout.name}`);
  };

  const updateActiveSet = (exerciseId: string, setIndex: number, updatedSet: Partial<WorkoutSet>) => {
    if (!activeWorkout) return;
    setActiveWorkout(prev => {
      if (!prev) return null;
      const newExercises = prev.exercises.map(ex => {
        if (ex.id !== exerciseId) return ex;
        const newSets = ex.sets.map((s, idx) => idx === setIndex ? { ...s, ...updatedSet } : s);
        return { ...ex, sets: newSets };
      });
      return { ...prev, exercises: newExercises };
    });
  };

  const addSetToExercise = (exerciseId: string) => {
    if (!activeWorkout) return;
    setActiveWorkout(prev => {
      if (!prev) return null;
      const newExercises = prev.exercises.map(ex => {
        if (ex.id !== exerciseId) return ex;
        const lastSet = ex.sets[ex.sets.length - 1];
        const newSet: WorkoutSet = {
          id: `set-${Date.now()}`,
          setNumber: ex.sets.length + 1,
          weightKg: lastSet?.weightKg || 50,
          reps: lastSet?.reps || 8,
          isCompleted: false
        };
        return { ...ex, sets: [...ex.sets, newSet] };
      });
      return { ...prev, exercises: newExercises };
    });
  };

  const completeWorkout = (workoutId: string, notes?: string, rpe?: number) => {
    let totalVol = 0;
    if (activeWorkout) {
      activeWorkout.exercises.forEach(ex => {
        ex.sets.forEach(s => {
          if (s.isCompleted) totalVol += (s.weightKg * s.reps);
        });
      });
    }

    const updated = workouts.map(w => {
      if (w.id === workoutId) {
        return {
          ...w,
          isCompleted: true,
          completedAt: new Date().toISOString(),
          totalVolumeKg: totalVol || 4800,
          notes: notes || w.notes,
          rpePostSession: rpe || 8
        };
      }
      return w;
    });

    setWorkouts(updated);
    setActiveWorkout(null);
    toast.success(`Workout complete! Total Volume Lifted: ${totalVol.toLocaleString()} kg 🎉`);
  };

  const logCustomCardioWorkout = (cardioSession: Partial<WorkoutSession>) => {
    const newSession: WorkoutSession = {
      id: `cardio-${Date.now()}`,
      name: cardioSession.name || 'Cardio Session',
      type: cardioSession.type || 'cardio',
      targetGoal: 'running',
      scheduledDate: new Date().toISOString(),
      durationMinutes: cardioSession.durationMinutes || 40,
      estimatedCalories: cardioSession.estimatedCalories || 350,
      isCompleted: true,
      completedAt: new Date().toISOString(),
      source: 'custom_logged',
      cardioDetails: cardioSession.cardioDetails,
      exercises: []
    };
    setWorkouts(prev => [newSession, ...prev]);
    toast.success(`Logged ${newSession.name} (${newSession.cardioDetails?.distanceKm || 5} km)`);
  };

  const rescheduleWorkout = (workoutId: string, newDate: string) => {
    setWorkouts(prev => prev.map(w => w.id === workoutId ? { ...w, scheduledDate: newDate } : w));
    toast.info(`Workout rescheduled to ${new Date(newDate).toLocaleDateString()}`);
  };

  const updateTriathlonPlan = (plan: Partial<TriathlonTrainingPlan>) => {
    setTriathlonPlan(prev => ({ ...prev, ...plan }));
    toast.success('Triathlon training plan updated!');
  };

  const getPrePostWorkoutRecommendations = () => {
    const todayWorkout = workouts.find(w => !w.isCompleted) || workouts[0];
    if (todayWorkout.type === 'strength') {
      return {
        preWorkoutRecipe: MOCK_RECIPES[3], // Oats
        postWorkoutRecipe: MOCK_RECIPES[0], // Salmon Bowl
        guidance: 'Strength Focus: Aim for 25-35g fast-absorbing protein and slow-digesting oats beforehand. Post-workout, consume 40g bioavailable protein to stimulate mTOR muscle protein synthesis.'
      };
    }
    return {
      preWorkoutRecipe: MOCK_RECIPES[4], // Black Bean Lime Bowl
      postWorkoutRecipe: MOCK_RECIPES[1], // Lentil Dahl
      guidance: 'Endurance Focus: Maximize glycogen storage with complex carbohydrates and electrolytes. Post-session, refuel with warm spiced lentils for anti-inflammatory curcumin and bio-iron.'
    };
  };

  return (
    <AppContext.Provider
      value={{
        userProfile,
        updateUserProfile,
        targets,
        loggedEntries,
        logFood,
        logRecipe,
        removeLoggedEntry,
        savedRecipes,
        saveRecipeToBank,
        removeRecipeFromBank,
        isRecipeSaved,
        shoppingList,
        addToShoppingList,
        removeFromShoppingList,
        toggleShoppingItem,
        swapShoppingItem,
        addRecipeIngredientsToShoppingList,
        syncGarmin,
        adjustGarminBurn,
        dailyLoggedTotals,
        weeklyBudgetStats,
        aiCoachSuggestions,
        workouts,
        activeWorkout,
        startWorkout,
        updateActiveSet,
        addSetToExercise,
        completeWorkout,
        logCustomCardioWorkout,
        rescheduleWorkout,
        triathlonPlan,
        updateTriathlonPlan,
        recoveryMetrics,
        getPrePostWorkoutRecommendations
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};