import './App.css'
import React from 'react'

function App() {
 
   const students=[{
     'firstname':'Bharathi',
     "Lastname":'Reddy',
     'gender':'Female'
   },
   {
    'firstname':'Divya',
    "Lastname":'Naidu',
    'gender':'Female'
  },
  {
    'firstname':'Ravi',
    "Lastname":'Reddy',
    'gender':'Male'
  }
  ]
  const [count,setcount]=React.useState(1)
  function abc(){
    setcount(count+1)
  }
  function xyz(){
    setcount(count-1)
  }

 
  return (
    <>
      <h1>Count</h1>
      <table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  <tr style={(a.gender=='Female')?{backgroundColor:'pink'}:{backgroundColor:'skyblue'}}><td>{a.firstname}</td><td>{a.Lastname}</td><td>{a.gender}</td></tr>
        
     })
    }
   
   </tbody>
</table>


<h1>{count}</h1>
    <button onClick={abc}>increment</button>
    <button onClick={xyz}>decrement</button>
  












    </>
  )
}

export default App




