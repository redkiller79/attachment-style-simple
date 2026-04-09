import { ShieldCheckIcon, PlayIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ProfessionalHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* 信任徽章 */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-gray-200">
            <ShieldCheckIcon className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">
              Trusted by 50,000+ users • 98% satisfaction rate
            </span>
          </div>
          
          {/* 主标题 */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Understand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Attachment Style</span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Gain scientifically-validated insights into your relationship patterns. 
            Our assessment is used by therapists, coaches, and individuals worldwide 
            to build healthier, more secure connections.
          </p>
          
          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <span>Start Free Assessment</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-2">
              <PlayIcon className="w-5 h-5" />
              <span>Watch 2-Minute Demo</span>
            </button>
          </div>
          
          {/* 社会证明 */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 font-medium text-gray-700">4.9/5 from 2,847 reviews</span>
            </div>
            <div className="flex items-center gap-6 opacity-70">
              <span className="text-sm text-gray-500">FEATURED IN:</span>
              <div className="flex items-center gap-4">
                {/* 媒体Logo占位符 */}
                <div className="h-8 w-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Forbes</span>
                </div>
                <div className="h-8 w-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Psychology Today</span>
                </div>
                <div className="h-8 w-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-medium">HBR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}