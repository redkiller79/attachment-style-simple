import Link from 'next/link';

const footerLinks = {
  Product: [
    { name: 'Assessment', href: '/assessment' },
    { name: 'Pricing', href: '/pricing' },
  ],
  Resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2DD4BF] to-[#5B4B8A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white">
                BondType
              </span>
            </div>
            <p className="text-[#F8FAFC]/70 mb-6 max-w-md">
              Scientifically-validated attachment style assessment and research-based insights 
              to help you build healthier relationships.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#F8FAFC]/70 hover:text-[#F8FAFC] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#5B4B8A]/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#F8FAFC]/70 text-sm">
              © {new Date().getFullYear()} BondType. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-[#F8FAFC]/70 hover:text-[#F8FAFC] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#F8FAFC]/70 hover:text-[#F8FAFC] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
