import Link from "next/link";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col items-center py-20 px-6">
      <div className="max-w-xl w-full">
        <Link href="/" className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Partner with PickJoy</h1>
        <p className="text-gray-500 mb-10">Do you have a pet product that brings joy? We'd love to test it.</p>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all" placeholder="Tell us about your product or inquiry..."></textarea>
            </div>
            <button type="button" className="w-full py-3 bg-sage-800 text-white rounded-lg font-medium hover:bg-sage-700 transition-colors">
              Send Message
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-stone-100">
             <div className="flex items-start gap-4 mb-6">
               <div className="bg-sage-50 p-2 rounded-full text-sage-600"><Mail className="w-5 h-5" /></div>
               <div>
                 <h4 className="font-semibold text-stone-800">Business Inquiries</h4>
                 <p className="text-sm text-stone-500">xqianwt@gmail.com</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-sage-50 p-2 rounded-full text-sage-600"><MapPin className="w-5 h-5" /></div>
               <div>
                 <h4 className="font-semibold text-stone-800">Studio</h4>
                 <p className="text-sm text-stone-500">Los Angeles, CA</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
