export interface IAdmin {
  id: number;
  name: string;
  password: string;
  message: string;
}

interface ILoginState {
  isLoggedIn: boolean;
  payload: {
    id: number | null;
    name: string;
  };
}
