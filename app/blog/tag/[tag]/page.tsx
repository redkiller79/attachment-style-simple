import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPosts, getAllTags, getPostsByTag, getBlogStats, getAllCategories } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const tagName = tag.replace(/-/g, ' ');
  return {
    title: `Articles tagged with "${tagName}" - BondType Blog`,
    description: `Browse all articles about ${tagName} related to attachment styles and relationships.`,
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const tagName = tag.replace(/-/g, ' ');
  
  const posts = getPostsByTag(tagName);
  const allPosts = getAllPosts();
  const stats = getBlogStats();
  const categories = getAllCategories();
  const tags = getAllTags();

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] font-sans text-[#F8FAFC]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#1a1a2e] to-[#0D1B2A] py-16">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/20 rounded-full text-sm mb-4">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-purple-300">Tag</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            #{tagName}
          </h1>
          <p className="text-xl text-gray-400">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} tagged with this topic
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {posts.length > 0 ? (
              <div className="grid gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="bg-white/5 rounded-2xl p-12 text-center border border-white/10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">There are no articles with this tag yet.</p>
                <Link 
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Browse all articles
                </Link>
              </div>
            )}

            {/* Newsletter CTA */}
            <section className="mt-16 relative overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#5B4B8A] to-[#2DD4BF] rounded-3xl p-10 text-white border border-[#5B4B8A]/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Join 10,000+ readers
                </div>
                <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-[#F8FAFC]/80 mb-8 text-lg">
                  Get the latest articles on attachment styles and relationships delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-5 py-3.5 rounded-xl text-[#0a0a0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/95 backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-white text-[#0D1B2A] font-bold rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg hover:shadow-white/20 active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar 
              categories={categories}
              tags={tags}
              latestPosts={allPosts.slice(0, 5)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
