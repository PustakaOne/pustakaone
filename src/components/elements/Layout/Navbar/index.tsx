'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { Button } from '@/components';
import { Search } from '@/components/icons';
import { useRouter } from 'next/navigation';

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  return (
    <nav className="bg-[#1B1B1B] py-4 w-full text-white">
      <div className="container flex justify-between items-center">
        <Link href={'/'}>
          <Image src={'/images/logo.png'} alt="Logo" width={200} height={30} />
        </Link>
        <div className="relative">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="bg-[#2C2C2C] text-[#FF8024] rounded-lg pl-5 pr-3 w-80 py-1 placeholder-[#FF802480]"
              value={search}
              placeholder="Cari buku disini..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <Search
                size="h-5 w-5"
                fill="fill-[#FF8024]"
                className="absolute top-1/2 -translate-y-1/2 right-3"
              />
            </button>
          </form>
        </div>
        <div className="flex gap-8 items-center">
          <Link href={'/'} className="font-inika font-bold">
            Home
          </Link>
          <Link href={'/shop'} className="font-inika font-bold">
            Toko
          </Link>
          <Link href={'/register'}>
            <Button size="sm">Daftar</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
