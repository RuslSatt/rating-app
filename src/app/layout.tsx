import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';
import './globals.css';

const notoSansMono = Noto_Sans_Mono({
  variable: '--font-noto-sans-mono',
  subsets: ['latin', 'cyrillic']
});

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Application to blog posts'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${notoSansMono.variable}`}>{children}</body>
    </html>
  );
}
