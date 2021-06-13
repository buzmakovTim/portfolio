import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './Components/MainPage/MainPage';
import MyWorkPage from './Components/MyForkPage/MyWorkPage';
import { Redirect, Route } from 'react-router-dom';
import { StateType } from './State/State';

type AppPropsType = {
  state: StateType
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      

      <Route path="/index" render={() => <MainPage />} />
      <Route path="/mywork" render={() => <MyWorkPage myWork={props.state.myWork}/>} />
      
      <div>
        {/* Footer with Links */}
      </div>

      {/* Set to default main page */}
      <Redirect to="/index" /> 
    </div>
  );
}

export default App;
