import React, { useState } from 'react'
type SquareProps={
      onClick:()=>void,
      value:string
}

const SquareButton = ({onClick,value}:SquareProps) => {
     
      if(value){
            return (
                  <button type='button' onClick={onClick}   style={{width:"10vw",height:'15vh',border:'1px solid white',backgroundColor:"black",color:"white",fontSize:"5rem",fontWeight:"bolder" }}>{value}</button >
                )
      }else{
            return (
                  <button type='button' onClick={onClick}   style={{width:"10vw",height:'15vh',border:'1px solid white',backgroundColor:"black",color:"black",fontSize:"5rem",fontWeight:"bolder", overflow:"hidden"}}>ox</button >
                )
      }

}

export default SquareButton