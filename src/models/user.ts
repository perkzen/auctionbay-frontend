export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  imageUrl: string | null;
}

export interface LoginResponse extends User {
  accessToken: string;
  refreshToken: string;
}
