import React, { useState } from 'react';

function CommentForm({ postId, addComment }) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() === '') {
      setError('Komentar tidak boleh kosong!');
      return;
    }

    // Menambahkan komentar ke postingan
    addComment(postId, comment);
    setComment('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Tambah komentar..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Kirim</button>
    </form>
  );
}

export default CommentForm;
