import React, { useState } from 'react';
import CommentForm from './CommentForm';

function PostList({ posts, addComment, handleLike, handleDislike, removePost }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-[#DA8359] mb-6">Daftar Postingan</h2>

      {/* No posts message */}
      {posts.length === 0 ? (
        <p className="text-gray-500">Belum ada postingan.</p>
      ) : (
        posts.map((post) => {
          const [isExpanded, setIsExpanded] = useState(false); // State to control if the full content is shown
          const previewText = post.body.slice(0, 100); // Show only the first 100 characters for preview

          const toggleContent = () => {
            setIsExpanded(!isExpanded); // Toggle between preview and full content
          };

          return (
            <div
              key={post.id}
              className="border border-gray-300 rounded-lg p-4 mb-4 relative bg-white shadow-md"
            >
              {/* Remove Post Button */}
              <button
                onClick={() => removePost(post.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>

              {/* Post Title */}
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

              {/* Post Category */}
              <p className="text-gray-500 mb-2">Kategori: {post.category}</p>

              {/* Post Body */}
              <p className="mb-4">
                {isExpanded ? post.body : `${previewText}...`}
                {post.body.length > 100 && (
                  <button
                    onClick={toggleContent}
                    className="text-blue-500 ml-2"
                  >
                    {isExpanded ? 'Baca lebih sedikit' : 'Baca selengkapnya'}
                  </button>
                )}
              </p>

              {/* Image Display */}
              <div className="flex justify-center mb-4">
                {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-80 h-auto mb-4 rounded-lg place-self-start"
                />
              )}
              </div>
              

              {/* Like Button */}
              <div className="mb-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`px-4 py-2 rounded-lg ${
                    post.liked ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                >
                  Like ({post.likes})
                </button>
              </div>

              {/* Comments Section */}
              <h4 className="text-lg font-medium mb-2">Komentar:</h4>
              {Array.isArray(post.comments) && post.comments.length > 0 ? (
                post.comments.map((comment, index) => (
                  <p key={index} className="mb-2 border-l-4 border-gray-300 pl-2">
                    {comment}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">Belum ada komentar.</p>
              )}

              {/* Comment Form */}
              <CommentForm postId={post.id} addComment={addComment} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default PostList;
