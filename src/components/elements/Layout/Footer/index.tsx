import Image from 'next/image';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1B1B1B] py-4">
      <div className="container flex justify-between items-center">
        <Image src={'/images/logo.png'} alt="Logo" width={200} height={30} />
        <span className="text-white font-thin">
          © 2024 PustakaOne. All Right Reserved
        </span>
      </div>
    </footer>
  );
};
