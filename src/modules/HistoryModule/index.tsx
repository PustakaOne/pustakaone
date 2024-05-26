"use client"
import { useAuthContext } from '@/components/contexts/AuthContext';
import React, { useEffect, useState } from 'react';

// Define the types for the history data
interface Book {
  bookId: number;
  title: string;
  author: string;
  publisher: string;
  description: string;
  price: number;
  stock: number;
  releaseDate: string;
  isbn: string;
  coverUrl: string;
  category: string;
  pages: number;
  lang: string;
}

interface BookCart {
  id: number;
  book: Book;
  amount: number;
}

interface HistoryRecord {
  id: number;
  lastId: number | null;
  userId: number;
  totalPrice: number;
  paymentSuccess: boolean;
  status: string;
  bookCarts: BookCart[];
  address: string;
  paidAt: string;
}

const BASE_URL_LOCAL = "http://localhost:8080";
const BASE_URL = "http://localhost:8080";

export const HistoryModule: React.FC = () => {
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const { user } = useAuthContext();
  
  // useEffect(() => {
    //   // Set dummy data for testing
    //   setHistory(dummyData);
    // }, []);
    
    const fetchHistoryData = async () => {
      if(user){
        try {
          // ${process.env.NEXT_PUBLIC_ADMIN_URL_LOCAL}
          const response = await fetch(`${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/shop/cart/history/${user?.id}`, {cache:"no-store"});
          // const response = await fetch(`${BASE_URL_LOCAL}/shop/cart/history/${userId}`, {cache:"no-store"});
          console.log(response);
          if (!response.ok) {
            throw new Error('Failed to fetch history data');
          }
          const data: HistoryRecord[] = await response.json();
          setHistory(data);
        } catch (error) {
          console.error('Error fetching history data:', error);
        }

      }
  };

  
  useEffect(() => {
    fetchHistoryData();
  }, [user]);


  return (
    <div className="container flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-3xl font-inika font-bold">
          History of Book Payments:
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-5 border-b text-center">Total Price</th>
              <th className="px-4 py-5 border-b text-center">Paid At</th>
              <th className="px-4 py-5 border-b text-center">Books</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.id}>
                <td className="px-4 py-5 border-b text-center">${record.totalPrice}</td>
                <td className="px-4 py-5 border-b text-center">{new Date(record.paidAt).toLocaleString()}</td>
                <td className="px-4 py-5 border-b text-center">
                  {record.bookCarts.map((cart) => (
                    <div key={cart.id} className="mb-2 p-2 border border-gray-200">
                      <div><strong>Title:</strong> {cart.book.title}</div>
                      <div><strong>Author:</strong> {cart.book.author}</div>
                      <div><strong>Price:</strong> ${cart.book.price}</div>
                      <div><strong>Publisher:</strong> {cart.book.publisher}</div>
                      <div><strong>ISBN:</strong> {cart.book.isbn}</div>
                      <div><strong>Category:</strong> {cart.book.category}</div>
                      <div><strong>Pages:</strong> {cart.book.pages}</div>
                      <div><strong>Language:</strong> {cart.book.lang}</div>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

