import React from 'react';
import { useApp } from '@/context/AppContext';
import { Store } from 'lucide-react';

const SUPERMARKETS = ['Tesco', 'Aldi', "Sainsbury's", 'Asda', 'Waitrose', 'M&S'];

export const SupermarketPicker: React.FC = () => {
  const { userProfile, updateUserProfile } = useApp();
  const activeSupermarket = userProfile.supermarket || 'Tesco';

  const handleSupermarketChange = (name: string) => {
    updateUserProfile({ supermarket: name });
  };

  return (
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
            type="button"
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
  );
};