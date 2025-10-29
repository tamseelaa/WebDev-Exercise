import visaLogo from "./assets/images/visa.png"; // adjust path
import mcLogo from "./assets/images/master.png";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const lastDigits = number.slice(-4);
  const logo = type === "Visa" ? visaLogo : mcLogo;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: "300px",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div style={cardStyle}>
      <div style={{ alignSelf: "flex-end" }}>
        <img src={logo} alt={type} style={{ height: "30px" }} />
      </div>
      <h2 style={{ letterSpacing: "3px" }}>•••• •••• •••• {lastDigits}</h2>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9em" }}>
        <span>
          Expires {expirationMonth.toString().padStart(2, "0")}/{expirationYear.toString().slice(-2)}
        </span>
        <span>{bank}</span>
      </div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
