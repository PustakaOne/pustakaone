"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components';
import { useAuthContext } from '@/components/contexts/AuthContext';

type Book = {
  bookId: string;
  title: string;
  author: string;
  description: string;
  price: number;
  stock: number;
  releaseDate: string;
  coverUrl: string;
  publisher: string;
  isbn: string;
  pages: number;
  lang: string;
  category: string;
};

export const AdminModule: React.FC = () => {
  const [logs, setLogs] = useState([]);
  const [carts, setCarts] = useState([]);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [bookForm, setBookForm] = useState<Book>({
    bookId: '',
    title: '',
    author: '',
    description: '',
    price: 0,
    stock: 0,
    releaseDate: '',
    coverUrl: '',
    publisher: '',
    isbn: '',
    pages: 0,
    lang: '',
    category: ''
  });
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentBookId, setCurrentBookId] = useState<string | null>(null);
  const { user } = useAuthContext();



  const finishCart = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/update-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    console.log(res.ok);
    const response = await res.json();
    return response;
  };

  const buttonHandler = async (id: string) => {
    await finishCart(id);
    await getLogData();
    await getCartData();
    await getUsersData();
    await getBooksData();
  };

  const buttonHandlerDelete = async (id: string) => {
    await deleteBook(id);
    await getLogData();
    await getCartData();
    await getUsersData();
    await getBooksData();
  };

  const getLogData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/logs`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await res.json();
    setLogs(response);
  };

  const getCartData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/payments`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await res.json();
    setCarts(response);
  };

  const getUsersData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/users`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await res.json();
    console.log(response);
    setUsers(response);
  };

  const getBooksData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/books`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await res.json();
    setBooks(response);
  };

  const createBook = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/admin/create-book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: bookForm.title,
          author: bookForm.author,
          description: bookForm.description,
          price: bookForm.price,
          stock: bookForm.stock,
          releaseDate: bookForm.releaseDate,
          coverUrl: bookForm.coverUrl,
          publisher: bookForm.publisher,
          isbn: bookForm.isbn,
          pages: bookForm.pages,
          lang: bookForm.lang,
          category: bookForm.category
        }),
      });
      if (!res.ok) {
        const errorResponse = await res.json();
        console.error('Failed to create book:', errorResponse);
        throw new Error('Failed to create book');
      }
      await getBooksData();
      setBookForm({
        bookId: '',
        title: '',
        author: '',
        description: '',
        price: 0,
        stock: 0,
        releaseDate: '',
        coverUrl: '',
        publisher: '',
        isbn: '',
        pages: 0,
        lang: '',
        category: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async () => {
    if (!currentBookId) return;
    try {
      const res = await fetch(`http://34.66.91.236:3001/admin/update-book/${currentBookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: bookForm.title,
          author: bookForm.author,
          description: bookForm.description,
          price: bookForm.price,
          stock: bookForm.stock,
          releaseDate: bookForm.releaseDate,
          coverUrl: bookForm.coverUrl,
          publisher: bookForm.publisher,
          isbn: bookForm.isbn,
          pages: bookForm.pages,
          lang: bookForm.lang,
          category: bookForm.category
        }),
      });
      if (!res.ok) {
        const errorResponse = await res.json();
        console.error('Failed to update book:', errorResponse);
        throw new Error('Failed to update book');
      }
      await getBooksData();
      setIsUpdateModalOpen(false);
      setCurrentBookId(null);
      setBookForm({
        bookId: '',
        title: '',
        author: '',
        description: '',
        price: 0,
        stock: 0,
        releaseDate: '',
        coverUrl: '',
        publisher: '',
        isbn: '',
        pages: 0,
        lang: '',
        category: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (id: string) => {
    try {
      const res = await fetch(`https://bookshop.pustakaone.my.id/book/${id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!res.ok) {
        const errorResponse = await res.json();
        console.error('Failed to delete book:', errorResponse);
        throw new Error('Failed to delete book');
      }
      await getBooksData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookForm({ ...bookForm, [name]: value });
  };

  const handleOpenUpdateModal = (book: Book) => {
    setCurrentBookId(book.bookId);
    setBookForm({
      bookId: book.bookId,
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      stock: book.stock,
      releaseDate: book.releaseDate,
      coverUrl: book.coverUrl,
      publisher: book.publisher,
      isbn: book.isbn,
      pages: book.pages,
      lang: book.lang,
      category: book.category
    });
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setCurrentBookId(null);
    setBookForm({
      bookId: '',
      title: '',
      author: '',
      description: '',
      price: 0,
      stock: 0,
      releaseDate: '',
      coverUrl: '',
      publisher: '',
      isbn: '',
      pages: 0,
      lang: '',
      category: ''
    });
  };

  useEffect(() => {
    getLogData();
    getCartData();
    getUsersData();
    getBooksData();
  }, []);

  if (!user || user.role !== 'ADMIN') {
    return <div className="container flex flex-col items-center gap-8"><h2 className="text-3xl font-inika font-bold">Anda tidak punya akses ke halaman ini</h2></div>;
  }

  return (
    <>
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">
            Daftar Log Admin:
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-5 border-b text-center">ID</th>
              <th className="px-4 py-5 border-b text-center">Action</th>
              <th className="px-4 py-5 border-b text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log: { id: string, action: string, date: string }) => (
              <tr key={log.id}>
                <td className="px-4 py-5 border-b text-center">{log.id}</td>
                <td className="px-4 py-5 border-b text-center">{log.action}</td>
                <td className="px-4 py-5 border-b text-center">{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">
            Daftar User Terdaftar:
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-5 border-b text-center">Nama</th>
              <th className="px-4 py-5 border-b text-center">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: { fullName: string, email: string }) => (
              <tr key={user.fullName}>
                <td className="px-4 py-5 border-b text-center">{user.fullName}</td>
                <td className="px-4 py-5 border-b text-center">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />

      <div>
        <div className="container flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-3xl font-inika font-bold">
              Daftar Cart:
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-5 border-b text-center">Cart Id</th>
                <th className="px-4 py-5 border-b text-center">Address</th>
                <th className="px-4 py-5 border-b text-center">Status</th>
                <th className="px-4 py-5 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart: { id: string, address: string, status: string }) => (
                <tr key={cart.id}>
                  <td className="px-4 py-5 border-b text-center">{cart.id}</td>
                  <td className="px-4 py-5 border-b text-center">{cart.address}</td>
                  <td className="px-4 py-5 border-b text-center">{cart.status}</td>
                  <div className="px-4 py-5 flex justify-center border-b">
                    <Button variant='primary' onClick={() => buttonHandler(cart.id)}>Selesaikan</Button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <br />

      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">
            Tambah Buku Baru:
          </h2>
          <form className="w-full max-w-lg" onSubmit={(e) => { e.preventDefault(); createBook(); }}>
            {[
              { label: 'Judul Buku', name: 'title', type: 'text' },
              { label: 'Penulis', name: 'author', type: 'text' },
              { label: 'Deskripsi', name: 'description', type: 'text' },
              { label: 'Harga', name: 'price', type: 'number' },
              { label: 'Stok', name: 'stock', type: 'number' },
              { label: 'Tanggal Rilis', name: 'releaseDate', type: 'date' },
              { label: 'URL Sampul', name: 'coverUrl', type: 'text' },
              { label: 'Penerbit', name: 'publisher', type: 'text' },
              { label: 'ISBN', name: 'isbn', type: 'text' },
              { label: 'Jumlah Halaman', name: 'pages', type: 'number' },
              { label: 'Bahasa', name: 'lang', type: 'text' },
              { label: 'Kategori', name: 'category', type: 'text' },
            ].map(({ label, name, type }) => (
              <div className="flex flex-wrap -mx-3 mb-6" key={name}>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
                    {label}
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id={name}
                    name={name}
                    type={type}
                    placeholder={label}
                    onChange={handleInputChange}
                    value={bookForm[name as keyof typeof bookForm]}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between">
              <Button variant='primary' type="submit">Tambah Buku</Button>
            </div>
          </form>
        </div>
      </div>

      <br />

      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">
            Daftar Buku:
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-5 border-b text-center">Judul</th>
              <th className="px-4 py-5 border-b text-center">Penulis</th>
              <th className="px-4 py-5 border-b text-center">Penerbit</th>
              <th className="px-4 py-5 border-b text-center">Harga</th>
              <th className="px-4 py-5 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Book) => (
              <tr key={book.bookId}>
                <td className="px-4 py-5 border-b text-center">{book.title}</td>
                <td className="px-4 py-5 border-b text-center">{book.author}</td>
                <td className="px-4 py-5 border-b text-center">{book.publisher}</td>
                <td className="px-4 py-5 border-b text-center">{book.price}</td>
                <div className="px-4 py-5 flex justify-center border-b">
                  <Button variant='primary' onClick={() => buttonHandlerDelete(book.bookId)}>Hapus</Button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isUpdateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg w-1/2 max-h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Update Buku</h2>
            <form onSubmit={(e) => { e.preventDefault(); updateBook(); }}>
              {[
                { label: 'Judul Buku', name: 'title', type: 'text' },
                { label: 'Penulis', name: 'author', type: 'text' },
                { label: 'Deskripsi', name: 'description', type: 'text' },
                { label: 'Harga', name: 'price', type: 'number' },
                { label: 'Stok', name: 'stock', type: 'number' },
                { label: 'Tanggal Rilis', name: 'releaseDate', type: 'date' },
                { label: 'URL Sampul', name: 'coverUrl', type: 'text' },
                { label: 'Penerbit', name: 'publisher', type: 'text' },
                { label: 'ISBN', name: 'isbn', type: 'text' },
                { label: 'Jumlah Halaman', name: 'pages', type: 'number' },
                { label: 'Bahasa', name: 'lang', type: 'text' },
                { label: 'Kategori', name: 'category', type: 'text' },
              ].map(({ label, name, type }) => (
                <div className="flex flex-wrap -mx-3 mb-6" key={name}>
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
                      {label}
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id={name}
                      name={name}
                      type={type}
                      placeholder={label}
                      onChange={handleInputChange}
                      value={bookForm[name as keyof typeof bookForm]}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between">
                <Button variant='primary' type="submit">Update Buku</Button>
                <Button variant='secondary' onClick={handleCloseUpdateModal}>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
