import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from './pages/_layouts/Base'
import { Home } from './pages/Home'

export const router = createBrowserRouter(
  [
    {
      path: '/teste-todo',
      element: <BaseLayout />,
      children: [{ path: '/teste-todo', element: <Home /> }],
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
)
