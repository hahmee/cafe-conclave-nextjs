'use client';

import { useFormStatus } from 'react-dom';

export default function CafesFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Cafe'}
    </button>
  );
}
