import './css/style.sass'
import Login from './components/login/login';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Addtask from './components/addtask/addtask';
import SingleNote from './components/singleNote/singleNote';

function App() {
  return (
    <>
    <BrowserRouter >
      {/* <Login /> */}
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/addtask' element={<Addtask />}  />
        <Route path='/task/:id' element={<SingleNote />}  />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
