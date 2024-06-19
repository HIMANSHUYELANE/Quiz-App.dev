import React, { useRef, useState } from 'react'
import {data} from '../assets/data'
export default function Quiz() {
const [index , setIndex]=useState(0)
const [que,setQue]=useState(data[index])
const [lock , setLock]=useState(false)
let option0=useRef(null)
let option1=useRef(null)
let option2=useRef(null)
let option3=useRef(null)
const arr=[option0,option1,option2,option3]

function option(e,ans){
  if(lock === false)
  {
    console.log(ans)
    if(que.ans === ans){
      e.target.classList.add("bg-green-300")
      setLock(true)
    }
    else{
      e.target.classList.add("bg-red-300")
      arr[que.ans].current.classList.add("bg-green-300")
      setLock(true)
    }
  }
}


function handleSubmit(){
  // setIndex(++index)
}
  return (
    <div className="w-[40%]  mx-auto bg-white my-32">
      <div className=''>
        <h1 className="font-bold text-3xl text-center pt-3 my-2">Qhiz App</h1>
      </div>
      <hr className="my-1" />
      <div className="mx-5">
      <p className=" my-1 font-medium text-lg">{index+1}.  {que.question}</p>
      <ul className="my-3 space-y-2">
        <li ref={option0} onClick={(e)=>{option(e,0)}} className="p-2 border-2 rounded-md ">A | {que.option0}</li>
        <li ref={option1} onClick={(e)=>{option(e,1)}} className="p-2 border-2 rounded-md ">B | {que.option1}</li>
        <li ref={option2} onClick={(e)=>{option(e,2)}} className="p-2 border-2 rounded-md ">C | {que.option2}</li>
        <li ref={option3} onClick={(e)=>{option(e,3)}} className="p-2 border-2 rounded-md ">D | {que.option3}</li>
      </ul>
      <div className="mx-auto w-[20%]">
      <button onClick={handleSubmit} className="w-[100%] bg-blue-400 my-3 border-2">Next</button>
      </div>
      <div>
        <p>Question {index+1} out of {data.length}</p>
      </div>
      </div>
    </div>
  )
}
