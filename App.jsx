import React from "react";
import { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent";
function App() {


    const [task, settask] = useState("");//recvv the values 'joseph'
    const [tasks, settasks] = useState([]);//storing the vals
    const [expandindex, setExpand] = useState(null);
    const [done, setDone] = useState([]);
    //editng state

    const [editIndex, setEditIndex] = useState(null); //to know the index of editing text
    const [editText, setEditText] = useState(""); // to store the temporary text

    const DeleteTask = (index) => {
        const temp = tasks.filter((_, i) => i !== index);
        settasks(temp);
    }

    const GetData = (event) => {
        settask(event.target.value);
    };

    const Add = () => {
        if (task.trim() === "") {
            alert("enter the Task");
            return;
        }
        settasks([task, ...tasks]);
        settask("");
    };

    //for the sake of active inactive in the wrk tik button..
    const workdone = (task) => {
        if (done.includes(task)) {
            setDone(done.filter(i => i!==task));
        }
        else {
            setDone([...done, task]); //setDone function expects a single array [...done,index] but not seperate values ...>(...done,index)
        }
    }
    
    //editing operations start
    const startEdit=(index)=>{
        setEditIndex(index);
        setEditText(tasks[index]);// prefill the input field with text
    }
    //saving the updated text

    const saveText=(index)=>{
        const updatedText=[...tasks];
        updatedText[index]=editText;
        settasks(updatedText);// crucial for updating the text into the tasks list
        setEditIndex(null);
        setEditText("");

    }

    const year=now.getFullYear();
    const month=now.getMonth()+1;
    const day=now.getDate();


    return (
        <>
            <div className="datetimebox">
                <div className="div">{day}</div>
                <span style={{fontSize:"20px",margin:"0",padding:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>-</span>
                <div className="div">{month}</div>
                <span style={{fontSize:"20px",margin:"0",padding:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>-</span>
                <div className="div">{year}</div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"end"}}>
                    <div>{hours}:{minutes}:{sex} {ampm} </div>
                </div>
            </div>
            <h1>Just Do It</h1>
            <input className="mainInput" type="text" placeholder="Add your task make the day productive...."
                required value={task}
                onChange={GetData}
            />
            <button className="addButton" disabled={editIndex !== null } onClick={Add}><i style={{ padding: "20px", transform: "translate(-6px,-2px)", fontSize:"15px" }} className="fa-solid fa-plus"></i></button> 
            {/* disabled={editIndex !== null} to disable the adding, disable is a keyword */}
            <div className="tasks">
                {
                    !tasks.length ?
                        //condition for no elements present elements in the tasks llist 
                        (<h1>No more tasks for day</h1>

                        ) : (

                            tasks.map((task, index) => (

                                <div className="taskbox" key={index} >
                                    {(editIndex === index) ? (
                                        <>
                                            <input type="text" className="editInput"
                                                value={editText} onChange={(e) => setEditText(e.target.value)}
                                            />
                                            <button className="saveButton" onClick={() => saveText(index)}>Save</button>
                                        </>

                                        ) : (<p onClick={() => setExpand(expandindex === index ? null : index)} className={expandindex === index ? "expanded" : "closed"}>{task}</p>)
                                    }

                                    <div className="icons">

                                        <i className="fa fa-edit" onClick={()=>startEdit(index)}></i>
                                        <i  disabled={editIndex !== null } className="fa fa-trash" onClick={() => DeleteTask(index)}></i>
                                        <i className={`fa fa-check ${done.includes(task) ? "active" : ""} `} onClick={() => workdone(task)} ></i>

                                    </div>
                                </div>
                            )))
                }

            </div>
        </>

    )

}
export default App;