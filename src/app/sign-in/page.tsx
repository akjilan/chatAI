// app/sign-in/page.tsx
import React from 'react';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}
