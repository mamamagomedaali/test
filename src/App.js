import logo from './logo.svg';
import './App.css';
import { Main } from './components/main/Main';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Register} from './components/Register/Register'
import {Quiz} from './components/Quiz/Quiz'
import { Blog } from './components/Blog/Blog';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path = "/"         element = {<><Header/><Main/></>}/>
        <Route path = "/login" element = {<><Header/><Register/></>} />
        <Route path = "/quiz" element = {<><Header/><Quiz/></>} />
        <Route path = "/blog" element = {<><Header/><Blog/></>} />
        </Routes> 
      </BrowserRouter>     
    </div>
  );
}

export default App;
