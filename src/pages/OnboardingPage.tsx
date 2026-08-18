import React, { useState } from 'react';
import { UserProfile, Gender, ActivityLevel, NutritionGoal, DietaryPreference } from '@/types/nutrition';
import { DEFAULT_PROFILE } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, User, Activity, Target, ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface OnboardingPageProps {
  onProfileCreated: (profile: UserProfile) => void;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ onProfileCreated }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserProfile>(DEFAULT_PROFILE);

  const handleChange = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNumericChange = (field: keyof UserProfile, value: string) => {
    const num = Number(value);
    if (!isNaN(num) && num >= 0) {
      handleChange(field, num);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProfileCreated(formData);
  };

  const progress = Math.round((step / 3) * 100);

  return (
    <div className="min-h-screen w-full bg-muted/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-4">
        <div className="flex items-center gap-2 font-black text-2xl text-emerald-600 dark:text-emerald-400 justify-center">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <span>Welcome to NutriSense</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">Let's create your personalized health & fitness profile.</p>

        <Card className="rounded-3xl shadow-lg">
          <CardHeader>
            <Progress value={progress} className="h-2 mb-4" />
            <CardTitle className="flex items-center gap-2">
              {step === 1 && <User className="w-5 h-5 text-emerald-600" />}
              {step === 2 && <Activity className="w-5 h-5 text-emerald-600" />}
              {step === 3 && <Target className="w-5 h-5 text-emerald-600" />}
              Step {step} of 3: {step === 1 ? 'Your Biometrics' : step === 2 ? 'Lifestyle & Goals' : 'Preferences'}
            </CardTitle>
            <CardDescription>
              {step === 1 ? 'Tell us about yourself for accurate calculations.' : step === 2 ? 'What are you aiming to achieve?' : 'Fine-tune your plan.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="e.g., Alex Morgan" className="rounded-xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" value={formData.age} onChange={(e) => handleNumericChange('age', e.target.value)} className="rounded-xl" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="gender">Gender</Label>
                      <Select value={formData.gender} onValueChange={(v: Gender) => handleChange('gender', v)}>
                        <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" value={formData.heightCm} onChange={(e) => handleNumericChange('heightCm', e.target.value)} className="rounded-xl" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" type="number" value={formData.weightKg} onChange={(e) => handleNumericChange('weightKg', e.target.value)} className="rounded-xl" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label>Activity Level</Label>
                    <Select value={formData.activityLevel} onValueChange={(v: ActivityLevel) => handleChange('activityLevel', v)}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                        <SelectItem value="light">Lightly Active (light exercise/sports 1-3 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderately Active (moderate exercise/sports 3-5 days/week)</SelectItem>
                        <SelectItem value="very_active">Very Active (hard exercise/sports 6-7 days a week)</SelectItem>
                        <SelectItem value="extra_active">Extra Active (very hard exercise & physical job)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Primary Goal</Label>
                    <Select value={formData.goal} onValueChange={(v: NutritionGoal) => handleChange('goal', v)}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lose_fat">Lose Fat / Weight Loss</SelectItem>
                        <SelectItem value="maintain">Maintain Weight / Improve Health</SelectItem>
                        <SelectItem value="build_muscle">Build Muscle / Strength Gain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label>Dietary Preference</Label>
                    <Select value={formData.dietaryPreference} onValueChange={(v: DietaryPreference) => handleChange('dietaryPreference', v)}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="balanced">Balanced Diet</SelectItem>
                        <SelectItem value="high_protein">High Protein</SelectItem>
                        <SelectItem value="mediterranean">Mediterranean</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="pescatarian">Pescatarian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="budget">Weekly Food Budget ({formData.currency})</Label>
                    <Input id="budget" type="number" value={formData.weeklyBudget} onChange={(e) => handleNumericChange('weeklyBudget', e.target.value)} className="rounded-xl" />
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(s => s - 1)} disabled={step === 1} className="rounded-xl gap-1.5">
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                {step < 3 ? (
                  <Button type="button" onClick={() => setStep(s => s + 1)} className="rounded-xl gap-1.5 bg-emerald-600 hover:bg-emerald-700">
                    Next <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button type="submit" className="rounded-xl gap-1.5 bg-emerald-600 hover:bg-emerald-700">
                    <Check className="w-4 h-4" /> Create My Profile
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPage;