import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { DataTable } from '@/components/shadcn/data-table';
import { columns } from '@/components/shadcn/columns';
import { Post } from '@/lib/schema';

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('/api/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.posts;
};

function Home() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    select: (data) =>
      data.map((post: Post) => ({
        ...post,
        publishDate: formatDate(post.publishDate),
      })),
  });

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);
    return `${day}/${month}/${year}`;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return <DataTable columns={columns} data={posts} />;
}

export default Home;
