import { AuthOptions, getServerSession, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Route } from '@/routes';
import { login, refreshTokens } from '@/api/auth';
import { decode } from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { env } from '@/env.mjs';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: Route.LOGIN,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<User | null> {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const res = await login({
          email: credentials.username,
          password: credentials.password,
        });

        if (res.status !== 200) {
          return null;
        }

        return res.data;
      },
    }),
  ],
  callbacks: {
    async jwt(params) {
      if (!params.user) {
        return params.token;
      }

      const decodedToken = decode(params.user.accessToken, { complete: true });

      const exp = (decodedToken?.payload as JWT).exp * 1000;

      if (new Date().getTime() < exp) {
        return { ...params.token, user: params.user };
      }

      const { accessToken: newAccessToken, refreshToken } = await refreshTokens(
        params.user.refreshToken
      );

      return {
        ...params.token,
        user: {
          ...params.user,
          accessToken: newAccessToken,
          refreshToken,
        },
      };
    },
    async session({ token, session, user }) {
      session.user = token.user;
      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
