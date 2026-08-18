import { FoodItem, Recipe, SupermarketProduct } from '@/types/nutrition';

export const MOCK_FOODS: FoodItem[] = [
  {
    id: 'f-1',
    name: 'Greek Yogurt 0% Fat (Plain)',
    brand: 'Fage / Authentic',
    category: 'Dairy & Alternatives',
    servingSize: '1 bowl (170g)',
    servingSizeGrams: 170,
    macros: { calories: 95, protein: 18, carbs: 5, fat: 0, fiber: 0 },
    micros: {
      sodium: 60, potassium: 240, calcium: 200, iron: 0.1, magnesium: 19, zinc: 1.0,
      vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0, vitaminK: 0, vitaminB12: 1.2, folate: 12
    },
    healthScore: {
      score: 94,
      summary: 'High in natural protein, zero added sugar, excellent probiotic and calcium density.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Supercharged Protein', description: '18g pure protein supporting muscle retention', impact: 'positive', weight: 35 },
        { title: 'Bone Density Support', description: '20% daily calcium requirement', impact: 'positive', weight: 25 },
        { title: 'Zero Added Sugars', description: 'Naturally occurring lactose only', impact: 'positive', weight: 20 }
      ],
      negativeFactors: [
        { title: 'Zero Dietary Fiber', description: 'Pair with berries or oats for complete digestion', impact: 'negative', weight: 5 }
      ]
    },
    priceEstimate: 0.85,
    supermarket: 'Tesco',
    barcode: '501002938102',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-2',
    name: 'Wild Atlantic Salmon Fillet',
    brand: 'Fresh Catch',
    category: 'Fish & Seafood',
    servingSize: '1 fillet (140g)',
    servingSizeGrams: 140,
    macros: { calories: 250, protein: 28, carbs: 0, fat: 15, fiber: 0 },
    micros: {
      sodium: 80, potassium: 520, calcium: 15, iron: 1.1, magnesium: 42, zinc: 0.9,
      vitaminA: 65, vitaminC: 0, vitaminD: 12.5, vitaminE: 2.8, vitaminK: 0.5, vitaminB12: 4.8, folate: 35
    },
    healthScore: {
      score: 96,
      summary: 'Remarkable source of Omega-3 EPA/DHA fatty acids and complete bioavailable protein.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Omega-3 Anti-inflammatory', description: 'Supports cardiovascular & brain vitality', impact: 'positive', weight: 35 },
        { title: 'Vitamin D Powerhouse', description: 'Meets 100%+ of UK daily vitamin D target', impact: 'positive', weight: 30 },
        { title: 'Lean Bio-Protein', description: '28g muscle repair amino acids', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'Moderate Fat Content', description: 'Primarily healthy unsaturated fats', impact: 'negative', weight: 4 }
      ]
    },
    priceEstimate: 2.40,
    supermarket: 'Aldi',
    barcode: '502938472910',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-3',
    name: 'Rolled Organic Oats',
    brand: 'Whole Earth',
    category: 'Grains & Cereals',
    servingSize: '1 cup cooked (60g dry)',
    servingSizeGrams: 60,
    macros: { calories: 225, protein: 8, carbs: 40, fat: 4, fiber: 6 },
    micros: {
      sodium: 4, potassium: 220, calcium: 32, iron: 2.8, magnesium: 85, zinc: 2.2,
      vitaminA: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0.4, vitaminK: 1.2, vitaminB12: 0, folate: 32
    },
    healthScore: {
      score: 91,
      summary: 'Exceptional beta-glucan soluble fiber that helps stabilize blood glucose and cholesterol.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Beta-Glucan Fiber', description: '6g prebiotic fiber promotes satiety', impact: 'positive', weight: 35 },
        { title: 'Complex Carbohydrates', description: 'Low GI sustained steady energy', impact: 'positive', weight: 25 },
        { title: 'Magnesium & Zinc', description: 'Essential for cellular energy generation', impact: 'positive', weight: 20 }
      ],
      negativeFactors: [
        { title: 'Moderate Carbohydrates', description: 'Monitor portion sizes on low-carb diets', impact: 'negative', weight: 6 }
      ]
    },
    priceEstimate: 0.35,
    supermarket: 'Sainsbury\'s',
    barcode: '501827364512',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-4',
    name: 'Organic Hass Avocado',
    brand: 'Nature Fresh',
    category: 'Fresh Produce',
    servingSize: '1/2 medium avocado (75g)',
    servingSizeGrams: 75,
    macros: { calories: 120, protein: 1.5, carbs: 6, fat: 11, fiber: 5 },
    micros: {
      sodium: 5, potassium: 360, calcium: 9, iron: 0.4, magnesium: 22, zinc: 0.5,
      vitaminA: 7, vitaminC: 7.5, vitaminD: 0, vitaminE: 1.6, vitaminK: 16, vitaminB12: 0, folate: 65
    },
    healthScore: {
      score: 89,
      summary: 'Heart-healthy monounsaturated oleic acid packed with potassium and folate.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Monounsaturated Fats', description: 'Supports arterial flexibility and nutrient absorption', impact: 'positive', weight: 30 },
        { title: 'High Fiber Content', description: '5g prebiotic fiber per half fruit', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'High Calorie Density', description: 'Calorie dense; easy to overconsume', impact: 'negative', weight: 8 }
      ]
    },
    priceEstimate: 0.65,
    supermarket: 'Tesco',
    barcode: '509823746152',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-5',
    name: 'Red Lentils (Dried)',
    brand: 'Pantry Core',
    category: 'Pulses & Legumes',
    servingSize: '1 portion dry (70g)',
    servingSizeGrams: 70,
    macros: { calories: 230, protein: 18, carbs: 38, fat: 1.2, fiber: 9 },
    micros: {
      sodium: 8, potassium: 650, calcium: 35, iron: 5.2, magnesium: 75, zinc: 2.6,
      vitaminA: 3, vitaminC: 2.8, vitaminD: 0, vitaminE: 0.3, vitaminK: 3.5, vitaminB12: 0, folate: 280
    },
    healthScore: {
      score: 95,
      summary: 'Incredible budget superfood: highest iron and folate per penny of any whole food.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'High Bioavailable Iron', description: '5.2mg plant iron covers 35% RDA', impact: 'positive', weight: 35 },
        { title: 'Budget Champion', description: 'Costs only ~£0.22 per high-protein serving', impact: 'positive', weight: 25 },
        { title: '9g Prebiotic Fiber', description: 'Flourishes healthy gut microbiome', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'Phytic Acid', description: 'Rinse or soak before boiling to maximize mineral absorption', impact: 'negative', weight: 3 }
      ]
    },
    priceEstimate: 0.22,
    supermarket: 'Aldi',
    barcode: '503847291038',
    image: 'https://images.unsplash.com/photo-1585996746979-373f71c4c1a2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-6',
    name: 'Skinless Chicken Breast Fillet',
    brand: 'Farm Fresh',
    category: 'Poultry & Meat',
    servingSize: '1 breast (160g)',
    servingSizeGrams: 160,
    macros: { calories: 195, protein: 39, carbs: 0, fat: 3.5, fiber: 0 },
    micros: {
      sodium: 95, potassium: 580, calcium: 18, iron: 1.4, magnesium: 45, zinc: 1.6,
      vitaminA: 10, vitaminC: 0, vitaminD: 0.2, vitaminE: 0.4, vitaminK: 0.4, vitaminB12: 0.9, folate: 14
    },
    healthScore: {
      score: 93,
      summary: 'Gold standard ultra-lean protein source with complete branch-chain amino acids.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Ultra High Protein Density', description: '39g protein with minimal saturated fat', impact: 'positive', weight: 40 },
        { title: 'Rich in Niacin & B6', description: 'Supports rapid metabolic energy release', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'Zero Fiber & Calcium', description: 'Always pair with dark greens or quinoa', impact: 'negative', weight: 5 }
      ]
    },
    priceEstimate: 1.45,
    supermarket: 'Asda',
    barcode: '509182374619',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-7',
    name: 'Organic Pasture-Raised Whole Eggs',
    brand: 'Happy Valley',
    category: 'Eggs & Dairy',
    servingSize: '2 large eggs (100g)',
    servingSizeGrams: 100,
    macros: { calories: 140, protein: 13, carbs: 1, fat: 9.5, fiber: 0 },
    micros: {
      sodium: 140, potassium: 135, calcium: 55, iron: 1.8, magnesium: 12, zinc: 1.3,
      vitaminA: 160, vitaminC: 0, vitaminD: 2.0, vitaminE: 1.0, vitaminK: 0.3, vitaminB12: 1.1, folate: 48
    },
    healthScore: {
      score: 94,
      summary: 'Complete protein with rich choline for brain health, lutein, and bioavailable Vitamin D.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'High Choline & Lutein', description: 'Protects neurological function & vision', impact: 'positive', weight: 35 },
        { title: 'Bioavailable Complete Protein', description: '100% amino acid profile score', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [
        { title: 'Dietary Cholesterol', description: 'Neutral impact in healthy metabolic profiles', impact: 'negative', weight: 3 }
      ]
    },
    priceEstimate: 0.55,
    supermarket: 'Sainsbury\'s',
    barcode: '502938192847',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&auto=format&fit=crop&q=80'
  }
];

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 'rec-1',
    name: 'Crispy Lemon Garlic Salmon Bowl',
    headline: 'High-Omega3 Brain & Muscle Fuel under 20 mins',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    defaultServings: 2,
    estimatedCostPerServing: 2.85,
    macrosPerServing: {
      calories: 520,
      protein: 41,
      carbs: 44,
      fat: 18,
      fiber: 7
    },
    microsPerServing: {
      sodium: 310, potassium: 840, calcium: 110, iron: 3.6, magnesium: 115, zinc: 2.4,
      vitaminA: 340, vitaminC: 38, vitaminD: 14.2, vitaminE: 4.1, vitaminK: 85, vitaminB12: 5.4, folate: 120
    },
    healthScore: {
      score: 94,
      summary: 'Exceptional blend of complete marine protein, low-GI quinoa carbs, and anti-inflammatory greens.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '41g Complete Bio-Protein', description: 'Optimal muscle protein synthesis trigger', impact: 'positive', weight: 35 },
        { title: 'High Omega-3 & Vitamin D', description: 'Over 100% daily Vitamin D and 2.2g EPA/DHA', impact: 'positive', weight: 30 },
        { title: 'Rich in Greens & Folate', description: 'Fresh baby spinach delivers high lutein & iron', impact: 'positive', weight: 20 }
      ],
      negativeFactors: [
        { title: 'Slightly higher prep cost', description: 'Salmon is higher quality tier, offset with budget grains', impact: 'negative', weight: 5 }
      ]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Pescatarian', 'Heart Healthy'],
    allergens: ['Fish'],
    ingredients: [
      { id: 'i-1', name: 'Fresh Salmon Fillet', amount: 280, unit: 'g', estimatedCost: 3.80, category: 'Fish', substitution: { name: 'Canned Wild Sardines / Tuna', reason: 'Saves £2.10 while preserving protein and Omega-3', costDiff: -2.10, proteinDiff: +2 } },
      { id: 'i-2', name: 'Tri-color Quinoa (cooked)', amount: 240, unit: 'g', estimatedCost: 0.65, category: 'Grains' },
      { id: 'i-3', name: 'Fresh Baby Spinach', amount: 80, unit: 'g', estimatedCost: 0.45, category: 'Produce' },
      { id: 'i-4', name: 'Avocado (diced)', amount: 1, unit: 'whole', estimatedCost: 0.70, category: 'Produce' },
      { id: 'i-5', name: 'Lemon Juice & Olive Oil', amount: 2, unit: 'tbsp', estimatedCost: 0.30, category: 'Condiments' }
    ],
    instructions: [
      'Pat salmon fillets dry with kitchen towel. Season generously with sea salt, black pepper, and garlic powder.',
      'Heat 1 tbsp olive oil in a non-stick skillet over medium-high heat. Place salmon skin-side down and press lightly for 4 minutes until crisp.',
      'Flip salmon and cook for an additional 3 minutes until cooked to medium. Drizzle with freshly squeezed lemon juice.',
      'Divide warm quinoa between two bowls. Top with washed baby spinach, sliced avocado, and the pan-seared salmon.',
      'Garnish with fresh parsley, lemon wedges, and chili flakes if desired.'
    ],
    storageInfo: 'Store cooked salmon and quinoa in airtight containers in the fridge for up to 3 days. Reheat gently.',
    cookingTips: ['Pre-cook a batch of quinoa on Sunday to assemble this meal in just 7 minutes on weeknights.'],
    isHighProtein: true,
    isBudgetFriendly: false
  },
  {
    id: 'rec-2',
    name: 'Spiced Golden Red Lentil Dahl',
    headline: 'Budget Super-Fuel: 24g Protein & 14g Fiber for £1.15',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 8,
    cookTimeMinutes: 18,
    defaultServings: 3,
    estimatedCostPerServing: 1.15,
    macrosPerServing: {
      calories: 410,
      protein: 24,
      carbs: 62,
      fat: 6,
      fiber: 14
    },
    microsPerServing: {
      sodium: 280, potassium: 920, calcium: 95, iron: 6.8, magnesium: 120, zinc: 3.4,
      vitaminA: 280, vitaminC: 22, vitaminD: 0, vitaminE: 1.8, vitaminK: 45, vitaminB12: 0, folate: 340
    },
    healthScore: {
      score: 96,
      summary: 'Outstanding nutritional density: top-tier plant protein, anti-inflammatory turmeric, and immense gut fiber.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Massive Fiber Bomb', description: '14g prebiotic fiber (almost 50% daily target)', impact: 'positive', weight: 40 },
        { title: 'Supercharged Bio-Iron', description: '6.8mg iron + Vitamin C from tomatoes boosts uptake', impact: 'positive', weight: 30 },
        { title: 'Ultra Budget Friendly', description: 'Under £1.20 per huge comforting serving', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'Plant-only iron (Non-heme)', description: 'Boosted by the included diced tomatoes & lemon juice', impact: 'negative', weight: 3 }
      ]
    },
    dietaryTags: ['Vegan', 'High Fiber', 'Budget Hero', 'Dairy Free', 'Heart Healthy'],
    allergens: [],
    ingredients: [
      { id: 'i-21', name: 'Dry Split Red Lentils', amount: 250, unit: 'g', estimatedCost: 0.75, category: 'Pulses' },
      { id: 'i-22', name: 'Chopped Plum Canned Tomatoes', amount: 400, unit: 'g', estimatedCost: 0.45, category: 'Canned' },
      { id: 'i-23', name: 'Fresh Spinach / Kale', amount: 100, unit: 'g', estimatedCost: 0.60, category: 'Produce' },
      { id: 'i-24', name: 'Garlic, Ginger & Turmeric Paste', amount: 2, unit: 'tbsp', estimatedCost: 0.40, category: 'Spices' },
      { id: 'i-25', name: 'Basmati Brown Rice (dry)', amount: 150, unit: 'g', estimatedCost: 0.40, category: 'Grains' }
    ],
    instructions: [
      'Rinse red lentils in cold water until the water runs clear.',
      'In a deep pan, sauté minced garlic, ginger, turmeric, ground cumin, and garam masala in 1 tsp oil for 60 seconds.',
      'Add rinsed lentils, canned tomatoes, and 600ml vegetable stock or water. Bring to a gentle boil.',
      'Reduce heat to low, cover with a lid and simmer for 15 minutes, stirring occasionally until creamy.',
      'Fold in fresh spinach until wilted. Squeeze fresh lemon juice on top and serve with steamed brown rice.'
    ],
    storageInfo: 'Freezes brilliantly for up to 3 months. Tastes even better the next day!',
    cookingTips: ['Stir in 1 tbsp Greek yogurt or coconut cream right at the end for extra silkiness.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-3',
    name: 'Greek Feta & Herb Turkey Burgers',
    headline: 'Lean High-Protein Comfort with 38g Protein',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 12,
    cookTimeMinutes: 10,
    defaultServings: 2,
    estimatedCostPerServing: 2.10,
    macrosPerServing: {
      calories: 460,
      protein: 38,
      carbs: 26,
      fat: 14,
      fiber: 5
    },
    microsPerServing: {
      sodium: 480, potassium: 640, calcium: 180, iron: 3.1, magnesium: 65, zinc: 3.8,
      vitaminA: 190, vitaminC: 18, vitaminD: 0.4, vitaminE: 1.2, vitaminK: 24, vitaminB12: 1.8, folate: 75
    },
    healthScore: {
      score: 88,
      summary: 'Lean poultry patty enriched with Mediterranean oregano, crumbly feta, and crisp wholemeal pita.',
      processingLevel: 'Processed Culinary',
      positiveFactors: [
        { title: '38g Lean Turkey Protein', description: 'Low saturated fat, high tryptophan for restful recovery', impact: 'positive', weight: 35 },
        { title: 'Zinc & B12 Rich', description: 'Strengthens immune resilience & metabolic drive', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'Moderate Sodium from Feta', description: 'Use reduced-salt feta to cut sodium by 30%', impact: 'negative', weight: 12 }
      ]
    },
    dietaryTags: ['High Protein', 'Mediterranean', 'Quick Dinner'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      { id: 'i-31', name: 'Lean Minced Turkey (5% fat)', amount: 300, unit: 'g', estimatedCost: 2.20, category: 'Meat', substitution: { name: 'Lean Minced Chicken', reason: 'Identical macros, often £0.30 cheaper at Aldi', costDiff: -0.30, proteinDiff: 0 } },
      { id: 'i-32', name: 'Feta Cheese (crumbled)', amount: 45, unit: 'g', estimatedCost: 0.60, category: 'Dairy' },
      { id: 'i-33', name: 'Dried Oregano & Garlic', amount: 1, unit: 'tbsp', estimatedCost: 0.20, category: 'Spices' },
      { id: 'i-34', name: 'Wholemeal Pita Breads', amount: 2, unit: 'pockets', estimatedCost: 0.45, category: 'Bakery' },
      { id: 'i-35', name: 'Cucumber & Tomato Salad', amount: 150, unit: 'g', estimatedCost: 0.75, category: 'Produce' }
    ],
    instructions: [
      'In a medium bowl, gently mix minced turkey with crumbled feta, dried oregano, garlic granules, salt, and pepper.',
      'Form into 2 even patties, pressing a slight dimple in the center of each to ensure flat, even cooking.',
      'Grill or pan-fry in a non-stick pan over medium heat for 5 minutes per side until internal temp reaches 74°C (165°F).',
      'Warm pita breads lightly in a toaster. Stuff with fresh crunchy cucumber slices, tomato, and turkey burger patty.',
      'Top with a dollop of tzatziki or mint yogurt if desired.'
    ],
    storageInfo: 'Cooked patties stay fresh in the fridge for up to 4 days. Great for cold meal-prep lunches.',
    cookingTips: ['Avoid over-mixing the turkey mince to keep burgers juicy and tender.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-4',
    name: 'Overnight Chia Berry Protein Power-Oats',
    headline: 'Zero-Cook Grab & Go Breakfast with 28g Protein',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    defaultServings: 1,
    estimatedCostPerServing: 1.35,
    macrosPerServing: {
      calories: 380,
      protein: 28,
      carbs: 48,
      fat: 8,
      fiber: 11
    },
    microsPerServing: {
      sodium: 85, potassium: 450, calcium: 340, iron: 3.5, magnesium: 130, zinc: 2.8,
      vitaminA: 45, vitaminC: 25, vitaminD: 2.0, vitaminE: 1.4, vitaminK: 12, vitaminB12: 1.1, folate: 65
    },
    healthScore: {
      score: 95,
      summary: 'Optimal morning insulin-stable breakfast with high antioxidants, calcium, and complex slow-burn energy.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '11g Soluble & Insoluble Fiber', description: 'Prevents mid-morning energy dips and cravings', impact: 'positive', weight: 35 },
        { title: 'Antioxidant Polyphenols', description: 'Wild berries provide anthocyanins for brain clarity', impact: 'positive', weight: 30 },
        { title: 'High Calcium & Magnesium', description: '34% daily calcium target for bone resilience', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'Requires overnight prep', description: 'Must assemble evening before for ideal texture', impact: 'negative', weight: 2 }
      ]
    },
    dietaryTags: ['High Protein', 'Vegetarian', 'High Fiber', 'Zero Cook'],
    allergens: ['Dairy'],
    ingredients: [
      { id: 'i-41', name: 'Rolled Oats', amount: 50, unit: 'g', estimatedCost: 0.25, category: 'Grains' },
      { id: 'i-42', name: 'Greek Yogurt 0%', amount: 100, unit: 'g', estimatedCost: 0.45, category: 'Dairy' },
      { id: 'i-43', name: 'Chia Seeds', amount: 12, unit: 'g', estimatedCost: 0.20, category: 'Seeds' },
      { id: 'i-44', name: 'Frozen Wild Mixed Berries', amount: 80, unit: 'g', estimatedCost: 0.35, category: 'Fruit' },
      { id: 'i-45', name: 'Unsweetened Almond / Soy Milk', amount: 120, unit: 'ml', estimatedCost: 0.10, category: 'Dairy Alternatives' }
    ],
    instructions: [
      'In a jar or airtight container, combine rolled oats, chia seeds, and Greek yogurt.',
      'Pour over almond/soy milk and stir well until no dry pockets remain.',
      'Top with frozen mixed berries (their juices will thaw and sweeten the oats naturally overnight).',
      'Seal and chill in the refrigerator for at least 4 hours, or ideally overnight.',
      'Grab in the morning and enjoy cold or gently microwaved for 45 seconds.'
    ],
    storageInfo: 'Batch prep up to 4 jars at once on Sunday for effortless Monday-Thursday mornings.',
    cookingTips: ['Add a dash of ground cinnamon or vanilla extract for dessert-like warmth without sugar.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-5',
    name: 'Zesty Mexican Black Bean & Lime Bowl',
    headline: 'High Fiber Quick Lunch for £0.95',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 6,
    cookTimeMinutes: 4,
    defaultServings: 1,
    estimatedCostPerServing: 0.95,
    macrosPerServing: {
      calories: 360,
      protein: 19,
      carbs: 58,
      fat: 5,
      fiber: 16
    },
    microsPerServing: {
      sodium: 290, potassium: 780, calcium: 80, iron: 4.8, magnesium: 110, zinc: 2.2,
      vitaminA: 210, vitaminC: 32, vitaminD: 0, vitaminE: 1.1, vitaminK: 35, vitaminB12: 0, folate: 240
    },
    healthScore: {
      score: 93,
      summary: 'Plant powerhouse with 16g fiber, rich resistant starch, and natural vitamin C from fresh lime.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Incredible 16g Prebiotic Fiber', description: 'Feeds beneficial gut bacteroides bacteria', impact: 'positive', weight: 40 },
        { title: 'Sub-£1 Per Meal Cost', description: 'Maximum micronutrient density per pound spent', impact: 'positive', weight: 35 }
      ],
      negativeFactors: [
        { title: 'Rinse canned beans', description: 'Wash canned beans to reduce canned brine sodium by 40%', impact: 'negative', weight: 6 }
      ]
    },
    dietaryTags: ['Vegan', 'Gluten Free', 'High Fiber', 'Budget Hero'],
    allergens: [],
    ingredients: [
      { id: 'i-51', name: 'Canned Black Beans (drained)', amount: 240, unit: 'g', estimatedCost: 0.45, category: 'Canned' },
      { id: 'i-52', name: 'Sweetcorn (canned or frozen)', amount: 60, unit: 'g', estimatedCost: 0.20, category: 'Produce' },
      { id: 'i-53', name: 'Cherry Tomatoes (halved)', amount: 60, unit: 'g', estimatedCost: 0.30, category: 'Produce' },
      { id: 'i-54', name: 'Fresh Coriander & Lime', amount: 1, unit: 'portion', estimatedCost: 0.25, category: 'Produce' },
      { id: 'i-55', name: 'Cumin, Smoked Paprika, Salt', amount: 1, unit: 'tsp', estimatedCost: 0.10, category: 'Spices' }
    ],
    instructions: [
      'Rinse and drain black beans thoroughly in a sieve.',
      'In a microwave-safe bowl or small pan, warm black beans and sweetcorn with cumin and smoked paprika for 2 minutes.',
      'Fold in fresh cherry tomatoes and chopped coriander.',
      'Squeeze half a fresh juicy lime over the bowl and season with a pinch of sea salt.',
      'Enjoy as a vibrant warm bowl or wrapped inside a whole-wheat tortilla.'
    ],
    storageInfo: 'Can be eaten hot or cold. Keeps refrigerated for 3 days.',
    cookingTips: ['Add 2 tbsp Greek yogurt or guacamole for a creamy dressing.'],
    isHighProtein: false,
    isBudgetFriendly: true
  },
  {
    id: 'rec-6',
    name: 'Tuscan Garlic Herb Chicken & Broccoli Skillet',
    headline: 'High-Protein Keto & Low Carb Pan-Sear in 15 Mins',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 5,
    cookTimeMinutes: 12,
    defaultServings: 2,
    estimatedCostPerServing: 2.25,
    macrosPerServing: {
      calories: 430,
      protein: 46,
      carbs: 9,
      fat: 16,
      fiber: 4
    },
    microsPerServing: {
      sodium: 340, potassium: 890, calcium: 85, iron: 2.2, magnesium: 55, zinc: 2.1,
      vitaminA: 180, vitaminC: 95, vitaminD: 0.3, vitaminE: 2.4, vitaminK: 140, vitaminB12: 1.1, folate: 110
    },
    healthScore: {
      score: 95,
      summary: 'Remarkable 46g pure lean protein combined with cruciferous sulforaphane antioxidant protection from broccoli.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '46g Ultra-Lean Protein', description: 'Drives maximum post-workout muscle protein synthesis', impact: 'positive', weight: 40 },
        { title: 'High Sulforaphane & Vit C', description: 'Over 100% daily Vitamin C for immune resilience', impact: 'positive', weight: 35 }
      ],
      negativeFactors: [
        { title: 'Lower Carbohydrates', description: 'Pair with roasted baby potatoes if refueling after intense cardio', impact: 'negative', weight: 4 }
      ]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Quick Dinner', 'Keto Friendly'],
    allergens: [],
    ingredients: [
      { id: 'i-61', name: 'Skinless Chicken Breast Fillets', amount: 350, unit: 'g', estimatedCost: 2.80, category: 'Meat' },
      { id: 'i-62', name: 'Fresh Broccoli Florets', amount: 200, unit: 'g', estimatedCost: 0.70, category: 'Produce' },
      { id: 'i-63', name: 'Extra Virgin Olive Oil', amount: 1.5, unit: 'tbsp', estimatedCost: 0.30, category: 'Oils' },
      { id: 'i-64', name: 'Sundried Tomatoes (sliced)', amount: 30, unit: 'g', estimatedCost: 0.40, category: 'Condiments' },
      { id: 'i-65', name: 'Garlic, Rosemary & Italian Herb Blend', amount: 1, unit: 'tbsp', estimatedCost: 0.30, category: 'Spices' }
    ],
    instructions: [
      'Slice chicken breasts horizontally into cutlets for quick, even cooking. Season with garlic powder, salt, pepper, and Italian herbs.',
      'Heat olive oil in a wide skillet over medium-high heat. Sear chicken cutlets for 4 minutes per side until golden brown and cooked through.',
      'Remove chicken and set aside. In the same skillet, toss in broccoli florets, sundried tomatoes, and 2 tbsp water. Cover and steam for 3 minutes until tender-crisp.',
      'Return chicken to the skillet, drizzle with any pan juices, and toss together for 60 seconds.',
      'Plate hot and finish with fresh cracked black pepper and a squeeze of fresh lemon.'
    ],
    storageInfo: 'Ideal for 4-day meal prep boxes with roasted sweet potato wedges.',
    cookingTips: ['Covering the pan with a lid creates instant steam to cook raw broccoli in under 3 minutes without boiling away vitamins.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-7',
    name: 'Mediterranean Shakshuka with Poached Eggs',
    headline: 'Traditional Cast-Iron Simmer with Lycopene & 22g Protein',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 8,
    cookTimeMinutes: 14,
    defaultServings: 2,
    estimatedCostPerServing: 1.45,
    macrosPerServing: {
      calories: 330,
      protein: 20,
      carbs: 22,
      fat: 14,
      fiber: 6
    },
    microsPerServing: {
      sodium: 380, potassium: 680, calcium: 140, iron: 4.2, magnesium: 48, zinc: 2.3,
      vitaminA: 260, vitaminC: 62, vitaminD: 2.4, vitaminE: 3.1, vitaminK: 28, vitaminB12: 1.4, folate: 95
    },
    healthScore: {
      score: 93,
      summary: 'Rich cooked tomato lycopene combined with high-choline free-range eggs and anti-inflammatory peppers.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Thermal-Activated Lycopene', description: 'Simmered tomatoes unleash potent cardiovascular antioxidants', impact: 'positive', weight: 35 },
        { title: 'Choline & Vitamin D', description: 'High bio-quality egg protein supporting cellular membranes', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [
        { title: 'Simmer Time Required', description: 'Allow 10 minutes for tomato sauce reduction before cracking eggs', impact: 'negative', weight: 4 }
      ]
    },
    dietaryTags: ['Vegetarian', 'High Protein', 'Gluten Free', 'Mediterranean', 'Budget Hero'],
    allergens: ['Eggs'],
    ingredients: [
      { id: 'i-71', name: 'Free-Range Eggs', amount: 4, unit: 'large', estimatedCost: 1.10, category: 'Eggs' },
      { id: 'i-72', name: 'Canned San Marzano Diced Tomatoes', amount: 400, unit: 'g', estimatedCost: 0.65, category: 'Canned' },
      { id: 'i-73', name: 'Red Bell Pepper (sliced)', amount: 1, unit: 'whole', estimatedCost: 0.45, category: 'Produce' },
      { id: 'i-74', name: 'Smoked Paprika, Cumin & Chili', amount: 1, unit: 'tbsp', estimatedCost: 0.25, category: 'Spices' },
      { id: 'i-75', name: 'Crumbled Feta or Fresh Parsley', amount: 30, unit: 'g', estimatedCost: 0.45, category: 'Dairy' }
    ],
    instructions: [
      'In a wide skillet, sauté sliced bell peppers and minced garlic in 1 tsp olive oil until soft (approx. 4 mins).',
      'Add smoked paprika, ground cumin, and a pinch of chili flakes. Toast spices for 30 seconds.',
      'Pour in diced tomatoes and simmer gently for 6 minutes until the sauce slightly thickens.',
      'Create 4 small wells in the sauce with a spoon and crack 1 egg into each well.',
      'Cover the pan with a lid and cook on low heat for 5-6 minutes until egg whites are set but yolks remain runny.',
      'Scatter crumbled feta and fresh chopped parsley over the top. Serve immediately.'
    ],
    storageInfo: 'Base tomato sauce can be made 3 days in advance; crack and poach fresh eggs when ready to eat.',
    cookingTips: ['Cook on lowest flame when lid is on so egg whites cook through evenly without overcooking the yolks.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-8',
    name: 'Edamame Sesame Soba Noodle Crunch Bowl',
    headline: 'Plant Protein & Buckwheat Complex Carbs in 12 Mins',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 7,
    cookTimeMinutes: 5,
    defaultServings: 2,
    estimatedCostPerServing: 1.85,
    macrosPerServing: {
      calories: 440,
      protein: 26,
      carbs: 64,
      fat: 10,
      fiber: 9
    },
    microsPerServing: {
      sodium: 420, potassium: 710, calcium: 110, iron: 4.6, magnesium: 145, zinc: 3.1,
      vitaminA: 310, vitaminC: 45, vitaminD: 0, vitaminE: 2.2, vitaminK: 65, vitaminB12: 0, folate: 190
    },
    healthScore: {
      score: 92,
      summary: 'Complete plant amino acid profile from green edamame paired with magnesium-rich 100% buckwheat soba.',
      processingLevel: 'Processed Culinary',
      positiveFactors: [
        { title: 'Magnesium Powerhouse', description: '145mg magnesium covers nearly 50% daily metabolic requirement', impact: 'positive', weight: 35 },
        { title: '26g Complete Plant Protein', description: 'Edamame provides all 9 essential amino acids', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [
        { title: 'Soy & Sesame Allergens', description: 'Check sensitivities before serving', impact: 'negative', weight: 5 }
      ]
    },
    dietaryTags: ['Vegan', 'High Protein', 'High Fiber', 'Dairy Free'],
    allergens: ['Soy', 'Sesame', 'Gluten'],
    ingredients: [
      { id: 'i-81', name: 'Buckwheat Soba Noodles (dry)', amount: 150, unit: 'g', estimatedCost: 1.20, category: 'Grains' },
      { id: 'i-82', name: 'Shelled Edamame Beans (frozen)', amount: 180, unit: 'g', estimatedCost: 0.90, category: 'Frozen' },
      { id: 'i-83', name: 'Grated Carrots & Red Cabbage', amount: 120, unit: 'g', estimatedCost: 0.50, category: 'Produce' },
      { id: 'i-84', name: 'Toasted Sesame Oil & Soy Sauce', amount: 1.5, unit: 'tbsp', estimatedCost: 0.40, category: 'Condiments' },
      { id: 'i-85', name: 'Rice Vinegar & Sesame Seeds', amount: 1, unit: 'tbsp', estimatedCost: 0.30, category: 'Condiments' }
    ],
    instructions: [
      'Bring a pot of water to the boil. Cook soba noodles for 4 minutes. In the final 2 minutes, drop in frozen edamame beans.',
      'Drain and rinse immediately with cold tap water to stop cooking and remove excess noodle starch.',
      'In a small bowl, whisk sesame oil, low-sodium soy sauce, rice vinegar, and grated ginger.',
      'Toss chilled soba noodles, edamame, shredded purple cabbage, and carrots in a large bowl with the sesame dressing.',
      'Garnish with toasted sesame seeds and sliced scallions. Enjoy cold!'
    ],
    storageInfo: 'Stays exceptionally crisp and refreshing in the fridge for up to 3 days. Perfect cold work lunch.',
    cookingTips: ['Always rinse soba in cold water after boiling — this gives Japanese buckwheat noodles their signature springy bite.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-9',
    name: 'Grass-Fed Beef & Black Bean Chipotle Chili',
    headline: 'High-Iron & Zinc Muscle Recovery Stew',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    defaultServings: 4,
    estimatedCostPerServing: 1.95,
    macrosPerServing: {
      calories: 490,
      protein: 44,
      carbs: 42,
      fat: 12,
      fiber: 11
    },
    microsPerServing: {
      sodium: 390, potassium: 980, calcium: 90, iron: 6.2, magnesium: 105, zinc: 6.8,
      vitaminA: 240, vitaminC: 28, vitaminD: 0.5, vitaminE: 1.5, vitaminK: 18, vitaminB12: 3.2, folate: 160
    },
    healthScore: {
      score: 91,
      summary: 'Massive bio-iron and zinc payload from lean beef and black beans, creating the ultimate post-strength training recovery bowl.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '6.8mg High Bio-Zinc', description: '70% RDA zinc for testosterone and muscular repair', impact: 'positive', weight: 40 },
        { title: '44g Sustained Protein', description: 'Slow-release amino acid profile for overnight recovery', impact: 'positive', weight: 35 },
        { title: '11g Gut Fiber', description: 'Supports insulin sensitivity and microbiome balance', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [
        { title: 'Moderate Saturated Fat', description: 'Opt for 5% lean beef mince to keep lipids optimal', impact: 'negative', weight: 8 }
      ]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'High Fiber', 'Batch Cook King'],
    allergens: [],
    ingredients: [
      { id: 'i-91', name: 'Lean Beef Mince (5% fat)', amount: 450, unit: 'g', estimatedCost: 3.80, category: 'Meat', substitution: { name: 'Extra Firm Tofu / Brown Lentils', reason: 'Cuts price by £2.00 while maintaining high protein', costDiff: -2.00, proteinDiff: -8 } },
      { id: 'i-92', name: 'Canned Black Beans (rinsed)', amount: 400, unit: 'g', estimatedCost: 0.65, category: 'Canned' },
      { id: 'i-93', name: 'Canned Kidney Beans', amount: 400, unit: 'g', estimatedCost: 0.65, category: 'Canned' },
      { id: 'i-94', name: 'Passata / Crushed Tomatoes', amount: 500, unit: 'g', estimatedCost: 0.75, category: 'Canned' },
      { id: 'i-95', name: 'Chipotle Paste, Cumin & Cacao Powder', amount: 2, unit: 'tbsp', estimatedCost: 0.50, category: 'Spices' }
    ],
    instructions: [
      'Heat a large pot over medium-high heat. Brown the minced beef with diced onion and minced garlic for 6 minutes, breaking into crumbles.',
      'Stir in chipotle paste, cumin, oregano, and 1 tsp unsweetened raw cacao powder (adds rich smoky depth).',
      'Add drained black beans, kidney beans, passata, and 150ml water or beef bone broth.',
      'Bring to a boil, then reduce heat to low and simmer for 20 minutes with the lid partially open, stirring occasionally until thick.',
      'Serve warm topped with fresh cilantro, a spoon of Greek yogurt, or sliced jalapenos.'
    ],
    storageInfo: 'A true batch-cook champion. Yields 4 large meals and freezes for up to 4 months.',
    cookingTips: ['Adding 1 teaspoon of raw unsweetened dark cacao powder deepens the chili flavour without adding sweetness.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-10',
    name: 'Super Green Spirulina Spinach Smoothie Bowl',
    headline: 'Cellular Detox & Micronutrient Burst under 5 Mins',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 4,
    cookTimeMinutes: 0,
    defaultServings: 1,
    estimatedCostPerServing: 1.60,
    macrosPerServing: {
      calories: 320,
      protein: 22,
      carbs: 46,
      fat: 4,
      fiber: 8
    },
    microsPerServing: {
      sodium: 90, potassium: 820, calcium: 260, iron: 4.8, magnesium: 110, zinc: 2.1,
      vitaminA: 480, vitaminC: 75, vitaminD: 1.5, vitaminE: 2.8, vitaminK: 210, vitaminB12: 1.8, folate: 210
    },
    healthScore: {
      score: 97,
      summary: 'Ultimate cellular micronutrient density: over 200% daily Vitamin K, potent lutein, chlorophyll, and gut-friendly probiotics.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Massive Antioxidant Chlorophyll', description: 'Deep alkalizing plant phytonutrients', impact: 'positive', weight: 40 },
        { title: 'Over 200% Vitamin K & A', description: 'Essential for blood platelet health and cellular skin repair', impact: 'positive', weight: 35 }
      ],
      negativeFactors: [
        { title: 'Best Consumed Fresh', description: 'Drink immediately after blending to preserve active live enzymes', impact: 'negative', weight: 3 }
      ]
    },
    dietaryTags: ['Vegetarian', 'High Fiber', 'Zero Cook', 'Immunity Boost', 'Gluten Free'],
    allergens: ['Dairy'],
    ingredients: [
      { id: 'i-101', name: 'Fresh Baby Spinach & Kale', amount: 80, unit: 'g', estimatedCost: 0.40, category: 'Produce' },
      { id: 'i-102', name: 'Frozen Banana & Mango Chunks', amount: 120, unit: 'g', estimatedCost: 0.45, category: 'Fruit' },
      { id: 'i-103', name: 'Plain Greek Yogurt 0%', amount: 100, unit: 'g', estimatedCost: 0.45, category: 'Dairy' },
      { id: 'i-104', name: 'Organic Spirulina / Chlorella Powder', amount: 1, unit: 'tsp', estimatedCost: 0.20, category: 'Superfoods' },
      { id: 'i-105', name: 'Cold Water or Coconut Water', amount: 100, unit: 'ml', estimatedCost: 0.10, category: 'Beverages' }
    ],
    instructions: [
      'Add fresh spinach, frozen mango/banana chunks, and spirulina powder into a high-speed blender.',
      'Spoon in 0% Greek yogurt and add 100ml cold water.',
      'Blend on high for 45-60 seconds until ultra-creamy and vibrant electric green.',
      'Pour into a chilled bowl. Top with pumpkin seeds, sliced kiwi, or hemp hearts if desired.'
    ],
    storageInfo: 'Consume immediately after preparation for peak antioxidant potency.',
    cookingTips: ['Use frozen banana chunks rather than room temp fruit to get a thick, soft-serve ice cream texture.'],
    isHighProtein: true,
    isBudgetFriendly: true
  }
];

export const MOCK_SUPERMARKET_CATALOGUE: SupermarketProduct[] = [
  // Protein: Chicken Breasts
  {
    id: 'sp-1a',
    name: 'Aldi Ashfields 100% British Chicken Breasts (1kg)',
    brand: 'Ashfields',
    supermarket: 'Aldi',
    category: 'Poultry',
    price: 6.49,
    pricePerUnit: '£6.49 / kg',
    packageSize: '1kg',
    healthScore: 94,
    macros: { calories: 120, protein: 24, carbs: 0, fat: 2.2, fiber: 0 },
    keyMicros: ['High B6', 'High Niacin', 'Low Sodium'],
    tier: 'cheapest',
    badgeReason: 'Cheapest British 100% Lean Protein at £6.49/kg',
    equivalentGroup: 'chicken_breast'
  },
  {
    id: 'sp-1b',
    name: 'Tesco Finest Organic Free-Range Chicken Breast (500g)',
    brand: 'Tesco Finest',
    supermarket: 'Tesco',
    category: 'Poultry',
    price: 6.75,
    pricePerUnit: '£13.50 / kg',
    packageSize: '500g',
    healthScore: 97,
    macros: { calories: 118, protein: 25, carbs: 0, fat: 1.8, fiber: 0 },
    keyMicros: ['Organic Certified', 'Zero Antibiotics', 'Higher Omega-3'],
    tier: 'healthiest',
    badgeReason: 'Highest animal welfare & organic nutrient profile',
    equivalentGroup: 'chicken_breast'
  },
  {
    id: 'sp-1c',
    name: 'Sainsbury\'s British Chicken Breast Fillets (650g)',
    brand: 'Sainsbury\'s',
    supermarket: 'Sainsbury\'s',
    category: 'Poultry',
    price: 4.80,
    pricePerUnit: '£7.38 / kg',
    packageSize: '650g',
    healthScore: 93,
    macros: { calories: 120, protein: 24, carbs: 0, fat: 2.1, fiber: 0 },
    keyMicros: ['Red Tractor Assured', 'High Protein'],
    tier: 'best_value',
    badgeReason: 'Optimal balance of Red Tractor quality, portion size & cost',
    equivalentGroup: 'chicken_breast'
  },

  // Greek Yogurt Group
  {
    id: 'sp-2a',
    name: 'Brooklea 0% Fat Greek Style Yogurt (500g)',
    brand: 'Brooklea',
    supermarket: 'Aldi',
    category: 'Dairy',
    price: 0.89,
    pricePerUnit: '£1.78 / kg',
    packageSize: '500g',
    healthScore: 88,
    macros: { calories: 54, protein: 6.5, carbs: 4.2, fat: 0.1, fiber: 0 },
    keyMicros: ['Calcium', 'Live Cultures'],
    tier: 'cheapest',
    badgeReason: 'Unbeatable budget staple at £0.89',
    equivalentGroup: 'greek_yogurt'
  },
  {
    id: 'sp-2b',
    name: 'FAGE Total 0% Authentic Greek Strained Yogurt (450g)',
    brand: 'FAGE',
    supermarket: 'Tesco',
    category: 'Dairy',
    price: 2.25,
    pricePerUnit: '£5.00 / kg',
    packageSize: '450g',
    healthScore: 96,
    macros: { calories: 54, protein: 10.3, carbs: 3.0, fat: 0, fiber: 0 },
    keyMicros: ['10.3g Protein/100g', 'True Strained', 'Non-GMO'],
    tier: 'healthiest',
    badgeReason: 'Highest protein density (strained 3x) & zero thickeners',
    equivalentGroup: 'greek_yogurt'
  },
  {
    id: 'sp-2c',
    name: 'Tesco 0% Fat Authentic Greek Yogurt (500g)',
    brand: 'Tesco',
    supermarket: 'Tesco',
    category: 'Dairy',
    price: 1.40,
    pricePerUnit: '£2.80 / kg',
    packageSize: '500g',
    healthScore: 93,
    macros: { calories: 57, protein: 9.5, carbs: 3.8, fat: 0, fiber: 0 },
    keyMicros: ['Authentic Greek PDO', 'High Calcium'],
    tier: 'best_value',
    badgeReason: '9.5g protein per 100g at half the branded price',
    equivalentGroup: 'greek_yogurt'
  },

  // Salmon Fillets Group
  {
    id: 'sp-3a',
    name: 'Everyday Essentials Frozen Salmon Portions (4x100g)',
    brand: 'Everyday Essentials',
    supermarket: 'Aldi',
    category: 'Fish',
    price: 3.49,
    pricePerUnit: '£8.72 / kg',
    packageSize: '400g',
    healthScore: 89,
    macros: { calories: 190, protein: 20, carbs: 0, fat: 12, fiber: 0 },
    keyMicros: ['Omega-3 DHA', 'Vitamin D'],
    tier: 'cheapest',
    badgeReason: 'Most affordable portioned salmon at £0.87 per serving',
    equivalentGroup: 'salmon'
  },
  {
    id: 'sp-3b',
    name: 'Waitrose Wild Alaskan Sockeye Salmon (2x110g)',
    brand: 'Waitrose 1',
    supermarket: 'Waitrose',
    category: 'Fish',
    price: 5.50,
    pricePerUnit: '£25.00 / kg',
    packageSize: '220g',
    healthScore: 98,
    macros: { calories: 165, protein: 23, carbs: 0, fat: 8, fiber: 0 },
    keyMicros: ['Wild Caught MSC', 'Astaxanthin Rich', 'Highest Vitamin D3'],
    tier: 'healthiest',
    badgeReason: 'Pure wild-caught Sockeye with superior micronutrients',
    equivalentGroup: 'salmon'
  },
  {
    id: 'sp-3c',
    name: 'Sainsbury\'s Scottish Salmon Fillets Fresh (2x120g)',
    brand: 'Sainsbury\'s',
    supermarket: 'Sainsbury\'s',
    category: 'Fish',
    price: 3.90,
    pricePerUnit: '£16.25 / kg',
    packageSize: '240g',
    healthScore: 92,
    macros: { calories: 210, protein: 21, carbs: 0, fat: 14, fiber: 0 },
    keyMicros: ['RSPCA Assured', 'High Omega 3'],
    tier: 'best_value',
    badgeReason: 'Fresh RSPCA assured quality with reliable freshness',
    equivalentGroup: 'salmon'
  },

  // Oats Group
  {
    id: 'sp-4a',
    name: 'Everyday Value Rolled Porridge Oats (1kg)',
    brand: 'Everyday',
    supermarket: 'Tesco',
    category: 'Grains',
    price: 0.90,
    pricePerUnit: '£0.90 / kg',
    packageSize: '1kg',
    healthScore: 92,
    macros: { calories: 370, protein: 11, carbs: 60, fat: 8, fiber: 9 },
    keyMicros: ['Beta-glucan', 'Magnesium'],
    tier: 'cheapest',
    badgeReason: 'Pure 100% whole grain oats under £1 for 1kg',
    equivalentGroup: 'oats'
  },
  {
    id: 'sp-4b',
    name: 'Flahavan\'s Organic Irish Jumbo Oats (1kg)',
    brand: 'Flahavan\'s',
    supermarket: 'Sainsbury\'s',
    category: 'Grains',
    price: 2.10,
    pricePerUnit: '£2.10 / kg',
    packageSize: '1kg',
    healthScore: 95,
    macros: { calories: 375, protein: 12, carbs: 59, fat: 7.5, fiber: 10 },
    keyMicros: ['100% Organic', 'Glycemic Index 42', 'High Zinc'],
    tier: 'best_value',
    badgeReason: 'Highest quality jumbo oat flakes with lower glycemic impact',
    equivalentGroup: 'oats'
  }
];