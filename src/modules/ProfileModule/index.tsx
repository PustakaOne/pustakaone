'use client';

import { Button } from '@/components';
import { useAuthContext } from '@/components/contexts/AuthContext';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react';

export const ProfileModule: React.FC = () => {
  const { setUser } = useAuthContext();
  const router = useRouter();

  const logoutBtnHandler = () => {
    deleteCookie('user');
    setUser(null);
    router.push('/login');
  };

  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <Button onClick={logoutBtnHandler} className="bg-[#FF3407] text-white">
          Logout
        </Button>
      </section>
    </>
  );
};
