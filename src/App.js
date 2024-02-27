import logo from './logo.svg';
import './App.css';
import Todoinputs from './components/Todoinput';
import Todolistdis from './components/Todolistdis';
import { useRef, useState } from 'react';

function App() {
  const [displayList, setdisplayList] = useState([]);
  const edt_inputref = useRef(null);

  function Add_Tolist(indataList) {
    debugger
    if(indataList !== ""){
    setdisplayList([...displayList,indataList])
      edt_inputref.current.focus();
    }
  }

  const deleteItem=(key,i)=>{
    let dellist = [...displayList]; 
    dellist.splice(key,i); //delete that element
    setdisplayList([...dellist]);
  }
  return (
    <div className="App">
      <h2 style={{ background: "black", color: "white" }}>TO DO LIST <span><img width='25' height='25'  src='list.png'></img></span></h2>
    <hr/>
      <div className='main-container'>
        <div className='center-container'>
          <Todoinputs ref={edt_inputref} Add_Tolist={Add_Tolist}/>
          <h2>Task List</h2>
          <hr/>
          <div style={{ backgroundColor:"lightgray", height:"50vh", width:"350px", padding:"10px"}}>
          {displayList.map((listitem,i)=>{
            return (
              <Todolistdis key={i} item={listitem} deleteItem={deleteItem} index={i}/>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
