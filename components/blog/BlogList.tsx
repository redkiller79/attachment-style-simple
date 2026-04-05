'use client';

import { useState, useMemo } from 'react';
import { PostMetadata } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';

interface BlogListProps {
  posts: PostMetadata[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export default function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(post => post.category === activeCategory);
  }, [posts, activeCategory]);

  const featuredPosts = useMemo(() => filteredPosts.filter(p => p.featured), [filteredPosts]);
  const regularPosts = useMemo(() => filteredPosts.filter(p => !p.featured), [filteredPosts]);
  const visiblePosts = regularPosts.slice(0, visibleCount);
  const hasMore = visibleCount < regularPosts.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === 'All'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          All Articles
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            <h2 className="text-xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            <h2 className="text-xl font-bold text-gray-900">
              {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
            </h2>
          </div>
          <span className="text-sm text-gray-500">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {regularPosts.length > 0 ? (
          <>
            <div className="space-y-6">
              {visiblePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount(prev => prev + POSTS_PER_PAGE)}
                  className="group flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                >
                  Load more articles
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles in this category</h3>
            <p className="text-gray-500 mb-6">Check back soon or explore other categories.</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View all articles
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
