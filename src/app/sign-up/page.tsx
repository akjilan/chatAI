// app/sign-up/page.tsx
import React from 'react';
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
