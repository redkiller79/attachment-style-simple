import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import ShareButtons from '@/components/ShareButtons';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - BondType Blog`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Article Header */}
      <article>
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
              <time className="text-blue-100">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {post.readingTime && (
                <span className="text-blue-100">• {post.readingTime}</span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              {post.description}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-blue-100 text-sm">Author</div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Featured Image */}
            {post.coverImage ? (
              <div className="rounded-xl mb-8 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            ) : (
              <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-8 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Article Image</span>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
              <ShareButtons title={post.title} url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://bondtype.com'}/blog/${post.slug}`} />
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mt-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  Research writer and relationship expert at BondType. Passionate about making attachment theory accessible to everyone.
                </p>
                <Link href="/about" className="text-blue-600 font-medium hover:underline">
                  Learn more about our team →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug} 
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {relatedPost.category}
                      </span>
                      <time className="text-sm text-gray-500">
                        {new Date(relatedPost.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="opacity-90 mb-6">
              Subscribe to our newsletter for more insights on attachment styles and relationships.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
