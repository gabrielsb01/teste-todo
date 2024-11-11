import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from './pages/_layouts/Base'
import { Home } from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
])
