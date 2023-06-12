'use client';
import React from 'react';
import Badge from '@/components/common/badge/badge';
import Grid from '@/components/ui/Grid';
import TourCard from '@/components/tour/TourCard';
import { Product } from '@/models/products';
import FILTER from '@/constants/filters.json';
import { useRecoilState } from 'recoil';
import { productFilterState } from '@/store/tourFilterState';

interface TourListProps {
  products: Product[];
  total: number;
}

const TourList = ({ products, total }: TourListProps) => {
  const [productFilter, setProductFilter] = useRecoilState(productFilterState);
  const searchTourType = FILTER.filters.tourTypes.filter((type) => productFilter.tourType?.includes(type.key));

  const handleDeleteTourType = (key: string) => {
    setProductFilter((prev) => {
      const newTourType = prev.tourType.filter((type) => type !== key);
      return {
        ...prev,
        tourType: newTourType,
      };
    });
  };

  return (
    <section className="p-16">
      <div className="my-20">
        <div className="mb-10 font-bold">{`검색 결과: ${total}개 상품`}</div>
        <div className="flex gap-10">
          {searchTourType.map((type) => (
            <Badge key={type.key} title={type.text} onDelete={() => handleDeleteTourType(type.key)} />
          ))}
        </div>
      </div>
      <Grid>
        {products.map((product) => (
          <TourCard key={product.id} product={product} />
        ))}
      </Grid>
    </section>
  );
};

export default TourList;
