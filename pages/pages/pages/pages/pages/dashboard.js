import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const paid = localStorage.getItem("paid");
    if (!paid) router.push("/pay");
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>DerivSlave Analysis Dashboard</h1>
      <p>Access granted</p>

      <ul>
        <li>📊 Volatility Indices</li>
        <li>🔢 Digits Flow</li>
        <li>📈 Trend Bias</li>
        <li>🔔 Alerts</li>
      </ul>
    </div>
  );
}
