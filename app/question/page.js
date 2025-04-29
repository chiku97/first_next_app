'use client'
import React,{useEffect, useRef, useState} from 'react'

export default function Question() {

  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const ref = useRef(null)
  useEffect(()=>{
    fetch(`https://6805f6b0ca467c15be6a9494.mockapi.io/wapcohort2dummyapi/students/questions?category=WAP&page=${page}&limit=1`)
    .then(res=>{ return res.json()})
    .then(data=>{
      setData(data)
      
    })
  },[page])

  const handleClick = (e) =>{
   
    setPage(e.target.value)
    console.log(page)
  }

  const handleQuestion = (e,item)=>{
    console.log(name)
    ref.current = e.target
    console.log(item.options[e.target.value] === item.correctOption)
    if(item.options[e.target.value] === item.correctOption){
      ref.current.style.background ="green"
    }
    ref.current = null
  }

  return (
    <div>

      <div>
       <div><button style={{height:"40px",margin:"5px", width:"100px", background:"blue", color:"white"}} value={1} onClick={(e)=>handleClick(e)}>1</button></div>
       <div><button style={{height:"40px",margin:"5px", width:"100px", background:"blue", color:"white"}} value={2} onClick={(e)=>handleClick(e)}>2</button></div>
       <div><button style={{height:"40px", width:"100px",margin:"5px", background:"blue", color:"white"}} value={3} onClick={(e)=>handleClick(e)}>3</button></div>
       <div><button style={{height:"40px", width:"100px", background:"blue",margin:"5px", color:"white"}} value={4} onClick={(e)=>handleClick(e)}>4</button></div>

        </div>

      {data.map((item)=> {
        return <>
          <div>{item.question}</div>
          <div>
            <li style={{border:"solid 1px blue", margin:"5px"}} value={0} onClick={(e)=>handleQuestion(e,item)}>{item.options[0]}</li>
            <li style={{border:"solid 1px blue", margin:"5px"}} value={1} onClick={(e)=>handleQuestion(e,item)}>{item.options[1]}</li>
            <li style={{border:"solid 1px blue", margin:"5px"}} value={2} onClick={(e)=>handleQuestion(e,item)}>{item.options[2]}</li>
            <li style={{border:"solid 1px blue", margin:"5px"}} value={3} onClick={(e)=>handleQuestion(e,item)}>{item.options[3]}</li>

          </div>
        </>
      })}
    </div>
  )
}
