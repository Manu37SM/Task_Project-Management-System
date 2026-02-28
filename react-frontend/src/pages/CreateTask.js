import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function CreateTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [dueDate, setDueDate] = useState("");

  const create = async () => {
    await api.post("/tasks", {
      title: title,
      priority: priority,
      due_date: dueDate,
      project_id: id,
      assigned_to: 1,
    });

    alert("Task created");
    navigate("/projects");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Task</h2>

        <div style={styles.field}>
          <label>Task Title</label>
          <input
            style={styles.input}
            placeholder="Enter task title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div style={styles.field}>
          <label>Priority</label>
          <select
            style={styles.input}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>LOW</option>
            <option>MEDIUM</option>
            <option>HIGH</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Due Date</label>
          <input
            style={styles.input}
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button style={styles.button} onClick={create}>
          Create Task
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  card: {
    width: "380px",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  title: {
    textAlign: "center",
    marginBottom: "10px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "14px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default CreateTask;
