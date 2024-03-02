import logo from './logo.svg';
import './App.css';
import Todoinputs from './components/Todoinput';
import Todolistdis from './components/Todolistdis';
import { useRef, useState } from 'react';

function App() {
  const [displayList, setdisplayList] = useState([]);
  const handleRef = useRef(null)
  let data;

  // let refval;
  function Add_Tolist(indataList) {
    if (indataList !== "") {
      setdisplayList([...displayList, indataList])
      console.log('handleRef :>> ', handleRef);
      handleRef.current.focus();
      // refval.current.focus();
    }
  }
  // const handleRef = (ref) => {
  //   refval = ref;
  //   console.log('ref :>> ', ref);
  // }

  const deleteItem = (key, i) => {
    let dellist = [...displayList];
    dellist.splice(key, i); //delete that element
    setdisplayList([...dellist]);
    handleRef.current.focus();
  }
  return (
    <div className="App">
      {/* <hr /> */}
      <h2 style={{ background: "black", color: "white" }}>TO DO LIST <span><img width='25' height='25' src='list.png'></img></span></h2>
      <div className='main-container '>
        <div className='center-container '>
          <Todoinputs
            ref={handleRef}
            Add_Tolist={Add_Tolist} />
          <div style={{ backgroundColor: "#7FC7D9" }}><h4>Task List</h4></div>
          {/* <hr /> */}
          <div className='display-board '>
            {displayList.map((listitem, i) => {
              return (
                <Todolistdis key={i} item={listitem} deleteItem={deleteItem} index={i} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
