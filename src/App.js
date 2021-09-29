import {useState} from 'react';
import './App.css';

function App() {
  //let [count, setCount] = useState(0);
  let [taskText, setTaskText] = useState(null);
  let [taskList, setTaskList] = useState([]);
  
let textChange = (event) => {
  setTaskText(event.target.value);
}

let addTask = () => {
  
  setTaskList([...taskList,taskText]);
}
  return (
    <div className="App">
      <div>
        <input onChange={textChange} type="text"></input>
        <button onClick={ addTask }>Add</button>
        <div className="task-list">
          {taskList.map(task=>{return <TaskCard task={task}/>})}
        </div>
      </div>
    </div>
  );
}

export default App;

let TaskCard = (props) => {
  return (
    <div className="task">
      {props.task}
    </div>
  );
}