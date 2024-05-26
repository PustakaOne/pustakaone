'use client';

import React, { useState } from 'react';
import { BOOK, REVIEWS } from '../constant';
import { SmallStrip } from '@/modules/LandingPageModule/module-elements';
import { ReviewCard } from '../module-elements';

export const BookDetail: React.FC = () => {
  const [reviews, setReviews] = useState(REVIEWS);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(3);

  const handleReviewSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newReview = {
      reviewId: reviews.length + 1,
      bookId: 1,
      userId: 1,
      content,
      rating,
      createdAt: new Date().toISOString(),
    };
    setReviews([...reviews, newReview]);
    setContent('');
    setRating(3);
  };

  return (
    <div className="relative container flex flex-col gap-10 text-left">
        <div className="">
            <h1 className="font-inika font-semibold text-4xl">
            {BOOK.title}
            </h1>
            <p className="font-inika"> by {BOOK.author} </p>
            <SmallStrip />
            <h1 className='font-inika font-bold text-3xl'>
                Rp. {BOOK.price}
            </h1>
            <p className='font-inika'>
                {BOOK.description}
            </p>
        </div>
        <div>
            <h2 className='text-xl font-inika font-semibold'>
                Detail
            </h2>
            <hr/>
            <div>
                <p>ISBN: {BOOK.isbn}</p>
                <p>Penulis: {BOOK.author}</p>
                <p>Penerbit: {BOOK.publisher}</p>
                <p>Tanggal terbit: {BOOK.releaseDate}</p>
                <p>Jumlah Halaman: {BOOK.pages} Halaman</p>
                <p>Bahasa: {BOOK.lang}</p>
            </div>
        </div>
        <div>
            <h2 className='text-xl font-inika pt-2 font-semibold'>
                Ratings & Reviews
            </h2>
            <hr/>
            <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 0v24h-24v-24h24zm-12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8 14c0-2.21-4.42-4-8-4s-8 1.79-8 4v2h16v-2z" />
                    </svg>
                    </div>
                </div>
                <h2 className="text-center text-2xl font-bold mb-6">Berikan Review!</h2>
                <form onSubmit={handleReviewSubmit} className="mb-6">
                    <textarea
                    className="w-full p-4 mb-4 border rounded-lg"
                    placeholder="Buku ini sangat bagus!"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    />
                    <div className="flex items-center justify-center mb-4">
                    <label className="mr-2">Berikan rating:</label>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            className={`w-6 h-6 ${star <= rating ? 'text-orange-400' : 'text-gray-300'} focus:outline-none`}
                        >
                            ★
                        </button>
                        ))}
                    </div>
                    </div>
                    <button type="submit" className="w-full bg-orange-400 text-white py-2 rounded-lg">
                    Kirim Review
                    </button>
                </form>
            </div>
            {REVIEWS.map((review, index) => (
                  <ReviewCard
                    key={index}
                    author={review.userId}
                    rating={review.rating}
                    content={review.content}
                    date={review.createdAt}
                  />
            ))}
        </div>
    </div>
  );
};
