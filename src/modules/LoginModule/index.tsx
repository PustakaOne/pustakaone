'use client';

import React, { useState } from 'react';
import { Button, Input } from '@/components';
import toast from 'react-hot-toast';
import { useAuthContext } from '@/components/contexts/AuthContext';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const LoginModule: React.FC = () => {
  const { setUser } = useAuthContext();
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginBtnHandler = async () => {
    try {
      console.log(process.env.NEXT_PUBLIC_IDENTITY_URL);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IDENTITY_URL}/auth/authenticate`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Login gagal!');
      }
      const responseJson = await response.json();
      setUser(responseJson);
      setCookie('user', responseJson);
      router.push('/');
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  w-full justify-center items-center">
      <div className="flex flex-col gap-6 w-fit">
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={loginBtnHandler} disabled={isLoading} size="sm">
          Masuk
        </Button>
        <span className="text-center">
          Belum ada akun?{' '}
          <Link className="underline text-blue-600" href={'/register'}>
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};
