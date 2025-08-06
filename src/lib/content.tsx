import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function allPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter(file => file.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Estimate reading time (200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || content.slice(0, 180),
        tags: data.tags || [],
        image: data.image || '',
        author: data.author || '',
        readTime: `${readTime} min read`,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
