// import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const s3 = new S3({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const db = sql('cafes.db');

export async function getCafes() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //임의의 지연 만듦

  // throw new Error('Loading cafes failed');
  return db.prepare('SELECT * FROM cafes').all();

}

export function getCafe(slug) {
  return db.prepare('SELECT * FROM cafes WHERE slug = ?').get(slug);
}

export async function saveCafe(cafe) {
  cafe.slug = slugify(cafe.title, { lower: true });
  cafe.instructions = xss(cafe.instructions);

  const extension = cafe.image.name.split('.').pop();
  const fileName = `${cafe.slug}.${extension}`;

  const bufferedImage = await cafe.image.arrayBuffer();

  s3.putObject({
    Bucket: 'mealsbucket-nextjs-demo-users-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: cafe.image.type,
  });


  cafe.image = fileName;

  db.prepare(
    `
    INSERT INTO cafes
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(cafe);
}
