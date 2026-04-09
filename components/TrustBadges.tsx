const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const trustBadges: TrustBadge[] = [
  {
    icon: <LockIcon />,
    title: "Private & Secure",
    description: "Your data is encrypted and never shared",
    color: "#5e6ad2"
  },
  {
    icon: <StarIcon />,
    title: "Science-Based",
    description: "Based on decades of attachment theory research",
    color: "#7170ff"
  },
  {
    icon: <ClockIcon />,
    title: "10 Minutes",
    description: "Quick assessment with instant results",
    color: "#8a8f98"
  }
];

export default function TrustBadges() {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-medium text-[#f7f8f8] mb-6">Why Trust BondType?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {trustBadges.map((badge, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 p-4 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] transition-colors"
          >
            <div 
              className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${badge.color}20`, color: badge.color }}
            >
              {badge.icon}
            </div>
            <div>
              <div className="font-medium text-[#f7f8f8] text-sm mb-1">{badge.title}</div>
              <div className="text-[#8a8f98] text-xs">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}