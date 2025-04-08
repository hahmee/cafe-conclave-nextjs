import Link from 'next/link';
import Image from 'next/image';

import classes from './cafe-item.module.css';

export default function CafeItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.cafe}>
      <header>
        <div className={classes.image}>
          <Image
            src={`https://mealsbucket-nextjs-demo-users-image.s3.ap-northeast-2.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/cafes/${slug}`}>자세히 보기</Link>
        </div>
      </div>
    </article>
  );
}
