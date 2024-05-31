export interface ReviewCardProps {
  author: number;
  rating: number;
  content: string;
  date: string;
}

export type BookDetailProps = {
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

export type BookProps = {
  book: BookDetailProps;
  bookId: string;
};
