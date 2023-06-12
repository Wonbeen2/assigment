import { atom } from 'recoil';

export const productFilterState = atom<{
  tourType: string[];
  itinerary: string;
}>({
  key: 'productFilterState',
  default: {
    tourType: [],
    itinerary: '',
  },
});
