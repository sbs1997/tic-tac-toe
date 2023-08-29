import React, { useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
  const squareIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [game, setGame] = useState([ "", "", "", "", "", "", "", "", ""])
  // let game=[ "", "", "", "", "", "", "", "", ""]
  const [gameOver, setGameOver] = useState(false)
  const [xPlayerTurn, setXPlayerTurn] = useState(true)
  const [winner, setWinner] = useState("Nobody")
  const [turnCounter, setTurnCounter] = useState(0)

  function handleSquareClick(id, player){
    
      game.splice([id-1], 1, player)
      console.log(game)
      setTurnCounter(turnCounter+1)
      // console.log(turnCounter)
      checkGame()
      setXPlayerTurn(!xPlayerTurn)
  }

  function checkGame(){
    if (game[0]){
      if (game[0]===game[1] && game[1]===game[2]){
        setGameOver(true)
        setWinner(game[0])
      }if (game[0]===game[3] && game[3]===game[6]){
        setGameOver(true)
        setWinner(game[0])
      }if (game[0]===game[4] && game[4]===game[8]){
        setGameOver(true)
        setWinner(game[0])
      }
    }if (game[3]){
      if (game[3]===game[4] && game[4]===game[5]){
        setGameOver(true)
        setWinner(game[3])
      }
    }if (game[6]){
      if (game[6]===game[7] && game[7]===game[8]){
        setGameOver(true)
        setWinner(game[6])
      }if (game[6]===game[4] && game[4]===game[2]){
        setGameOver(true)
        setWinner(game[6])
      }
    }if (game[1]){
      if(game[1]===game[4] && game[4]===game[7]){
        setGameOver(true)
        setWinner(game[1])
      }
    }if (game[2]){
      if(game[2]===game[5] && game[5]===game[8]){
        setGameOver(true)
        setWinner(game[2])
      }
    }if (turnCounter===8){
      setGameOver(true)
    }
    
  }

  return (
    <div className='app'>
    <h3>Tic Tac Toe</h3>
      <div className="board">
        {
          squareIndex.map((id)=>{
            return(
                <Square key={id} id={id} handleSquareClick={handleSquareClick} xPlayerTurn={xPlayerTurn} gameOver={gameOver}></Square>
            )
          })
        }
      </div>
      <br/>
      <p>{gameOver ? `Game over! ${winner} won!` : ""}</p>
      <br/>
    </div>
  );
}

export default App;
