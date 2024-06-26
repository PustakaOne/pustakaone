"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/components/contexts/AuthContext';

const PayModule = () => {
  const router = useRouter();
  const {user} = useAuthContext();
  console.log(user?.id);
  const BASE_URL_LOCAL = "http://localhost:8080";
  const BASE_URL = "http://localhost:8080";

  const handleCancel = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/shop/cart/cancel/${user?.id}`, {
      method: 'POST',
    });
    if (res.ok) {
      router.push('/');
    } else {
      console.error('Error cancelling payment');
    }
  };

  const handlePay = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/shop/cart/pay/${user?.id}`, {
      method: 'POST',
    });
    if (res.ok) {
      router.push('/');
    } else {
      console.error('Error processing payment');
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold mb-8">Pay</h1>
      <div className="flex gap-4">
        <button 
          className="px-6 py-2 text-white bg-red-500 hover:bg-red-700 rounded"
          onClick={handleCancel}>
          Cancel
        </button>
        <button 
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
          onClick={handlePay}>
          Pay
        </button>
      </div>
    </div>
  );
};

export {PayModule};
