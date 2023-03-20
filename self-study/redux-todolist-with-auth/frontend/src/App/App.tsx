import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import './App.css';
import Main from '../features/main/Main';
import TasksList from '../features/tasks/TasksList';
import LoginPage from '../features/auth/LoginPage';
import * as api from '../features/auth/api';
import { RootState } from '../store';
import AuthAction from '../features/auth/types/AuthAction';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const authChecked = useSelector((state: RootState) => state.auth.authChecked);

  // Кинем запрос на сервер, чтобы узнать залогинен пользователь или нет
  React.useEffect(() => {
    api.checkUser().then((result) => {
      dispatch<AuthAction>({
        type: 'auth/userChecked',
        payload: result.isLoggedIn ? result.user : undefined,
      });
    });
  }, [dispatch]);

  if (!authChecked) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
