import React from 'react'
import { ROUTS } from '../utils/const';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Authorization from '../pages/Authorization';

const App = () => {
  const routs = createBrowserRouter([
    {
      path: ROUTS.MAIN,
      element: <div>Hello world!</div>,
      errorElement:<div>none</div>
    },
    {
      path: ROUTS.AUTH,
      element:<Authorization />
    }
  ]);
  
  return (
    <RouterProvider router={routs} />
  )
}

export default App
