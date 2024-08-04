import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

//포장지
export default function RootLayout({ children }) {
    console.log('BACKENDDDDD...');

  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
