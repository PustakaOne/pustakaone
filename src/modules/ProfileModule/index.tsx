'use client';

import { Button } from '@/components';
import { useAuthContext } from '@/components/contexts/AuthContext';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react';

export const ProfileModule: React.FC = () => {
  const { setUser } = useAuthContext();
  const router = useRouter();

  const historyBtnHandler = () => {
    router.push('/history');
  };
  const logoutBtnHandler = () => {
    deleteCookie('user');
    setUser(null);
    router.push('/login');
  };

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center gap-4">
        <Button onClick = {historyBtnHandler} className="bg-[#007BFF] text-white">
          History
        </Button>
        <Button onClick={logoutBtnHandler} className="bg-[#FF3407] text-white">
          Logout
        </Button>
      </section>
    </>
  );
};
