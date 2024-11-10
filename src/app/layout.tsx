import type {Metadata} from "next";
import {Figtree} from "next/font/google";
import "./globals.css";

const figtree = Figtree( {
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-figtree",
} );

export const metadata: Metadata = {
    title: "Laravel Breeze Next.js 15",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-lt-installed="true">
        <body className={`${figtree.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
