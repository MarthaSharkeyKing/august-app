import React from 'react';
import { Space } from './features/space/Space';
import LogIn  from './features/logIn/LogIn';
import './App.css';
import PhotoSelector from './features/photoSelector/PhotoSelector';
import LoveCalculator from './features/loveCalculator/LoveCalculator';

function App() {
  return (
    <div className="App">
        <LoveCalculator/>
    </div>
  );
}

export default App;
