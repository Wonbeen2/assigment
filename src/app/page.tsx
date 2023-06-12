import { getProducts } from '@/models/products';
import TourFilter from '@/components/tour/TourFilter';
import TourList from '@/components/tour/TourList';

export type pageProps = {
  searchParams: {
    [key: string]: string;
  };
};

export default async function Home({ searchParams }: pageProps) {
  const data = await getProducts({ searchParams });

  return (
    <>
      <TourFilter />
      <TourList products={data.data} total={data.pagination.total} />
    </>
  );
}
