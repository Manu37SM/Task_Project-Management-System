import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Projects(){

const [projects,setProjects] = useState([]);

useEffect(()=>{

api.get("/projects")
.then(res=>{
setProjects(res.data);
});

},[]);

return (

<div>

<h2>Projects</h2>

{projects.map(p => (

<div key={p.id} style={{border:"1px solid gray",margin:10,padding:10}}>

<h3>{p.name}</h3>

<Link to={`/project/${p.id}`}>View Tasks</Link>

</div>

))}

</div>

)

}

export default Projects;
