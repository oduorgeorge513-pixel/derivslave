export default function Login() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <div style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        <h2>Login</h2>

        <input
          placeholder="Username"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "black",
            color: "white",
            border: "none"
          }}
          onClick={() => alert("Demo login only")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
