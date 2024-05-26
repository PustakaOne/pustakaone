import React from 'react';
import { LayoutProps } from './interface';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from '@/components/contexts/AuthContext';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Toaster />
        <main className="w-full min-h-screen bg-white ">{children}</main>
        <Footer />
      </AuthContextProvider>
    </>
  );
};
