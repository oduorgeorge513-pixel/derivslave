import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/login";
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Deriv Analysis Dashboard</h1>

      <select>
        <option>Volatility 75</option>
        <option>Volatility 100</option>
        <option>Boom 1000</option>
        <option>Crash 1000</option>
      </select>

      <br /><br />

      <select>
        <option>1 Minute</option>
        <option>5 Minutes</option>
        <option>15 Minutes</option>
      </select>

      <br /><br />

      <button>Generate Signal</button>

      <h2>Signal: WAIT</h2>
    </div>
  );
}
