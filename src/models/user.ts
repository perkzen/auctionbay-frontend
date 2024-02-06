export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  imageUrl: string | null;
  accessToken: string;
  refreshToken: string;
};
