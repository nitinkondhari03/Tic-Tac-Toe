import React, { useEffect, useState } from 'react'
import Board from './Board'

const TicTacToe = () => {
      const [value,setValue]=useState(Array(9).fill(null))
      const [cureentPlayer,setCurrentPlayer]=useState("X")
      const [winner,setWinner]=useState(null)
      const [isDrawMatch,setIsDrawMatch]=useState(false)
      console.log(value,"value")
      const checkWinner=()=>{
            const winIndexs=[
                  [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]
            ]
            for(let i=0;i<winIndexs.length;i++){
                  const [a,b,c]=winIndexs[i]
                  if(value[a]===value[b] && value[a]===value[c]){
                        return value[a]
                  }
            }
            return null
      }
      const handleclick=(index:number)=>{
            if(value[index]==null && !winner && !isDrawMatch){
                  const updateValue=[...value]
                  updateValue[index]=cureentPlayer
                  setValue(updateValue)
                  setCurrentPlayer(cureentPlayer==="X"?"O":"X")
            }
     
      }
      const isboardfull=()=>{
         return value.every((square)=>square!=null)
      }
      useEffect(()=>{
            const newWinner=checkWinner()
            if(newWinner){
                  setWinner(newWinner)
            }else if(isboardfull()){
            setIsDrawMatch(true)
            }
      })
      const handleX=()=>{
   setCurrentPlayer("X")
      }
      const handleO=()=>{
            setCurrentPlayer("O")
      }
const handleNewGame=()=>{
      setValue(Array(9).fill(null))
      setWinner(null)
      setIsDrawMatch(false)
}
  return (
    <div>
      <Board  onClick={handleclick} value={value}/>
      {winner ? <h1>Winner:{winner}</h1>: isDrawMatch ?
      <h1>Draw Match</h1> : <h1>Player :{cureentPlayer}</h1>}
      <div>
            <h4>Choose Player First start Games</h4>
      <button type='button' onClick={handleX}>X</button>
      <button  type='button'  onClick={handleO}>O</button>
      </div>
      <div>
            <button type='button'
            onClick={handleNewGame}>Start New Games</button>
      </div>
    </div>
  )
}

export default TicTacToe