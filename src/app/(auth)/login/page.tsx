import LoginPage from '@/components/containers/login-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Auctionbay',
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
