// import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import CreateTask from "./pages/CreateTask";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>

   <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/project/:id" element={<ProjectDetails/>}/>
     <Route path="/create-task/:id" element={<CreateTask/>}/>
   </Routes>

  </BrowserRouter>
  );
}

export default App;
