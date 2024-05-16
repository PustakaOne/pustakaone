import type { Metadata } from 'next';
import { Inika, Roboto } from 'next/font/google';
import './globals.css';
import { Layout } from '@/components';

const inika = Inika({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inika',
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'PustakaOne | Temukan banyak buku menarik disini!',
  description:
    'PustakaOne merupakan sebuah aplikasi yang dapat anda gunakan untuk membeli buku-buku menarik dengan harga terjangkau. Beli buku dan berikan review anda sekarang juga!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth scroll-pt-[100px] ${inika.variable} ${roboto.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden font-Roboto bg-white">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
