import Link from 'next/link';
import { PostMetadata } from '@/lib/blog';

interface BlogCardProps {
  post: PostMetadata;
  featured?: boolean;
}

// Cover image gradient presets per category (vibrant)
const categoryGradients: Record<string, string> = {
  'Attachment Theory': 'from-blue-600 via-indigo-500 to-purple-600',
  'Assessment': 'from-purple-600 via-pink-500 to-rose-600',
  'Understanding': 'from-emerald-500 via-teal-500 to-cyan-500',
  'Anxious Attachment': 'from-orange-500 via-red-500 to-pink-500',
  'Avoidant Attachment': 'from-slate-600 via-gray-500 to-zinc-500',
  'Secure Attachment': 'from-emerald-600 via-green-500 to-teal-500',
  'Introduction': 'from-blue-500 via-violet-500 to-purple-500',
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
  return categoryGradients[category] || 'from-blue-500 via-indigo-500 to-purple-600';
}

function getEmoji(category: string): string {
  return categoryEmojis[category] || '📄';
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const gradient = getGradient(post.category);
  const emoji = getEmoji(post.category);

  return (
    <article className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 hover:border-blue-200 transition-all duration-300 ${featured ? 'ring-2 ring-blue-200' : ''}`}>
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Cover Image Area */}
        <div className={`h-48 relative overflow-hidden ${post.coverImage ? '' : `bg-gradient-to-br ${gradient}`}`}>
          {post.coverImage ? (
            <>
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              {/* Reading time badge */}
              {post.readingTime && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTime}
                </div>
              )}
            </>
          ) : (
            <>
              {/* Emoji center */}
              <span className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{emoji}</span>
              
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full" />
              <div className="absolute top-12 right-12 w-3 h-3 bg-white/20 rounded-full" />
              <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/25 rounded-full" />
              
              {/* Decorative lines */}
              <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-white/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-white/20 to-transparent" />
              
              {/* Reading time badge */}
              {post.readingTime && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTime}
                </div>
              )}
            </>
          )}
          
          {/* Category badge */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-sm border border-white/50">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <time className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            {post.featured && (
              <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full border border-amber-100">
                Featured
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
              <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
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
