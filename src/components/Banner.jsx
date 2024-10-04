// Banner.jsx
import React from 'react';
import bannerData from './bannerData';

const Banner = () => {
  // Pilih banner secara acak
  const randomIndex = Math.floor(Math.random() * bannerData.length);
  const { title, quote, background } = bannerData[randomIndex];

  return (
    <div
      className="p-9"
      style={{ backgroundImage: background, backgroundSize: 'cover', height: '200px' }}
    >
      <h1 className="font-['Open_Sans'] text-3xl italic font-extrabold tracking-wide text-center">
        {title}
      </h1>
      <p className="text-center text-xl italic">{quote}</p>
    </div>
  );
};

export default Banner;
