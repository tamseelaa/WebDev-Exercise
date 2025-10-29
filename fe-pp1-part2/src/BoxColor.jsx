function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    padding: "20px",
    margin: "10px 0",
    color: r + g + b > 382 ? "black" : "white", // automatic text contrast
  };

  const toHex = (c) => c.toString(16).padStart(2, "0");
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b}) <br />
      {hexColor}
    </div>
  );
}

export default BoxColor;
