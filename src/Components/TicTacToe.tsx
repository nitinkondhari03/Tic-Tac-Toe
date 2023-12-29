import React, { useEffect, useState } from 'react'
import Board from './Board'

const TicTacToe = () => {
      const [value,setValue]=useState(Array(9).fill(null))
      const [cureentPlayer,setCurrentPlayer]=useState("X")
      const [winner,setWinner]=useState(null)
      const [isDrawMatch,setIsDrawMatch]=useState(false)
      const [startplayer,setstartplayer]=useState(true)

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
                 setTimeout(()=>{
                  setWinner(newWinner)
                 },1000)
            }else if(isboardfull()){
                  setTimeout(()=>{
                        setIsDrawMatch(true)
                  },1000)
            }
      })
      const handleX=()=>{
   setCurrentPlayer("X")
   setstartplayer(false)
      }
      const handleO=()=>{
            setCurrentPlayer("O")
            setstartplayer(false)
      }
const handleNewGame=()=>{
      setValue(Array(9).fill(null))
      setWinner(null)
      setIsDrawMatch(false)
      setstartplayer(true)
}
  return (
      <>
       {startplayer ? <div>
      <h4 className='chooseplayers'>Choose Player First Start Games</h4>
      <button type='button' className='playersxo' onClick={handleX}>X</button>
      <button  type='button'  className='playersxo' onClick={handleO}>O</button>
      </div>:
      
    <div>
      {winner ? <h1 >Winner Is Player {winner}</h1>: isDrawMatch ?
      <h1>Draw Match</h1> : <div><Board  onClick={handleclick} value={value}/>
      <h1 className="text">Player: {cureentPlayer}</h1>
      </div>}
    
      <div>
            <button className="pushable"  type='button'
            onClick={handleNewGame}>
                  <span className="front">Start New Games</span>
            </button>
      </div>
    </div>}
    </>
  )
}

export default TicTacToe