import { atom } from 'recoil';

export const wishState = atom<number[]>({
  key: 'wishState',
  default: [],
});
