import { getAllPosts, getBlogStats, getAllCategories, getAllTags } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <BlogHero stats={stats} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <BlogList posts={posts} categories={categories} />

            {/* Newsletter CTA */}
            <section className="mt-16 relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-white">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Join 10,000+ readers
                </div>
                <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Get the latest articles on attachment styles and relationships delivered to your inbox. No spam, unsubscribe anytime.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/95 backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg hover:shadow-white/20 active:scale-95"
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
            "url": "https://bondtype.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "BondType",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bondtype.com/logo.png"
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
