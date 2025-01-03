import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Card({ post }: { post: Post }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out max-w-sm w-full">
      <div className="relative h-[200px] overflow-hidden sm:h-[200px]">
        <Image
          src={urlForImage(post.image)}
          fill
          className="object-cover w-full h-full"
          alt={post.title}
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {post.title}
        </h2>
        <Link href={`/posts/${post.slug}`} passHref>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
