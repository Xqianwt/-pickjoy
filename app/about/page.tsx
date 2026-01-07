import Link from "next/link";
import { ArrowLeft, Dog, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fffbf0] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">We Speak <span className="text-orange-500">Dog</span> (and Cat).</h1>
        
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-orange-100 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
            PickJoy was born from a simple frustration: why are there so many unsafe, cheap pet products on the market?
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Our founder, Vito, started this journey after adopting a rescue Golden Retriever named "Joy". We realized that finding durable, safe, and truly useful pet gear was harder than it should be.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Today, strictly focused on pet happiness. We don't review blenders or keyboards. We review ball launchers, orthopedic beds, and organic treats. If it doesn't make a tail wag, it doesn't make our list.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard 
            icon={<ShieldCheck className="w-6 h-6 text-orange-600" />} 
            title="Safety First" 
            desc="We check materials and recall history before recommending anything." 
          />
          <ValueCard 
            icon={<Dog className="w-6 h-6 text-orange-600" />} 
            title="Pet Tested" 
            desc="Our office is full of furry testers who give the final paw of approval." 
          />
          <ValueCard 
            icon={<Heart className="w-6 h-6 text-orange-600" />} 
            title="Joyful Living" 
            desc="We believe pets are family, and they deserve the best life possible." 
          />
        </div>
      </div>
    </main>
  );
}

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-orange-50 shadow-sm">
      <div className="mb-4 bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}