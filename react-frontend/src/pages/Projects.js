import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        <h2 style={styles.title}>Your Projects</h2>

        {projects.length === 0 && (
          <div style={styles.empty}>No projects yet</div>
        )}

        <div style={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} style={styles.card}>
              <h3 style={styles.projectName}>{p.name}</h3>

              <Link to={`/project/${p.id}`} style={styles.button}>
                View Tasks
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "40px 20px",
    fontFamily: "Arial",
  },

  container: {
    maxWidth: "1000px",
    margin: "auto",
  },

  title: {
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  projectName: {
    marginBottom: "15px",
  },

  button: {
    textDecoration: "none",
    background: "#4f46e5",
    color: "white",
    padding: "8px 14px",
    borderRadius: "6px",
    fontSize: "14px",
    width: "fit-content",
  },

  empty: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    color: "#666",
  },
};

export default Projects;
