import Fridge from "./components/Fridge"
function App() {
  const diepvries = [
    { lade: 1, voeding: "worst", aantal: "4", gewicht: "200g" },
    { lade: 1, voeding: "broccoli", aantal: "-", gewicht: "500g" },
    { lade: 1, voeding: "biefstuk", aantal: "2", gewicht: "400g" },
    { lade: 2, voeding: "hamburgers", aantal: "6", gewicht: "-" },
    { lade: 3, voeding: "frieten", aantal: "1", gewicht: "1Kg" },
  ];
  return (
    <Fridge items={diepvries} />
  )
}

export default App