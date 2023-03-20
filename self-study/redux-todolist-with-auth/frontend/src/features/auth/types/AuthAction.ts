import User from './User';

type AuthAction =
  | { type: 'auth/loginSuccess'; payload: User }
  | { type: 'auth/userChecked'; payload: User | undefined }
  | { type: 'auth/logout' };

export default AuthAction;
