'use client';
import React from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { wishState } from '@/store/wishState';

interface TourWishProps {
  id: number;
}

const TourWish = ({ id }: TourWishProps) => {
  const [wish, setWish] = useRecoilState(wishState);

  const handleWish = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    setWish((wish) => {
      const isWished = wish.some((wishId) => wishId === id);
      if (isWished) {
        return wish.filter((wishId) => wishId !== id);
      }
      return [...wish, id];
    });
  };

  const isWished = wish.some((wishId) => wishId === id);

  return (
    <button className="absolute top-20 right-20" onClick={(e) => handleWish(e, id)}>
      {isWished ? (
        <Image src="/assets/full-heart.svg" alt="wish" width={28} height={28} />
      ) : (
        <Image src="/assets/empty-heart.svg" alt="wish" width={28} height={28} />
      )}
    </button>
  );
};

export default TourWish;
