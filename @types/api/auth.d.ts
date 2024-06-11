declare module "@pandamarket-api" {
  interface User {
    id: number;
    nickname: string;
    image: string | null;
    createdAt: string;
    updatedAt: string;
    email: string;
  }

  interface LoginRequestBody {
    email: string;
    password: string;
  }

  interface SignupRequestBody extends LoginRequestBody {
    nickname: string;
    passwordConfirmation: string;
  }

  interface RefreshRequestBody {
    refreshToken: string;
  }

  interface RefreshResponse {
    accessToken: string;
  }

  interface Auth {
    user: User;
    accessToken: string;
    refreshToken: string;
  }
}
