import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Michael R.",
    role: "Therapist",
    content: "I recommend this assessment to all my clients. The insights are accurate and the report is incredibly detailed.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Jessica L.",
    role: "Life Coach",
    content: "This tool has transformed how I work with clients. The attachment style insights are spot-on.",
    rating: 5,
    avatar: "JL"
  },
  {
    name: "David K.",
    role: "HR Director",
    content: "We use this for team building. The insights have improved communication across our organization.",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Sarah M.",
    role: "Individual User",
    content: "The assessment helped me understand why my relationships weren't working. Life-changing insights.",
    rating: 5,
    avatar: "SM"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professionals & Individuals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what therapists, coaches, and thousands of users are saying about our assessment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* 评分 */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* 评价内容 */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* 用户信息 */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-semibold text-gray-700">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 统计数据 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-gray-600">Users Worldwide</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">2,800+</div>
            <div className="text-gray-600">Professional Users</div>
          </div>
        </div>
      </div>
    </section>
  );
}