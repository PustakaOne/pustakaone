'use client';

import { BOOK } from '../constant';
import React, { useState } from 'react';
import Image from 'next/image';

export const BookBuy: React.FC = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md text-center max-w-xs mx-auto">
        <Image src={BOOK.imageUrl} alt={'cover'} width={200} height={300} className="mx-auto" />
        <h1 className="text-lg font-bold mt-2">{BOOK.title}</h1>
        <p className="text-gray-500">{BOOK.author}</p>
        <div className="flex justify-center items-center mt-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.984 1.442 8.326-7.378-3.868-7.378 3.868 1.442-8.326-6.064-5.984 8.332-1.151z" />
            </svg>
          ))}
        </div>
        <div className="flex justify-center items-center mb-4">
          <button onClick={handleDecrement} className="bg-gray-200 px-2 py-1 rounded-l-lg">-</button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 text-center border-t border-b border-gray-200"
          />
          <button onClick={handleIncrement} className="bg-gray-200 px-2 py-1 rounded-r-lg">+</button>
        </div>
        <p className="text-gray-500">Stok: {BOOK.stock}</p>
        <p className="text-xl font-bold">Rp{BOOK.price.toLocaleString()}</p>
        <button className="bg-orange-400 text-white py-2 px-4 rounded-lg mt-4">+ Keranjang</button>
      </div>
    );
};
