import React from 'react';
import { SmallStrip } from '../module-elements';
import Link from 'next/link';
import { Button } from '@/components';

export const RegisterNow: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#FF3407] to-[#FF8024] py-20">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold text-center text-white">
            Tunggu Apalagi? <br />
            Daftar Sekarang Juga!
          </h2>
          <SmallStrip color="white" />
        </div>
        <div className="flex justify-center gap-10">
          <Link href={'/register'}>
            <Button variant="secondary">Daftar</Button>
          </Link>
          <Link href={'/login'} className="text-white">
            <Button variant="tertiary">Login</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
