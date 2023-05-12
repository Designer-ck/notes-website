import './css/style.sass'
import Login from './components/login/login';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Addtask from './components/addtask/addtask';
import SingleNote from './components/singleNote/singleNote';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    
    <ToastContainer />
      {/* <Login /> */}
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/addtask' element={<Addtask />}  />
        <Route path='/task/:id' element={<SingleNote />}  />
      </Routes>
    
    </>
  );
}

export default App;
