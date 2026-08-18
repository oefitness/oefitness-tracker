import React from 'react';
import { useApp } from '@/context/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CheckCircle2, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

export const ShoppingListCard: React.FC = () => {
  const {
    userProfile,
    weeklyBudgetStats,
    shoppingList,
    toggleShoppingItem,
    removeFromShoppingList
  } = useApp();

  const handleCheckoutSimulated = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    toast.success('Shopping trip completed! Recorded to your weekly food budget.');
  };

  return (
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
  );
};