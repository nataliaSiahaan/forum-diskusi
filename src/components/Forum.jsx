import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

function Forum() {
  const [posts, setPosts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      const initializedPosts = storedPosts.map(post => ({
        ...post,
        likes: post.likes || 0, 
        liked: post.liked || false,
        comments: post.comments || []
      }));
      setPosts(initializedPosts);
    }
  }, []);

  const addPost = (newPost) => {
    const updatedPosts = [
      { ...newPost, likes: 0, liked: false, comments: [] },
      ...posts
    ];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const filteredPosts = filterCategory 
    ? posts.filter(post => post.category === filterCategory) 
    : posts;

  const categories = [
    'Freelance',
    'CopyWriting',
    'DigitalMarketing',
    'Medsos Affiliate',
    'Content Creator'
  ];

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.liked ? Math.max(0, post.likes - 1) : post.likes + 1, liked: !post.liked };
      }
      return post;
    });

    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const addComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });

    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const removePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="font-['Georgia'] text-3xl text-[#DA8359] mb-10 text-center">Forum Diskusi</h1>
  
      {/* Post Form */}
      <PostForm addPost={addPost} />
  
      {/* Category Filter */}
      <div className="my-4 flex justify-center">
        <select
          className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-[#DA8359] focus:outline-none"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Semua Kategori</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
  
      {/* Post List */}
      <PostList
        posts={filteredPosts}
        addComment={addComment}
        handleLike={handleLike}
        removePost={removePost} // Tambahkan fungsi removePost
      />
    </div>
  );
  
}

export default Forum;
