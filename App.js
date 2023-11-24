
import './App.css';
import {useState} from 'react'
function App() {
  const [idx, setidx] = useState(1);
  const deletex=(idx)=>{
    var x=document.querySelector(`#eachitem${idx}`);
    document.querySelector(".container").removeChild(x);
  }
  const handle=()=>{
    var txt=document.querySelector("input").value;
    console.log(txt);
    var newdiv=document.createElement("div");
    var newbtn=document.createElement("button");
    newdiv.classList.add(`eachitem`);
    newdiv.id=`eachitem${idx}`;
    newdiv.innerHTML=`${txt}`;
    newbtn.classList.add("btnstyle");
    newbtn.id=`eachitem${idx}`;
    newbtn.onclick=()=>{
      deletex(idx);
    }
    document.querySelector(".container").appendChild(newdiv);
    document.querySelector(`#eachitem${idx}`).appendChild(newbtn);
    setidx(idx+1);
  }
  
  return (
    
    <div className="MainBox">
      <div className="addsection">
        <input className="input" placeholder="Add new Task"/>
        <button  onClick={handle} className="btn" >Add</button>
      </div>
      <div className="container">
        
      </div>
      </div>
    
  );
}

export default App;
