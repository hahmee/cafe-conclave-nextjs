import MainHeader from '@/components/main-header/main-header';
import './globals.css';

// Static metadata (applied automatically to all pages wrapped by this layout)
export const metadata = {
    title: 'Café Conclave',
    description: 'Unique cafe experiences, shared by a vibrant community of coffee enthusiasts.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <MainHeader />
        {children}
        </body>
        </html>
    );
}
