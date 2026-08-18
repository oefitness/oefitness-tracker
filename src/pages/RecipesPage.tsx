import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { RecipeSwipeDeck } from '@/components/RecipeSwipeDeck';
import { DetailedRecipeModal } from '@/components/DetailedRecipeModal';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { MOCK_RECIPES } from '@/data/mockData';
import { Recipe } from '@/types/nutrition';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Sparkles,
  Flame,
  Utensils,
  Clock,
  DollarSign,
  Bookmark,
  BookmarkCheck,
  Search,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const RecipesPage: React.FC = () => {
  const { savedRecipes, removeRecipeFromBank, userProfile } = useApp();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTab, setActiveTab] = useState<'swipe' | 'bank' | 'browse'>('swipe');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const tags = ['All', 'High Protein', 'Budget Hero', 'Vegan', 'Gluten Free', 'Quick Dinner'];

  const filteredBrowse = MOCK_RECIPES.filter(recipe => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag =
      !filterTag || filterTag === 'All' ||
      recipe.dietaryTags.some(t => t.toLowerCase() === filterTag.toLowerCase()) ||
      (filterTag === 'Budget Hero' && recipe.isBudgetFriendly) ||
      (filterTag === 'High Protein' && recipe.isHighProtein);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              Meal Discovery & Recipe Bank
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Swipe to curate your weekly meals with balanced health scores and precise supermarket costs.
            </p>
          </div>
        </div>

        {/* Tabs switcher */}
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as any)} className="space-y-6">
          <TabsList className="grid grid-cols-3 rounded-2xl h-11 p-1 bg-muted/50 border max-w-md mx-auto">
            <TabsTrigger value="swipe" className="rounded-xl font-bold text-xs gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Discovery Deck
            </TabsTrigger>
            <TabsTrigger value="bank" className="rounded-xl font-bold text-xs gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-sky-600" />
              Recipe Bank ({savedRecipes.length})
            </TabsTrigger>
            <TabsTrigger value="browse" className="rounded-xl font-bold text-xs gap-1.5">
              <Search className="w-3.5 h-3.5" />
              All Recipes
            </TabsTrigger>
          </TabsList>

          {/* 1. Swipe Discovery Deck */}
          <TabsContent value="swipe" className="space-y-4">
            <div className="text-center max-w-sm mx-auto space-y-1">
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Swipe Right to Save • Swipe Left to Pass
              </h2>
            </div>
            <RecipeSwipeDeck onSelectRecipe={(recipe) => setSelectedRecipe(recipe)} />
          </TabsContent>

          {/* 2. Saved Recipe Bank */}
          <TabsContent value="bank" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Your Saved Recipe Bank</h3>
                <p className="text-xs text-muted-foreground">
                  Quick-access favourites ready for 1-tap food logging or grocery planning.
                </p>
              </div>
            </div>

            {savedRecipes.length === 0 ? (
              <Card className="rounded-3xl border text-center p-8 space-y-3 bg-muted/20">
                <Bookmark className="w-8 h-8 text-muted-foreground mx-auto" />
                <h4 className="font-bold text-base">Your Recipe Bank is empty</h4>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Swipe right on recipes in the discovery deck to add your personal favourites here!
                </p>
                <Button
                  onClick={() => setActiveTab('swipe')}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-9"
                >
                  Go to Discovery Deck
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedRecipes.map(recipe => (
                  <Card
                    key={recipe.id}
                    className="rounded-3xl border bg-card overflow-hidden shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                  >
                    <div className="relative h-40 w-full overflow-hidden bg-muted">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm text-rose-600 hover:text-rose-700 hover:bg-background"
                          onClick={() => removeRecipeFromBank(recipe.id)}
                          title="Remove from bank"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <HealthScoreBadge healthScore={recipe.healthScore} foodName={recipe.name} size="sm" />
                        <span className="font-extrabold text-xs bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-xs">
                          {userProfile.currency}{recipe.estimatedCostPerServing.toFixed(2)}/portion
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="font-bold text-base leading-snug">{recipe.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{recipe.headline}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-1 text-center text-xs p-2 rounded-xl bg-muted/40 border">
                        <div>
                          <span className="text-[10px] text-muted-foreground">Time</span>
                          <p className="font-bold">{recipe.prepTimeMinutes + recipe.cookTimeMinutes}m</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground">Calories</span>
                          <p className="font-bold">{recipe.macrosPerServing.calories}</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground">Protein</span>
                          <p className="font-bold text-sky-600">{recipe.macrosPerServing.protein}g</p>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => setSelectedRecipe(recipe)}
                        className="w-full h-9 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5"
                      >
                        <Utensils className="w-3.5 h-3.5" />
                        Cook & Log Recipe
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* 3. Browse All Recipes */}
          <TabsContent value="browse" className="space-y-4">
            {/* Search & filter chips */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search recipes, ingredients (salmon, lentils, chicken)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 rounded-2xl h-11 text-xs"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setFilterTag(tag === filterTag ? null : tag)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                      (filterTag === tag || (!filterTag && tag === 'All'))
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-card text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredBrowse.map(recipe => (
                <Card
                  key={recipe.id}
                  onClick={() => setSelectedRecipe(recipe)}
                  className="rounded-3xl border bg-card overflow-hidden shadow-xs hover:border-emerald-500/40 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-muted">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <HealthScoreBadge healthScore={recipe.healthScore} foodName={recipe.name} size="sm" />
                      <Badge className="bg-emerald-600/90 text-white font-mono text-xs">
                        {userProfile.currency}{recipe.estimatedCostPerServing.toFixed(2)}/portion
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-bold text-base leading-snug">{recipe.name}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{recipe.headline}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {recipe.dietaryTags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
                      </span>
                      <span>
                        <strong className="text-foreground">{recipe.macrosPerServing.calories}</strong> kcal • <strong className="text-sky-600">{recipe.macrosPerServing.protein}g</strong> protein
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Detailed Recipe Modal */}
      <DetailedRecipeModal
        recipe={selectedRecipe}
        isOpen={selectedRecipe !== null}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default RecipesPage;