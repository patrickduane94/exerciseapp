
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import './App.css';

import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </head>

          <header>
            <div id="title">
              <h1>Exercise App <img src="https://cdn.pixabay.com/photo/2014/04/03/10/43/weight-lifting-311241_1280.png" alt="dumbbell" ></img></h1>
            </div>
            <div id="navigation">
              <Navigation />
            </div>
          </header>

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <AddExercisePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

      </Router>
    </>
  );
}

export default App;