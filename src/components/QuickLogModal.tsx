import React, { useState } from 'react';
import { FoodItem, MealType } from '@/types/nutrition';
import { MOCK_FOODS } from '@/data/mockData';
import { useApp } from '@/context/AppContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import {
  Search,
  ScanBarcode,
  Plus,
  Minus,
  Utensils,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

interface QuickLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMeal?: MealType;
}

export const QuickLogModal: React.FC<QuickLogModalProps> = ({
  isOpen,
  onClose,
  defaultMeal = 'lunch'
}) => {
  const { logFood } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeal, setSelectedMeal] = useState<MealType>(defaultMeal);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [servings, setServings] = useState<number>(1);
  const [isScanning, setIsScanning] = useState(false);

  const filteredFoods = MOCK_FOODS.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectFood = (food: FoodItem) => {
    setSelectedFood(food);
    setServings(1);
  };

  const handleLog = () => {
    if (!selectedFood) return;
    logFood(selectedFood, servings, selectedMeal);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    setSelectedFood(null);
    onClose();
  };

  const handleSimulateBarcode = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const randomFood = MOCK_FOODS[Math.floor(Math.random() * MOCK_FOODS.length)];
      setSelectedFood(randomFood);
      toast.success(`Barcode Scanned: ${randomFood.name}`);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-5 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Utensils className="w-5 h-5 text-emerald-600" />
            Quick Food Logger
          </DialogTitle>
          <DialogDescription className="text-xs">
            Search whole foods, scanned supermarket groceries, or previous meals.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-1">
          {/* Meal selector */}
          <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-muted/40 border text-xs">
            {(['breakfast', 'lunch', 'dinner', 'snack'] as MealType[]).map(meal => (
              <button
                key={meal}
                type="button"
                onClick={() => setSelectedMeal(meal)}
                className={`py-1.5 rounded-xl font-bold capitalize transition-all ${
                  selectedMeal === meal
                    ? 'bg-background shadow-xs text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {meal}
              </button>
            ))}
          </div>

          {/* Search bar & Barcode simulator */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search food, salmon, oats, eggs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-2xl h-11 text-xs"
              />
            </div>
            <Button
              variant="outline"
              onClick={handleSimulateBarcode}
              disabled={isScanning}
              className="h-11 px-3 rounded-2xl text-xs gap-1.5 shrink-0"
              title="Simulate Barcode Scanner"
            >
              <ScanBarcode className="w-4 h-4 text-emerald-600" />
              {isScanning ? 'Scanning...' : 'Scan'}
            </Button>
          </div>

          {/* Selected Food Editor Card */}
          {selectedFood && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-sm text-foreground">{selectedFood.name}</h4>
                  <p className="text-xs text-muted-foreground">{selectedFood.servingSize}</p>
                </div>
                <HealthScoreBadge healthScore={selectedFood.healthScore} foodName={selectedFood.name} size="sm" />
              </div>

              {/* Servings control */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold">Portion (x Servings):</span>
                <div className="flex items-center gap-2 bg-background p-1 rounded-xl border">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 rounded-lg"
                    onClick={() => setServings(s => Math.max(0.5, s - 0.5))}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </Button>
                  <span className="text-xs font-bold w-6 text-center">{servings}x</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 rounded-lg"
                    onClick={() => setServings(s => s + 0.5)}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>

              {/* Scaled Macro preview */}
              <div className="grid grid-cols-4 gap-1 text-center text-xs p-2 rounded-xl bg-background/80 border">
                <div>
                  <span className="text-[10px] text-muted-foreground">Calories</span>
                  <p className="font-bold">{Math.round(selectedFood.macros.calories * servings)}</p>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Protein</span>
                  <p className="font-bold text-sky-600">{Math.round(selectedFood.macros.protein * servings)}g</p>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Carbs</span>
                  <p className="font-bold text-amber-600">{Math.round(selectedFood.macros.carbs * servings)}g</p>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Fat</span>
                  <p className="font-bold text-purple-600">{Math.round(selectedFood.macros.fat * servings)}g</p>
                </div>
              </div>

              <Button
                onClick={handleLog}
                className="w-full h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold gap-2"
              >
                <Check className="w-4 h-4" />
                Add to {selectedMeal}
              </Button>
            </div>
          )}

          {/* Search Results list */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {searchQuery ? 'Search Results' : 'Recommended Whole Foods'}
            </h5>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {filteredFoods.map(food => (
                <div
                  key={food.id}
                  onClick={() => handleSelectFood(food)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedFood?.id === food.id
                      ? 'border-emerald-500 bg-emerald-500/5 shadow-xs'
                      : 'bg-card hover:bg-muted/20'
                  }`}
                >
                  <div className="space-y-0.5">
                    <h6 className="font-bold text-xs text-foreground">{food.name}</h6>
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span>{food.macros.calories} kcal</span>
                      <span>•</span>
                      <span className="text-sky-600 dark:text-sky-400 font-semibold">{food.macros.protein}g protein</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <HealthScoreBadge healthScore={food.healthScore} foodName={food.name} size="sm" />
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};