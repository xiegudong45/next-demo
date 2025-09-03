import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { posts, type Post } from "@/data/posts";
import Image from "next/image";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  console.log("post", post);
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        className="h-48 w-full object-cover"
        priority
      />
      </div>
      
      <CardHeader>
        <CardTitle className="text-black dark:text-white">{post.title}</CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between mt-auto">
        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
        <Button asChild variant="link" className="text-sm font-medium p-0 h-auto">
          <Link href={`/blog/${post.slug}`}>阅读更多</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BlogCardList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </div>
  );
}
