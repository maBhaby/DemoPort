import React from 'react'
import { ROUTS } from '../utils/const';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Authorization from '../pages/Authorization';
import Main from '../pages/Main';

const App = () => {
  const routs = createBrowserRouter([
    {
      path: ROUTS.MAIN.INDEX,
      element: <Main/>,
      errorElement:<div>none</div>,
      children:[
        {
          index:true,
          element: <div>index</div>,
        },
        {
          path:ROUTS.MAIN.ARHIVE,
          element: <div>arhive</div>,
        },
        {
          path:ROUTS.MAIN.USERS,
          element: <div>users</div>,
        },
        {
          path:ROUTS.MAIN.ADMIN,
          element: <div>users</div>,
        },
      ]
    },
    {
      path: ROUTS.AUTH,
      element:<Authorization />,
    }
  ]);
  
  return (
    <RouterProvider router={routs} />
  )
}

export default App
