import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import {SITE_NAME} from "@/constants/seo.constance";
import {Providers} from "@/app/providers";
import 'react-toastify/dist/ReactToastify.css';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  style: ['normal']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "CooksCorner - the path to effortless and inspiring culinary adventures.",
  icons: '/icon.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
    </body>
    </html>
  );
}
