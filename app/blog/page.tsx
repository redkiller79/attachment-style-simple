import { getAllPosts, getBlogStats, getAllCategories, getAllTags } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogHero from '@/components/blog/BlogHero';

export const metadata = {
  title: 'Attachment Style Blog - Relationship Insights & Advice',
  description: 'Research-based articles about attachment styles, relationships, and personal growth. Learn how to build healthier connections.',
  keywords: 'attachment style blog, relationship advice, psychology articles, personal growth, emotional intelligence',
  openGraph: {
    title: 'Attachment Style Blog - Relationship Insights & Advice',
    description: 'Research-based articles about attachment styles, relationships, and personal growth.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const stats = getBlogStats();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <BlogHero stats={stats} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Posts */}
            {posts.filter(post => post.featured).length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {posts
                    .filter(post => post.featured)
                    .slice(0, 2)
                    .map((post) => (
                      <BlogCard key={post.slug} post={post} featured />
                    ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <div className="text-sm text-gray-600">
                  {stats.totalPosts} articles • {stats.totalCategories} categories
                </div>
              </div>

              {posts.length > 0 ? (
                <div className="space-y-8">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles yet</h3>
                  <p className="text-gray-600">Our first articles are coming soon!</p>
                </div>
              )}
            </section>

            {/* Newsletter CTA */}
            <section className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6 opacity-90">
                  Get the latest articles on attachment styles and relationships delivered to your inbox.
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
                <p className="text-sm opacity-75 mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar 
              categories={categories}
              tags={tags}
              latestPosts={posts.slice(0, 5)}
            />
          </div>
        </div>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Attachment Style Blog",
            "description": "Research-based articles about attachment styles, relationships, and personal growth",
            "url": "https://attachmentstyle.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Attachment Style Assessment",
              "logo": {
                "@type": "ImageObject",
                "url": "https://attachmentstyle.com/logo.png"
              }
            },
            "blogPost": posts.slice(0, 10).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })
        }}
      />
    </div>
  );
}