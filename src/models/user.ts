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

export interface UpdateProfile extends Omit<User, 'id' | 'imageUrl'> {}

export interface UpdatePassword {
  oldPassword: string;
  newPassword: string;
}
