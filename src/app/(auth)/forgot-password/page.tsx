import ForgotPasswordPage from '@/components/containers/forgot-password-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | Auctionbay',
};

const ForgotPassword = () => {
  return <ForgotPasswordPage />;
};

export default ForgotPassword;
