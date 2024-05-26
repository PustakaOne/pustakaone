'use client';

import React, { FormEvent, useState } from 'react';
import { Input } from '@/components';
import { Search } from '@/components/icons/Search';
import { GENRES } from '../constant';

export const Filter: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const handleClick = (genre: string) => {
    setActiveGenre(genre === activeGenre ? null : genre);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // router.push(`/shop?title=${title}`);
  };

  return (
    <section className="py-14 h-full">
        <div className="container flex flex-col items-left gap-8 pl-16">
            <div className="flex flex-col items-left gap-1">
                <h2 className="text-3xl font-inika font-bold">
                Filter
                </h2>
                <h3 className='text-xl font-inika font-bold pt-5'>
                    Cari
                </h3>
                <div className="relative">
                    <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        className="bg-[#E6E6E6] text-black rounded-2xl pl-5 pr-3 w-80 py-1 placeholder-[#5E5E5E]"
                        value={title}
                        placeholder="Judul Buku"
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        <button type="submit">
                        <Search
                            size="h-5 w-5"
                            fill="fill-[#5E5E5E]"
                            className="absolute top-1/2 -translate-y-1/2 right-24"
                        />
                        </button>
                    </form>
                </div>
                <h3 className='text-xl font-inika font-bold pt-5'>
                    Harga
                </h3>
                <div className="relative">
                    <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        className="bg-[#E6E6E6] text-black rounded-2xl pl-5 pr-3 w-80 py-1 placeholder-[#5E5E5E]"
                        value={price}
                        placeholder="Rp | Harga Minimum"
                        onChange={(e) => setPrice(e.target.value)}
                        />
                        <button type="submit">
                        <Search
                            size="h-5 w-5"
                            fill="fill-[#5E5E5E]"
                            className="absolute top-1/2 translate-y-1/4 right-24"
                        />
                        </button>
                    </form>
                    <form onSubmit={handleSearch} className='py-2'>
                        <input
                        type="text"
                        className="bg-[#E6E6E6] text-black rounded-2xl pl-5 pr-3 w-80 py-1 placeholder-[#5E5E5E]"
                        value={price}
                        placeholder="Rp | Harga Maksimum"
                        onChange={(e) => setPrice(e.target.value)}
                        />
                        <button type="submit">
                        <Search
                            size="h-5 w-5"
                            fill="fill-[#5E5E5E]"
                            className="absolute top-1/2 -translate-y-8 right-24"
                        />
                        </button>
                    </form>
                </div>
                <h3 className='text-xl font-inika font-bold pt-5'>
                    Kategori
                </h3>
                <div className="relative">
                    <form onSubmit={handleSearch}>
                        <div className="flex flex-wrap gap-2">
                            {GENRES.map((genre, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(genre)}
                                    style={{
                                    backgroundColor: genre === activeGenre ? '#FF8024' : '#FFFFFF',
                                    color: genre === activeGenre ? '#FFFFFF' : '#FF8024',
                                    border: `2px solid #FF8024`,
                                    borderRadius: '9999px',
                                    padding: '0.5rem 1rem',
                                    }}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};
