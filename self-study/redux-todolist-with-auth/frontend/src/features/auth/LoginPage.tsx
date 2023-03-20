import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from './api';
import AuthAction from './types/AuthAction';

function Login(): JSX.Element {
  const dispatch = useDispatch();
  // понадобится для редиректа пользователя на главную после успешного логина
  const navigate = useNavigate();

  // переменные состояния name и password связанные с полями формы
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  // при сабмите формы
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    // отправляем запрос на сервер для логина
    api
      .login({
        name,
        password,
      })
      .then((user) => {
        // если сервер вернул ответ об успешном входе делаем dispatch, чтобы положить юзера в стэйт
        dispatch<AuthAction>({
          type: 'auth/loginSuccess',
          payload: user,
        });

        //редиректим пользователя на главную
        navigate('/');
      });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <div className="mb-3">
        <label htmlFor="name-input" className="form-label">
          Имя
        </label>
        <input
          type="text"
          className="form-control"
          id="name-input"
          name="username"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password-input" className="form-label">
          Пароль
        </label>
        <input
          type="password"
          className="form-control"
          id="password-input"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Войти
      </button>
    </form>
  );
}

export default Login;
