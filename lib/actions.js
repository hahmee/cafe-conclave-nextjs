'use server';

import { redirect } from 'next/navigation';

import { saveCafe } from './cafes';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareCafe(prevState, formData) {
  const cafe = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(cafe.title) ||
    isInvalidText(cafe.summary) ||
    isInvalidText(cafe.instructions) ||
    isInvalidText(cafe.creator) ||
    isInvalidText(cafe.creator_email) ||
    !cafe.creator_email.includes('@') ||
    !cafe.image ||
    cafe.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveCafe(cafe);
  revalidatePath('/cafes'); // 데이터 변경될때마다 최신 값 불러오기 위해 캐시를 비워라
  redirect('/cafes');
}
