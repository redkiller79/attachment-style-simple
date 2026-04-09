import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Understand Your Relationships?
        </h2>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Join 50,000+ users who have gained valuable insights into their attachment style and improved their relationships.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <span>Start Free Assessment</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white transition-all duration-300">
            Learn More About Pricing
          </button>
        </div>
        
        {/* 保证和信任 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-5 h-5" />
            <span>No credit card required</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-5 h-5" />
            <span>100% privacy protected</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-5 h-5" />
            <span>15-minute assessment</span>
          </div>
        </div>
      </div>
    </section>
  );
}