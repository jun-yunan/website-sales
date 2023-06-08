import './globals.css';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from '../components/providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReduxProvider } from '@/redux/features/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <NextAuthProvider>
                        <main className="w-screen h-screen flex flex-col items-center bg-zinc-500 overflow-auto">
                            <header className="w-full flex justify-center bg-[#161617] items-center mb-[60px]">
                                <div className="w-[98.9%] fixed z-50 top-0 left-0 bg-[#161617] flex justify-center items-center">
                                    <Header />
                                </div>
                            </header>
                            <section className="w-full flex justify-center">{children}</section>
                            <footer className="w-full flex justify-center bg-[#1d1d1f]">
                                <Footer />
                            </footer>
                        </main>
                    </NextAuthProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
