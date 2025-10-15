import { AnimatedBackground } from "@/components/animated-background"
import { ProductReviewCard } from "@/components/product-review-card"

const productReviews = [
{
slug: "mateminco-flashlight-outdoor-portable-emergency",
name: "MATEMINCO Flashlight Outdoor Portable Emergency",
image: "https://m.media-amazon.com/images/I/41yO0URd9rL.AC_SX679.jpg",
rating: 4.5,
reviewCount: 50,
excerpt: "Powerful flashlight designed for outdoor activities and emergency situations.",
price: "$49.99",
},
{
slug: "workpro-rechargeable-flashlight-ultra-compact",
name: "WORKPRO Rechargeable Flashlight Ultra Compact Function",
image: "https://m.media-amazon.com/images/I/71rkXO9wCRL.AC_SX679.jpg",
rating: 4.0,
reviewCount: 200,
excerpt: "Rechargeable and ultra-compact flashlight with multiple functions.",
price: "$19.99",
},
{
slug: "trixhub-rechargeable-flashlights-linternas-emergencies",
name: "TrixHub Rechargeable Flashlights Linternas Emergencies",
image: "https://m.media-amazon.com/images/I/91H2HARjx0L.AC_SX679_PIbundle-2,TopRight,0,0_SH20.jpg",
rating: 4.3,
reviewCount: 30,
excerpt: "Rechargeable flashlights suitable for emergencies and outdoor use.",
price: "$25.99",
},
{
slug: "bushnell-headlamp-rubicon-battery-hunting",
name: "Bushnell Headlamp Rubicon Battery Hunting",
image: "https://m.media-amazon.com/images/I/81M731kJ2wL.AC_SX679.jpg",
rating: 3.5,
reviewCount: 44,
excerpt: "Bushnell's Rubicon headlamp with 500 lumens, powered by 3AA batteries, ideal for hunting, hiking, camping, and hands-free work.",
price: "$29.99",
},
{
slug: "consciot-dimmable-water-resistant-flashlight-emergency",
name: "Consciot Dimmable Water Resistant Flashlight Emergency",
image: "https://m.media-amazon.com/images/I/71MkWLsBUGL.AC_SX679_PIbundle-2,TopRight,0,0_SH20.jpg",
rating: 4.5,
reviewCount: 500,
excerpt: "LED battery-powered camping lantern with 1000LM, 4 light modes, IPX4 waterproof, suitable for power outages, emergencies, hurricanes, and hiking.",
price: "$19.99",
},
{
slug: "darkbeam-rechargeable-ultraviolet-flashlights-fluorescent",
name: "DARKBEAM Rechargeable Ultraviolet Flashlights Fluorescent",
image: "https://m.media-amazon.com/images/I/61GJ-cmsEEL.AC_SX679.jpg",
rating: 4.5,
reviewCount: 2771,
excerpt: "The 395nm Light Flashlight provides 1300mw and 395 nm wavelength UV light with upgraded lamp beads LED. It is more compact than other ordinary UV flashlights, and also has USB-C direct charging function, which is good for environmentally friendly.",
price: "$10.99",
},
{
slug: "acebeam-flashlight-rechargeable-flashlights-searchlight",
name: "ACEBEAM Flashlight Rechargeable Flashlights Searchlight",
image: "https://m.media-amazon.com/images/I/612xoX4IB4L.AC_SX679.jpg",
rating: 2.9,
reviewCount: 4,
excerpt: "The Acebeam X20-R packs extreme brightness into a palm-sized body, perfectly designed for one-handed use, with options for 8,000 lumens and 645-meter throw or 10,000 lumens and 440-meter throw. It features dual 3000mAh batteries with USB-C charging, intuitive controls including tactical modes and strobe, high-efficiency output, and rugged IP68 waterproof construction for tough conditions.",
price: "$149.90",
},
{
slug: "zewdov-aluminum-waterproof-rechargeable-headlight",
name: "Zewdov Aluminum Waterproof Rechargeable Headlight",
image: "https://m.media-amazon.com/images/I/710+9c1lByL.AC_SX679.jpg",
rating: 4.0,
reviewCount: 20,
excerpt: "Aluminum waterproof rechargeable headlight for outdoor activities.",
price: "$15.99",
},
{
slug: "victoper-flashlight-flashlights-waterproof-emergency",
name: "Victoper Flashlight Flashlights Waterproof Emergency",
image: "https://m.media-amazon.com/images/I/71ePNhE72DL.AC_SX679_PIbundle-2,TopRight,0,0_SH20.jpg",
rating: 4.5,
reviewCount: 1000,
excerpt: "Bright tactical flashlight with high lumens, 5 modes, waterproof and zoomable, perfect for hunting and camping.",
price: "$12.99",
},
];

export default function ReviewsPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <AnimatedBackground />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Product <span className="text-[#00C2FF]">Reviews</span>
          </h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            In-depth reviews of our most popular flashlights. Real testing, honest opinions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productReviews.map((product) => (
              <ProductReviewCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
