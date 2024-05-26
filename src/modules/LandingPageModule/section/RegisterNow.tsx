'use client';

import React from 'react';
import { SmallStrip } from '../module-elements';
import Link from 'next/link';
import { Button } from '@/components';
import { useAuthContext } from '@/components/contexts/AuthContext';

export const RegisterNow: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <section className="bg-gradient-to-br from-[#FF3407] to-[#FF8024] py-20">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold text-center text-white">
            Tunggu Apalagi? <br />
            {!!user ? 'Belanja' : 'Daftar'} Sekarang Juga!
          </h2>
          <SmallStrip color="white" />
        </div>
        <div className="flex justify-center gap-10">
          {!!user ? (
            <>
              <Link href={'/shop'}>
                <Button variant="secondary">Belanja</Button>
              </Link>
              <Link href={'/cart'}>
                <Button variant="tertiary">Cek Keranjang</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href={'/register'}>
                <Button variant="secondary">Daftar</Button>
              </Link>
              <Link href={'/login'} className="text-white">
                <Button variant="tertiary">Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
