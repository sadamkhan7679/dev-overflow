import { UserButton } from '@clerk/nextjs';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomePage;
