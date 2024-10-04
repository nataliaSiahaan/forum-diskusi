import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { HiPencilSquare } from 'react-icons/hi2';

function PostForm({ addPost }) {
  const categories = [
    'Freelance',
    'CopyWriting',
    'DigitalMarketing',
    'Medsos Affiliate',
    'Content Creator',
  ];

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State untuk pratinjau gambar
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImagePreview(URL.createObjectURL(file)); // Buat URL sementara untuk pratinjau gambar
      };
      reader.readAsDataURL(file);
    }
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
      image,
    };

    addPost(newPost);
    setTitle('');
    setBody('');
    setImage(null);
    setImagePreview(null); // Reset pratinjau gambar setelah postingan ditambahkan
    setSelectedCategory('');
    setError('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-[#c22e2e] mb-6 flex items-center">
        <HiPencilSquare className="text-[#c22e2e] mr-2" />
        Buat Postingan Baru
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-[#c22e2e]">{error}</p>}

        {/* Dropdown Kategori */}
        <div>
          <select
            className="w-50 border border-[#FFB1B1] rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-[#DA8359] focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Pilih Kategori Postingan Anda</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Input Judul */}
        <div>
          <input
            className="w-full border border-[#FFB1B1] rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-[#DA8359] focus:outline-none"
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Textarea Isi Posting dengan Ikon Kamera di Dalamnya */}
        <div className="relative">
          <textarea
            className="w-full border border-[#FFB1B1] rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-[#DA8359] focus:outline-none"
            placeholder="Isi postingan"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="10"
            style={{ resize: 'none' }}
            required
          />
          
          {/* Input Upload Gambar dengan Ikon Kamera, Diposisikan di Pojok Kiri Bawah */}
          <div className="absolute bottom-2 left-2 z-10 bg-white p-1 rounded-full group">
            <label htmlFor="file-upload" className="flex items-center cursor-pointer">
              <FaCamera className="text-gray-500 text-xl" />
            </label>
            <input
              id="file-upload"
              className="hidden"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />

            {/* Teks informasi muncul saat hover */}
            <span className="w-40 absolute left-10 bottom-0 bg- text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tambahkan media gambar
            </span>
          </div>
        </div>



        {/* Pratinjau Gambar */}
        {imagePreview && (
          <div className="mt-4">
            <h3 className="text-lg text-gray-700">Pratinjau Gambar:</h3>
            <img
              src={imagePreview}
              alt="Pratinjau"
              className="w-64 h-64 object-cover rounded-lg mt-2"
            />
          </div>
        )}

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-32 bg-[#FFB1B1] text-[#c22e2e] font-semibold py-2 rounded-lg hover:bg-[#f59090] transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
