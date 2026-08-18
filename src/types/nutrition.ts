export type Gender = 'female' | 'male' | 'other';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very_active' | 'extra_active';
export type NutritionGoal = 'lose_fat' | 'maintain' | 'build_muscle' | 'improve_health';
export type DietaryPreference = 'balanced' | 'high_protein' | 'mediterranean' | 'vegetarian' | 'vegan' | 'keto' | 'pescatarian';
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Micronutrients {
  sodium: number; // mg
  potassium: number; // mg
  calcium: number; // mg
  iron: number; // mg
  magnesium: number; // mg
  zinc: number; // mg
  vitaminA: number; // mcg
  vitaminC: number; // mg
  vitaminD: number; // mcg
  vitaminE: number; // mg
  vitaminK: number; // mcg
  vitaminB12: number; // mcg
  folate: number; // mcg
}

export interface Macronutrients {
  calories: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
  fiber: number; // g
}

export interface HealthScoreFactor {
  title: string;
  description: string;
  impact: 'positive' | 'negative';
  weight: number; // points
}

export interface HealthScoreDetails {
  score: number; // 1 - 100
  positiveFactors: HealthScoreFactor[];
  negativeFactors: HealthScoreFactor[];
  summary: string;
  processingLevel: 'Unprocessed/Minimally Processed' | 'Processed Culinary' | 'Processed' | 'Ultra-Processed';
}

export interface FoodItem {
  id: string;
  name: string;
  brand?: string;
  category: string;
  servingSize: string;
  servingSizeGrams: number;
  macros: Macronutrients;
  micros: Micronutrients;
  healthScore: HealthScoreDetails;
  priceEstimate: number; // in base currency (£)
  supermarket?: string;
  barcode?: string;
  image?: string;
  allergens?: string[];
}

export interface LoggedFoodEntry {
  id: string;
  foodItem: FoodItem;
  servings: number;
  mealType: MealType;
  loggedAt: string; // ISO date string
  customGrams?: number;
}

export interface RecipeIngredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  estimatedCost: number;
  category: string;
  substitution?: {
    name: string;
    reason: string;
    costDiff: number;
    proteinDiff: number;
  };
}

export interface Recipe {
  id: string;
  name: string;
  headline: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  defaultServings: number;
  estimatedCostPerServing: number;
  macrosPerServing: Macronutrients;
  microsPerServing: Micronutrients;
  healthScore: HealthScoreDetails;
  dietaryTags: string[];
  allergens: string[];
  ingredients: RecipeIngredient[];
  instructions: string[];
  storageInfo: string;
  cookingTips: string[];
  isHighProtein?: boolean;
  isBudgetFriendly?: boolean;
}

export interface SupermarketProduct {
  id: string;
  name: string;
  brand: string;
  supermarket: 'Tesco' | "Sainsbury's" | 'Aldi' | 'Asda' | 'Waitrose' | 'M&S';
  category: string;
  price: number;
  pricePerUnit: string;
  packageSize: string;
  healthScore: number;
  macros: Macronutrients;
  keyMicros: string[];
  tier: 'cheapest' | 'healthiest' | 'best_value' | 'standard';
  badgeReason?: string;
  equivalentGroup: string;
}

export interface ShoppingListItem {
  id: string;
  product: SupermarketProduct;
  quantity: number;
  isPurchased: boolean;
  alternativeSuggestions?: SupermarketProduct[];
}

export interface UserProfile {
  name: string;
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  activityLevel: ActivityLevel;
  dietaryPreference: DietaryPreference;
  allergies: string[];
  goal: NutritionGoal;
  customDailyCalories?: number;
  weeklyBudget: number; // £
  currency: '£' | '$' | '€';
  supermarket: string;
  garminConnected: boolean;
  garminActiveCalories: number;
  garminSteps: number;
  garminHeartRate: number;
  garminLastSync: string;
}

export interface NutritionTargets {
  dailyCalories: number;
  adjustedCaloriesWithGarmin: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
  micros: {
    [key in keyof Micronutrients]: {
      target: number;
      unit: string;
      label: string;
    };
  };
  weeklyBudget: number;
  dailyBudget: number;
}