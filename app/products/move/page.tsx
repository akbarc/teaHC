"use client"

import ProductDetailTemplate, { IngredientType } from "@/components/product-detail-template"

// MOVE product active ingredients
const activeIngredients: IngredientType[] = [
  {
    name: "Curcumin Phytosome (Meriva®)",
    dose: "400 mg",
    function: "Highly bioavailable turmeric; NF-κB, COX-2, TNF-α inhibition"
  },
  {
    name: "CBD (nano, hemp-derived)",
    dose: "25 mg",
    function: "Anti-inflammatory via CB2/TRPV1; reduces joint discomfort"
  },
  {
    name: "THCV (nano, hemp-derived)",
    dose: "10 mg",
    function: "Non-intoxicating CB2 agonist; supports mobility, reduces pain"
  },
  {
    name: "CBG (Cannabigerol)",
    dose: "10 mg",
    function: "COX-2 inhibition; enhances cannabinoid synergy"
  },
  {
    name: "Boswellia Serrata Extract (65% AKBA)",
    dose: "100 mg",
    function: "5-LOX inhibition; traditional joint relief agent"
  },
  {
    name: "Gingerols (from Ginger Root)",
    dose: "30 mg",
    function: "COX-2 inhibition; enhances circulation and absorption"
  }
]

// MOVE product other ingredients
const otherIngredients: IngredientType[] = [
  {
    name: "Decaf Sencha Green Tea Powder",
    function: "Tea base and polyphenol source (gentle energy, antioxidants)"
  },
  {
    name: "Lemon Peel Extract",
    function: "Citrus bioflavonoids and flavor"
  },
  {
    name: "Ground Ginger Root",
    function: "Natural anti-inflammatory + flavor booster"
  },
  {
    name: "Natural Citrus Flavor",
    function: "Enhances taste; clean-label compliant"
  },
  {
    name: "Monk Fruit Extract",
    function: "Natural zero-calorie sweetener (no blood sugar impact)"
  },
  {
    name: "Citric Acid",
    function: "pH control, preservation"
  },
  {
    name: "Tapioca Solids",
    function: "Carrier and texture stabilizer (non-GMO, gluten-free)"
  },
  {
    name: "Silicon Dioxide",
    function: "Anti-caking agent for powder flow"
  }
]

// MOVE product science description paragraphs
const scienceDescription = [
  "TeaHC MOVE combines specific cannabinoids in precise ratios to target inflammation and support mobility. Our proprietary nanotechnology breaks down these compounds into particles 20-50 nanometers in size, dramatically increasing their bioavailability.",
  "THCV and CBG work together to modulate both CB1 and CB2 receptors in the endocannabinoid system, helping to regulate inflammatory responses without psychoactive effects. The addition of curcumin phytosomes provides complementary anti-inflammatory action through different pathways, creating a synergistic effect."
]

// MOVE product benefits
const benefits = [
  "Supports joint mobility and flexibility",
  "Reduces inflammation through multiple pathways",
  "Fast onset (15-30 minutes) due to nano-emulsification",
  "Non-psychoactive, won't impair cognitive function"
]

export default function MoveProductPage() {
  return (
    <ProductDetailTemplate
      id="move"
      name="MOVE"
      tagline="Daytime Formula"
      description="Our daytime formula designed to keep you active and moving with ease. Combines the power of nano-cannabinoids with curcumin phytosomes for enhanced mobility and reduced inflammation."
      image="/product-images/move-formula.png"
      format="Decaf Sencha Green Tea"
      quantity="10 satchets (5.5g each)"
      usage="Morning or Afternoon"
      colorClass="text-amber-500"
      colorBgClass="bg-amber-50"
      colorTextClass="text-amber-800"
      price={19.99}
      badges={["Sugar-Free", "Gluten-Free", "Vegan", "Non-GMO", "Lab Tested"]}
      activeIngredients={activeIngredients}
      otherIngredients={otherIngredients}
      benefits={benefits}
      scienceDescription={scienceDescription}
    />
  )
} 