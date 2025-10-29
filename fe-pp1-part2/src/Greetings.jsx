
function Greetings({ lang, children }) {
  let greeting;

  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fi":
      greeting = "Hei";
      break;
    case "en":
    default:
      greeting = "Hello";
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px 0" }}>
      {greeting} {children}
    </div>
  );
}

export default Greetings;
