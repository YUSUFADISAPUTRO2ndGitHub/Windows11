import './App.css';
import Taskbar from './components/Taskbar'
import React, { useEffect } from 'react';
import edge from './assets/edge.png';

import { useSelector, useDispatch } from 'react-redux'
import { addApp } from './redux/controller'

function App() {
  const apps = useSelector(state => state.app.apps)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(
      addApp({
        name: "Edge",
        image: edge
      })
    )
  },[])


  return (
    <div className="App">
      <Taskbar></Taskbar>
    </div>
  );
}

export default App;
