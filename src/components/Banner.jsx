// Banner.jsx
import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [randomBanner, setRandomBanner] = useState(null);

  // Mengambil data dari API
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch('https://66e3fab0d2405277ed1287b5.mockapi.io/api/dasboard/banner'); 
        const data = await response.json();
        setBannerData(data);
        
        // Pilih banner secara acak setelah data diambil
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomBanner(data[randomIndex]);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchBannerData();
  }, []);

  if (!randomBanner) {
    return <div>Loading...</div>; // Tampilkan loading saat data masih diambil
  }

  return (
    <div
      className="p-9"
      style={{ backgroundImage: randomBanner.background, backgroundSize: 'cover', height: '200px' }}
    >
      <h1 className="font-['Open_Sans'] text-3xl italic font-extrabold tracking-wide text-center">
        {randomBanner.title}
      </h1>
      <p className="text-center text-xl italic">{randomBanner.quote}</p>
    </div>
  );
};

export default Banner;
