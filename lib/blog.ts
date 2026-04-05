// 博客工具函数
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Unsplash cover images for posts
const postCovers: Record<string, string> = {
  'attachment-style-test': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
  'how-to-know-your-attachment-style': 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
  'anxious-attachment-signs': 'https://images.unsplash.com/photo-1494774157365-9e04c6723555?w=800',
  'the-four-attachment-styles': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  'welcome-to-our-blog': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
};

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime?: string;
  slug: string;
  coverImage?: string;
}

export interface Post extends PostMetadata {
  content: string;
  contentHtml: string;
}

// 获取所有文章的元数据
export function getAllPosts(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      
      return {
        slug,
        coverImage: postCovers[slug] || undefined,
        ...matterResult.data as Omit<PostMetadata, 'slug'>
      } as PostMetadata;
    });
  
  // 按日期排序，最新的在前
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 获取精选文章
export function getFeaturedPosts(): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

// 按分类获取文章
export function getPostsByCategory(category: string): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

// 按标签获取文章
export function getPostsByTag(tag: string): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// 获取所有分类
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map(post => post.category));
  return Array.from(categories);
}

// 获取所有标签
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap(post => post.tags));
  return Array.from(tags);
}

// 获取单个文章
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // 使用remark将markdown转换为HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      content: matterResult.content,
      contentHtml,
      ...matterResult.data as Omit<PostMetadata, 'slug'>
    } as Post;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

// 获取相关文章
export function getRelatedPosts(currentSlug: string, limit: number = 3): PostMetadata[] {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find(post => post.slug === currentSlug);
  
  if (!currentPost) return [];
  
  // 简单的相关度计算：基于分类和标签匹配
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      // 相同分类加分
      if (post.category === currentPost.category) score += 3;
      
      // 相同标签加分
      const commonTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      );
      score += commonTags.length;
      
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
  
  return relatedPosts;
}

// 搜索文章
export function searchPosts(query: string): PostMetadata[] {
  const allPosts = getAllPosts();
  const lowerQuery = query.toLowerCase();
  
  return allPosts.filter(post => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      post.category.toLowerCase().includes(lowerQuery)
    );
  });
}

// 获取最新文章
export function getLatestPosts(limit: number = 5): PostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

// 获取文章统计
export function getBlogStats() {
  const allPosts = getAllPosts();
  const allCategories = getAllCategories();
  const allTags = getAllTags();
  
  return {
    totalPosts: allPosts.length,
    totalCategories: allCategories.length,
    totalTags: allTags.length,
    latestPost: allPosts[0] || null,
    featuredPosts: getFeaturedPosts().length,
  };
}

// 生成博客sitemap数据
export function getSitemapPosts() {
  const allPosts = getAllPosts();
  return allPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
}

// 生成RSS feed数据
export function getRSSPosts() {
  const allPosts = getAllPosts();
  return allPosts.map(post => ({
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    category: post.category,
    url: `/blog/${post.slug}`,
  }));
}