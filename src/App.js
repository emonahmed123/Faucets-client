import logo from './logo.svg';
import './App.css';
import NavBar from './page/SharedPages/NavBar';
import { RouterProvider } from 'react-router-dom';
import{router} from './Router/Routes'
function App() {
  return (
    <div >
     <RouterProvider router={router} ></RouterProvider>
     
    </div>
  );
}

export default App;
