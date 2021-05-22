import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './Components/MainPage/MainPage';
import MyWorkPage from './Components/MyForkPage/MyWorkPage';
import { Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      <Route path="/index" render={() => <MainPage />} />
      <Route path="/mywork" render={() => <MyWorkPage />} />
      {/* <MainPage /> */}
      <Redirect to="/index" />
    </div>
  );
}

export default App;
