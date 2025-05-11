'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function GallerySection(): React.ReactElement {
  const [showAllImages, setShowAllImages] = useState(false);

  const images = [
    '/manali/m4.jpg',
    '/manali/m7.jpg',
    '/manali/m13.jpg',
    '/manali/m3.jpg',
    '/manali/m10.jpg',
    '/manali/m6.jpg',
    '/manali/m8.jpg',
    '/manali/m9.jpg',
    '/manali/m2.jpg', 
    '/manali/m11.jpg',
    '/manali/m15.jpg',
    '/manali/m5.jpg',
    '/manali/m1.jpg', 
    '/manali/m14.jpg',
    '/manali/m12.jpg',
  ];
  const displayedImages = showAllImages ? images : images.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto py-10 px-4 sm:px-0">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gallery Photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedImages.map((src, index) => (
          <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
            <Image
              src={src}
              alt={`Gallery photo ${index + 1}`}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition"
          onClick={() => setShowAllImages(!showAllImages)}
        >
          {showAllImages ? 'Show Less' : 'View More'}
        </button>
      </div>
    </section>
  );
} 