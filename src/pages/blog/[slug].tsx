// pages/blog/[slug].tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import EmailCaptureForm from '@/components/EmailCaptureForm';
import { allPosts } from '@/lib/content';
import { Calendar, User, Clock } from 'lucide-react';

interface RelatedPost {
  slug: string;
  title: string;
  image?: string;
  date?: string;
}

export default function BlogPost({
  slug,
  title,
  content,
  date,
  author,
  readTime,
  image,
  tags = [],
  related = [],
}: {
  slug: string;
  title: string;
  content: string;
  date: string;
  author?: string;
  readTime?: string;
  image?: string;
  tags?: string[];
  related?: RelatedPost[];
}) {
  const postUrl = `https://doxali.com/blog/${slug}`;

  return (
<div className="min-h-screen bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[var(--foreground)]">
      <Head>
        <title>{`${title} | Doxali Blog`}</title>
        <meta name="description" content={title} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={title} />
        <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: image ? `https://doxali.com${image}` : undefined,
            author: {
              "@type": "Person",
              name: author || "Doxali Team",
            },
            datePublished: date,
            dateModified: date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://doxali.com/blog/${slug}`,
            },
            publisher: {
              "@type": "Organization",
              name: "Doxali",
              logo: {
                "@type": "ImageObject",
                url: "https://doxali.com/favicon.svg",
              },
            },
            description: title,
        })}
        </script>
      </Head>

      <Header />

      {/* Scroll Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 h-1 bg-[#2fc4a0] z-50" />

      <article className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md p-6 md:p-10">
          
          {/* Top “Back to Blog” */}
          <div className="mb-6">
            <a
              href="/blog"
              className="inline-flex items-center text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium transition gap-1"
            >
              ← Back to Blog
            </a>
          </div>


                    {/* Header */}
          {image && (
            <div className="mb-6">
              <Image
                src={image}
                alt={title}
                width={800}
                height={400}
                className="w-full rounded-xl object-cover"
              />
            </div>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="bg-[#2fc4a0]/10 text-[#2fc4a0] text-xs px-3 py-1 rounded-full"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8 space-x-6">
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
            )}

            {author && (
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {author}
              </span>
            )}

            {readTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readTime}
              </span>
            )}
          </div>

          {/* Content */}
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Related Posts */}
          {related.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white dark:bg-[#1a1a1a] border-gray-200 dark:border-white/10"
                  >
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#2fc4a0] mb-2">
                        {post.title}
                      </h3>
                      {post.date && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Share Buttons */}
          <section className="mt-16">
            <hr className="mb-6 border-gray-300 dark:border-white/10" />
            <h3 className="text-lg font-semibold mb-4 text-center">
              Share this post
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90"
              >
                X (Twitter)
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check this out: ${postUrl}`)}`}
                className="bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90"
              >
                Email
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90"
              >
                Facebook
              </a>
              <a
                href={`https://reddit.com/submit?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90"
              >
                Reddit
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${postUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:opacity-90"
              >
                WhatsApp
              </a>
            </div>
          </section>


                    {/* Slim Email Capture */}
          <div className="mt-20 max-w-xl mx-auto">
            <EmailCaptureForm />
          </div>

          {/* Bottom “Back to Blog” */}
          <div className="mt-6 text-center">
            <a
              href="/blog"
              className="inline-block text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium transition"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processed.toString();

  // compute related posts
  const all = allPosts().filter((p) => p.slug !== slug);
  const related = all
    .filter((p) =>
      Array.isArray(data.tags) && p.tags?.some((t: string) => data.tags.includes(t))
    )
    .slice(0, 3)
    .map(({ slug, title, image, date }) => ({ slug, title, image, date }));

  return {
    props: {
      slug,
      title: data.title || slug,
      date: data.date || '',
      author: data.author || '',
      readTime: `${Math.max(1, Math.ceil(content.split(' ').length / 200))} min read`,
      image: data.image || '',
      tags: data.tags || [],
      content: contentHtml,
      related,
    },
  };
};
