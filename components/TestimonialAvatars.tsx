import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Secure Attachment",
    content: "This assessment gave me incredible insights into why I act the way I do in relationships. The personalized summary was spot on and helped me understand my attachment patterns.",
    rating: 5,
    avatarColor: "5e6ad2"
  },
  {
    name: "Michael R.",
    role: "Therapist",
    content: "I recommend this to all my clients. The insights are accurate and the report is incredibly detailed. Science-based and easy to understand.",
    rating: 5,
    avatarColor: "7170ff"
  },
  {
    name: "Jessica L.",
    role: "Life Coach",
    content: "This tool has transformed how I work with clients. The attachment style insights are spot-on and help people build healthier relationships.",
    rating: 5,
    avatarColor: "8a8f98"
  }
];

export default function TestimonialAvatars() {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-medium text-[#f7f8f8] mb-6">Trusted by thousands of users</h3>
      <div className="flex flex-col sm:flex-row gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex-1 bg-[#191a1b] rounded-lg p-5 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)] transition-colors"
          >
            {/* Avatar with UI Avatars */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.1)]">
                <Image
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=${testimonial.avatarColor}&color=fff&size=128&font-size=0.5&bold=true`}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-[#f7f8f8] text-sm">{testimonial.name}</div>
                <div className="text-[#8a8f98] text-xs">{testimonial.role}</div>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#5e6ad2]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Content */}
            <p className="text-[#d0d6e0] text-sm leading-relaxed italic">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}