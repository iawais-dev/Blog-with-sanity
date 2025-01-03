'use client';
import React, { useState, useEffect } from 'react';

const Comments: React.FC = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments((prev) => [...prev, comment.trim()]);
      setComment('');
    }
  };

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      try {
        const parsed = JSON.parse(storedComments);
        setComments(parsed);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 lg:mt-56 bg-white shadow-md rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Comment Section</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-6"
      >
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={3}
        ></textarea>
        <button
          type="submit"
          className="self-start px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Submit
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Comments</h2>
        <div className="space-y-3">
          {comments.length > 0 ? (
            comments.map((com, index) => (
              <div
                key={index}
                className="p-3 bg-gray-100 rounded-md shadow-sm border border-gray-200"
              >
                <p className="text-gray-700">{com}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
