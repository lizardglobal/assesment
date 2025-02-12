import React from 'react';
import { useQuery } from '@tanstack/react-query';
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

// Format date to dd/mm/yy because the API returns a date format that is not user-friendly.
export function formatDate(publishDate: string): string {
  const date = new Date(publishDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(2);
  return `${day}/${month}/${year}`;
}

function Home() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    select: (data) =>
      data.map((post: Post) => ({
        ...post,
        publication: formatDate(post.publishDate),
      })),
  });

  return <DataTable columns={columns} data={posts} isLoading={isLoading} />;
}

export default Home;
