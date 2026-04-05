import Link from 'next/link';
import { PostMetadata } from '@/lib/blog';

interface BlogCardProps {
  post: PostMetadata;
  featured?: boolean;
}

// Cover image gradient presets per category
const categoryGradients: Record<string, string> = {
  'Attachment Theory': 'from-blue-100 to-indigo-100',
  'Assessment': 'from-purple-100 to-pink-100',
  'Understanding': 'from-green-100 to-teal-100',
  'Anxious Attachment': 'from-orange-100 to-red-100',
  'Avoidant Attachment': 'from-gray-100 to-slate-100',
  'Secure Attachment': 'from-emerald-100 to-green-100',
  'Introduction': 'from-blue-50 to-purple-50',
};

const categoryEmojis: Record<string, string> = {
  'Attachment Theory': '🧠',
  'Assessment': '📋',
  'Understanding': '💡',
  'Anxious Attachment': '💗',
  'Avoidant Attachment': '🏔️',
  'Secure Attachment': '🌿',
  'Introduction': '👋',
};

function getGradient(category: string): string {
  return categoryGradients[category] || 'from-blue-100 to-purple-100';
}

function getEmoji(category: string): string {
  return categoryEmojis[category] || '📄';
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const gradient = getGradient(post.category);
  const emoji = getEmoji(post.category);

  return (
    <article className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-50/50 hover:border-blue-100 transition-all duration-300 ${featured ? 'ring-2 ring-blue-100' : ''}`}>
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Cover Image Placeholder */}
        <div className={`h-44 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
          <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform duration-300">{emoji}</span>
          {/* Decorative shapes */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
              {post.category}
            </span>
            <time className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            {post.readingTime && (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </span>
            )}
          </div>

          <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug ${featured ? 'text-2xl' : 'text-lg'}`}>
            {post.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-0.5 text-gray-400 text-xs">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="text-xs text-gray-600">{post.author}</span>
            </div>
            
            <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-xs group-hover:gap-2 transition-all">
              Read more
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
