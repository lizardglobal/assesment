import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './data-table-column-header';
import React from 'react';
import { Author, Category, Post } from '@/lib/schema';

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: 'id',
    header: () => null,
    cell: () => null,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'author',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author" />
    ),
    cell: ({ row }) => {
      const author = row.getValue('author') as Author;
      return (
        <div className="flex max-w-[150px]">
          <span>{author.name}</span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <span className="flex max-w-[300px]">{row.getValue('title')}</span>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    sortingFn: 'text',
    enableSorting: true,
  },
  {
    accessorKey: 'summary',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Summary" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[500px] items-center">
          <span>{row.getValue('summary')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    sortingFn: 'text',
    enableSorting: true,
  },
  {
    accessorKey: 'publishDate',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="md:block hidden"
        title="Publication date"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="md:flex items-center hidden">
          <span>{row.getValue('publishDate')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    sortingFn: 'text',
    enableSorting: true,
  },
  {
    accessorKey: 'categories',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="lg:block hidden"
        title="Categories"
      />
    ),
    cell: ({ row }) => {
      const categories = row.getValue('categories') as Category[];
      return (
        <div className="lg:flex max-w-[250px] items-center hidden">
          <span>{categories.map((cat) => cat.name).join(', ')}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    sortingFn: 'text',
    enableSorting: true,
  },
];
