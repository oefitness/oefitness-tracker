import { FoodItem, Recipe, SupermarketProduct } from '@/types/nutrition';
import { ALL_DATABASE_RECIPES } from './recipeDatabase';

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

export const MOCK_RECIPES: Recipe[] = ALL_DATABASE_RECIPES;

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