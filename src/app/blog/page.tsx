import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default async function BlogPage() {
  

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">博客</h1>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
