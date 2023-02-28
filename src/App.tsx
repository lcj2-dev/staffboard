import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Board, Home } from './containers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/board/:boardSlug',
    element: <Board />
  }
]);

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
