"use client"
import React, { useState } from 'react'

function page() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault(); // stop for auto reloading page after press button
    setmainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
  }

  const deleteHandler = (i) =>{
    console.log("DELETE")
    let copyTask = [...mainTask]
    copyTask.splice(i,1) //  cut the array with index i
    setmainTask(copyTask)
  }
  
  let renderTask = <div className='text-center content-center '> <h3 className='animate-pulse flex space-x-4'>Chill Kar Veere... </h3></div> ;
 
  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className=' items-center justify-between mb-5 w-2/3'>
            <h4 className='text-2xl font-semibold'>{t.title}</h4>
            <p className='text-sm font-md'>{t.desc}</p>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }} className='m-3 px-3 py-2 bg-red-400 shadow-lg text-white rounded-lg font-bold hover:bg-red-500'>Hogya</button>
          
        </li>
      );
    });
  }
  
  return (
    <>  
      <div className='bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500'>
        <h3 className='animate-bounce  text-white p-5 text-3xl text-center shadow-sm font-bold'>Likh De jo Krna hai !</h3>

      </div>
      <form onSubmit={submitHandler} className='m-3 px-2 bg-slate-100 items-center justify-between'>
        <label for="title">Title </label>
        <input id="title" type="text" 
        className='m-3 px-3 py-2 text-bold border-zinc-700 border-2 focus:border-red-500 drop-shadow-lg' 
        placeholder="Kya krna hai Bhai" required
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}
        />

        <label for="desc">Desc. </label>
        <input id="desc" type="text" 
        className='m-3 px-3 py-2 text-bold border-zinc-700 border-2 drop-shadow-lg'
        placeholder="Kuch To bta yarr"
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value)
        }}
        />
      
        <button type='submit' className='bg-blue-500 m-5 px-3 py-2 rounded-lg drop-shadow-lg text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...'>Add Task</button>
      
      
      </form>
      <hr className ='m-5'/>
      <div className='bg-slate-300 border-spacing-1'>
        <ul className='m-3 px-3 py-2'>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page