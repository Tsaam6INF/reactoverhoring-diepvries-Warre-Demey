import Fridge from "./components/Fridge"
function App() {
  const diepvries = [
    { lade: 1, voeding: "worst", aantal: "4", gewicht: "200g", tijd: "2025-01-24 14:30" },
    { lade: 1, voeding: "broccoli", aantal: "-", gewicht: "500g", tijd: "2025-01-24 14:35" },
    { lade: 1, voeding: "biefstuk", aantal: "2", gewicht: "400g", tijd: "2025-01-24 14:40" },
    { lade: 2, voeding: "hamburgers", aantal: "6", gewicht: "-", tijd: "2025-01-24 14:45" },
    { lade: 3, voeding: "frieten", aantal: "1", gewicht: "1Kg", tijd: "2025-01-24 14:50" },
  ];
  
  return (
    <Fridge items={diepvries} />
  )
}

export default App
