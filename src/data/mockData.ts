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
    name: 'Sweet Crunch Ultra-Processed Cereal',
    brand: 'CrispySugar Co',
    category: 'Grains & Cereals',
    servingSize: '1 bowl (45g)',
    servingSizeGrams: 45,
    macros: { calories: 185, protein: 2.2, carbs: 39, fat: 1.8, fiber: 1.2 },
    micros: {
      sodium: 260, potassium: 65, calcium: 40, iron: 3.0, magnesium: 12, zinc: 0.6,
      vitaminA: 120, vitaminC: 8, vitaminD: 1.5, vitaminE: 0.2, vitaminK: 0.1, vitaminB12: 0.5, folate: 50
    },
    healthScore: {
      score: 38,
      summary: 'High added sugar and ultra-processed refined starch with rapid insulin spike.',
      processingLevel: 'Ultra-Processed',
      positiveFactors: [
        { title: 'Fortified Micronutrients', description: 'Added synthetic iron and B vitamins', impact: 'positive', weight: 15 }
      ],
      negativeFactors: [
        { title: 'Excess Added Sugars', description: '16g free sugars (over 50% max daily allowance)', impact: 'negative', weight: 35 },
        { title: 'Ultra-Refined Flour', description: 'Stripped of natural bran and endosperm fiber', impact: 'negative', weight: 25 },
        { title: 'Elevated Sodium for Cereal', description: '260mg added sodium per modest portion', impact: 'negative', weight: 15 }
      ]
    },
    priceEstimate: 0.42,
    supermarket: 'Tesco',
    barcode: '502847192847',
    image: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=400&auto=format&fit=crop&q=80'
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
    headline: 'Budget Super-Fuel: 26g Protein & 14g Fiber for £1.15',
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