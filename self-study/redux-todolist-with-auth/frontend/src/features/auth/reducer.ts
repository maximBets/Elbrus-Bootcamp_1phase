import AuthState from './types/AuthState';
import AuthAction from './types/AuthAction';

// начальное состояние
const initialState: AuthState = {
  user: undefined,
  authChecked: false,
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'auth/userChecked': {
      // статус пользователя проверен
      // если action.payload undefined значит юзер незалогинен
      // если юзер залогинен то в action.payload лежит залогиненный юзер
      return { ...state, authChecked: true, user: action.payload };
    }

    case 'auth/loginSuccess': {
      return { ...state, user: action.payload };
    }

    case 'auth/logout': {
      return { ...state, user: undefined };
    }

    default:
      return state;
  }
};

export default authReducer;
