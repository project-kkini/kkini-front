import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    memberId: string;
    nickname: string;
    email: string;
    accessToken: string;
  }

  interface Session {
    user: Omit<User, 'id' | 'image' | 'name'>;
  }
}
