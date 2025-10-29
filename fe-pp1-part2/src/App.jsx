import React from "react";
import IdCard from "./IdCard.jsx";
import Random from "./Random.jsx";
import CreditCard from "./CreditCard.jsx";
import BoxColor from "./BoxColor.jsx";
import Greetings from "./Greetings.jsx";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>

      <IdCard lastName="Doe" firstName="John" gender="male" height={176} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <IdCard lastName="Delores" firstName="Obrien" gender="female" height={174} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />

      <h2>Random Numbers</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>Credit Cards</h2>
      <CreditCard type="Visa" number="0123456789018875" expirationMonth={3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" bgColor="#11aa99" color="white" />
      <CreditCard type="Master Card" number="0123456789010993" expirationMonth={3} expirationYear={2021} bank="N26" owner="Maxence Bouret" bgColor="#eeeeee" color="#222222" />
      <CreditCard type="Visa" number="0123456789016982" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#ddbb55" color="white" />

      <h2>Box Colors</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
