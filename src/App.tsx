import React from 'react';
import logo from './logo.svg';
import * as css from './App.module.sass';
import {BrowserRouter,  Routes, Route} from "react-router-dom";
import Sandbox from "./modules/Sandbox/Sandbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/sandbox'} element={<Sandbox />} />
        <Route path={'*'} element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

function Test() {
  return (
    <div className={css.App}>
      <header className={css.AppHeader}>
        <img src={logo} className={css.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={css.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
