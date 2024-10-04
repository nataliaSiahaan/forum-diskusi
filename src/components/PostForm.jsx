import React, { useState } from 'react';

function PostForm({ addPost }) {
  const categories = [
    'Freelance',
    'CopyWriting',
    'DigitalMarketing',
    'Medsos Affiliate',
    'Content Creator'
  ];

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Menyimpan base64 string dari gambar
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || body.trim() === '' || selectedCategory === '') {
      setError('Judul, isi, dan kategori tidak boleh kosong!');
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      body,
      category: selectedCategory,
      comments: [],
      image, // Simpan base64 string dari gambar
    };

    addPost(newPost);

    // Reset form
    setTitle('');
    setBody('');
    setImage(null);
    setSelectedCategory('');
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-[#DA8359] mb-6">Buat Postingan Baru</h2>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error message */}
        {error && <p className="text-red-500">{error}</p>}
  
        {/* Category Selector */}
        <div>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-[#DA8359] focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Pilih Kategori</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
  
        {/* Title Input */}
        <div>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-[#DA8359] focus:outline-none"
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
  
        {/* Body Textarea */}
        <div>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-[#DA8359] focus:outline-none"
            placeholder="Isi postingan"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="4"
            required
          />
        </div>
  
        {/* Image Upload */}
        <div>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#DA8359] text-white font-semibold py-2 rounded-lg hover:bg-[#c97448] transition duration-300"
        >
          Tambahkan Postingan
        </button>
      </form>
    </div>
  );
  
}

export default PostForm;
