import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import TableWrapper from "./TableWrapper";
import Header from "./Header";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");
  console.log("Suchbegriff:", suchbegriff);
  console.log("ServiceTyp:", serviceTypAuswahl);
  console.log("Kanton:", kantonAuswahl);

  // Erzeugt eine Liste aller im Datensatz vorkommenden Kantone für das Auswahlmenü


  return (
    <div className="App">

      <Header suchbegriff={suchbegriff} kantonAuswahl={kantonAuswahl} serviceTypAuswahl={serviceTypAuswahl} setSuchbegriff = {setSuchbegriff} setKantonAuswahl = {setKantonAuswahl} setServiceTypAuswahl = {setServiceTypAuswahl}/>
      <Footer setSuchbegriff = {setSuchbegriff} setKantonAuswahl = {setKantonAuswahl} setServiceTypAuswahl = {setServiceTypAuswahl} />
      <TableWrapper suchbegriff={suchbegriff} kantonAuswahl={kantonAuswahl} serviceTypAuswahl={serviceTypAuswahl} />
      
      
    </div>
  );
}

export default App;
