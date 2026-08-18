import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { MOCK_SUPERMARKET_CATALOGUE } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';

export const ProductCatalogueCard: React.FC = () => {
  const { userProfile, addToShoppingList } = useApp();
  const [searchCatalogue, setSearchCatalogue] = useState('');

  const filteredCatalogue = MOCK_SUPERMARKET_CATALOGUE.filter(p =>
    p.name.toLowerCase().includes(searchCatalogue.toLowerCase()) ||
    p.category.toLowerCase().includes(searchCatalogue.toLowerCase())
  );

  return (
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
  );
};