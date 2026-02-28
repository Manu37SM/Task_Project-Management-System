import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function CreateTask(){

const {id} = useParams();
const navigate = useNavigate();

const [title,setTitle] = useState("");
const [priority,setPriority] = useState("MEDIUM");
const [dueDate,setDueDate] = useState("");

const create = async () => {

await api.post("/tasks",{
title:title,
priority:priority,
due_date:dueDate,
project_id:id,
assigned_to:1
});

alert("Task created");

navigate("/projects");

};

return(

<div>

<h2>Create Task</h2>

<input
placeholder="title"
onChange={e=>setTitle(e.target.value)}
/>

<br/><br/>

<select onChange={e=>setPriority(e.target.value)}>
<option>LOW</option>
<option>MEDIUM</option>
<option>HIGH</option>
</select>

<br/><br/>

<input
type="date"
onChange={e=>setDueDate(e.target.value)}
/>

<br/><br/>

<button onClick={create}>Create</button>

</div>

)

}

export default CreateTask;
