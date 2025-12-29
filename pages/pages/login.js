export default function Login() {
  function login() {
    localStorage.setItem("user", "JIJO");
    window.location.href = "/dashboard";
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <input placeholder="Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}
