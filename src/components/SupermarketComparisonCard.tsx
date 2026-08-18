import React from 'react';
import { SupermarketProduct } from '@/types/nutrition';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HealthScoreBadge } from '@/components/HealthScoreBadge';
import { DollarSign, ShieldCheck, Award, ArrowRight, ShoppingCart, RefreshCw } from 'lucide-react';

interface SupermarketComparisonCardProps {
  currentProduct: SupermarketProduct;
  alternatives: SupermarketProduct[];
  onSwap?: (newProduct: SupermarketProduct) => void;
}

export const SupermarketComparisonCard: React.FC<SupermarketComparisonCardProps> = ({
  currentProduct,
  alternatives,
  onSwap
}) => {
  const { addToShoppingList, userProfile } = useApp();

  const allInGroup = [currentProduct, ...alternatives];
  const cheapest = allInGroup.find(p => p.tier === 'cheapest') || currentProduct;
  const healthiest = allInGroup.find(p => p.tier === 'healthiest') || currentProduct;
  const bestValue = allInGroup.find(p => p.tier === 'best_value') || currentProduct;

  const renderTierCard = (
    item: SupermarketProduct,
    tierLabel: string,
    Icon: React.ElementType,
    badgeColor: string,
    isCurrent: boolean
  ) => {
    return (
      <div
        key={item.id}
        className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between space-y-2 ${
          isCurrent
            ? 'border-emerald-500 bg-emerald-500/5 shadow-xs'
            : 'bg-card hover:border-muted-foreground/30'
        }`}
      >
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Badge className={`${badgeColor} text-white text-[10px] font-bold flex items-center gap-1`}>
              <Icon className="w-3 h-3" />
              {tierLabel}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-mono">
              {item.supermarket}
            </Badge>
          </div>

          <h5 className="font-bold text-xs line-clamp-2">{item.name}</h5>

          {item.badgeReason && (
            <p className="text-[11px] text-muted-foreground leading-tight">
              {item.badgeReason}
            </p>
          )}
        </div>

        <div className="pt-2 border-t space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="text-base font-extrabold text-foreground">{userProfile.currency}{item.price.toFixed(2)}</span>
              <span className="text-[10px] text-muted-foreground ml-1">({item.pricePerUnit})</span>
            </div>
            <HealthScoreBadge
              healthScore={{
                score: item.healthScore,
                summary: `${item.name} from ${item.supermarket}`,
                processingLevel: 'Unprocessed/Minimally Processed',
                positiveFactors: [{ title: 'Nutrient Rich', description: item.keyMicros.join(', '), impact: 'positive', weight: 30 }],
                negativeFactors: []
              }}
              size="sm"
            />
          </div>

          <div className="flex items-center gap-1.5 pt-1">
            {isCurrent ? (
              <Badge variant="secondary" className="w-full justify-center text-[10px] py-1 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
                ✓ Currently in Cart
              </Badge>
            ) : onSwap ? (
              <Button
                size="sm"
                variant="outline"
                className="w-full h-7 text-[11px] font-bold rounded-xl gap-1"
                onClick={() => onSwap(item)}
              >
                <RefreshCw className="w-3 h-3" />
                Swap for this
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="w-full h-7 text-[11px] font-bold rounded-xl gap-1"
                onClick={() => addToShoppingList(item)}
              >
                <ShoppingCart className="w-3 h-3" />
                Add to List
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="rounded-3xl border shadow-sm">
      <CardContent className="p-4 sm:p-5 space-y-4">
        <div className="space-y-1">
          <h4 className="font-bold text-sm flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            Smart Supermarket Price & Health Comparison
          </h4>
          <p className="text-xs text-muted-foreground">
            Balancing nutrition quality, Health Score, and price per unit across UK supermarkets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {renderTierCard(cheapest, 'Cheapest Option', DollarSign, 'bg-blue-600', currentProduct.id === cheapest.id)}
          {renderTierCard(healthiest, 'Healthiest Option', ShieldCheck, 'bg-emerald-600', currentProduct.id === healthiest.id)}
          {renderTierCard(bestValue, 'Best Value Balance', Award, 'bg-amber-600', currentProduct.id === bestValue.id)}
        </div>
      </CardContent>
    </Card>
  );
};