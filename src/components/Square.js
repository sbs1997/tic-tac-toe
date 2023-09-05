import React from "react";

function Square({id, handleSquareClick, xPlayerTurn, gameOver, game}){
    return(
        <div className="squareContainer">
            <button className={`button${id} button`} onClick={()=>{
                if (!game[id-1] && !gameOver){
                    handleSquareClick(id, xPlayerTurn ? "X" : "O")
                }
            }}>
                {game[id-1]}
            </button>
        </div>
    )
}

export default Square