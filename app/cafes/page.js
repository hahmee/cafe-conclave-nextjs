import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import CafesGrid from '@/components/cafes/cafes-grid';
import { getCafes } from '@/lib/cafes';

export const metadata = {
  title: 'All Cafes',
  description: 'Browse the delicious cafes shared by our vibrant community.',
};

async function Cafes() {
  console.log('Fetching cafes....');
  const cafes = await getCafes();
  console.log('cafes', cafes);

  return <CafesGrid cafes={cafes} />;
}

export default function CafesPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious cafes, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/cafes/share">Share Your Favorite Recipe</Link>
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
