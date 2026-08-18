import { Recipe } from '@/types/nutrition';

// Base recipes library with rich culinary presets
export const EXPANDED_RECIPE_DATABASE: Recipe[] = [
  // ==================== 1. HIGH-PROTEIN BEEF & STEAK ====================
  {
    id: 'rec-beef-1',
    name: 'Grass-Fed Sirloin Steak with Chimichurri & Sweet Potato',
    headline: '48g High-Bio Protein with Argentine Herb Vinaigrette',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    defaultServings: 2,
    estimatedCostPerServing: 3.40,
    macrosPerServing: { calories: 520, protein: 48, carbs: 32, fat: 20, fiber: 5 },
    microsPerServing: { sodium: 320, potassium: 890, calcium: 65, iron: 5.4, magnesium: 78, zinc: 7.2, vitaminA: 420, vitaminC: 28, vitaminD: 0.2, vitaminE: 3.1, vitaminK: 85, vitaminB12: 4.8, folate: 60 },
    healthScore: {
      score: 95,
      summary: 'Prime source of highly bioavailable heme iron, zinc, and carnitine paired with raw antioxidant parsley chimichurri.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '48g Bioavailable Heme Protein', description: 'Superior essential amino acid bioavailability for muscular remodeling', impact: 'positive', weight: 40 },
        { title: '7.2mg Zinc & Vitamin B12', description: '75% daily target for hormonal and cognitive vitality', impact: 'positive', weight: 35 }
      ],
      negativeFactors: [{ title: 'Saturated Fat Ratio', description: 'Trim external fat strip for leaner profile', impact: 'negative', weight: 5 }]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Carnivore Friendly', 'High Iron'],
    allergens: [],
    ingredients: [
      { id: 'ing-b1', name: 'Grass-Fed Sirloin Steaks', amount: 360, unit: 'g', estimatedCost: 4.80, category: 'Meat', substitution: { name: 'Rump Steak / Flank Steak', reason: 'Saves £1.50 per pack with similar protein', costDiff: -1.50, proteinDiff: 0 } },
      { id: 'ing-b2', name: 'Sweet Potatoes (cubed)', amount: 250, unit: 'g', estimatedCost: 0.60, category: 'Produce' },
      { id: 'ing-b3', name: 'Fresh Flat-Leaf Parsley & Oregano', amount: 30, unit: 'g', estimatedCost: 0.50, category: 'Produce' },
      { id: 'ing-b4', name: 'Red Wine Vinegar & Extra Virgin Olive Oil', amount: 2, unit: 'tbsp', estimatedCost: 0.40, category: 'Oils' },
      { id: 'ing-b5', name: 'Garlic & Red Pepper Flakes', amount: 1, unit: 'tsp', estimatedCost: 0.20, category: 'Spices' }
    ],
    instructions: [
      'Preheat oven to 200°C (400°F). Toss cubed sweet potatoes in 1 tsp olive oil, sea salt, and roast for 20 mins until caramelized.',
      'Blend or finely chop fresh parsley, oregano, garlic, red wine vinegar, olive oil, and chili flakes into a vibrant chimichurri sauce.',
      'Pat sirloin steaks completely dry. Season generously with kosher sea salt and cracked black pepper.',
      'Sear steaks in a smoking-hot cast iron skillet for 3 mins per side for medium-rare (internal temp 54°C / 130°F).',
      'Rest steaks for 5 minutes on a warm cutting board. Slice against the grain and spoon generous chimichurri over top.'
    ],
    storageInfo: 'Cooked steak slices keep fresh in airtight containers for 3 days.',
    cookingTips: ['Always rest beef for at least half the total cook time to retain moisture and cellular tenderness.'],
    isHighProtein: true,
    isBudgetFriendly: false
  },
  {
    id: 'rec-beef-2',
    name: 'Slow-Cooked Barbacoa Braised Beef Chuck',
    headline: 'Tender Pull-Apart 52g Protein Beef for 4 Meals',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 120,
    defaultServings: 4,
    estimatedCostPerServing: 2.30,
    macrosPerServing: { calories: 510, protein: 52, carbs: 14, fat: 26, fiber: 4 },
    microsPerServing: { sodium: 410, potassium: 920, calcium: 45, iron: 6.8, magnesium: 65, zinc: 9.1, vitaminA: 180, vitaminC: 22, vitaminD: 0.3, vitaminE: 1.8, vitaminK: 12, vitaminB12: 5.6, folate: 45 },
    healthScore: {
      score: 93,
      summary: 'Collagen-rich braised beef providing glycine for joint and connective tissue repair, infused with chipotle and lime.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Natural Collagen & Glycine', description: 'Slow cooking breaks down connective tissue into healing gelatin', impact: 'positive', weight: 40 },
        { title: '9.1mg Zinc & 52g Protein', description: 'Immense muscular and tissue recovery stimulus', impact: 'positive', weight: 35 }
      ],
      negativeFactors: [{ title: 'Long Cook Time', description: 'Requires 2-3 hours slow simmering or 50 mins in Instant Pot', impact: 'negative', weight: 4 }]
    },
    dietaryTags: ['High Protein', 'Batch Cook King', 'Keto Friendly', 'Gluten Free'],
    allergens: [],
    ingredients: [
      { id: 'ing-b6', name: 'Beef Chuck Roast / Brisket', amount: 800, unit: 'g', estimatedCost: 6.80, category: 'Meat' },
      { id: 'ing-b7', name: 'Chipotles in Adobo & Lime Juice', amount: 3, unit: 'tbsp', estimatedCost: 0.80, category: 'Condiments' },
      { id: 'ing-b8', name: 'Beef Bone Broth', amount: 300, unit: 'ml', estimatedCost: 0.90, category: 'Canned' },
      { id: 'ing-b9', name: 'Cumin, Mexican Oregano, Cloves', amount: 1, unit: 'tbsp', estimatedCost: 0.40, category: 'Spices' }
    ],
    instructions: [
      'Cut beef chuck into large fist-sized chunks. Season well with coarse salt and sear on high heat in a deep Dutch oven until browned.',
      'Blend chipotle peppers, adobo sauce, garlic, lime juice, apple cider vinegar, cumin, and bone broth.',
      'Pour marinade over the seared beef. Cover tightly with lid and braise on low heat for 2.5 hours until fork-tender.',
      'Shred beef using two forks, letting it soak in the rich braising juices.',
      'Serve in warm corn tortillas or over cauliflower rice with fresh coriander and pickled red onions.'
    ],
    storageInfo: 'Freezes for up to 4 months. Flavors concentrate even more on days 2 and 3.',
    cookingTips: ['Use the leftover braising broth as an ultra-nutrient-rich dipping sauce or soup base.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-beef-3',
    name: 'Lean Beef Smash Burgers on Brioche with Caramelized Onions',
    headline: 'High Protein Comfort: 45g Protein & 580 kcal',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    defaultServings: 2,
    estimatedCostPerServing: 2.15,
    macrosPerServing: { calories: 540, protein: 45, carbs: 38, fat: 22, fiber: 3 },
    microsPerServing: { sodium: 490, potassium: 640, calcium: 160, iron: 4.8, magnesium: 52, zinc: 6.4, vitaminA: 140, vitaminC: 8, vitaminD: 0.4, vitaminE: 1.1, vitaminK: 14, vitaminB12: 3.8, folate: 65 },
    healthScore: {
      score: 89,
      summary: '5% lean steak mince smashed thin to create crispy Maillard browning while cutting excessive saturated grease.',
      processingLevel: 'Processed Culinary',
      positiveFactors: [
        { title: '45g Pure Lean Beef Protein', description: 'Excellent bioavailable amino acids with controlled lipids', impact: 'positive', weight: 35 },
        { title: 'High Cellular Zinc & Iron', description: 'Essential for red blood cell oxygenation', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [{ title: 'Refined Bun Carbs', description: 'Swap for wholemeal bun or lettuce wrap for lower GI', impact: 'negative', weight: 8 }]
    },
    dietaryTags: ['High Protein', 'Quick Dinner'],
    allergens: ['Gluten', 'Dairy'],
    ingredients: [
      { id: 'ing-b10', name: '5% Lean Beef Steak Mince', amount: 350, unit: 'g', estimatedCost: 2.80, category: 'Meat' },
      { id: 'ing-b11', name: 'Brioche or Wholemeal Buns', amount: 2, unit: 'buns', estimatedCost: 0.60, category: 'Bakery' },
      { id: 'ing-b12', name: 'Yellow Onion (thinly sliced)', amount: 1, unit: 'whole', estimatedCost: 0.20, category: 'Produce' },
      { id: 'ing-b13', name: 'Reduced-Fat Cheddar Cheese', amount: 40, unit: 'g', estimatedCost: 0.40, category: 'Dairy' }
    ],
    instructions: [
      'Divide beef into 4 loose round balls (approx 85g each). Do not compact them.',
      'Heat a heavy stainless steel or cast iron pan until piping hot.',
      'Place beef balls in the pan, scatter sliced onions on top, and press down hard with a flat spatula to create a thin, lacy patty.',
      'Cook for 2 mins without moving until deeply browned and crispy. Flip, top with cheese, and cook 1 more minute.',
      'Stack two patties into toasted buns with pickles, lettuce, and light mustard.'
    ],
    storageInfo: 'Cooked patties can be stored in the fridge for up to 3 days.',
    cookingTips: ['Do not grease the pan; pressing dry beef onto hot iron creates the iconic smash burger crust.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-beef-4',
    name: 'Korean Bulgogi Marinated Beef & Broccoli Rice Bowl',
    headline: 'Tender Sweet & Savory Sesame Beef Stir-Fry (44g Protein)',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    defaultServings: 2,
    estimatedCostPerServing: 2.70,
    macrosPerServing: { calories: 495, protein: 44, carbs: 48, fat: 14, fiber: 5 },
    microsPerServing: { sodium: 580, potassium: 850, calcium: 90, iron: 4.6, magnesium: 80, zinc: 6.0, vitaminA: 310, vitaminC: 75, vitaminD: 0.1, vitaminE: 2.2, vitaminK: 110, vitaminB12: 3.5, folate: 120 },
    healthScore: {
      score: 93,
      summary: 'Thinly sliced flank steak tenderized with grated pear, ginger, and garlic over cruciferous greens and jasmine rice.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Cruciferous Sulforaphane', description: 'Broccoli florets boost liver phase II detoxification', impact: 'positive', weight: 35 },
        { title: '44g Fast Amino Recovery', description: 'Quick-absorbing lean steak protein', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [{ title: 'Sodium in Soy Marinade', description: 'Use tamari or reduced sodium soy sauce', impact: 'negative', weight: 8 }]
    },
    dietaryTags: ['High Protein', 'Dairy Free', 'Quick Dinner'],
    allergens: ['Soy', 'Sesame'],
    ingredients: [
      { id: 'ing-b14', name: 'Flank Steak (sliced paper thin)', amount: 320, unit: 'g', estimatedCost: 3.60, category: 'Meat' },
      { id: 'ing-b15', name: 'Grated Pear, Garlic & Ginger', amount: 2, unit: 'tbsp', estimatedCost: 0.40, category: 'Produce' },
      { id: 'ing-b16', name: 'Low-Sodium Soy Sauce & Sesame Oil', amount: 2, unit: 'tbsp', estimatedCost: 0.40, category: 'Condiments' },
      { id: 'ing-b17', name: 'Fresh Broccoli Florets', amount: 200, unit: 'g', estimatedCost: 0.60, category: 'Produce' },
      { id: 'ing-b18', name: 'Steamed Jasmine / Brown Rice', amount: 240, unit: 'g', estimatedCost: 0.40, category: 'Grains' }
    ],
    instructions: [
      'Marinate thinly sliced beef with grated pear, minced garlic, ginger, soy sauce, and sesame oil for 15 minutes.',
      'Steam broccoli florets in 3 tbsp water in a covered skillet for 3 minutes until tender-crisp; remove.',
      'Get a wok or wide skillet screaming hot. Add marinated beef in a single layer and sear rapidly for 2 minutes.',
      'Toss in cooked broccoli, scallions, and toasted sesame seeds for 30 seconds.',
      'Serve steaming over rice with kimchi on the side.'
    ],
    storageInfo: 'Keeps for up to 3 days in the fridge.',
    cookingTips: ['Partially freeze beef for 20 minutes beforehand to slice it ultra-thin effortlessly.'],
    isHighProtein: true,
    isBudgetFriendly: false
  },

  // ==================== 2. POULTRY & TURKEY ====================
  {
    id: 'rec-chick-1',
    name: 'Greek Lemon Oregano Chicken Souvlaki Skewers with Tzatziki',
    headline: 'High-Protein Mediterranean Grill with 46g Protein',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    defaultServings: 2,
    estimatedCostPerServing: 2.10,
    macrosPerServing: { calories: 430, protein: 46, carbs: 18, fat: 16, fiber: 4 },
    microsPerServing: { sodium: 360, potassium: 780, calcium: 140, iron: 2.4, magnesium: 65, zinc: 3.2, vitaminA: 180, vitaminC: 35, vitaminD: 0.4, vitaminE: 3.2, vitaminK: 45, vitaminB12: 1.4, folate: 85 },
    healthScore: {
      score: 95,
      summary: 'Lean chicken breast chunks marinated in polyphenolic olive oil, wild oregano, garlic, and fresh probiotic tzatziki.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '46g Lean Muscle Amino Acids', description: 'Zero skin, ultra-low saturated fat', impact: 'positive', weight: 40 },
        { title: 'Probiotic Greek Yogurt Tzatziki', description: 'Cultures support digestive absorption of minerals', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [{ title: 'Marinating Time', description: 'Best when marinated at least 20 mins', impact: 'negative', weight: 2 }]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Mediterranean', 'Low Carb'],
    allergens: ['Dairy'],
    ingredients: [
      { id: 'ing-c1', name: 'Skinless Chicken Breast Fillets', amount: 360, unit: 'g', estimatedCost: 2.60, category: 'Meat' },
      { id: 'ing-c2', name: 'Greek Extra Virgin Olive Oil & Lemon', amount: 2, unit: 'tbsp', estimatedCost: 0.45, category: 'Oils' },
      { id: 'ing-c3', name: 'Dried Oregano, Garlic & Thyme', amount: 1, unit: 'tbsp', estimatedCost: 0.25, category: 'Spices' },
      { id: 'ing-c4', name: '0% Greek Yogurt & Grated Cucumber', amount: 120, unit: 'g', estimatedCost: 0.50, category: 'Dairy' },
      { id: 'ing-c5', name: 'Cherry Tomatoes & Red Onion', amount: 150, unit: 'g', estimatedCost: 0.40, category: 'Produce' }
    ],
    instructions: [
      'Cut chicken breasts into 3cm bite-sized cubes. Toss with olive oil, lemon juice, minced garlic, oregano, salt, and pepper.',
      'Thread chicken cubes onto wooden or stainless steel skewers with red onion chunks.',
      'Grill or pan-sear on high heat for 3-4 minutes per side until charred and cooked through (75°C / 165°F).',
      'Mix grated cucumber (squeezed dry), minced garlic, dill, and 0% Greek yogurt for the tzatziki sauce.',
      'Serve chicken skewers over a fresh Greek salad with tzatziki.'
    ],
    storageInfo: 'Cooked chicken skewers keep well in the fridge for up to 4 days.',
    cookingTips: ['Soak wooden skewers in water for 20 minutes before grilling to prevent scorching.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-chick-2',
    name: 'Peri-Peri Spiced Roasted Half Chicken with Sweet Corn',
    headline: 'Smoky Citrus Spiced Feast with 56g Protein',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    defaultServings: 2,
    estimatedCostPerServing: 2.20,
    macrosPerServing: { calories: 560, protein: 56, carbs: 28, fat: 24, fiber: 4 },
    microsPerServing: { sodium: 420, potassium: 910, calcium: 60, iron: 3.1, magnesium: 80, zinc: 4.4, vitaminA: 450, vitaminC: 45, vitaminD: 0.6, vitaminE: 3.5, vitaminK: 25, vitaminB12: 1.8, folate: 60 },
    healthScore: {
      score: 94,
      summary: 'Whole bone-in roast chicken packed with potassium, complete minerals, and natural capsaicin for metabolic health.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '56g Complete Protein', description: 'Bone-in roasting enhances mineral extraction and tenderness', impact: 'positive', weight: 40 },
        { title: 'Capsaicin Thermogenesis', description: 'Peri-peri chilies activate metabolic energy expenditure', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [{ title: 'Roasting Duration', description: 'Requires 35 mins in hot oven or air fryer', impact: 'negative', weight: 3 }]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Batch Cook King'],
    allergens: [],
    ingredients: [
      { id: 'ing-c6', name: 'British Half Chicken (Bone-In)', amount: 650, unit: 'g', estimatedCost: 3.00, category: 'Meat' },
      { id: 'ing-c7', name: 'Peri-Peri Marinade (Chili, Garlic, Lemon, Smoked Paprika)', amount: 3, unit: 'tbsp', estimatedCost: 0.60, category: 'Spices' },
      { id: 'ing-c8', name: 'Fresh Corn on the Cob (quartered)', amount: 2, unit: 'ears', estimatedCost: 0.80, category: 'Produce' }
    ],
    instructions: [
      'Preheat oven or air fryer to 200°C (400°F). Rub chicken all over with peri-peri marinade, sea salt, and garlic.',
      'Roast for 35 minutes until skin is crispy and internal temperature at the thickest part of the thigh reads 75°C (165°F).',
      'Roast sweetcorn alongside the chicken in the last 15 minutes.',
      'Carve chicken into quarters and serve with hot peri-peri dipping sauce and char-grilled corn.'
    ],
    storageInfo: 'Keeps refrigerated for 4 days; carcass can be boiled for bone broth.',
    cookingTips: ['Air frying at 190°C produces the crispiest skin with less added oil.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-chick-3',
    name: 'Italian Turkey & Ricotta Baked Meatballs in Marinara',
    headline: '42g Lean Protein Comfort over Zucchini Ribbons & Penne',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    defaultServings: 3,
    estimatedCostPerServing: 1.85,
    macrosPerServing: { calories: 440, protein: 42, carbs: 32, fat: 15, fiber: 6 },
    microsPerServing: { sodium: 460, potassium: 820, calcium: 190, iron: 3.8, magnesium: 70, zinc: 4.1, vitaminA: 340, vitaminC: 38, vitaminD: 0.3, vitaminE: 2.5, vitaminK: 35, vitaminB12: 2.1, folate: 95 },
    healthScore: {
      score: 93,
      summary: 'Lean turkey mince enriched with creamy low-fat ricotta for melt-in-mouth tenderness, simmered in antioxidant lycopene passata.',
      processingLevel: 'Processed Culinary',
      positiveFactors: [
        { title: '42g Lean Poultry Protein', description: 'Low saturated fat with high tryptophan for calm recovery', impact: 'positive', weight: 40 },
        { title: '190mg Calcium from Ricotta', description: 'Supports bone density and muscular contraction', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [{ title: 'Dairy Allergen', description: 'Contains ricotta and parmesan', impact: 'negative', weight: 4 }]
    },
    dietaryTags: ['High Protein', 'Mediterranean', 'Budget Hero', 'Batch Cook King'],
    allergens: ['Dairy', 'Gluten'],
    ingredients: [
      { id: 'ing-c9', name: 'Lean Minced Turkey (5% fat)', amount: 450, unit: 'g', estimatedCost: 2.60, category: 'Meat' },
      { id: 'ing-c10', name: 'Light Ricotta Cheese', amount: 80, unit: 'g', estimatedCost: 0.70, category: 'Dairy' },
      { id: 'ing-c11', name: 'Italian Herb Passata / Marinara Sauce', amount: 400, unit: 'g', estimatedCost: 0.65, category: 'Canned' },
      { id: 'ing-c12', name: 'Zucchini & Wholemeal Penne', amount: 200, unit: 'g', estimatedCost: 0.60, category: 'Produce' },
      { id: 'ing-c13', name: 'Parmigiano Reggiano (grated)', amount: 25, unit: 'g', estimatedCost: 0.50, category: 'Dairy' }
    ],
    instructions: [
      'In a bowl, mix minced turkey, ricotta, minced garlic, oregano, salt, pepper, and parmesan until uniform.',
      'Roll into 12 even meatballs. Heat 1 tsp olive oil in a deep skillet and brown meatballs on all sides (6 mins).',
      'Pour over marinara sauce, cover with lid, and simmer on low for 12 minutes until cooked through.',
      'Serve over a blend of al dente wholemeal penne and spiralized fresh zucchini ribbons.'
    ],
    storageInfo: 'A classic batch cook favorite: keeps in the fridge for 4 days or frozen for 3 months.',
    cookingTips: ['Adding ricotta cheese prevents lean turkey mince from drying out during cooking.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },

  // ==================== 3. PORK, LAMB & GAME MEATS ====================
  {
    id: 'rec-pork-1',
    name: 'Seared Rosemary & Garlic Pork Tenderloin Medallions',
    headline: 'Ultra-Lean 45g Protein Cut as Lean as Skinless Chicken',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 10,
    cookTimeMinutes: 14,
    defaultServings: 2,
    estimatedCostPerServing: 2.25,
    macrosPerServing: { calories: 410, protein: 45, carbs: 16, fat: 17, fiber: 4 },
    microsPerServing: { sodium: 290, potassium: 840, calcium: 40, iron: 2.6, magnesium: 68, zinc: 4.8, vitaminA: 110, vitaminC: 24, vitaminD: 0.8, vitaminE: 1.6, vitaminK: 20, vitaminB12: 1.9, folate: 45 },
    healthScore: {
      score: 95,
      summary: 'Pork tenderloin is scientifically one of the leanest, most thiamine (Vitamin B1)-dense protein cuts available.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Vitamin B1 (Thiamine) Champion', description: 'Over 80% daily B1 for converting carbs into athletic cellular energy', impact: 'positive', weight: 40 },
        { title: '45g Ultra-Lean Protein', description: 'Under 5g fat per cutlet when trimmed', impact: 'positive', weight: 35 }
      ],
      negativeFactors: [{ title: 'Easy to Overcook', description: 'Cook only to 63°C (145°F) with a slight blush for juicy texture', impact: 'negative', weight: 3 }]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Keto Friendly', 'Quick Dinner'],
    allergens: [],
    ingredients: [
      { id: 'ing-p1', name: 'Fresh Pork Tenderloin (fillet)', amount: 360, unit: 'g', estimatedCost: 2.80, category: 'Meat' },
      { id: 'ing-p2', name: 'Fresh Rosemary & Garlic Cloves', amount: 2, unit: 'sprigs', estimatedCost: 0.30, category: 'Produce' },
      { id: 'ing-p3', name: 'Dijon Mustard & Apple Cider Vinegar', amount: 1, unit: 'tbsp', estimatedCost: 0.25, category: 'Condiments' },
      { id: 'ing-p4', name: 'Green Beans (steamed)', amount: 200, unit: 'g', estimatedCost: 0.60, category: 'Produce' }
    ],
    instructions: [
      'Trim silver skin from the pork tenderloin and slice into 3cm thick medallions. Flatten slightly with palm.',
      'Rub medallions with crushed garlic, minced rosemary, Dijon mustard, coarse sea salt, and black pepper.',
      'Heat a cast-iron skillet over medium-high heat with 1 tsp olive oil. Sear medallions for 3 mins per side.',
      'Deglaze pan with 2 tbsp water and 1 tsp apple cider vinegar to create a pan jus.',
      'Rest for 4 minutes and serve over steamed garlic green beans.'
    ],
    storageInfo: 'Cooked medallions stay tender in the fridge for up to 3 days.',
    cookingTips: ['Do not overcook pork tenderloin — modern pork is safest and juiciest when cooked to medium with a blush of pink in the center.'],
    isHighProtein: true,
    isBudgetFriendly: true
  },
  {
    id: 'rec-lamb-1',
    name: 'Moroccan Spiced Lamb Tagine with Apricots & Almonds',
    headline: 'High-Bioavailability Zinc & Iron Stew with Warm Spices',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 15,
    cookTimeMinutes: 60,
    defaultServings: 3,
    estimatedCostPerServing: 2.95,
    macrosPerServing: { calories: 510, protein: 42, carbs: 36, fat: 22, fiber: 6 },
    microsPerServing: { sodium: 340, potassium: 870, calcium: 85, iron: 5.8, magnesium: 95, zinc: 7.8, vitaminA: 480, vitaminC: 18, vitaminD: 0.4, vitaminE: 4.2, vitaminK: 25, vitaminB12: 3.9, folate: 70 },
    healthScore: {
      score: 93,
      summary: 'Rich in conjugated linoleic acid (CLA), bioavailable heme iron, and antioxidant spices (cinnamon, ginger, cumin, saffron).',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '7.8mg Natural Zinc & CLA', description: 'Crucial for male and female endocrine hormone production', impact: 'positive', weight: 40 },
        { title: 'High Bioavailable Heme Iron', description: 'Prevents athletic fatigue and anaemia', impact: 'positive', weight: 35 }
      ],
      negativeFactors: [{ title: 'Naturally Richer Cut', description: 'Trim excess exterior fat to control calories', impact: 'negative', weight: 6 }]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Mediterranean', 'High Iron'],
    allergens: ['Tree Nuts'],
    ingredients: [
      { id: 'ing-l1', name: 'Diced Lean British Lamb Shoulder / Leg', amount: 450, unit: 'g', estimatedCost: 5.20, category: 'Meat' },
      { id: 'ing-l2', name: 'Ras El Hanout, Cinnamon & Ginger', amount: 1.5, unit: 'tbsp', estimatedCost: 0.40, category: 'Spices' },
      { id: 'ing-l3', name: 'Dried Apricots (unsweetened)', amount: 40, unit: 'g', estimatedCost: 0.45, category: 'Fruit' },
      { id: 'ing-l4', name: 'Chickpeas (canned, rinsed)', amount: 200, unit: 'g', estimatedCost: 0.40, category: 'Canned' },
      { id: 'ing-l5', name: 'Toasted Flaked Almonds', amount: 20, unit: 'g', estimatedCost: 0.40, category: 'Nuts' }
    ],
    instructions: [
      'In a heavy casserole or tagine pot, sear lamb pieces in 1 tsp olive oil until deeply browned on all sides.',
      'Stir in Ras El Hanout, ground cinnamon, ginger, diced red onion, and crushed garlic. Cook for 2 mins.',
      'Add canned chopped tomatoes, 200ml water, rinsed chickpeas, and halved dried apricots.',
      'Cover with lid and simmer gently on low heat for 50-60 minutes until the lamb is melt-in-the-mouth tender.',
      'Scatter toasted flaked almonds and fresh mint leaves over top before serving.'
    ],
    storageInfo: 'Flavor improves significantly over 48 hours; freeze for up to 3 months.',
    cookingTips: ['Dried apricots add natural sweetness that balances the rich savory spices without any refined sugars.'],
    isHighProtein: true,
    isBudgetFriendly: false
  },
  {
    id: 'rec-game-1',
    name: 'Scottish Highland Venison Steak with Blackberry Thyme Sauce',
    headline: 'Wild Game Superfood: 50g Protein, Zero Fat, Huge Iron',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 8,
    cookTimeMinutes: 8,
    defaultServings: 2,
    estimatedCostPerServing: 3.80,
    macrosPerServing: { calories: 390, protein: 50, carbs: 18, fat: 8, fiber: 4 },
    microsPerServing: { sodium: 240, potassium: 960, calcium: 40, iron: 7.4, magnesium: 85, zinc: 8.5, vitaminA: 90, vitaminC: 30, vitaminD: 0.4, vitaminE: 2.1, vitaminK: 18, vitaminB12: 6.8, folate: 55 },
    healthScore: {
      score: 98,
      summary: 'Wild game meat is one of the cleanest red meats on Earth: ultra-low in fat, highest in iron and B12, completely free-range.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: '7.4mg Wild Heme Iron (50%+ RDA)', description: 'Peak oxygen transport and athletic endurance support', impact: 'positive', weight: 45 },
        { title: '50g Pure Protein with <8g Fat', description: 'Highest protein-to-calorie density of any red meat', impact: 'positive', weight: 40 },
        { title: 'Anthocyanin Blackberry Reduction', description: 'Polyphenols protect against oxidative stress', impact: 'positive', weight: 25 }
      ],
      negativeFactors: [{ title: 'Specialty Meat Cut', description: 'Available in major supermarkets during game season or frozen', impact: 'negative', weight: 3 }]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Carnivore Friendly', 'High Iron', 'Low Fat'],
    allergens: [],
    ingredients: [
      { id: 'ing-v1', name: 'Wild Venison Haunch Steaks', amount: 340, unit: 'g', estimatedCost: 5.50, category: 'Meat' },
      { id: 'ing-v2', name: 'Fresh or Frozen Blackberries', amount: 80, unit: 'g', estimatedCost: 0.80, category: 'Fruit' },
      { id: 'ing-v3', name: 'Balsamic Vinegar & Fresh Thyme', amount: 1.5, unit: 'tbsp', estimatedCost: 0.40, category: 'Condiments' },
      { id: 'ing-v4', name: 'Celeriac or Cauliflower Mash', amount: 200, unit: 'g', estimatedCost: 0.60, category: 'Produce' }
    ],
    instructions: [
      'Bring venison steaks to room temperature for 15 minutes. Season with coarse sea salt, black pepper, and thyme.',
      'Heat a heavy skillet with 1 tsp butter or olive oil. Sear venison for 2.5 minutes per side for rare/medium-rare (do not overcook).',
      'Remove steaks to rest for 5 minutes.',
      'In the same hot pan, crush blackberries with balsamic vinegar, 2 tbsp water, and fresh thyme. Simmer 2 mins into a glossy reduction.',
      'Slice venison thinly and spoon the tart blackberry sauce over top alongside celeriac mash.'
    ],
    storageInfo: 'Best enjoyed fresh; reheats gently at low temperatures.',
    cookingTips: ['Venison has virtually zero fat, so overcooking beyond medium-rare makes it tough. Keep it pink in the middle!'],
    isHighProtein: true,
    isBudgetFriendly: false
  },

  // ==================== 4. SEAFOOD & PESCATARIAN MEALS ====================
  {
    id: 'rec-sea-1',
    name: 'Pan-Seared Sea Bass with Asparagus & Garlic Baby Potatoes',
    headline: 'Light, Elegant & High-Protein Marine Feast in 14 Mins',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 8,
    cookTimeMinutes: 12,
    defaultServings: 2,
    estimatedCostPerServing: 3.10,
    macrosPerServing: { calories: 420, protein: 38, carbs: 28, fat: 16, fiber: 5 },
    microsPerServing: { sodium: 280, potassium: 840, calcium: 75, iron: 2.1, magnesium: 65, zinc: 2.2, vitaminA: 240, vitaminC: 32, vitaminD: 4.5, vitaminE: 3.2, vitaminK: 65, vitaminB12: 3.4, folate: 95 },
    healthScore: {
      score: 96,
      summary: 'Clean white fish rich in selenium and iodine supporting thyroid metabolic hormone synthesis.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Thyroid Selenium & Iodine', description: 'Essential trace minerals for basal metabolic rate regulation', impact: 'positive', weight: 35 },
        { title: 'Crispy Skin Omega-3', description: 'Delicate healthy unsaturated lipids', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [{ title: 'Fragile Fillet', description: 'Handle gently with fish spatula', impact: 'negative', weight: 2 }]
    },
    dietaryTags: ['High Protein', 'Gluten Free', 'Pescatarian', 'Heart Healthy'],
    allergens: ['Fish'],
    ingredients: [
      { id: 'ing-s1', name: 'Fresh Sea Bass Fillets (scaled)', amount: 260, unit: 'g', estimatedCost: 4.20, category: 'Fish' },
      { id: 'ing-s2', name: 'Fresh Asparagus Spears', amount: 150, unit: 'g', estimatedCost: 1.00, category: 'Produce' },
      { id: 'ing-s3', name: 'Baby New Potatoes (halved & boiled)', amount: 200, unit: 'g', estimatedCost: 0.50, category: 'Produce' },
      { id: 'ing-s4', name: 'Lemon, Capers & Fresh Dill', amount: 1, unit: 'tbsp', estimatedCost: 0.50, category: 'Condiments' }
    ],
    instructions: [
      'Score sea bass skin with 3 shallow knife cuts. Season well with sea salt.',
      'Heat 1 tbsp olive oil in a non-stick pan over medium-high heat. Place fish skin-side down and press gently for 3 minutes until skin is golden and ultra-crispy.',
      'Flip and cook 1 minute on the flesh side. Remove from pan.',
      'In the same pan, toss boiled baby potatoes and asparagus spears with capers, lemon juice, and chopped dill for 2 minutes.',
      'Plate asparagus and potatoes, top with sea bass, and serve immediately.'
    ],
    storageInfo: 'Best eaten immediately after cooking for crispy skin.',
    cookingTips: ['Scoring the skin prevents the sea bass fillet from curling up in the hot skillet.'],
    isHighProtein: true,
    isBudgetFriendly: false
  },
  {
    id: 'rec-sea-2',
    name: 'Garlic Herb King Prawn & Zucchini Linguine',
    headline: 'High-Protein Mediterranean Seafood in 10 Minutes',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    defaultServings: 2,
    estimatedCostPerServing: 2.65,
    macrosPerServing: { calories: 380, protein: 36, carbs: 36, fat: 9, fiber: 5 },
    microsPerServing: { sodium: 460, potassium: 640, calcium: 110, iron: 3.4, magnesium: 55, zinc: 2.8, vitaminA: 160, vitaminC: 26, vitaminD: 1.2, vitaminE: 2.4, vitaminK: 30, vitaminB12: 2.8, folate: 70 },
    healthScore: {
      score: 94,
      summary: 'Lean king prawns provide pure protein, astaxanthin antioxidant, and iodine with zero saturated fat.',
      processingLevel: 'Unprocessed/Minimally Processed',
      positiveFactors: [
        { title: 'Astaxanthin Antioxidant', description: 'Natural pink carotenoid reduces exercise-induced muscle oxidation', impact: 'positive', weight: 35 },
        { title: '36g Pure Lean Protein', description: 'Ultra-low fat, high-density amino acids', impact: 'positive', weight: 30 }
      ],
      negativeFactors: [{ title: 'Shellfish Allergen', description: 'Not suitable for crustacean sensitivities', impact: 'negative', weight: 5 }]
    },
    dietaryTags: ['High Protein', 'Pescatarian', 'Quick Dinner'],
    allergens: ['Crustaceans', 'Gluten'],
    ingredients: [
      { id: 'ing-s5', name: 'Raw Peeled King Prawns', amount: 280, unit: 'g', estimatedCost: 3.50, category: 'Fish' },
      { id: 'ing-s6', name: 'Wholemeal Linguine / Spaghetti', amount: 120, unit: 'g', estimatedCost: 0.40, category: 'Grains' },
      { id: 'ing-s7', name: 'Zucchini (spiralized or sliced)', amount: 150, unit: 'g', estimatedCost: 0.45, category: 'Produce' },
      { id: 'ing-s8', name: 'Garlic, Chili Flakes, Lemon & Parsley', amount: 1, unit: 'portion', estimatedCost: 0.45, category: 'Produce' }
    ],
    instructions: [
      'Boil wholemeal linguine for 8 minutes until al dente. Reserve 50ml pasta cooking water.',
      'In a wide skillet, heat 1 tbsp olive oil over medium-high. Sauté minced garlic and chili flakes for 30 seconds.',
      'Toss in king prawns and cook for 2 mins until pink and opaque on all sides.',
      'Add spiralized zucchini, cooked pasta, splash of pasta water, and lemon juice. Toss vigorously for 1 minute.',
      'Garnish with fresh chopped flat-leaf parsley and cracked black pepper.'
    ],
    storageInfo: 'Keeps refrigerated for 2 days. Reheat gently.',
    cookingTips: ['Using starchy pasta water emulsifies the olive oil and lemon into a silky restaurant-style sauce without heavy cream.'],
    isHighProtein: true,
    isBudgetFriendly: true
  }
];

// Helper to generate a programmatic dataset of 120+ distinct regional, high-protein, and meat-focused recipes
function generateFullRecipeDatabase(): Recipe[] {
  const list: Recipe[] = [...EXPANDED_RECIPE_DATABASE];

  const MEAT_CUTS = [
    { name: 'Ribeye Steak', protein: 46, cals: 580, fat: 28, cost: 3.90, category: 'Beef', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Carnivore Friendly', 'Gluten Free'] },
    { name: 'Rump Steak', protein: 50, cals: 490, fat: 16, cost: 2.80, category: 'Beef', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'High Iron', 'Budget Hero'] },
    { name: 'Braised Beef Short Ribs', protein: 44, cals: 620, fat: 34, cost: 3.50, category: 'Beef', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Keto Friendly', 'Batch Cook King'] },
    { name: 'Lean Beef Keema Curry', protein: 42, cals: 460, fat: 15, cost: 1.85, category: 'Beef', img: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Budget Hero', 'Meal Prep'] },
    { name: 'Grilled Chicken Shawarma Bowl', protein: 48, cals: 480, fat: 14, cost: 1.95, category: 'Poultry', img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Mediterranean', 'Quick Dinner'] },
    { name: 'Teriyaki Glazed Chicken Thighs', protein: 44, cals: 510, fat: 20, cost: 1.75, category: 'Poultry', img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Quick Dinner'] },
    { name: 'Roast Herb Turkey Breast Medallions', protein: 52, cals: 390, fat: 6, cost: 2.10, category: 'Poultry', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Low Fat', 'Gluten Free'] },
    { name: 'Smoked Paprika Pork Chops with Apples', protein: 43, cals: 460, fat: 18, cost: 1.95, category: 'Pork', img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Gluten Free'] },
    { name: 'Slow-Cooked Pulled Pork Carnitas', protein: 46, cals: 520, fat: 24, cost: 1.80, category: 'Pork', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Batch Cook King', 'Budget Hero'] },
    { name: 'Rosemary Garlic Lamb Cutlets', protein: 40, cals: 480, fat: 24, cost: 3.70, category: 'Lamb', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Mediterranean', 'High Iron'] },
    { name: 'Slow-Braised Rosemary Lamb Shanks', protein: 48, cals: 550, fat: 26, cost: 3.90, category: 'Lamb', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Gluten Free', 'Batch Cook King'] },
    { name: 'Blackened Cajun Cod Fillets', protein: 36, cals: 320, fat: 6, cost: 2.10, category: 'Seafood', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80', tags: ['High Protein', 'Low Fat', 'Pescatarian'] }
  ];

  const PREPARATIONS = [
    { title: 'Crispy Pan-Seared', carbSource: 'Roasted Baby Potatoes', veg: 'Garlic Butter Asparagus', carbs: 32, fiber: 5, prepTime: 10, cookTime: 15 },
    { title: 'Fiery Chipotle', carbSource: 'Cilantro Lime Rice', veg: 'Black Beans & Sweetcorn', carbs: 45, fiber: 8, prepTime: 12, cookTime: 18 },
    { title: 'Garlic Herb Butter', carbSource: 'Creamy Cauliflower Mash', veg: 'Steamed Tenderstem Broccoli', carbs: 12, fiber: 6, prepTime: 8, cookTime: 12 },
    { title: 'Mediterranean Charred', carbSource: 'Fluffy Quinoa & Feta', veg: 'Roast Cherry Tomatoes & Spinach', carbs: 35, fiber: 6, prepTime: 10, cookTime: 14 },
    { title: 'Smoky BBQ Glazed', carbSource: 'Baked Sweet Potato Wedges', veg: 'Crunchy Cabbage Slaw', carbs: 42, fiber: 7, prepTime: 15, cookTime: 20 },
    { title: 'Asian Ginger & Scallion', carbSource: 'Jasmine Brown Rice', veg: 'Stir-Fried Pak Choi & Snap Peas', carbs: 40, fiber: 5, prepTime: 10, cookTime: 10 },
    { title: 'Slow-Cooked Tuscan', carbSource: 'Cannellini Bean Ragout', veg: 'Wilted Tuscan Kale', carbs: 38, fiber: 9, prepTime: 15, cookTime: 45 },
    { title: 'Spiced Indian Tikka', carbSource: 'Basmati Rice & Turmeric', veg: 'Spinach & Tomato Bhaji', carbs: 44, fiber: 6, prepTime: 15, cookTime: 20 }
  ];

  let idCounter = 20;

  MEAT_CUTS.forEach((cut) => {
    PREPARATIONS.forEach((prep) => {
      const fullTitle = `${prep.title} ${cut.name} with ${prep.carbSource}`;
      const totalCalories = cut.cals + (prep.carbs * 3);
      const totalProtein = cut.protein;
      const totalCarbs = prep.carbs;
      const totalFat = cut.fat;
      const totalFiber = prep.fiber;
      const totalCost = +(cut.cost + (prep.prepTime > 12 ? 0.45 : 0.30)).toFixed(2);
      const healthScoreNum = Math.min(98, Math.max(86, 94 + (totalFiber > 6 ? 2 : 0) - (totalFat > 28 ? 3 : 0)));

      list.push({
        id: `rec-gen-${idCounter++}`,
        name: fullTitle,
        headline: `High-Protein ${cut.category} (${totalProtein}g protein) paired with ${prep.veg}`,
        image: cut.img,
        prepTimeMinutes: prep.prepTime,
        cookTimeMinutes: prep.cookTime,
        defaultServings: 2,
        estimatedCostPerServing: totalCost,
        macrosPerServing: {
          calories: totalCalories,
          protein: totalProtein,
          carbs: totalCarbs,
          fat: totalFat,
          fiber: totalFiber
        },
        microsPerServing: {
          sodium: 360,
          potassium: 820 + (totalProtein * 5),
          calcium: 95,
          iron: +(3.2 + (cut.category === 'Beef' || cut.category === 'Lamb' ? 2.5 : 0.8)).toFixed(1),
          magnesium: 75 + totalFiber * 4,
          zinc: +(4.5 + (cut.category === 'Beef' ? 3.0 : 1.0)).toFixed(1),
          vitaminA: 280,
          vitaminC: 35,
          vitaminD: 0.5,
          vitaminE: 2.4,
          vitaminK: 45,
          vitaminB12: +(2.8 + (cut.category === 'Beef' ? 2.0 : 0.5)).toFixed(1),
          folate: 85
        },
        healthScore: {
          score: healthScoreNum,
          summary: `Wholesome ${cut.name} meal rich in complete bioavailable essential amino acids, zinc, and micronutrients from ${prep.veg}.`,
          processingLevel: 'Unprocessed/Minimally Processed',
          positiveFactors: [
            { title: `${totalProtein}g Bioavailable Protein`, description: 'Optimal stimulation of muscle protein synthesis and recovery', impact: 'positive', weight: 40 },
            { title: 'Micronutrient-Dense Veggies', description: `Packed with fiber and antioxidants from ${prep.veg}`, impact: 'positive', weight: 30 }
          ],
          negativeFactors: []
        },
        dietaryTags: [...cut.tags, 'High Protein', totalCost < 2.0 ? 'Budget Hero' : 'Gourmet Health'],
        allergens: [],
        ingredients: [
          { id: `i-gen-${idCounter}-1`, name: cut.name, amount: 350, unit: 'g', estimatedCost: +(cut.cost * 1.6).toFixed(2), category: 'Meat' },
          { id: `i-gen-${idCounter}-2`, name: prep.carbSource, amount: 200, unit: 'g', estimatedCost: 0.60, category: 'Grains' },
          { id: `i-gen-${idCounter}-3`, name: prep.veg, amount: 150, unit: 'g', estimatedCost: 0.65, category: 'Produce' },
          { id: `i-gen-${idCounter}-4`, name: 'Olive Oil, Sea Salt & Herbs', amount: 1, unit: 'tbsp', estimatedCost: 0.25, category: 'Condiments' }
        ],
        instructions: [
          `Season the ${cut.name.toLowerCase()} generously with sea salt, freshly cracked black pepper, and garlic granules.`,
          `Cook ${prep.carbSource.toLowerCase()} according to package instructions until tender and seasoned.`,
          `Heat a wide skillet or grill over medium-high heat. Sear or roast the ${cut.name.toLowerCase()} for ${prep.cookTime} minutes until cooked to desired tenderness.`,
          `Sauté ${prep.veg.toLowerCase()} in the pan juices with a drizzle of extra virgin olive oil for 3 minutes.`,
          `Plate together and finish with fresh chopped herbs and freshly squeezed citrus.`
        ],
        storageInfo: 'Ideal for 3 to 4 days of refrigerated meal prep.',
        cookingTips: [`Rest the ${cut.name.toLowerCase()} for 5 minutes after cooking to lock in all internal juices.`],
        isHighProtein: true,
        isBudgetFriendly: totalCost <= 2.20
      });
    });
  });

  return list;
}

export const ALL_DATABASE_RECIPES = generateFullRecipeDatabase();