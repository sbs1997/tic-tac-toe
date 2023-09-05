import React, { useState } from 'react';
import './App.css';
import Board from './Board';
import About from './About';
import NavBar from './NavBar';

import { Switch, Route } from "react-router-dom";

function App() {

  const [game] = useState([ "", "", "", "", "", "", "", "", ""])
  const [turnCounter, setTurnCounter] = useState(0)
  const [winner, setWinner] = useState("Nobody")
  const [gameOver, setGameOver] = useState(false)
  const [xPlayerTurn, setXPlayerTurn] = useState(true)

  return (
    <div className='app'>
      <h3>Tic Tac Toe</h3>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Board game={game} turnCounter={turnCounter} setTurnCounter={setTurnCounter} gameOver={gameOver} setGameOver={setGameOver} winner={winner} setWinner={setWinner} xPlayerTurn={xPlayerTurn} setXPlayerTurn={setXPlayerTurn}/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
