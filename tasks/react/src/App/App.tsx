import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import UseEffect from '../features/use-effect/Main';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/use-effect" element={<UseEffect />} />
      </Route>
    </Routes>
  );
}

export default App;
