import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

function ProjectDetails(){

const { id } = useParams();
const [project,setProject] = useState(null);

useEffect(()=>{

api.get("/projects").then(res=>{

const foundProject = res.data.find(
(p)=> p.id === Number(id)
);

setProject(foundProject);

});

},[id]);

if(!project){
return <div>Loading project...</div>
}

return(

<div>

<h2>{project.name}</h2>

<Link to={`/create-task/${project.id}`}>
Create Task
</Link>

<h3>Tasks</h3>

{project.tasks && project.tasks.length === 0 && (
<div>No tasks yet</div>
)}

{project.tasks && project.tasks.map(task => (

<div key={task.id} style={{
border:"1px solid #ccc",
margin:"10px",
padding:"10px"
}}>

<div><b>Title:</b> {task.title}</div>
<div><b>Status:</b> {task.status}</div>
<div><b>Priority:</b> {task.priority}</div>
<div><b>Due:</b> {task.due_date}</div>

</div>

))}

</div>

)

}

export default ProjectDetails;
