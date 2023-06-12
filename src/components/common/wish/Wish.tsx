'use client';
import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { wishState } from '@/store/wishState';

const Wish = () => {
  const wish = useRecoilValue(wishState);
  const wishCount = wish.length < 10 ? wish.length : '9+';

  return (
    <button className="relative">
      {wish.length > 0 && (
        <div className="absolute top-[-8px] right-[-8px] w-20 h-20 flex items-center justify-center text-12 rounded-full text-white bg-error">
          {wishCount}
        </div>
      )}
      <div className="border-1 border-gray-02 rounded-md p-8">
        <Image src="/assets/wish-heart.svg" alt="wish" width={20} height={20} />
      </div>
    </button>
  );
};

export default Wish;
