declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
  }

  interface Session {
    user: User;
    token: string;
  }
}
