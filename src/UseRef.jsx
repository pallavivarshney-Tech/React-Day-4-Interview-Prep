
   import React, { useRef, useState } from 'react'
const UseRef = () => {
  const luckyName =useRef(null);
  const [show,setShow]=useState(false)
 
  const submitForm=(e)=>{
    e.preventDefault();
    const name=luckyName.current.value;
    name===""? alert("pls dill this") : setShow(true);
  }
    return (
    <div>
    <h1>Question-5</h1>
      <h4>What is UseRef Hook ?(Implementation)</h4>
      <form action="" onSubmit={submitForm}>

      <label htmlFor=''>enter your name </label>
      <input type="text" ref={luckyName}></input><br/>
      
      <button>click it </button>
      <p>{show ? `your name is ${luckyName.current.value}` : ""}</p>
      </form>
    </div>
  )
}
export default UseRef
   