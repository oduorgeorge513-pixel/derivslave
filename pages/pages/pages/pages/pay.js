export default function Pay() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Unlock DerivSlave Tool</h1>
      <p>Price: <strong>$200 USD</strong></p>

      <a
        href="https://buy.stripe.com/test_XXXXXXXX"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          background: "black",
          color: "white",
          textDecoration: "none"
        }}
      >
        Pay with Card
      </a>

      <p style={{ marginTop: 20 }}>
        Or buy via WhatsApp:
      </p>

      <a
        href="https://wa.me/254718122277"
        target="_blank"
      >
        📲 WhatsApp Support
      </a>
    </div>
  );
}
