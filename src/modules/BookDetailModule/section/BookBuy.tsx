'use client';

import { BOOK } from '../constant';
import React, { useState } from 'react';
import Image from 'next/image';
import { BookProps } from '../interface';
import { useAuthContext } from '@/components/contexts/AuthContext';

export const BookBuy: React.FC<BookProps> = ({book}) => {
    const {user} = useAuthContext();
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const tambahKeranjang = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/addBook/${user?.id}/${book.bookId}/${quantity}`,
        {method: "POST"}
      )
    }
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md text-center max-w-xs mx-auto">
        <Image src={book.coverUrl} alt={'cover'} width={200} height={300} className="mx-auto" />
        <h1 className="text-lg font-bold mt-2">{book.title}</h1>
        <p className="text-gray-500">{book.author}</p>
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
        <p className="text-gray-500">Stok: {book.stock}</p>
        <p className="text-xl font-bold">Rp{book.price?.toLocaleString()}</p>
        <button className="bg-orange-400 text-white py-2 px-4 rounded-lg mt-4" onClick={tambahKeranjang}>+ Keranjang</button>
      </div>
    );
};
