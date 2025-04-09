  import { Suspense } from 'react';
  import Link from 'next/link';

  import classes from './page.module.css';
  import CafesGrid from '@/components/cafes/cafes-grid';
  import { getCafes } from '@/lib/cafes';

  export const metadata = {
    title: 'Café Conclave',
    description: 'Browse the cafes shared by our vibrant community.',
  };

  async function Cafes() {
    const cafes = await getCafes();

    return <CafesGrid cafes={cafes} />;
  }

  export default function CafesPage() {
    return (
      <>
        <header className={classes.header}>
          <h1>카페,
            <span className={classes.highlight}> 당신이 만드는 이야기</span>
          </h1>
          <p>
            여러분이 직접 경험한 카페의 특별한 이야기를 공유하며, 새로운 카페를 찾아보세요.
          </p>
          <p className={classes.cta}>
            <Link href="/cafes/share">나만의 카페 공유하기</Link>
          </p>
        </header>
        <main className={classes.main}>
          <Suspense fallback={<p className={classes.loading}>Fetching cafes...</p>}>
            <Cafes />
          </Suspense>
        </main>
      </>
    );
  }
