import logo from './logo.svg';
import './App.css';
import Todoinputs from './components/Todoinput';
import Todolistdis from './components/Todolistdis';
import { useState } from 'react';

function App() {
  const [displayList, setdisplayList] = useState([]);

  function Add_Tolist(indataList) {
    if(indataList !== ""){
    setdisplayList([...displayList,indataList])
    }
  }

  const deleteItem=(key,i)=>{
    let dellist = [...displayList]; 
    dellist.splice(key,i); //delete that element
    setdisplayList([...dellist]);
  }
  return (
    <div className="App">
    <h2>TO DO LIST</h2>
    <hr/>
      <div className='main-container'>
        <div className='center-container'>
          <Todoinputs Add_Tolist={Add_Tolist}/>
          <h2>Task List</h2>
          <hr/>
          {displayList.map((listitem,i)=>{
            return (
              <Todolistdis key={i} item={listitem} deleteItem={deleteItem} index={i}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
