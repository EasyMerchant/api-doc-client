import { Poppins } from 'next/font/google';

export const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  fallback: ['sans-serif'],
});
