import { createBrowserRouter } from "react-router-dom";
import Faq from "../page/Faq/Faq";
import Home from "../page/Home/Home";
import Main from "../Layout/Main"
import Singpu from "../page/Singup/Singpu"
import Ethtrasection from "../component/Ethtransection/Ethtrasection";
import TestLinkHistory from "../component/TestLinkHistory/TestLinkHistory";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          children: [
        {path:'/',element:<Ethtrasection></Ethtrasection>},
         {path:'/etht',element: <Ethtrasection></Ethtrasection >},
         {path:'/test',element: <TestLinkHistory></TestLinkHistory>},
       ]
        },
        // {
        //   path: '/login',
        //   element: <Login></Login>
        // },
        {
          path: '/signup',
          element: <Singpu></Singpu>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
  
      ]
    }
  ])