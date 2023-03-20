import User from './User';

type AuthState = {
  authChecked: boolean;
  user?: User;
};

export default AuthState;
