import React from 'react';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div>
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
};

export default SignInPage;
