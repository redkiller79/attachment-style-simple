import { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  
  return {
    title: `${decodedCategory} - BondType Blog`,
    description: `Articles in the ${decodedCategory} category on BondType`,
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  
  // Filter posts by category (case-insensitive)
  const filteredPosts = allPosts.filter((post) => 
    post.category?.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
  );
  
  return (
    <div className="min-h-screen bg-[#08090a] text-[#f7f8f8]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/blog" className="text-[#5e6ad2] hover:underline text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-[#f7f8f8] mb-4">
            {decodedCategory}
          </h1>
          <p className="text-[#8a8f98]">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
        
        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[#191a1b] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.16)] transition-all group"
              >
                {post.coverImage && (
                  <div className="aspect-video bg-[#0f1011]">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-[#5e6ad2]">{post.date}</span>
                    {post.readingTime && (
                      <>
                        <span className="text-[rgba(255,255,255,0.2)]">•</span>
                        <span className="text-xs text-[#8a8f98]">{post.readingTime}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-[#f7f8f8] mb-2 group-hover:text-[#5e6ad2] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#8a8f98] text-sm line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-[#f7f8f8] mb-4">No articles found</h2>
            <p className="text-[#8a8f98] mb-8">
              No articles in the "{decodedCategory}" category yet.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#5e6ad2] text-white px-6 py-3 rounded-md hover:bg-[#828fff] transition-colors"
            >
              Browse all articles
            </Link>
          </div>
        )}
        
        {/* Other Categories */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)]">
          <h3 className="text-lg font-semibold text-[#f7f8f8] mb-4">Explore Other Categories</h3>
          <div className="flex flex-wrap gap-3">
            {categories.filter((c) => c.toLowerCase().replace(/\s+/g, '-') !== category.toLowerCase()).map((c) => (
              <Link
                key={c}
                href={`/blog/category/${c.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-[#191a1b] text-[#8a8f98] rounded-lg text-sm hover:bg-[#5e6ad2] hover:text-white transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
