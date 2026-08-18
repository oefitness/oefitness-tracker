import React from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { BudgetGaugeCard } from '@/components/budget/BudgetGaugeCard';
import { SupermarketPicker } from '@/components/budget/SupermarketPicker';
import { ShoppingListCard } from '@/components/budget/ShoppingListCard';
import { ProductCatalogueCard } from '@/components/budget/ProductCatalogueCard';
import { SupermarketComparisonCard } from '@/components/SupermarketComparisonCard';
import { MOCK_SUPERMARKET_CATALOGUE } from '@/data/mockData';
import { PiggyBank, Sparkles } from 'lucide-react';

const BudgetPage: React.FC = () => {
  const { shoppingList, swapShoppingItem, addToShoppingList } = useApp();

  return (
    <div className="min-h-screen bg-muted/20 text-foreground pb-24">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2">
            <PiggyBank className="w-6 h-6 text-amber-500" />
            Food Budget & Supermarket Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Track your weekly food spend and get smart substitutions that never compromise health for price.
          </p>
        </div>

        {/* 1. Weekly Budget Gauge */}
        <BudgetGaugeCard />

        {/* 2. Primary Supermarket Selection */}
        <SupermarketPicker />

        {/* 3. Interactive Shopping List */}
        <ShoppingListCard />

        {/* 4. 3-Tier Comparisons (Cheapest vs Healthiest vs Best Value) */}
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

        {/* 5. Supermarket Catalogue Explorer */}
        <ProductCatalogueCard />
      </main>
    </div>
  );
};

export default BudgetPage;