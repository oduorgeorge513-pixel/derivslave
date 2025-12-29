export default async function handler(req, res) {
  res.status(200).json({
    market: "Volatility 75 Index",
    bias: "Bullish",
    digitFlow: "High probability of even digits"
  });
}
