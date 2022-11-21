import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { Albums } from './pages/Albums/Albums';
import { Posts } from './pages/Posts/Posts';
import { Todos } from './pages/Todos/Todos';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Routes>
            <Route index element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
};
