import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  User,
  Activity,
  Target,
  PiggyBank,
  Sparkles,
  Zap,
  CheckCircle2,
  Heart,
  Scale,
  Footprints,
  Flame,
  RotateCcw
} from 'lucide-react';
import { Gender, ActivityLevel, NutritionGoal, DietaryPreference } from '@/types/nutrition';

const ProfilePage: React.FC = () => {
  const { userProfile, updateUserProfile, targets, syncGarmin } = useApp();

  const [name, setName] = useState(userProfile.name);
  const [age, setAge] = useState(userProfile.age);
  const [gender, setGender] = useState<Gender>(userProfile.gender);
  const [heightCm, setHeightCm] = useState(userProfile.heightCm);
  const [weightKg, setWeightKg] = useState(userProfile.weightKg);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>(userProfile.activityLevel);
  const [goal, setGoal] = useState<NutritionGoal>(userProfile.goal);
  const [dietaryPreference, setDietaryPreference] = useState<DietaryPreference>(userProfile.dietaryPreference);
  const [weeklyBudget, setWeeklyBudget] = useState(userProfile.weeklyBudget);
  const [garminConnected, setGarminConnected] = useState(userProfile.garminConnected);
  const [garminActiveCalories, setGarminActiveCalories] = useState(userProfile.garminActiveCalories);

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    updateUserProfile({
      name,
      age: Number(age),
      gender,
      heightCm: Number(heightCm),
      weightKg: Number(weightKg),
      activityLevel,
      goal,
      dietaryPreference,
      weeklyBudget: Number(weeklyBudget),
      garminConnected,
      garminActiveCalories: Number(garminActiveCalories)
    });
  };

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <User className="w-6 h-6 text-emerald-600" />
              Personalised Profile & Settings
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Your biometrics, goals, and Garmin data automatically recalculate your daily targets.
            </p>
          </div>

          <Button
            onClick={() => handleSave()}
            className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            Save Changes
          </Button>
        </div>

        {/* Live Targets Summary Card */}
        <Card className="rounded-3xl border bg-gradient-to-br from-emerald-500/10 via-card to-sky-500/10 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              Your Auto-Calculated Targets
            </CardTitle>
            <CardDescription className="text-xs">
              Based on Mifflin-St Jeor equation + goal adjustment + Garmin active burn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-3 rounded-2xl bg-card border">
                <span className="text-[11px] text-muted-foreground">Target Calories</span>
                <p className="text-lg font-extrabold text-foreground">{targets.adjustedCaloriesWithGarmin} kcal</p>
                <span className="text-[10px] text-amber-600 font-semibold">(+{userProfile.garminActiveCalories} Garmin)</span>
              </div>
              <div className="p-3 rounded-2xl bg-card border">
                <span className="text-[11px] text-muted-foreground">Daily Protein</span>
                <p className="text-lg font-extrabold text-sky-600">{targets.proteinGrams}g</p>
                <span className="text-[10px] text-muted-foreground">2.2g / kg</span>
              </div>
              <div className="p-3 rounded-2xl bg-card border">
                <span className="text-[11px] text-muted-foreground">Daily Fiber</span>
                <p className="text-lg font-extrabold text-emerald-600">{targets.fiberGrams}g</p>
                <span className="text-[10px] text-muted-foreground">Gut health</span>
              </div>
              <div className="p-3 rounded-2xl bg-card border">
                <span className="text-[11px] text-muted-foreground">Daily Budget</span>
                <p className="text-lg font-extrabold text-amber-600">{userProfile.currency}{targets.dailyBudget}</p>
                <span className="text-[10px] text-muted-foreground">{userProfile.currency}{userProfile.weeklyBudget}/week</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 1. Biometrics Form */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-600" />
              1. Biometrics & Physical Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-bold">Your Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl h-10 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="age" className="text-xs font-bold">Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="rounded-xl h-10 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Gender</Label>
                <div className="grid grid-cols-3 gap-2">
                  {(['female', 'male', 'other'] as Gender[]).map(g => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`py-2 rounded-xl text-xs font-bold capitalize border transition-all ${
                        gender === g
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-muted/40 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="height" className="text-xs font-bold">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="rounded-xl h-10 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="weight" className="text-xs font-bold">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="rounded-xl h-10 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Activity Level</Label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
                  className="w-full h-10 rounded-xl border bg-background px-3 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="sedentary">Sedentary (Desk job, little exercise)</option>
                  <option value="light">Light (1-3 days exercise/wk)</option>
                  <option value="moderate">Moderate (3-5 days exercise/wk)</option>
                  <option value="very_active">Very Active (6-7 days hard exercise)</option>
                  <option value="extra_active">Extra Active (Athletic training / physical job)</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. Goals & Diet */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="w-5 h-5 text-sky-600" />
              2. Nutrition Goals & Dietary Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold">Primary Nutrition Goal</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'lose_fat', label: 'Lose Fat' },
                  { id: 'maintain', label: 'Maintain' },
                  { id: 'build_muscle', label: 'Build Muscle' },
                  { id: 'improve_health', label: 'Health & Vitality' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as NutritionGoal)}
                    className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                      goal === item.id
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'bg-muted/40 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-bold">Dietary Style</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'balanced', label: 'Balanced' },
                  { id: 'high_protein', label: 'High Protein' },
                  { id: 'mediterranean', label: 'Mediterranean' },
                  { id: 'vegetarian', label: 'Vegetarian' },
                  { id: 'vegan', label: 'Vegan' },
                  { id: 'pescatarian', label: 'Pescatarian' },
                  { id: 'keto', label: 'Keto' }
                ].map(style => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setDietaryPreference(style.id as DietaryPreference)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      dietaryPreference === style.id
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-muted/30 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Budget Settings */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <PiggyBank className="w-5 h-5 text-amber-500" />
              3. Weekly Food Spending Limit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="budget" className="text-xs font-bold">Weekly Food Budget ({userProfile.currency})</Label>
                <Input
                  id="budget"
                  type="number"
                  value={weeklyBudget}
                  onChange={(e) => setWeeklyBudget(Number(e.target.value))}
                  className="rounded-xl h-10 text-xs"
                />
              </div>

              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1 flex flex-col justify-center">
                <span className="font-bold text-amber-800 dark:text-amber-300">Target daily meal cost:</span>
                <p className="text-muted-foreground">
                  ~{userProfile.currency}{(weeklyBudget / 21).toFixed(2)} per meal across 3 daily meals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Garmin Wearable Integration */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-600" />
                  4. Garmin Wearable Integration
                </CardTitle>
                <CardDescription className="text-xs">
                  Auto-sync active calories to prevent energy deficits & support recovery.
                </CardDescription>
              </div>
              <Switch
                checked={garminConnected}
                onCheckedChange={setGarminConnected}
              />
            </div>
          </CardHeader>

          {garminConnected && (
            <CardContent className="space-y-4 pt-2 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="activeBurn" className="text-xs font-bold">Active Garmin Burn (kcal)</Label>
                  <Input
                    id="activeBurn"
                    type="number"
                    value={garminActiveCalories}
                    onChange={(e) => setGarminActiveCalories(Number(e.target.value))}
                    className="rounded-xl h-10 text-xs"
                  />
                </div>

                <div className="flex items-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={syncGarmin}
                    className="w-full h-10 rounded-xl text-xs gap-1.5 font-bold"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-cyan-600" />
                    Simulate Live Device Sync
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Bottom Save Button */}
        <Button
          onClick={() => handleSave()}
          className="w-full h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md gap-2"
        >
          <CheckCircle2 className="w-5 h-5" />
          Save & Apply Recalculated Targets
        </Button>
      </main>
    </div>
  );
};

export default ProfilePage;