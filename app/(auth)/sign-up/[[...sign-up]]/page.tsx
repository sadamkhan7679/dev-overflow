import React from 'react';
import { SignUp } from '@clerk/nextjs';

const SigUpPage = () => {
  return (
    <div>
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
};

export default SigUpPage;
