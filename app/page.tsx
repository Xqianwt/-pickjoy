import { ArrowRight, Dog, Heart, Sparkles, Bone, ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-[#fffbf0]">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-pet-pattern z-0" />

      {/* 1. Header with Custom Logo */}
      <header className="sticky top-0 z-50 w-full bg-[#fffbf0]/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Designed Icon/Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
              <Dog className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5">
                <Heart className="w-3 h-3 text-red-500 fill-current" />
              </div>
            </div>
            <span className="text-2xl font-black tracking-tight text-brand-dark">
              PickJoy<span className="text-brand-orange">.</span>
            </span>
          </div>

          <Link href="/contact" className="px-5 py-2 rounded-full border border-brand-dark/10 text-sm font-semibold hover:bg-brand-dark hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </header>

      {/* 2. Visual Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" /> For Happy Tails
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 leading-[1.1]">
              Make Your Pet's Life <span className="text-brand-orange">Magical.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We curate the coziest beds, the healthiest treats, and the smartest toys. Because they deserve the best.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-2">
                Explore Collection <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Hero Image / Illustration Placeholder */}
          <div className="relative">
             <div className="aspect-square rounded-full bg-orange-200 absolute top-10 right-10 w-full blur-3xl opacity-30 animate-pulse"></div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
               {/* 这里的图片地址来自于 Unsplash */}
               <img 
                 src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop" 
                 alt="Happy Dog" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
                 <div className="flex -space-x-2">
                   {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border border-white" />)}
                 </div>
                 <span className="text-xs font-bold text-gray-800">Loved by 10k+ Pets</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. The Pet Collection */}
      <section className="py-20 px-6 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-dark mb-4">Curated with Love</h2>
            <p className="text-gray-500 max-w-lg mx-auto">We only recommend products that are safe, durable, and genuinely fun for your four-legged family members.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category: PLAY */}
            <CollectionCard 
              icon={<Bone className="w-6 h-6" />}
              title="Active Play"
              items={[
                { name: "Indestructible Chew Ring", price: "$14.99", link: "#" },
                { name: "Smart Rolling Ball", price: "$29.99", link: "#" },
                { name: "Tug-of-War Rope Set", price: "$19.50", link: "#" },
              ]}
              color="bg-blue-50"
              iconColor="text-blue-600"
            />

            {/* Category: REST */}
            <CollectionCard 
              icon={<Star className="w-6 h-6" />}
              title="Cozy Rest"
              items={[
                { name: "Orthopedic Memory Foam Bed", price: "$89.00", link: "#" },
                { name: "Self-Warming Blanket", price: "$24.99", link: "#" },
                { name: "Calming Donut Bed", price: "$45.00", link: "#" },
              ]}
              color="bg-orange-50"
              iconColor="text-orange-600"
            />

            {/* Category: EAT */}
            <CollectionCard 
              icon={<Heart className="w-6 h-6" />}
              title="Healthy Eats"
              items={[
                { name: "Automatic WiFi Feeder", price: "$129.99", link: "#" },
                { name: "Ceramic Raised Bowl", price: "$32.00", link: "#" },
                { name: "Slow Feeder Puzzle", price: "$18.50", link: "#" },
              ]}
              color="bg-green-50"
              iconColor="text-green-600"
            />
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-12 border-t border-orange-100 bg-[#fffbf0] relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-black text-brand-dark">
            <Dog className="w-5 h-5 text-brand-orange" /> PickJoy
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <Link href="/about" className="hover:text-brand-orange">About Us</Link>
            <Link href="/privacy" className="hover:text-brand-orange">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-brand-orange">Contact</Link>
          </div>
          <div className="text-xs text-gray-400">
            © 2026 PickJoy. 
          </div>
        </div>
      </footer>
    </main>
  );
}

function CollectionCard({ icon, title, items, color, iconColor }: { icon: any, title: string, items: any[], color: string, iconColor: string }) {
  return (
    <div className={`rounded-3xl p-8 ${color} hover:scale-[1.02] transition-transform duration-300`}>
      <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center ${iconColor} shadow-sm mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="space-y-4">
        {items.map((item, i) => (
          <a key={i} href={item.link} className="block bg-white/60 p-4 rounded-xl hover:bg-white transition-colors group">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-gray-700 group-hover:text-brand-orange transition-colors">{item.name}</span>
              <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-sm text-gray-400 font-medium">{item.price}</div>
          </a>
        ))}
      </div>
    </div>
  );
}