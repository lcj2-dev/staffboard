import { DateTime } from '../typescript/interfaces';

const addPadding = (n: number): string => `${n < 10 ? `0${n}` : n}`;

export const parseDate = (d: Date): DateTime => {
  const date = `${addPadding(d.getDate())}.${addPadding(
    d.getMonth() + 1
  )}.${d.getFullYear()}`;

  const time = `${addPadding(d.getHours())}:${addPadding(
    d.getMinutes()
  )}:${addPadding(d.getSeconds())}`;

  return {
    date,
    time
  };
};
