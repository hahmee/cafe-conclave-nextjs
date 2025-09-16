import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getCafe } from '@/lib/cafes';
import classes from './page.module.css';

export async function generateMetadata({ params }) {
  const cafe = getCafe(params.cafeSlug);

  if (!cafe) {
    notFound();
  }

  return {
    title: cafe.title,
    description: cafe.summary,
  };
}

export default function CafeDetailsPage({ params }) {
  const cafe = getCafe(params.cafeSlug);

  if (!cafe) {
    notFound();
  }

  cafe.instructions = cafe.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          {params.cafeSlug}
          <Image
            src={`https://mealsbucket-nextjs-demo-users-image.s3.ap-northeast-2.amazonaws.com/${cafe.image}`}
            alt={cafe.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{cafe.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${cafe.creator_email}`}>{cafe.creator}</a>
          </p>
          <p className={classes.summary}>{cafe.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: cafe.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
