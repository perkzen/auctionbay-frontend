import SignupPage from '@/components/containers/signup-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Auctionbay',
};

const Signup = () => {
  return <SignupPage />;
};

export default Signup;
