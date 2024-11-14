import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  authorName: string;
}

const BlogCard = ({ id, publishedDate, content, title, authorName }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-gray-300 bg-blue-50 pb-4 w-screen max-w-screen-md cursor-pointer rounded-lg shadow-sm hover:shadow-md hover:scale-102 transition duration-300">
        <div className="flex items-center">
          <Avatar name={authorName} />
          <div className="font-medium pl-2 text-sm text-gray-700 flex justify-center flex-col">{authorName}</div>
          <div className="pl-2 text-sm text-gray-500 flex justify-center flex-col">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2 text-gray-900">{title}</div>
        <div className="text-md text-gray-700">{content?.slice(0, 100) + '...'}</div>
        <div className="text-gray-400 text-sm font-light pt-4">{`${Math.ceil(content?.length / 100)} min read`}</div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-gray-400"></div>;
}

export function Avatar({ name, size = 'small' }: { name: string; size?: 'small' | 'big' }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-500 rounded-full ${size === 'small' ? 'w-6 h-6' : 'w-10 h-10'}`}
    >
      <span className={`${size === 'small' ? 'text-xs' : 'text-md'} font-medium text-white`}>
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
