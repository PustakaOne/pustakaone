import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-[#1B1B1B] text-white">
      <Image
        src={'/images/background.png'}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="relative container flex flex-col gap-10 text-center py-20">
        <h1 className="font-inika font-semibold text-4xl">
          Temukan banyak buku menarik disini!
        </h1>
      </div>
    </header>
  );
};
