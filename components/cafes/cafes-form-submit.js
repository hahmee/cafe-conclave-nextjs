'use client';

import { useFormStatus } from 'react-dom';

export default function CafesFormSubmit() {
  const { pending } = useFormStatus();

  console.log('pending', pending);
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Cafe'}
    </button>
  );
}
