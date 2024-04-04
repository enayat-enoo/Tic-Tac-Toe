import React from "react";
import { useState } from "react";
import Square from "./Square";

const Board = () =>{
    const [indexVal,setindexVal] = useState(0);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const checkWinner=() =>{
        const winnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return false;
    }
    const isWinner= checkWinner()
    const handleClick = (index) =>{
        if(squares[index]!=null) return;
        const copySquare = [...squares];
        copySquare[index] = xIsNext? "X" : "O";
        setSquares(copySquare);
        setXIsNext(!xIsNext);
        setindexVal((indexVal)=> indexVal+=1)
        console.log(indexVal);
    }

    const playAgain=()=>{
        setSquares(Array(9).fill(null));
    }

    return <div>
        <div className="board-container">
           { isWinner? <>{isWinner} Won the game <button onClick={playAgain}>Play Again</button></> : <>
           Player {xIsNext? "X" : "O"} move
           <div className="board-row">
                <Square onClick={()=> handleClick(0)} value={squares[0]}/>
                <Square onClick={()=> handleClick(1)} value={squares[1]}/>
                <Square onClick={()=> handleClick(2)} value={squares[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(3)} value={squares[3]}/>
                <Square onClick={()=> handleClick(4)} value={squares[4]}/>
                <Square onClick={()=> handleClick(5)} value={squares[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=> handleClick(6)} value={squares[6]}/>
                <Square onClick={()=> handleClick(7)} value={squares[7]}/>
                <Square onClick={()=> handleClick(8)} value={squares[8]}/>
            </div> </>}
        </div>
    </div>
}

export default Board;