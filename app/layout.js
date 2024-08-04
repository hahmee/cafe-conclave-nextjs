import MainHeader from '@/components/main-header/main-header';
import './globals.css';


//정적 메타데이터 (layout이 감싸고 있는 모든 페이지에 자동으로 적용)
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

//포장지
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
