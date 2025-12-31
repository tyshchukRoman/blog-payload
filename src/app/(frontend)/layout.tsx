import { Work_Sans, Source_Serif_4 } from "next/font/google";
import React from 'react';
import '@styles/main.scss';

import Header from '@components/Header/Header.tsx';

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif-4",
});

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${workSans.variable} ${sourceSerif.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
