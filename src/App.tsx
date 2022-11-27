import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { Albums } from './pages/AlbumsPage/AlbumsPage';
import { NotFound } from './pages/NotFound/NotFound';
import { Posts } from './pages/PostsPage/PostsPage';
import { Todos } from './pages/TodosPage/TodosPage';
import { store } from './store';

export const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Layout>
            <Routes>
              <Route index element={<Posts />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </div>
      </Provider>
    </HashRouter>
  );
};
