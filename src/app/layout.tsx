import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import '../styles/tailwind.css';
import Recoil from '@/lib/Recoil';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Recoil>
          <Header />
          <main>{children}</main>
        </Recoil>
      </body>
    </html>
  );
}
