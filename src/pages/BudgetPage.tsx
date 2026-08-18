import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { SupermarketComparisonCard } from '@/components/SupermarketComparisonCard';
import { MOCK_SUPERMARKET_CATALOGUE } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import {
  PiggyBank,
  ShoppingCart,
  CheckCircle2,
  Trash2,
  Plus,
  Store,
  Sparkles,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

const SUPERMARKETS = ['Tesco', 'Aldi', "Sainsbury's", 'Asda', 'Waitrose', 'M&S'];

const BudgetPage: React.FC = () => {
  const {
    userProfile,
    updateUserProfile,
    weeklyBudgetStats,
    shoppingList,
    toggleShoppingItem,
    removeFromShoppingList,
    addToShoppingList,
    swapShoppingItem
  } = useApp();

  const [activeSupermarket, setActiveSupermarket] = useState(userProfile.supermarket || 'Tesco');
  const [searchCatalogue, setSearchCatalogue] = useState('');

  const handleSupermarketChange = (name: string) => {
    setActiveSupermarket(name);
    updateUserProfile({ supermarket: name });
  };

  const handleCheckoutSimulated = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    toast.success('Shopping trip completed! Recorded to your weekly food budget.');
  };

  const filteredCatalogue = MOCK_SUPERMARKET_CATALOGUE.filter(p =>
    p.name.toLowerCase().includes(searchCatalogue.toLowerCase()) ||
    p.category.toLowerCase().includes(searchCatalogue.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <PiggyBank className="w-6 h-6 text-amber-500" />
              Food Budget & Supermarket Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Track your weekly food spend and get smart substitutions that never compromise health for price.
            </p>
          </div>
        </div>

        {/* Weekly Budget Gauge Card */}
        <Card className="rounded-3xl border bg-card shadow-sm overflow-hidden">
          <CardContent className="p-5 sm:p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Weekly Food Budget Limit
                </span>
                <div className="text-3xl font-extrabold text-foreground flex items-baseline gap-2">
                  <span>{userProfile.currency}{weeklyBudgetStats.spentThisWeek.toFixed(2)}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    spent of {userProfile.currency}{userProfile.weeklyBudget} limit
                  </span>
                </div>
              </div>

              <Badge
                className={`text-xs font-bold px-3 py-1.5 self-start sm:self-auto ${
                  weeklyBudgetStats.status === 'good'
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                    : weeklyBudgetStats.status === 'warning'
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
                    : 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30'
                }`}
              >
                {weeklyBudgetStats.status === 'good' && '🟢 On Track & Within Budget'}
                {weeklyBudgetStats.status === 'warning' && '🟡 80%+ of Budget Reached'}
                {weeklyBudgetStats.status === 'exceeded' && '🔴 Budget Exceeded'}
              </Badge>
            </div>

            {/* Budget Bar */}
            <div className="space-y-1.5">
              <Progress
                value={weeklyBudgetStats.percentageUsed}
                className={`h-3 bg-muted ${
                  weeklyBudgetStats.status === 'good'
                    ? '[&>div]:bg-emerald-500'
                    : weeklyBudgetStats.status === 'warning'
                    ? '[&>div]:bg-amber-500'
                    : '[&>div]:bg-rose-500'
                }`}
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{weeklyBudgetStats.percentageUsed}% of weekly funds consumed</span>
                <span className="font-bold text-foreground">
                  {userProfile.currency}{weeklyBudgetStats.remaining} remaining for the week
                </span>
              </div>
            </div>

            {/* Stats Breakdown Bar */}
            <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-muted/40 border text-xs">
              <div>
                <span className="text-muted-foreground">Daily Allowance</span>
                <p className="font-bold text-foreground mt-0.5">
                  {userProfile.currency}{(userProfile.weeklyBudget / 7).toFixed(2)}/day
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Current Cart Cost</span>
                <p className="font-bold text-sky-600 dark:text-sky-400 mt-0.5">
                  {userProfile.currency}{weeklyBudgetStats.shoppingListCost.toFixed(2)}
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Projected End Spend</span>
                <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {userProfile.currency}{weeklyBudgetStats.projectedEndSpend}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supermarket Picker Strip */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5" />
              Your Primary Supermarket
            </span>
            <span className="text-xs text-muted-foreground">Prices tailored live</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {SUPERMARKETS.map(sm => (
              <button
                key={sm}
                onClick={() => handleSupermarketChange(sm)}
                className={`py-2 px-3 rounded-2xl font-bold text-xs border transition-all text-center ${
                  activeSupermarket === sm
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-card text-foreground hover:bg-muted/40'
                }`}
              >
                {sm}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Shopping List */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base">Grocery Shopping List</h3>
                  <p className="text-xs text-muted-foreground">
                    {shoppingList.length} items • Total: {userProfile.currency}{weeklyBudgetStats.shoppingListCost.toFixed(2)}
                  </p>
                </div>
              </div>

              {shoppingList.length > 0 && (
                <Button
                  size="sm"
                  onClick={handleCheckoutSimulated}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-8 gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Complete Trip
                </Button>
              )}
            </div>

            {shoppingList.length === 0 ? (
              <div className="py-8 text-center text-xs text-muted-foreground space-y-2">
                <ShoppingCart className="w-8 h-8 mx-auto text-muted-foreground/50" />
                <p>Your shopping list is empty. Add recipe ingredients or staple foods below!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {shoppingList.map(item => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      item.isPurchased
                        ? 'bg-muted/30 border-muted-foreground/20 opacity-60 line-through'
                        : 'bg-muted/10 hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        type="checkbox"
                        checked={item.isPurchased}
                        onChange={() => toggleShoppingItem(item.id)}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-xs text-foreground truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {item.quantity}x • {userProfile.currency}{item.product.price.toFixed(2)} ({item.product.supermarket})
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs font-bold text-foreground">
                        {userProfile.currency}{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-muted-foreground hover:text-rose-600 rounded-lg"
                        onClick={() => removeFromShoppingList(item.id)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Smart Supermarket Product Comparisons */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              Cheapest vs Healthiest vs Best Value Comparisons
            </h2>
            <p className="text-xs text-muted-foreground">
              Intelligent 3-tier algorithm helping you make informed nutritional trade-offs without overpaying.
            </p>
          </div>

          <SupermarketComparisonCard
            currentProduct={MOCK_SUPERMARKET_CATALOGUE[0]}
            alternatives={[MOCK_SUPERMARKET_CATALOGUE[1], MOCK_SUPERMARKET_CATALOGUE[2]]}
            onSwap={(newProduct) => {
              if (shoppingList.length > 0) {
                swapShoppingItem(shoppingList[0].id, newProduct);
              } else {
                addToShoppingList(newProduct, 1);
              }
            }}
          />

          <SupermarketComparisonCard
            currentProduct={MOCK_SUPERMARKET_CATALOGUE[5]}
            alternatives={[MOCK_SUPERMARKET_CATALOGUE[3], MOCK_SUPERMARKET_CATALOGUE[4]]}
            onSwap={(newProduct) => {
              const greekItem = shoppingList.find(i => i.product.equivalentGroup === 'greek_yogurt');
              if (greekItem) {
                swapShoppingItem(greekItem.id, newProduct);
              } else {
                addToShoppingList(newProduct, 1);
              }
            }}
          />
        </div>

        {/* Supermarket Catalogue Explorer */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-base">Supermarket Food Price Explorer</h3>
                <p className="text-xs text-muted-foreground">
                  Browse verified UK supermarket products with Health Scores and macro ratios.
                </p>
              </div>

              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search catalogue..."
                  value={searchCatalogue}
                  onChange={(e) => setSearchCatalogue(e.target.value)}
                  className="pl-9 rounded-2xl h-10 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredCatalogue.map(prod => (
                <div
                  key={prod.id}
                  className="p-3 rounded-2xl border bg-muted/20 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <Badge variant="outline" className="text-[10px]">{<dyad-write path="src/pages/BudgetPage.tsx" description="Supermarket Budgeting and Shopping page featuring spend gauge, supermarket picker, interactive shopping list, and 3-Tier comparison engine">
import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { SupermarketComparisonCard } from '@/components/SupermarketComparisonCard';
import { MOCK_SUPERMARKET_CATALOGUE } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import {
  PiggyBank,
  ShoppingCart,
  CheckCircle2,
  Trash2,
  Plus,
  Store,
  Sparkles,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

const SUPERMARKETS = ['Tesco', 'Aldi', "Sainsbury's", 'Asda', 'Waitrose', 'M&S'];

const BudgetPage: React.FC = () => {
  const {
    userProfile,
    updateUserProfile,
    weeklyBudgetStats,
    shoppingList,
    toggleShoppingItem,
    removeFromShoppingList,
    addToShoppingList,
    swapShoppingItem
  } = useApp();

  const [activeSupermarket, setActiveSupermarket] = useState(userProfile.supermarket || 'Tesco');
  const [searchCatalogue, setSearchCatalogue] = useState('');

  const handleSupermarketChange = (name: string) => {
    setActiveSupermarket(name);
    updateUserProfile({ supermarket: name });
  };

  const handleCheckoutSimulated = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    toast.success('Shopping trip completed! Recorded to your weekly food budget.');
  };

  const filteredCatalogue = MOCK_SUPERMARKET_CATALOGUE.filter(p =>
    p.name.toLowerCase().includes(searchCatalogue.toLowerCase()) ||
    p.category.toLowerCase().includes(searchCatalogue.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <PiggyBank className="w-6 h-6 text-amber-500" />
              Food Budget & Supermarket Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Track your weekly food spend and get smart substitutions that never compromise health for price.
            </p>
          </div>
        </div>

        {/* Weekly Budget Gauge Card */}
        <Card className="rounded-3xl border bg-card shadow-sm overflow-hidden">
          <CardContent className="p-5 sm:p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Weekly Food Budget Limit
                </span>
                <div className="text-3xl font-extrabold text-foreground flex items-baseline gap-2">
                  <span>{userProfile.currency}{weeklyBudgetStats.spentThisWeek.toFixed(2)}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    spent of {userProfile.currency}{userProfile.weeklyBudget} limit
                  </span>
                </div>
              </div>

              <Badge
                className={`text-xs font-bold px-3 py-1.5 self-start sm:self-auto ${
                  weeklyBudgetStats.status === 'good'
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                    : weeklyBudgetStats.status === 'warning'
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
                    : 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30'
                }`}
              >
                {weeklyBudgetStats.status === 'good' && '🟢 On Track & Within Budget'}
                {weeklyBudgetStats.status === 'warning' && '🟡 80%+ of Budget Reached'}
                {weeklyBudgetStats.status === 'exceeded' && '🔴 Budget Exceeded'}
              </Badge>
            </div>

            {/* Budget Bar */}
            <div className="space-y-1.5">
              <Progress
                value={weeklyBudgetStats.percentageUsed}
                className={`h-3 bg-muted ${
                  weeklyBudgetStats.status === 'good'
                    ? '[&>div]:bg-emerald-500'
                    : weeklyBudgetStats.status === 'warning'
                    ? '[&>div]:bg-amber-500'
                    : '[&>div]:bg-rose-500'
                }`}
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{weeklyBudgetStats.percentageUsed}% of weekly funds consumed</span>
                <span className="font-bold text-foreground">
                  {userProfile.currency}{weeklyBudgetStats.remaining} remaining for the week
                </span>
              </div>
            </div>

            {/* Stats Breakdown Bar */}
            <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-muted/40 border text-xs">
              <div>
                <span className="text-muted-foreground">Daily Allowance</span>
                <p className="font-bold text-foreground mt-0.5">
                  {userProfile.currency}{(userProfile.weeklyBudget / 7).toFixed(2)}/day
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Current Cart Cost</span>
                <p className="font-bold text-sky-600 dark:text-sky-400 mt-0.5">
                  {userProfile.currency}{weeklyBudgetStats.shoppingListCost.toFixed(2)}
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Projected End Spend</span>
                <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {userProfile.currency}{weeklyBudgetStats.projectedEndSpend}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supermarket Picker Strip */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5" />
              Your Primary Supermarket
            </span>
            <span className="text-xs text-muted-foreground">Prices tailored live</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {SUPERMARKETS.map(sm => (
              <button
                key={sm}
                onClick={() => handleSupermarketChange(sm)}
                className={`py-2 px-3 rounded-2xl font-bold text-xs border transition-all text-center ${
                  activeSupermarket === sm
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-card text-foreground hover:bg-muted/40'
                }`}
              >
                {sm}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Shopping List */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base">Grocery Shopping List</h3>
                  <p className="text-xs text-muted-foreground">
                    {shoppingList.length} items • Total: {userProfile.currency}{weeklyBudgetStats.shoppingListCost.toFixed(2)}
                  </p>
                </div>
              </div>

              {shoppingList.length > 0 && (
                <Button
                  size="sm"
                  onClick={handleCheckoutSimulated}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-8 gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Complete Trip
                </Button>
              )}
            </div>

            {shoppingList.length === 0 ? (
              <div className="py-8 text-center text-xs text-muted-foreground space-y-2">
                <ShoppingCart className="w-8 h-8 mx-auto text-muted-foreground/50" />
                <p>Your shopping list is empty. Add recipe ingredients or staple foods below!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {shoppingList.map(item => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      item.isPurchased
                        ? 'bg-muted/30 border-muted-foreground/20 opacity-60 line-through'
                        : 'bg-muted/10 hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        type="checkbox"
                        checked={item.isPurchased}
                        onChange={() => toggleShoppingItem(item.id)}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-xs text-foreground truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {item.quantity}x • {userProfile.currency}{item.product.price.toFixed(2)} ({item.product.supermarket})
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs font-bold text-foreground">
                        {userProfile.currency}{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-muted-foreground hover:text-rose-600 rounded-lg"
                        onClick={() => removeFromShoppingList(item.id)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Smart Supermarket Product Comparisons */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              Cheapest vs Healthiest vs Best Value Comparisons
            </h2>
            <p className="text-xs text-muted-foreground">
              Intelligent 3-tier algorithm helping you make informed nutritional trade-offs without overpaying.
            </p>
          </div>

          <SupermarketComparisonCard
            currentProduct={MOCK_SUPERMARKET_CATALOGUE[0]}
            alternatives={[MOCK_SUPERMARKET_CATALOGUE[1], MOCK_SUPERMARKET_CATALOGUE[2]]}
            onSwap={(newProduct) => {
              if (shoppingList.length > 0) {
                swapShoppingItem(shoppingList[0].id, newProduct);
              } else {
                addToShoppingList(newProduct, 1);
              }
            }}
          />

          <SupermarketComparisonCard
            currentProduct={MOCK_SUPERMARKET_CATALOGUE[5]}
            alternatives={[MOCK_SUPERMARKET_CATALOGUE[3], MOCK_SUPERMARKET_CATALOGUE[4]]}
            onSwap={(newProduct) => {
              const greekItem = shoppingList.find(i => i.product.equivalentGroup === 'greek_yogurt');
              if (greekItem) {
                swapShoppingItem(greekItem.id, newProduct);
              } else {
                addToShoppingList(newProduct, 1);
              }
            }}
          />
        </div>

        {/* Supermarket Catalogue Explorer */}
        <Card className="rounded-3xl border bg-card shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-base">Supermarket Food Price Explorer</h3>
                <p className="text-xs text-muted-foreground">
                  Browse verified UK supermarket products with Health Scores and macro ratios.
                </p>
              </div>

              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search catalogue..."
                  value={searchCatalogue}
                  onChange={(e) => setSearchCatalogue(e.target.value)}
                  className="pl-9 rounded-2xl h-10 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredCatalogue.map(prod => (
                <div
                  key={prod.id}
                  className="p-3 rounded-2xl border bg-muted/20 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <Badge variant="outline" className="text-[10px]">{prod.supermarket}</Badge>
                      <span className="font-bold text-xs text-foreground truncate">{prod.name}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      {userProfile.currency}{prod.price.toFixed(2)} ({prod.pricePerUnit}) • {prod.macros.protein}g protein
                    </p>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addToShoppingList(prod, 1)}
                    className="h-8 rounded-xl text-xs gap-1 shrink-0 font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BudgetPage;