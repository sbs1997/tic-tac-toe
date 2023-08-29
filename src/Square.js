import React, { useState } from "react";

function Square({id, handleSquareClick, xPlayerTurn, gameOver}){
    // const [clicked, setClicked] = useState(false)
    const [claimedBy, setClaimedBy] = useState("")
    return(
        <div className="squareContainer">
            <button className={`button${id} button`} onClick={()=>{
                if (!claimedBy && !gameOver){
                    setClaimedBy(xPlayerTurn ? "X" : "O")
                    handleSquareClick(id, xPlayerTurn ? "X" : "O")
                }
            }}>
                {claimedBy}
            </button>
        </div>
    )
}

export default Square