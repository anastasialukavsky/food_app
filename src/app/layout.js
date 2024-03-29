import { Roboto } from 'next/font/google';
import './globals.css';
// import { Header, Footer } from '@/components/layout';
// import { Header } from '@/components/layout';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <main className='max-w-4xl  mx-auto p-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
