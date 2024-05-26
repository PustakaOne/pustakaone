'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useAuthContext } from '@/components/contexts/AuthContext';
import { BookCartProps } from './interface';
import Image from 'next/image';
import Link from 'next/link';

export const CartModule: React.FC = () => {
  const { user } = useAuthContext();

  const [books, setBooks] = useState<BookCartProps[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);

  const getUserCart = async () => {
    if (!user) return;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/shop/cart/${user.id}`,
    );
    const responseJson = await response.json();

    setBooks(responseJson.bookCarts);
    setSubTotal(responseJson.totalPrice);
  };

  useEffect(() => {
    getUserCart();
  }, [user]);

  return (
    <div className="container py-14">
      <div className="flex flex-col gap-6 max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-bold font-inika text-2xl">Keranjang</h2>
          <div />
          <div>
            {books.length === 0 ? (
              <div className="flex flex-col items-center gap-2 py-10">
                <span className="text-black/60 text-2xl font-inika font-bold italic">
                  Kosong bro!
                </span>
                <Link href={'/shop'}>
                  <Button size="sm">Belanja</Button>
                </Link>
              </div>
            ) : (
              books.map((book) => {
                return (
                  <div
                    className="flex w-full justify-between items-center"
                    key={book.book.bookId}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative w-32 aspect-[3/4]">
                        <Image
                          src={book.book.coverUrl}
                          alt={book.book.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span>{book.book.title}</span>
                        <span>by {book.book.author}</span>
                        <span>x{book.amount}</span>
                      </div>
                    </div>
                    <span>Rp{book.amount * book.book.price}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div>
          <h2 className="font-bold font-inika text-2xl">Pembayaran</h2>
          <div />
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col ">
              <span>Subtotal ({books.length} Buku):</span>
              <span>Rp{subTotal}</span>
            </div>
            <Link href={'/pay'}>
              <Button disabled={books.length === 0}>Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
