'use client';
import React from 'react';
import Image from 'next/image';
import Wish from '@/components/common/wish/Wish';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleRouterHome = () => {
    router.push('/');
  };

  return (
    <header className="h-80 bg-white w-full z-50 p-16 border-b-1 border-b-gray-04 flex items-center justify-between">
      <button onClick={handleRouterHome}>
        <Image src="/assets/zoomzoomtour-logo.png" alt="logo" width={60} height={50} />
      </button>
      <Wish />
    </header>
  );
};

export default Header;
