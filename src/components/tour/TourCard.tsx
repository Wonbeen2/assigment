import React from 'react';
import Image from 'next/image';
import { Product } from '@/models/products';
import TourWish from '@/components/tour/TourWish';
import Link from 'next/link';

interface CardProps {
  product: Product;
}

const TourCard = ({ product }: CardProps) => {
  const {
    id,
    representativeImageUrl,
    categoryName,
    tourTime,
    title,
    ratings,
    reviewTotal,
    displayPrice,
    displayLocalPrice,
  } = product;

  return (
    <Link href={`https://www.zoomzoomtour.com/tour/${id}`} target="_blank" rel="noreferrer">
      <div role="button">
        <div className="w-full relative pt-[100%]">
          <Image
            src={representativeImageUrl}
            alt="product"
            fill
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            placeholder="empty"
          />
          <TourWish id={id} />
        </div>

        <div>
          <div className="text-14 text-gray-01 my-10">
            {categoryName} • {tourTime}
          </div>
          <div className="text-16 font-bold">{title}</div>
          <div className="my-5">{`${ratings.toFixed(1)} (${reviewTotal}개 후기)`}</div>
          <div className="text-16 font-bold">{`${displayLocalPrice} (${displayPrice})`}</div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
