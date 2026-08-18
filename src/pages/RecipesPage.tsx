import React, { useState, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { RecipeSwipeDeck } from '@/components/RecipeSwipeDeck';
import { DetailedRecipeModal } from '@/components/DetailedRecipeModal';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { ALL_DATABASE_RECIPES } from '@/data/recipeDatabase';
import { Recipe } from '@/types/nutrition';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Sparkles,
  Utensils,
  Clock,
  Bookmark,
  Search,
  Trash2,
  Flame,
  ArrowUpDown,
  Beef,
  ChevronDown
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const RECIPES_PER_PAGE = 12;

const RecipesPage: React.FC = () => {
  const { savedRecipes, removeRecipeFromBank, userProfile } = useApp();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTab, setActiveTab] = useState<'swipe' | 'bank' | 'browse'>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'protein' | 'calories' | 'cost' | 'health'>('recommended');
  const [visibleCount, setVisibleCount] = useState<number>(RECIPES_PER_PAGE);

  const categories = [
    { label: 'All Recipes', value: 'All' },
    { label: '🥩 Beef & Steaks', value: 'Beef' },
    { label: '🍗 Poultry & Chicken', value: 'Poultry' },
    { label: '🍖 Pork & Lamb', value: 'Pork' },
    { label: '🐟 Seafood & Fish', value: 'Pescatarian' },
    { label: '⚡ 40g+ High Protein', value: 'High Protein' },
    { label: '💰 Budget Under £2', value: 'Budget Hero' },
    { label: '🥑 Keto & Low Carb', value: 'Keto' },
    { label: '🥗 Plant-Based', value: 'Vegan' }
  ];

  const filteredAndSorted = useMemo(() => {
    let result = ALL_DATABASE_RECIPES.filter(recipe => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        recipe.name.toLowerCase().includes(q) ||
        recipe.headline.toLowerCase().includes(q) ||
        recipe.ingredients.some(i => i.name.toLowerCase().includes(q)) ||
        recipe.dietaryTags.some(t => t.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      if (filterTag === 'All') return true;
      if (filterTag === 'Beef') return recipe.name.toLowerCase().includes('steak') || recipe.name.toLowerCase().includes('beef') || recipe.ingredients.some(i => i.name.toLowerCase().includes('beef') || i.name.toLowerCase().includes('steak'));
      if (filterTag === 'Poultry') return recipe.name.toLowerCase().includes('chicken') || recipe.name.toLowerCase().includes('turkey');
      if (filterTag === 'Pork') return recipe.name.toLowerCase().includes('pork') || recipe.name.toLowerCase().includes('lamb');
      if (filterTag === 'Pescatarian') return recipe.dietaryTags.some(t => t.toLowerCase() === 'pescatarian') || recipe.allergens.includes('Fish') || recipe.allergens.includes('Crustaceans');
      if (filterTag === 'High Protein') return recipe.macrosPerServing.protein >= 35;
      if (filterTag === 'Budget Hero') return recipe.estimatedCostPerServing <= 2.0;
      if (filterTag === 'Keto') return recipe.macrosPerServing.carbs <= 20 || recipe.dietaryTags.some(t => t.toLowerCase().includes('keto'));
      if (filterTag === 'Vegan') return recipe.dietaryTags.some(t => t.toLowerCase().includes('vegan'));

      return recipe.dietaryTags.some(t => t.toLowerCase() === filterTag.toLowerCase());
    });

    if (sortBy === 'protein') {
      result.sort((a, b) => b.macrosPerServing.protein - a.macrosPerServing.protein);
    } else if (sortBy === 'calories') {
      result.sort((a, b) => a.macrosPerServing.calories - b.macrosPerServing.calories);
    } else if (sortBy === 'cost') {
      result.sort((a, b) => a.estimatedCostPerServing - b.estimatedCostPerServing);
    } else if (sortBy === 'health') {
      result.sort((a, b) => (b.healthScore?.score || 0) - (a.healthScore?.score || 0));
    }

    return result;
  }, [searchQuery, filterTag, sortBy]);

  const visibleRecipes = filteredAndSorted.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSorted.length;

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              Healthy Online Recipe Database
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Browse {ALL_DATABASE_RECIPES.length}+ healthy, high-protein meats, steaks, poultry, and nutrient-dense whole-food recipes.
            </p>
          </div>
        </div>

        {/* Tabs switcher */}
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as any)} className="space-y-6">
          <TabsList className="grid grid-cols-3 rounded-2xl h-11 p-1 bg-muted/50 border max-w-md mx-auto">
            <TabsTrigger value="browse" className="rounded-xl font-bold text-xs gap-1.5">
              <Search className="w-3.5 h-3.5" />
              All Recipes ({ALL_DATABASE_RECIPES.length})
            </TabsTrigger>
            <TabsTrigger value="swipe" className="rounded-xl font-bold text-xs gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Discovery Deck
            </TabsTrigger>
            <TabsTrigger value="bank" className="rounded-xl font-bold text-xs gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-sky-600" />
              Saved Bank ({savedRecipes.length})
            </TabsTrigger>
          </TabsList>

          {/* 1. Browse All Recipes */}
          <TabsContent value="browse" className="space-y-5">
            {/* Search & Sort Controls */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search 100+ meals: Ribeye, Sirloin, Chicken, Lamb, Prawns, Bowls..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(RECIPES_PER_PAGE);
                    }}
                    className="pl-9 rounded-2xl h-11 text-xs"
                  />
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-1 bg-card border px-3 py-2 rounded-2xl text-xs w-full sm:w-auto shrink-0 justify-between">
                  <span className="text-muted-foreground font-semibold flex items-center gap-1">
                    <ArrowUpDown className="w-3 h-3" /> Sort:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-transparent font-bold text-foreground focus:outline-none cursor-pointer"
                  >
                    <option value="recommended">Featured / Best</option>
                    <option value="protein">Highest Protein 🥩</option>
                    <option value="cost">Lowest Cost / Serving 💰</option>
                    <option value="health">Highest Health Score 🛡️</option>
                    <option value="calories">Lowest Calories ⚡</option>
                  </select>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setFilterTag(cat.value);
                      setVisibleCount(RECIPES_PER_PAGE);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                      filterTag === cat.value
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-card text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Showing <strong>{visibleRecipes.length}</strong> of <strong>{filteredAndSorted.length}</strong> recipes</span>
              {filteredAndSorted.some(r => r.macrosPerServing.protein >= 40) && (
                <span className="text-sky-600 dark:text-sky-400 font-semibold flex items-center gap-1">
                  <Beef className="w-3.5 h-3.5" /> High-protein options highlighted
                </span>
              )}
            </div>

            {/* Recipe Grid */}
            {filteredAndSorted.length === 0 ? (
              <Card className="rounded-3xl border text-center p-12 space-y-3 bg-muted/20">
                <Utensils className="w-10 h-10 text-muted-foreground/50 mx-auto" />
                <h4 className="font-bold text-base">No recipes found matching "{searchQuery}"</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Try searching for "Steak", "Chicken", "Salmon", or clearing your active filters.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterTag('All');
                  }}
                  variant="outline"
                  className="rounded-xl text-xs"
                >
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleRecipes.map(recipe => (
                  <Card
                    key={recipe.id}
                    onClick={() => setSelectedRecipe(recipe)}
                    className="rounded-3xl border bg-card overflow-hidden shadow-xs hover:border-emerald-500/40 cursor-pointer transition-all flex flex-col justify-between hover:shadow-md"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-muted">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute top-2.5 left-2.5">
                        <HealthScoreBadge healthScore={recipe.healthScore} foodName={recipe.name} size="sm" />
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <Badge className="bg-black/70 backdrop-blur-md text-white font-mono text-xs">
                          {userProfile.currency}{recipe.estimatedCostPerServing.toFixed(2)}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="font-bold bg<dyad-write path="src/pages/RecipesPage.tsx" description="Upgraded Recipes Page with high meat filters, sorting by protein/calories/cost/health score, search, and responsive pagination">
import React, { useState, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { RecipeSwipeDeck } from '@/components/RecipeSwipeDeck';
import { DetailedRecipeModal } from '@/components/DetailedRecipeModal';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { ALL_DATABASE_RECIPES } from '@/data/recipeDatabase';
import { Recipe } from '@/types/nutrition';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Sparkles,
  Utensils,
  Clock,
  Bookmark,
  Search,
  Trash2,
  Flame,
  ArrowUpDown,
  Beef,
  ChevronDown
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const RECIPES_PER_PAGE = 12;

const RecipesPage: React.FC = () => {
  const { savedRecipes, removeRecipeFromBank, userProfile } = useApp();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTab, setActiveTab] = useState<'browse' | 'swipe' | 'bank'>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'protein' | 'calories' | 'cost' | 'health'>('recommended');
  const [visibleCount, setVisibleCount] = useState<number>(RECIPES_PER_PAGE);

  const categories = [
    { label: 'All Recipes', value: 'All' },
    { label: '🥩 Beef & Steaks', value: 'Beef' },
    { label: '🍗 Poultry & Chicken', value: 'Poultry' },
    { label: '🍖 Pork & Lamb', value: 'Pork' },
    { label: '🐟 Seafood & Fish', value: 'Pescatarian' },
    { label: '⚡ 40g+ High Protein', value: 'High Protein' },
    { label: '💰 Budget Under £2', value: 'Budget Hero' },
    { label: '🥑 Keto & Low Carb', value: 'Keto' },
    { label: '🥗 Plant-Based', value: 'Vegan' }
  ];

  const filteredAndSorted = useMemo(() => {
    let result = ALL_DATABASE_RECIPES.filter(recipe => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        recipe.name.toLowerCase().includes(q) ||
        recipe.headline.toLowerCase().includes(q) ||
        recipe.ingredients.some(i => i.name.toLowerCase().includes(q)) ||
        recipe.dietaryTags.some(t => t.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      if (filterTag === 'All') return true;
      if (filterTag === 'Beef') return recipe.name.toLowerCase().includes('steak') || recipe.name.toLowerCase().includes('beef') || recipe.ingredients.some(i => i.name.toLowerCase().includes('beef') || i.name.toLowerCase().includes('steak'));
      if (filterTag === 'Poultry') return recipe.name.toLowerCase().includes('chicken') || recipe.name.toLowerCase().includes('turkey');
      if (filterTag === 'Pork') return recipe.name.toLowerCase().includes('pork') || recipe.name.toLowerCase().includes('lamb');
      if (filterTag === 'Pescatarian') return recipe.dietaryTags.some(t => t.toLowerCase() === 'pescatarian') || recipe.allergens.includes('Fish') || recipe.allergens.includes('Crustaceans');
      if (filterTag === 'High Protein') return recipe.macrosPerServing.protein >= 35;
      if (filterTag === 'Budget Hero') return recipe.estimatedCostPerServing <= 2.0;
      if (filterTag === 'Keto') return recipe.macrosPerServing.carbs <= 20 || recipe.dietaryTags.some(t => t.toLowerCase().includes('keto'));
      if (filterTag === 'Vegan') return recipe.dietaryTags.some(t => t.toLowerCase().includes('vegan'));

      return recipe.dietaryTags.some(t => t.toLowerCase() === filterTag.toLowerCase());
    });

    if (sortBy === 'protein') {
      result.sort((a, b) => b.macrosPerServing.protein - a.macrosPerServing.protein);
    } else if (sortBy === 'calories') {
      result.sort((a, b) => a.macrosPerServing.calories - b.macrosPerServing.calories);
    } else if (sortBy === 'cost') {
      result.sort((a, b) => a.estimatedCostPerServing - b.estimatedCostPerServing);
    } else if (sortBy === 'health') {
      result.sort((a, b) => (b.healthScore?.score || 0) - (a.healthScore?.score || 0));
    }

    return result;
  }, [searchQuery, filterTag, sortBy]);

  const visibleRecipes = filteredAndSorted.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSorted.length;

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              Healthy Online Recipe Database
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Browse {ALL_DATABASE_RECIPES.length}+ healthy, high-protein meats, steaks, poultry, and nutrient-dense whole-food recipes.
            </p>
          </div>
        </div>

        {/* Tabs switcher */}
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as any)} className="space-y-6">
          <TabsList className="grid grid-cols-3 rounded-2xl h-11 p-1 bg-muted/50 border max-w-md mx-auto">
            <TabsTrigger value="browse" className="rounded-xl font-bold text-xs gap-1.5">
              <Search className="w-3.5 h-3.5" />
              All Recipes ({ALL_DATABASE_RECIPES.length})
            </TabsTrigger>
            <TabsTrigger value="swipe" className="rounded-xl font-bold text-xs gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Discovery Deck
            </TabsTrigger>
            <TabsTrigger value="bank" className="rounded-xl font-bold text-xs gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-sky-600" />
              Saved Bank ({savedRecipes.length})
            </TabsTrigger>
          </TabsList>

          {/* 1. Browse All Recipes */}
          <TabsContent value="browse" className="space-y-5">
            {/* Search & Sort Controls */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search 100+ meals: Ribeye, Sirloin, Chicken, Lamb, Prawns, Bowls..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(RECIPES_PER_PAGE);
                    }}
                    className="pl-9 rounded-2xl h-11 text-xs"
                  />
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-1 bg-card border px-3 py-2 rounded-2xl text-xs w-full sm:w-auto shrink-0 justify-between">
                  <span className="text-muted-foreground font-semibold flex items-center gap-1">
                    <ArrowUpDown className="w-3 h-3" /> Sort:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-transparent font-bold text-foreground focus:outline-none cursor-pointer"
                  >
                    <option value="recommended">Featured / Best</option>
                    <option value="protein">Highest Protein 🥩</option>
                    <option value="cost">Lowest Cost / Serving 💰</option>
                    <option value="health">Highest Health Score 🛡️</option>
                    <option value="calories">Lowest Calories ⚡</option>
                  </select>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setFilterTag(cat.value);
                      setVisibleCount(RECIPES_PER_PAGE);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                      filterTag === cat.value
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-card text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Showing <strong>{visibleRecipes.length}</strong> of <strong>{filteredAndSorted.length}</strong> recipes</span>
              {filteredAndSorted.some(r => r.macrosPerServing.protein >= 40) && (
                <span className="text-sky-600 dark:text-sky-400 font-semibold flex items-center gap-1">
                  <Beef className="w-3.5 h-3.5" /> High-protein options highlighted
                </span>
              )}
            </div>

            {/* Recipe Grid */}
            {filteredAndSorted.length === 0 ? (
              <Card className="rounded-3xl border text-center p-12 space-y-3 bg-muted/20">
                <Utensils className="w-10 h-10 text-muted-foreground/50 mx-auto" />
                <h4 className="font-bold text-base">No recipes found matching "{searchQuery}"</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Try searching for "Steak", "Chicken", "Salmon", or clearing your active filters.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterTag('All');
                  }}
                  variant="outline"
                  className="rounded-xl text-xs"
                >
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleRecipes.map(recipe => (
                  <Card
                    key={recipe.id}
                    onClick={() => setSelectedRecipe(recipe)}
                    className="rounded-3xl border bg-card overflow-hidden shadow-xs hover:border-emerald-500/40 cursor-pointer transition-all flex flex-col justify-between hover:shadow-md"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-muted">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute top-2.5 left-2.5">
                        <HealthScoreBadge healthScore={recipe.healthScore} foodName={recipe.name} size="sm" />
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <Badge className="bg-black/70 backdrop-blur-md text-white font-mono text-xs">
                          {userProfile.currency}{recipe.estimatedCostPerServing.toFixed(2)}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="font-bold bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                          {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
                        </span>
                        <span className="font-extrabold bg-emerald-600/90 px-2 py-0.5 rounded-md">
                          {recipe.macrosPerServing.protein}g protein
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm leading-snug line-clamp-2">{recipe.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{recipe.headline}</p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {recipe.dietaryTags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-[10px] font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-1 text-center text-xs p-2 rounded-xl bg-muted/40 border">
                        <div>
                          <span className="text-[10px] text-muted-foreground">Calories</span>
                          <p className="font-bold">{recipe.macrosPerServing.calories}</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground">Carbs</span>
                          <p className="font-bold">{recipe.macrosPerServing.carbs}g</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground">Fat</span>
                          <p className="font-bold">{recipe.macrosPerServing.fat}g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center pt-2">
                <Button
                  onClick={() => setVisibleCount(c => c + RECIPES_PER_PAGE)}
                  variant="outline"
                  className="rounded-2xl h-11 px-8 text-xs font-bold gap-2"
                >
                  <ChevronDown className="w-4 h-4" />
                  Load More Recipes ({filteredAndSorted.length - visibleCount} remaining)
                </Button>
              </div>
            )}
          </TabsContent>

          {/* 2. Swipe Discovery Deck */}
          <TabsContent value="swipe" className="space-y-4">
            <div className="text-center max-w-sm mx-auto space-y-1">
              <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Swipe Right to Save • Swipe Left to Pass
              </h2>
            </div>
            <RecipeSwipeDeck onSelectRecipe={(recipe) => setSelectedRecipe(recipe)} />
          </TabsContent>

          {/* 3. Saved Recipe Bank */}
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
                  Swipe right on recipes in the discovery deck or browse all recipes to add your favorites here!
                </p>
                <Button
                  onClick={() => setActiveTab('browse')}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-9"
                >
                  Browse Recipes
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