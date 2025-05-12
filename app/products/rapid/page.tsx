"use client"

import ProductDetailTemplate, { IngredientType } from "@/components/product-detail-template"

// RAPID product active ingredients
const activeIngredients: IngredientType[] = [
  {
    name: "Curcumin Phytosome (Meriva®)",
    dose: "200 mg",
    function: "Fast-acting anti-inflammatory for acute joint or muscle flare-ups"
  },
  {
    name: "CBD (nano)",
    dose: "15 mg",
    function: "Rapid absorption; targets inflammatory cytokines and pain pathways"
  },
  {
    name: "THCV (nano)",
    dose: "10 mg",
    function: "Energizing, non-sedating relief agent"
  },
  {
    name: "Gingerol Complex",
    dose: "50 mg",
    function: "Activates circulation, desensitizes TRPV1 pain receptors"
  },
  {
    name: "Piperine (Black Pepper Extract)",
    dose: "5 mg",
    function: "Enhances curcumin and cannabinoid absorption via inhibition of liver metabolism"
  },
  {
    name: "Electrolyte Blend (Mg, K, Na)",
    dose: "50 mg",
    function: "Replenishes minerals lost during inflammation, exercise, or stress"
  }
]

// RAPID product other ingredients
const otherIngredients: IngredientType[] = [
  {
    name: "Purified Water",
    function: "Liquid base"
  },
  {
    name: "Chai Natural Flavor",
    function: "Spiced flavor profile (cinnamon, cardamom, clove)"
  },
  {
    name: "Lemon Juice Concentrate",
    function: "Natural acidity and flavor"
  },
  {
    name: "Monk Fruit Sweetener",
    function: "Sugar-free sweetness (natural, low-calorie)"
  },
  {
    name: "Coconut MCT Oil",
    function: "Carrier for nano cannabinoids; enhances absorption"
  },
  {
    name: "Citric Acid",
    function: "Preservative and pH control"
  },
  {
    name: "Xanthan Gum",
    function: "Natural thickener and stabilizer"
  },
  {
    name: "Potassium Sorbate",
    function: "Shelf-life stabilizer (minimal, FDA-safe levels)"
  },
  {
    name: "Beta-Carotene",
    function: "Natural colorant (vitamin A precursor)"
  }
]

// RAPID product science description paragraphs
const scienceDescription = [
  "TeaHC RAPID utilizes our most advanced nano-emulsification technology to create ultra-small particles (15-25 nanometers) that are absorbed directly through the oral mucosa and digestive tract for immediate action.",
  "The liquid format allows for maximum surface area contact and rapid absorption. We've included piperine (black pepper extract) which has been shown in clinical studies to enhance the bioavailability of curcumin by up to 2000%. The addition of gingerol from ginger extract provides complementary anti-inflammatory action through COX-2 inhibition."
]

// RAPID product benefits
const benefits = [
  "Ultra-fast onset (10-15 minutes)",
  "Highest bioavailability in our product line",
  "Multi-pathway inflammation targeting",
  "Convenient portable format for on-the-go relief"
]

export default function RapidProductPage() {
  return (
    <ProductDetailTemplate
      id="rapid"
      name="RAPID"
      tagline="Fast-Acting Formula"
      description="Our concentrated liquid formula designed for rapid relief when you need it most. The perfect solution for on-the-go relief with maximum bioavailability."
      image="/product-images/rapid-formula.png"
      format="Zesty Black Pepper Extract"
      quantity="10 2oz nano shots"
      usage="As Needed for Fast Relief"
      colorClass="text-amber-700"
      colorBgClass="bg-amber-50"
      colorTextClass="text-amber-700"
      price={19.99}
      badges={["Sugar-Free", "Gluten-Free", "Vegan", "Non-GMO", "Lab Tested"]}
      activeIngredients={activeIngredients}
      otherIngredients={otherIngredients}
      benefits={benefits}
      scienceDescription={scienceDescription}
    />
  )
} 