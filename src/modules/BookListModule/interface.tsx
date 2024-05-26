export interface BookListProps {
    books: BookProps[];
};

export type BookProps = {
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