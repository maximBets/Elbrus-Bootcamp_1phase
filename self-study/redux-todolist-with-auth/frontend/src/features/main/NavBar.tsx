import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as api from '../auth/api';
import { RootState } from '../../store';
import AuthAction from '../auth/types/AuthAction';

function NavBar(): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Вытаскиваем залогиненного пользователя из стэйта.
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = (event: React.FormEvent): void => {
    event.preventDefault();
    api.logout().then(() => {
      dispatch<AuthAction>({ type: 'auth/logout' });
      navigate('/');
    });
  };

  return (
    <div className="mb-3">
      {user && (
        <div className="mb-3">
          Здаров, {user.name}.{' '}
          <a href="#" role="button" tabIndex={0} onClick={handleLogout}>
            Выйти
          </a>
        </div>
      )}
      <div>
        {!user ? (
          <>
            <Link className="btn btn-light btn-lg ms-3" to="/auth/login">
              Войти
            </Link>
            <Link className="btn btn-light btn-lg ms-3" to="/auth/register">
              Регистрация
            </Link>
          </>
        ) : location.pathname !== '/tasks' ? (
          <Link className="btn btn-light btn-lg" to="/tasks">
            Перейти к списку
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
