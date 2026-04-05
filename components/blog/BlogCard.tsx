import Link from 'next/link';
import { PostMetadata } from '@/lib/blog';

interface BlogCardProps {
  post: PostMetadata;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={`group ${featured ? 'bg-white rounded-2xl shadow-lg overflow-hidden' : 'border-b border-gray-200 pb-8'}`}>
      <Link href={`/blog/${post.slug}`} className="block">
        {featured && (
          <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100"></div>
        )}
        
        <div className={featured ? 'p-6' : ''}>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {post.category}
            </span>
            <time className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.readingTime && (
              <span className="text-sm text-gray-500">• {post.readingTime}</span>
            )}
          </div>

          <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors ${featured ? 'text-2xl mb-3' : 'text-xl mb-2'}`}>
            {post.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="text-sm text-gray-700">{post.author}</span>
            </div>
            
            <span className="text-blue-600 font-medium text-sm group-hover:underline">
              Read article →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}