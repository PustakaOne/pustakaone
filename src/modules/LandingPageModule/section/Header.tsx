'use client';

import { Button } from '@/components';
import { useAuthContext } from '@/components/contexts/AuthContext';
import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <header className="w-full bg-[#1B1B1B] py-20 text-white">
      <div className="container flex flex-col gap-10">
        <h1 className="font-inika font-semibold text-7xl">
          Beli Buku Jadi Mudah <br /> Dengan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF5213] to-[#FF8024]">
            PustakaOne
          </span>
        </h1>
        <div className="flex gap-4">
          {!!user ? (
            <>
              <Link href={'/shop'}>
                <Button>Belanja</Button>
              </Link>
              <Link href={'/cart'}>
                <Button variant="tertiary">Cek Keranjang</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href={'/register'}>
                <Button>Daftar</Button>
              </Link>
              <Link href={'/login'}>
                <Button variant="tertiary">Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
