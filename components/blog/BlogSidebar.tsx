'use client';

import { PostMetadata } from '@/lib/blog';
import Link from 'next/link';

interface BlogSidebarProps {
  categories: string[];
  tags: string[];
  latestPosts: PostMetadata[];
}

export default function BlogSidebar({ categories, tags, latestPosts }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Search Articles</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category}>
                <Link 
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span>{category}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No categories yet</li>
          )}
        </ul>
      </div>

      {/* Tags Widget */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                #{tag}
              </Link>
            ))
          ) : (
            <span className="text-gray-500">No tags yet</span>
          )}
        </div>
      </div>

      {/* Latest Posts Widget */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Articles</h3>
        <ul className="space-y-4">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <li key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <h4 className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </Link>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No posts yet</li>
          )}
        </ul>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
        <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
        <p className="text-sm opacity-90 mb-4">
          Get the latest articles on attachment styles delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* About Widget */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">About This Blog</h3>
        <p className="text-gray-600 text-sm">
          Discover the science behind attachment styles and learn how understanding your patterns can help you build healthier, more fulfilling relationships.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold">AS</span>
          </div>
          <div>
            <p className="font-medium text-gray-900">Attachment Style</p>
            <p className="text-xs text-gray-500">Personal Growth Blog</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
