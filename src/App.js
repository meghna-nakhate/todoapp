import {useState, useEffect} from "react"
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {db} from "./firebase-config";
import firebase from "firebase";
//import useAuthState
import TodoListItem from "./Todos.js";


function App() {

 const[todos,setTodo]=  useState([])
 const [todoInput, settodoInput] = useState("")

useEffect(() => {
 getTodo();
}, [todoInput])

function getTodo(){
 db.collection("todos").onSnapshot(function(querySnapshot){
  setTodo(querySnapshot.docs.map((doc)=>({
    id: doc.id,
    todo: doc.data().todo,
    inprogress: doc.data().inprogress,
  })))
 })
}

 const addTodo =(e)=>{
 e.preventDefault();
 db.collection("todos").add(
   {
     inprogress:true,
     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
     todo:todoInput,
   })
   settodoInput("")
 }
  return (
    <div className="App"   style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}>
    <h1>my todo app😊</h1>
    <form>
      <TextField id="standard-basic" 
      label="write a todo"
      value={todoInput}
      style={{ width: "90vw", maxWidth: "500px" }}
      onChange={(e) => settodoInput(e.target.value)}
       />
    <Button type="submit" variant="contained" onClick={addTodo} >add</Button>
    </form>
    <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
    {todos.map((todo)=>(
    <TodoListItem 
        todo={todo.todo}
        inprogress={todo.inprogress}
        id={todo.id} /> )

    )}</div>
    </div>
  );
}

export default App;
