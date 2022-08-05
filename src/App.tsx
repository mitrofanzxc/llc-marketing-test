import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './shared';
import { Layout, Main } from './pages';

const App: FC = () => {
  const { main } = PATHS;

  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};

export { App };
