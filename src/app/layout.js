import { Questrial } from 'next/font/google';
import './globals.css';

const questrial = Questrial({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
    title: 'Noted',
    description: 'Trusted by teams at over 1,000 of the world’s leading organizations',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={questrial.className}>{children}</body>
        </html>
    );
}
