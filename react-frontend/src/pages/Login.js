import { useState } from "react";
import api from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await api.post("/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    window.location.href = "/projects";
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
    fontFamily: "Arial",
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "10px",
    background: "white",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default Login;
