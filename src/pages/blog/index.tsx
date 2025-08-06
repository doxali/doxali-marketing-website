import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { allPosts } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailCaptureForm from '@/components/EmailCaptureForm';

export async function getStaticProps() {
  const posts = allPosts();
  return {
    props: { posts },
  };
}

export default function BlogPage({ posts }: { posts: any[] }) {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);

  const TAG_LIMIT = 10;

  const router = useRouter();
  const POSTS_PER_PAGE = 6;
  const currentPage = Number(router.query.page) || 1;

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) &&
    (activeTags.length === 0 || activeTags.some(tag => post.tags?.includes(tag)))
  );

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filtered.slice(start, start + POSTS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));
  const visibleTags = allTags.slice(0, TAG_LIMIT);

  return (
<div className="min-h-screen bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[var(--foreground)]">
      <Header />

      <main className="py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Doxali Blog</h1>
            <p className="text-lg opacity-80">
              Insights, announcements, and ideas at the intersection of law and automation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-[48%] p-3 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-[#1a1a1a] text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2fc4a0]"
            />

            {/* Tag Controls */}
            <div className="flex flex-wrap gap-2 items-center w-full md:w-[48%]">
              {!showAllTags && visibleTags.map(tag => {
                const isActive = activeTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() =>
                      setActiveTags(prev =>
                        isActive ? prev.filter(t => t !== tag) : [...prev, tag]
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                      isActive
                        ? 'bg-[#2fc4a0] text-white'
                        : 'bg-[#2fc4a0]/10 text-[#2fc4a0]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}

              {allTags.length > TAG_LIMIT && (
                <button
                  onClick={() => setShowAllTags(prev => !prev)}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#2fc4a0]/20 text-[#2fc4a0] hover:bg-[#2fc4a0]/30"
                >
                  {showAllTags ? 'Show less' : 'More tags...'}
                </button>
              )}

              {activeTags.length > 0 && (
                <button
                  onClick={() => setActiveTags([])}
                  className="ml-2 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white underline"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Full tag scroll panel */}
          {showAllTags && (
            <div className="w-full max-h-40 overflow-y-auto rounded-lg border border-gray-200 dark:border-white/10 p-3 bg-gray-100 dark:bg-[#1a1a1a] flex flex-wrap gap-2">
              {allTags.map(tag => {
                const isActive = activeTags.includes(tag);
                return (
                  <button
                    key={`all-${tag}`}
                    onClick={() =>
                      setActiveTags(prev =>
                        isActive ? prev.filter(t => t !== tag) : [...prev, tag]
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                      isActive
                        ? 'bg-[#2fc4a0] text-white'
                        : 'bg-[#2fc4a0]/10 text-[#2fc4a0]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            {paginatedPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] overflow-hidden shadow hover:shadow-md transition"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5 space-y-2">
                  <h2 className="text-lg font-semibold text-[#2fc4a0]">{post.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
                    {post.author && ` · ${post.author}`}
                    {post.readTime && ` · ${post.readTime}`}
                  </p>

                  <p className="text-sm opacity-80 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-[#2fc4a0]/10 text-[#2fc4a0] text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center pt-8">
            <button
              disabled={currentPage <= 1}
              onClick={() => router.push(`?page=${currentPage - 1}`)}
              className="px-4 py-2 rounded bg-[#2fc4a0] hover:bg-[#28b093] text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            <span className="text-sm opacity-60">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage >= totalPages}
              onClick={() => router.push(`?page=${currentPage + 1}`)}
              className="px-4 py-2 rounded bg-[#2fc4a0] hover:bg-[#28b093] text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>

          <EmailCaptureForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
