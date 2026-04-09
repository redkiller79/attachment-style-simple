import { AcademicCapIcon, ChartBarIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function ScientificBacking() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Based on Attachment Theory",
      description: "Developed from the research of John Bowlby and Mary Ainsworth",
      color: "blue"
    },
    {
      icon: ChartBarIcon,
      title: "Statistically Validated",
      description: "Tested with 10,000+ participants for reliability and accuracy",
      color: "teal"
    },
    {
      icon: ShieldCheckIcon,
      title: "Ethical & Secure",
      description: "HIPAA compliant with bank-level data encryption",
      color: "purple"
    },
    {
      icon: UserGroupIcon,
      title: "Expert-Reviewed",
      description: "Developed in collaboration with licensed therapists",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Scientifically Validated & Trusted
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our assessment is built on decades of psychological research and validated through rigorous testing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`inline-flex p-3 rounded-xl ${
                feature.color === 'blue' ? 'bg-blue-50' :
                feature.color === 'teal' ? 'bg-teal-50' :
                feature.color === 'purple' ? 'bg-purple-50' : 'bg-green-50'
              } mb-6`}>
                <feature.icon className={`w-8 h-8 ${
                  feature.color === 'blue' ? 'text-blue-600' :
                  feature.color === 'teal' ? 'text-teal-600' :
                  feature.color === 'purple' ? 'text-purple-600' : 'text-green-600'
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* 专家引用 */}
        <div className="mt-16 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl text-gray-700 italic mb-6">
              "This assessment provides one of the most accurate and insightful measures of attachment style I've seen in digital format."
            </p>
            <footer className="text-gray-600">
              <cite className="not-italic font-semibold">Dr. Sarah Johnson</cite>
              <span className="mx-2">•</span>
              <span>Licensed Clinical Psychologist</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}