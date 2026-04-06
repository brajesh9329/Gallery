import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [Userdata, setUserdata] = useState([])
  const [index, setindex] = useState(1)
 

  const   getData= async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserdata(response.data);
    
    
  }

  useEffect(function(){
getData()
  },[index])

  let printUserdata=<h3 className='text-grey-400 absolute top-1/2 left-1/2 translax-1/2 translay-1/2'>Loading....</h3>
  if(Userdata.length>0){
    printUserdata=Userdata.map(function(elem,idx){
      return <div>
        <a href={elem.url}><div className='h-40 w-44 overflow-hidden bg-white '>
        <img className='h-full object-cover' src={elem.download_url}></img>
    
      </div>
      <h3>{elem.author}</h3></a>
      </div>
    })
  }
  return (
    <div className='bg-black p-4  overflow-auto h-screen text-white'>
     <h1>{index}</h1>
      <div className='flex flex-wrap -4'>
{printUserdata}
      </div>
      <div className='w-60 px-3 py-4 flex justify-center  items-center gap-5 ' >
      <button
      style={{opacity:index==1?0.5:1}}
      onClick={()=>{
if(index>1){
  setindex(index-1)
}

      }} 
      className='active:scale-95 rounded w-full bg-blue-400'>
<h3>Prev</h3>
      </button>
      <h3>page {index}</h3>
      <button 
      onClick={()=>{
setindex(index+1)

      }}
      className=' active:scale-95 rounded  w-full bg-blue-400 '>
<h3>next</h3>
      </button>
      </div>
    </div>
  )
}

export default App