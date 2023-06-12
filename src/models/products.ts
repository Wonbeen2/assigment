import { pageProps } from '@/app/page';

interface DataResponse<T> {
  data: T;
  pagination: {
    count: number;
    total: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    links: {
      previous: string;
      next: string;
    };
  };
  status: number;
  success: boolean;
}

export interface Product {
  id: number;
  representativeImageUrl: string;
  categoryName: string;
  tourTime: string;
  title: string;
  ratings: number;
  reviewTotal: number;
  displayPrice: string;
  displayLocalPrice: string;
}

export const getProducts = async ({ searchParams }: pageProps): Promise<DataResponse<Product[]>> => {
  const queryString = new URLSearchParams(searchParams);

  const response = await fetch(
    `https://api.zoomzoomapi.com/v1/products?per_page=20&with=country,seller&only[seller]=companyName,nickname&category_id=64&page=1&${queryString.toString()}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
