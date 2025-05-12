"use client"

import ProductDetailTemplate, { IngredientType } from "@/components/product-detail-template"

// REPAIR product active ingredients
const activeIngredients: IngredientType[] = [
  {
    name: "Curcumin Phytosome (Meriva®)",
    dose: "300 mg",
    function: "Absorbable turmeric extract; reduces systemic inflammation affecting sleep"
  },
  {
    name: "CBD (nano)",
    dose: "30 mg",
    function: "Helps relax CNS, supports parasympathetic recovery"
  },
  {
    name: "THCV (nano)",
    dose: "3 mg",
    function: "Cellular repair, inflammation reduction without sedation"
  },
  {
    name: "CBN",
    dose: "2 mg",
    function: "Mild sedative; modulates sleep via CB1/CB2"
  },
  {
    name: "L-Theanine",
    dose: "100 mg",
    function: "Alpha wave enhancer; reduces stress, balances mood"
  },
  {
    name: "Tart Cherry Extract (50:1)",
    dose: "250 mg",
    function: "Natural melatonin, antioxidant-rich; improves sleep quality"
  },
  {
    name: "Magnesium (as Glycinate)",
    dose: "75 mg",
    function: "Muscle relaxant; supports deep sleep via GABA pathway"
  }
]

// REPAIR product other ingredients
const otherIngredients: IngredientType[] = [
  {
    name: "Whole Chamomile Powder",
    function: "Sleep-enhancing botanical base (apigenin)"
  },
  {
    name: "Vanilla Bean",
    function: "Natural calming flavor"
  },
  {
    name: "Honey Granules (non-GMO)",
    function: "Comforting flavor + mouthfeel; low glycemic"
  },
  {
    name: "Natural Vanilla-Honey Flavor",
    function: "Flavor enhancement (no synthetic flavorings)"
  },
  {
    name: "Monk Fruit Extract",
    function: "Natural sweetener (zero glycemic)"
  },
  {
    name: "Tapioca Solids",
    function: "Powder texture and flow aid"
  },
  {
    name: "Citric Acid",
    function: "Natural preservative and flavor balancer"
  },
  {
    name: "Silicon Dioxide",
    function: "Anti-caking agent"
  }
]

// REPAIR product science description paragraphs
const scienceDescription = [
  "TeaHC REPAIR is formulated with a higher ratio of CBD to support relaxation and recovery during sleep. During sleep, the body naturally enters repair mode, and our formula is designed to enhance this process.",
  "Research shows that CBD interacts with serotonin receptors and can help regulate sleep cycles. The combination with lower doses of THCV and the addition of CBN provides gentle anti-inflammatory support and promotes restful sleep. Our nano-emulsification technology ensures these compounds are readily available to your body throughout the night."
]

// REPAIR product benefits
const benefits = [
  "Supports natural recovery processes during sleep",
  "Reduces nighttime inflammation and discomfort",
  "Promotes relaxation without morning grogginess",
  "Sustained release for all-night support"
]

export default function RepairProductPage() {
  return (
    <ProductDetailTemplate
      id="repair"
      name="REPAIR"
      tagline="Nighttime Formula"
      description="Our evening formula designed to support recovery and reduce inflammation while you sleep. The perfect way to end your day and wake up refreshed and ready for tomorrow."
      image="/product-images/repair-formula.png"
      format="Honey Vanilla Chamomile"
      quantity="10 satchets (5.6g each)"
      usage="Evening or Before Bed"
      colorClass="text-blue-800"
      colorBgClass="bg-blue-50"
      colorTextClass="text-blue-800"
      price={19.99}
      badges={["Sugar-Free", "Vegan", "Non-GMO", "Lab Tested"]}
      activeIngredients={activeIngredients}
      otherIngredients={otherIngredients}
      benefits={benefits}
      scienceDescription={scienceDescription}
    />
  )
} 