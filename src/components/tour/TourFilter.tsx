'use client';
import React, { useEffect } from 'react';
import Dropdown from '@/components/common/dropdown/Dropdown';
import FILTER from '@/constants/filters.json';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { productFilterState } from '@/store/tourFilterState';

const TourFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [productFilter, setProductFilter] = useRecoilState(productFilterState);

  useEffect(() => {
    setProductFilter((prev) => ({
      tourType: searchParams.get('filter[tourType]')?.split(',') || [],
      itinerary: searchParams.get('filter[itinerary]') || '',
    }));
  }, [searchParams, setProductFilter]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (!productFilter.tourType.length && !productFilter.itinerary) {
      router.push(pathname);
      return;
    }
    if (productFilter.tourType.length) {
      params.append('filter[tourType]', productFilter.tourType.join(','));
    }
    if (productFilter.itinerary) {
      params.append('filter[itinerary]', productFilter.itinerary);
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, productFilter.itinerary, productFilter.tourType, router]);

  const handleTourType = (name: string, value: string) => {
    setProductFilter((prev) => {
      if (prev.tourType.includes(value)) {
        const newTourType = prev.tourType.filter((type) => type !== value);
        return {
          ...prev,
          tourType: newTourType,
        };
      }
      return {
        ...prev,
        tourType: [...prev.tourType, value],
      };
    });
  };

  const handleItinerary = (name: string, value: string) => {
    setProductFilter((prev) => {
      if (prev.itinerary === value) {
        return {
          ...prev,
          itinerary: '',
        };
      }
      return {
        ...prev,
        itinerary: value,
      };
    });
  };

  return (
    <section className="px-16 py-32 border-b-1 border-b-gray-04 w-full">
      <h1 className="text-32 font-bold mb-24">미국 라스베가스</h1>
      <div className="flex gap-15">
        <Dropdown
          name="filter[tourType]"
          placeholder="상품 유형"
          options={FILTER.filters.tourTypes}
          onClick={handleTourType}
          value={productFilter.tourType}
        />
        <Dropdown
          name="filter[itinerary]"
          placeholder="예약기간"
          options={FILTER.filters.itinerary}
          onClick={handleItinerary}
          value={productFilter.itinerary}
        />
      </div>
    </section>
  );
};

export default TourFilter;
