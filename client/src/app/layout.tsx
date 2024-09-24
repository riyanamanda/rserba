import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
    title: 'RS Ernaldi Bahar',
    description:
        'Rumah sakit Ernaldi Bahar sebagai pusat rujukan pelayanan dan pendidikan kesehatan jiwa yang prima dan berdaya saing nasional.'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='id'>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
