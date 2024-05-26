import {
  Book,
  Clock,
  CustomerService,
  Payment,
  PiggyBank,
  Shield,
  ThumbUp,
  Truck,
} from '@/components/icons';

export const BOOKS = [
  {
    title: 'Book Title 1',
    author: 'Author 1',
    price: 89000,
    rating: 5,
    imageUrl:
      'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-72357-6',
  },
  {
    title: 'Book Title 2',
    author: 'Author 2',
    price: 75000,
    rating: 4,
    imageUrl:
      'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-72357-6',
  },
  {
    title: 'Book Title 3',
    author: 'Author 3',
    price: 65000,
    rating: 3,
    imageUrl:
      'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-72357-6',
  },
  {
    title: 'Book Title 4',
    author: 'Author 4',
    price: 98000,
    rating: 5,
    imageUrl:
      'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-72357-6',
  },
  {
    title: 'Book Title 5',
    author: 'Author 5',
    price: 56000,
    rating: 4,
    imageUrl:
      'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-72357-6',
  },
];

export const REASONS = [
  {
    icon: <Book size="w-12 h-12" fill="fill-white" />,
    label: 'Banyak Buku Pilihan',
  },
  {
    icon: <PiggyBank size="w-12 h-12" fill="fill-white" />,
    label: 'Harga Lebih Murah',
  },
  {
    icon: <Payment size="w-12 h-12" fill="fill-white" />,
    label: 'Pembayaran Mudah',
  },
  {
    icon: <Clock size="w-12 h-12" fill="fill-white" />,
    label: 'Sistem Berjalan 24 Jam',
  },
  {
    icon: <CustomerService size="w-12 h-12" fill="fill-white" />,
    label: 'Layanan Pelanggan Terbaik',
  },
  {
    icon: <Truck size="w-12 h-12" fill="fill-white" />,
    label: 'Pengiriman Cepat dan Aman',
  },
  {
    icon: <ThumbUp size="w-12 h-12" fill="fill-white" />,
    label: 'Kualitas Produk Unggul',
  },
  {
    icon: <Shield size="w-12 h-12" fill="fill-white" />,
    label: 'Keamanan Transaksi',
  },
];

export const TESTIMONIES = [
  {
    name: 'Puspita Sari',
    job: 'Mahasiswa',
    imageUrl: '/images/puspita-sari.png',
    description:
      'Aplikasi ini sangat membantu saya dalam menemukan buku-buku yang saya cari. Antarmuka yang intuitif membuat proses pencarian menjadi sangat mudah, dan saya selalu senang dengan kecepatan pengirimannya. Terima kasih banyak!',
  },
  {
    name: 'Dian Sastra Wijaya',
    job: 'Content Creator',
    imageUrl: '/images/dian-sastra-wijaya.png',
    description:
      'Aplikasi ini telah mengubah cara saya berbelanja buku. Saya dapat menjelajahi berbagai kategori dengan mudah, dan sistem notifikasi mereka membantu saya untuk tetap up-to-date. Pengalaman belanja saya menjadi lebih menyenangkan dan efisien berkat aplikasi ini.',
  },
];
