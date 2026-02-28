import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    api.get("/projects").then((res) => {
      const foundProject = res.data.find(
        (p) => p.id === Number(id)
      );
      setProject(foundProject);
    });
  }, [id]);

  if (!project) {
    return <div style={styles.loading}>Loading project...</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        <div style={styles.header}>
          <h2 style={styles.title}>{project.name}</h2>

          <Link to={`/create-task/${project.id}`} style={styles.button}>
            + Create Task
          </Link>
        </div>

        <h3 style={styles.sectionTitle}>Tasks</h3>

        {project.tasks && project.tasks.length === 0 && (
          <div style={styles.empty}>No tasks yet</div>
        )}

        <div style={styles.taskGrid}>
          {project.tasks &&
            project.tasks.map((task) => (
              <div key={task.id} style={styles.card}>
                <div style={styles.taskTitle}>{task.title}</div>

                <div style={styles.row}>
                  <span>Status</span>
                  <b>{task.status}</b>
                </div>

                <div style={styles.row}>
                  <span>Priority</span>
                  <b>{task.priority}</b>
                </div>

                <div style={styles.row}>
                  <span>Due Date</span>
                  <b>{task.due_date}</b>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f4f6f8",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Arial",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  title: {
    margin: 0,
  },

  button: {
    textDecoration: "none",
    background: "#4f46e5",
    color: "white",
    padding: "10px 16px",
    borderRadius: "6px",
    fontSize: "14px",
  },

  sectionTitle: {
    marginBottom: "10px",
  },

  taskGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "white",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  },

  taskTitle: {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "16px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "6px",
    fontSize: "14px",
  },

  empty: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    color: "#777",
  },

  loading: {
    textAlign: "center",
    marginTop: "80px",
    fontSize: "18px",
  },
};

export default ProjectDetails;
