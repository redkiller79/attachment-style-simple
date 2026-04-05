interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  latestPost: {
    title: string;
    date: string;
    slug: string;
  } | null;
  featuredPosts: number;
}

interface BlogHeroProps {
  stats: BlogStats;
}

export default function BlogHero({ stats }: BlogHeroProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Attachment Style Blog
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Research-based insights about relationships, emotional connections, and personal growth.
            Learn how attachment styles affect your life and how to build healthier relationships.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.totalPosts}</div>
            <div className="text-sm opacity-90">Articles</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.totalCategories}</div>
            <div className="text-sm opacity-90">Categories</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.totalTags}</div>
            <div className="text-sm opacity-90">Topics</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.featuredPosts}</div>
            <div className="text-sm opacity-90">Featured</div>
          </div>
        </div>

        {/* Latest Post Highlight */}
        {stats.latestPost && (
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                  Latest Article
                </div>
                <h2 className="text-2xl font-bold mb-3">{stats.latestPost.title}</h2>
                <p className="opacity-90 mb-4">
                  Read our latest research and insights on attachment styles and relationships.
                </p>
                <a
                  href={`/blog/${stats.latestPost.slug}`}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Read Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-48 rounded-xl flex items-center justify-center">
                  <div className="text-4xl">📚</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="relative">
            <input
              type="search"
              placeholder="Search articles by topic, author, or keyword..."
              className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-3 top-3 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-sm opacity-75">Popular topics:</span>
            {['relationships', 'communication', 'self-improvement', 'psychology', 'emotional intelligence'].map((topic) => (
              <a
                key={topic}
                href={`/blog/tag/${topic}`}
                className="text-sm px-3 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}