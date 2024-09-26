import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./components/pages/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stylesheets/myStyles.css'

import { TweenMax } from 'gsap/gsap-core';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

//added comment