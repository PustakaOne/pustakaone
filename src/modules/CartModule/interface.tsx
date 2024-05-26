export interface RemoveMeSectionProps {
  message: string;
}

export interface BookProps {
  id: number;
  lastId: number;
  userId: number;
  totalPrice: number;
  paymentSuccess: boolean;
  status: string;
  bookCarts: BookCartProps[];
  address: string;
  paidAt: Date;
}

export interface BookCartProps {
  id: number;
  book: {
    bookId: number;
    title: string;
    author: string;
    publisher: string;
    description: string;
    price: number;
    stock: number;
    releaseDate: Date;
    isbn: string;
    coverUrl: string;
    category: string;
    pages: number;
    lang: string;
  };
  amount: number;
}
