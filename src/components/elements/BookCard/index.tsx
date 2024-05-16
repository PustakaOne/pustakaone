import { Star } from '@/components/icons/Star';
import Image from 'next/image';
import React from 'react';
import { BookCardProps } from './interface';

export const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  rating,
  price,
  imageUrl,
}) => {
  const formattedPrice = new Intl.NumberFormat('id-ID').format(price);

  return (
    <div className="bg-white w-48 aspect-[9/16] p-2.5 drop-shadow-lg flex flex-col gap-1">
      <div className="relative bg-gray-300 flex items-center justify-center aspect-[3/4] w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            fill
            alt="Book Title"
            className="object-cover"
          />
        ) : (
          <span className="text-center font-bold text-black/60">
            COVER TIDAK TERSEDIA
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="font-inika text-lg font-bold">{title}</span>
          {author && <span className="text-sm">by {author}</span>}
        </div>
        <div className="flex">
          {Array.from({ length: rating }, (_, index) => (
            <Star key={index} size="w-6 h-6" fill="fill-[#FF8024]" />
          ))}
        </div>
        {price && (
          <span className="font-bold text-2xl">Rp{formattedPrice}</span>
        )}
      </div>
    </div>
  );
};
