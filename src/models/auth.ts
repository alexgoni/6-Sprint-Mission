export interface User {
  id: number;
  nickname: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  email: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface SignupRequestBody extends LoginRequestBody {
  nickname: string;
  passwordConfirmation: string;
}

export interface RefreshRequestBody {
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
}

export interface Auth {
  user: User;
  accessToken: string;
  refreshToken: string;
}
