


function App() {
  const ar = [10,20,30]

  return (
   <ul>
    {
      ar.map((a)=>{
        return <li>{a}</li>
      })
    }
   </ul>
  )
}

export default App
