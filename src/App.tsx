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
  },
  ];
  const [count,setcount]=React.useState(1)
  function abc(){
    setcount(count+1)
  }
  function xyz(){
    setcount(count-1)
  }
  // 2
  function a (){
    console.log("hello edupoly")
  }

  // 3 
  function b (e){
    console.log(e)
  }

  // 4
  function c (e){
    console.log(e)
  }

  // 5
   function d (e){
    console.log(e.clientX)
    console.log(e.clientY)
   }

  //  6
  function f (){
    console.log("welcome edupoly")
  }

  // 7
  function e (e){
    console.log(e.target.id)
  }

  // 8
  function g (e){
    console.log(e.target.innerHTML)
  }

  // 9
  function h (e){
    console.log(e)
  }

  // 10
  function i (){
    console.log((document.getElementById("d2") as HTMLElement).value)
  }

  function j (){
    document.getElementById("d4").innerHTML=((document.getElementById("d3") as HTMLElement).value)
  }

  function k (){
    document.getElementById("d6").innerHTML=((document.getElementById("d5") as HTMLElement).value.toUpperCase())
  }


  function l (){
    document.getElementById("d8").innerHTML=((document.getElementById("d7") as HTMLElement).value.toUpperCase())
  }

  function m (){
    document.getElementById("ds").innerHTML=((document.getElementById("d9") as HTMLElement).value.toUpperCase())
  }

  function n(e){
    document.getElementById("as").innerHTML=e.value
  }
  function cleartext(){
    document.getElementById("as").innerHTML="";
    document.getElementById("sa").value=""
  }

 function add(){
  const x = +document.getElementById("num1").value
   const y = +document.getElementById("num2").value
   document.getElementById("vi").innerHTML=x+y
 }

 function sub(){
  const x = document.getElementById("numb1").value
   const y = document.getElementById("numb2").value
   document.getElementById("vij").innerHTML=x-y
 }


 function mul(){
  const x = document.getElementById("numbe1").value
   const y =document.getElementById("numbe2").value
   document.getElementById("vija").innerHTML=x*y
 }



  const mimg="https://i.pinimg.com/550x/7e/ea/31/7eea31e289d88f4e320684fb433d340d.jpg"
 const fimg="https://www.momjunction.com/wp-content/uploads/2015/04/Top-188-Latest-And-Modern-Hindu-Baby-Girl-Names1-910x1024.jpg"
 function male(){
  document.getElementById("ab").src=mimg
 }
 function female(){
  document.getElementById("ab").src=fimg
 }



  function ap(e){
    document.getElementById("cou").innerHTML=e.target.value
  }

  function as(e){
    document.getElementById("d1").innerHTML=e.target.value
  }


  function xyz(s){
    document.getElementById("sub").innerHTML=s.target.value
  }



  function ass(e)
{
  document.getElementById("app").innerHTML=e
}


const ar = ["ranil","rahul","ravi","ram"]
   function as(i){
        alert(i)
       }



  //   const we = ["ranil","rahul","ravi","ram","sravani"]
  //  function sr(ar1){
  //       alert("ar1")
  //      }



       var ar1 = [
        {
          firstname:"Praveen",
          lastname:"Gubbala",
          age:40,
          gender:'male'
        },
        {
          firstname:"Smrithi",
          lastname:"mandana",
          age:25,
          gender:'female'
        },
        {
          firstname:"mithali",
          lastname:"raj",
          age:39,
          gender:'female'
        },
        {
          firstname:"Rohit",
          lastname:"Sharma",
          age:35,
          gender:'male'
        },
        {
          firstname:"Sachin",
          lastname:"Tendulkar",
          age:50,
          gender:'male'
        },
      ];


      function fff(firstname){
        alert(firstname)
      }


      function srav(a,i){
        document.getElementById("dp").innerHTML=a.firstname+"is at index"+i
      }


      function srava(b,i){
        document.getElementById("dx").innerHTML=b.firstname+i
      }



      function pqr(h,i){
        document.getElementById("ba").innerHTML=h.firstname
        document.getElementById("a").innerHTML=h.lastname
        document.getElementById("b").innerHTML=h.age
        document.getElementById("c").innerHTML=h.gender
    
    
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

    {/*event handling  1 */}

    
    <button onClick={()=>{alert("hii")}}>my button</button>


   
    <button onClick={a}>click here</button>


    <button onClick={b}>button</button>


    <div style={{border:"2px solid",width:"300px",height:"200px"}} onClick={c}>click hear to see alert</div>


    <div style={{border:"2px solid",width:"300px",height:"200px"}} onClick={d}>click hear to see alert</div>


  <div  style={{border:"2px solid",width:"300px",height:"200px"}} onClick={f}>welcome to eduploy</div>



  <div id="d1" style={{border:"2px solid",width:"300px",height:"200px"}} onClick={e}>welcome to eduploy</div>


  <button onClick={g}><h1>welcome to edupoly reactjs</h1></button>

  <button onClick={h}>click hear to see alert</button>

  <div>
    <input type="text" id="d2"></input>
    <button onClick={i}>click here</button>
  </div>


  <div>
    <input type="text" id="d3"></input>
    <button onClick={j}>click here</button>
    <h1 id="d4"></h1>
  </div>




  <div>
    <input type="text" id="d5"></input>
    <button onClick={k}>click here</button>
    <h1 id="d6"></h1>
  </div>

  <div>
    <input type="text" onKeyUp={l} id="d7"></input>
    <h1 id="d8"></h1>
  </div>

  <div>
    <input type="text" onBlur={m} id="d9"></input>
    <h1 id="ds"></h1>
  </div>

  <div>
    <input type="text" onKeyUp={n} id="as"></input>
    <h1 id="sa"></h1>
    <button onClick={cleartext}>cleartext</button>
  </div>


  <div>
    <input type="text" id="num1" ></input>
    <input type="text" id="num2"></input>
    <h1 id="vi"></h1>
    <button onClick={add}>add</button>
  </div>


  <div>
    <input type="text" id="numb1" ></input>
    <input type="text" id="numb2"></input>
    <h1 id="vij"></h1>
    <button onClick={sub}>sub</button>
  </div>


  <div>
    <input type="text" id="numbe1" ></input>
    <input type="text" id="numbe2"></input>
    <h1 id="vija"></h1>
    <button onClick={mul}>mul</button>
  </div>


  <div>
    <input type="radio" value="mal" onChange={male} ></input>:male
    <input type="radio"  value="fem" onChange={female}></input>:female
    <img src="" id="ab"></img>
  </div>



  <div>
    <input type="radio" value="INDIA" onChange={ap} ></input>:IND
    <input type="radio"  value="UNITED STATES" onChange={ap}></input>:USA
    <h1 id="cou"></h1>
  </div>

   

  <div>
    <select onChange={as}>
    <option value="ind">INDIA</option>
    <option value="sri">SRILANKA</option>
    <option value="ger">GERMANY</option>
    </select>
    <h2 id="d1"></h2>
  </div>



  <div>
    <select onChange={xyz}>
    <input type="checkbox" value="reactjs"  ></input>:Reactjs
    <input type="checkbox"  value="mongoose" ></input>:Mongoose
    <input type="checkbox"  value="angular" ></input>:Angular
    <input type="checkbox"  value="nodejs" ></input>:NodeJS
    <input type="checkbox"  value="mongodb" ></input>:Mongodb
    <input type="checkbox"  value="mysql" ></input>:MySql
    <input type="checkbox"  value="express"></input>:Express
    </select>
    <h1 id="sub"></h1>
    
  </div>

<div>
  <button  type="button" onClick={()=>ass(1)} >button1</button>
  <button type="button" onClick={()=>ass(10)} >button2</button>
  <button type="button"onClick={()=>ass(200)} >button3</button>
  <button type="button" onClick={()=>ass(9999)} >button4</button>
  <h1 id="app"></h1>
  </div> 

  <ul>
    {
      ar.map((a,i)=>{
        return <li onClick={()=>as(i)}>{a}</li>
      })

      }
  </ul>


  {/* { <ul>
    {
      ar1.map((a,ar1)=>{
        return <li onClick={()=>sr(ar1)}>{a}</li>

      })
    }
  </ul> }
 */}


  <ul>
    {
      ar1.map((a)=>{
        return <li onClick={()=>fff(a.firstname)}>{a.firstname}</li>
      })
    }
  </ul>

  <ul>
    {
      ar1.map((a,i)=>{
        return <li> {a.firstname}<button onClick={()=>srav(a,i)}>see</button>
        
        </li>
      })
    }
  </ul>
  <h3 id="dp"></h3>
   


  <ul>
    {
      ar1.map((a,i)=>{
        return <li onClick={()=>srava(i)}>{a}</li>
      })
    }
  </ul>
  <h3 id="dx"></h3>


  <ul>
    {
      ar1.map((h,i)=>{
        return <li onClick={()=>pqr(h,i)}>{h.firstname}</li>
      })
    }
  </ul>
  <h1 id="ba"></h1>
  <h1 id="a"></h1>
  <h1 id="b"></h1>
  <h1 id="c"></h1>


  

 

    </>
  )
}

export default App



