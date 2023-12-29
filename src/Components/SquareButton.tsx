import React, { useState } from 'react'
type SquareProps={
      onClick:()=>void,
      value:string
}

const SquareButton = ({onClick,value}:SquareProps) => {
     
      if(value){
            return (
                  <button type='button' onClick={onClick}   style={{width:"100px",height:'100px',border:'1px solid white',backgroundColor:"black",color:"white",fontSize:"30px",fontWeight:"bolder" }}>{value}</button >
                )
      }else{
            return (
                  <button type='button' onClick={onClick}   style={{width:"100px",height:'100px',border:'1px solid white',backgroundColor:"black",color:"black",fontSize:"30px",fontWeight:"bolder" }}>ox</button >
                )
      }

}

export default SquareButton