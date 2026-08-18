import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  User,
  Activity,
  Target,
  PiggyBank,
  CheckCircle2,
  Heart,
  Scale,
  Footprints,
  Flame,
  Zap,
  Sparkles
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

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
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
            onClick={handleSave}
            className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            Save Changes
          </Button>
        </div>

        {/* Live Targets Summary Card */}
        <Card className="rounded-3xl border bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/5 shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Calculated Daily Targets (Mifflin-St Jeor)</h3>
                  <p className="text-xs text-muted-foreground">Recalculated dynamically</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-3 rounded-2xl bg-card border space-y-1">
                <span className="text-muted-foreground font-semibold">Total Energy</span>
                <p className="text-base font-extrabold text-foreground">{targets.adjustedCaloriesWithGarmin} kcal</p>
              </div>
              <div className="p-3 rounded-2xl bg-card border space-y-1">
                <span className="text-sky-600 dark:text-sky-400 font-semibold">Daily Protein</span>
                <p className="text-base font-extrabold text-sky-600">{targets.proteinGrams}g</p>
              </div>
              <div className="p-3 rounded-2xl bg-card border space-y-1">
                <span className="text-amber-600 dark:text-amber-400 font-semibold">Daily Carbs</span>
                <p className="text-base font-extrabold text-amber-600">{targets.carbsGrams}g</p>
              </div>
              <div className="p-3 rounded-2xl bg-card border space-y-1">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Daily Budget</span>
                <p className="text-base font-extrabold text-emerald-600">{userProfile.currency}{targets.dailyBudget}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Biometrics & Personal Info */}
        <form onSubmit={handleSave} className="space-y-6">
          <Card className="rounded-3xl border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6 space-y-4">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-600" />
                Personal Biometrics & Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl h-10 text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="age" className="text-xs font-semibold">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="rounded-xl h-10 text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">Gender</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['female', 'male', 'other'] as Gender[]).map(g => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGender(g)}
                        className={`py-2 rounded-xl text-xs font-bold capitalize border transition-all ${
                          gender === g ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-muted/30 text-foreground hover:bg-muted'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="height" className="text-xs font-semibold">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="rounded-xl h-10 text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="weight" className="text-xs font-semibold">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="rounded-xl h-10 text-xs"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Goals & Dietary Preferences */}
          <Card className="rounded-3xl border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6 space-y-4">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600" />
                Nutrition Goals & Dietary Plan
              </h3>

              <div className="space-y-3">
                <Label className="text-xs font-semibold">Primary Goal</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'lose_fat', label: 'Lose Fat' },
                    { id: 'maintain', label: 'Maintain' },
                    { id: 'build_muscle', label: 'Build Muscle' },
                    { id: 'improve_health', label: 'Vitality / Health' }
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id as NutritionGoal)}
                      className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                        goal === item.id ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-muted/30 text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-xs font-semibold">Dietary Style</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'high_protein', label: 'High Protein' },
                    { id: 'balanced', label: 'Balanced' },
                    { id: 'mediterranean', label: 'Mediterranean' },
                    { id: 'vegetarian', label: 'Vegetarian' },
                    { id: 'vegan', label: 'Vegan' },
                    { id: 'pescatarian', label: 'Pescatarian' }
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDietaryPreference(item.id as DietaryPreference)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        dietaryPreference === item.id ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-muted/30 text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <Label htmlFor="budget" className="text-xs font-semibold flex items-center gap-1.5">
                  <PiggyBank className="w-4 h-4 text-amber-500" />
                  Weekly Food Budget Limit ({userProfile.currency})
                </Label>
                <Input
                  id="budget"
                  type="number"
                  value={weeklyBudget}
                  onChange={(e) => setWeeklyBudget(Number(e.target.value))}
                  className="rounded-xl h-10 text-xs"
                />
              </div>
            </CardContent>
          </Card>

          {/* Garmin Connect Integration */}
          <Card className="rounded-3xl border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-xs">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Garmin Connect™ Integration</h3>
                    <p className="text-xs text-muted-foreground">
                      Live sync of active burn, resting heart rate, and step count.
                    </p>
                  </div>
                </div>

                <Switch
                  checked={garminConnected}
                  onCheckedChange={setGarminConnected}
                />
              </div>

              {garminConnected && (
                <div className="space-y-4 pt-2 border-t">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-3 rounded-2xl bg-muted/30 border space-y-1">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground">
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        <span>Active Burn</span>
                      </div>
                      <p className="font-extrabold text-sm text-amber-600">+{userProfile.garminActiveCalories} kcal</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-muted/30 border space-y-1">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground">
                        <Footprints className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Steps Today</span>
                      </div>
                      <p className="font-extrabold text-sm">{userProfile.garminSteps.toLocaleString()}</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-muted/30 border space-y-1">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground">
                        <Heart className="w-3.5 h-3.5 text-rose-500" />
                        <span>Resting HR</span>
                      </div>
                      <p className="font-extrabold text-sm">{userProfile.garminHeartRate} bpm</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={syncGarmin}
                      className="rounded-xl text-xs h-9 font-semibold gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 text-cyan-600" />
                      Sync Garmin Now
                    </Button>
                    <span className="text-[11px] text-muted-foreground">
                      Last synced: {userProfile.garminLastSync}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            Save Profile & Recalculate Nutrition
          </Button>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;