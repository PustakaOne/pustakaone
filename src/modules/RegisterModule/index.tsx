'use client';

import React, { useState } from 'react';
import { Button, Input } from '@/components';
import { setCookie } from 'cookies-next';
import { useAuthContext } from '@/components/contexts/AuthContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const RegisterModule: React.FC = () => {
  const { setUser } = useAuthContext();
  const router = useRouter();

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [gender, setGender] = useState<string>('Laki-laki');
  const [birthDate, setBirthdate] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerBtnHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IDENTITY_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName,
            email,
            password,
            phoneNumber,
            bio,
            gender,
            birthDate,
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Register gagal!');
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
          value={fullName}
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          value={phoneNumber}
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          value={bio}
          placeholder="Bio"
          onChange={(e) => setBio(e.target.value)}
        />
        <select
          className="border-2"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <Input
          type="date"
          value={birthDate}
          placeholder="DD/MM/YYYY"
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <Button onClick={registerBtnHandler} disabled={isLoading} size="sm">
          Daftar
        </Button>
        <span className="text-center">
          Sudah ada akun?{' '}
          <Link className="underline text-blue-600" href={'/login'}>
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};
