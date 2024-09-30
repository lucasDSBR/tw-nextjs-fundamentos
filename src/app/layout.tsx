import type { Metadata } from "next";
import localFont from "next/font/local";
import styles from "./page.module.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Treina Blog",
  description: "Aplicação desenvolvida no curso de next.js fundamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
		<header>
			<h1 className={styles.title}>
				Treina
				<span className={styles['titleSecoundWord']}>Blog</span>
			</h1>
		</header>
        {children}
      </body>
    </html>
  );
}
