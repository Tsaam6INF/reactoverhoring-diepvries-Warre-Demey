import FridgeRow from "./FridgeRow";

export default function Fridge({ items }) {
  const rows = [];
  let lastLade = null;
 //maakt een nieuwe lade als hij nog niet bestaat maar eerst sorteren zodat het niet fout loopt
  items
    .sort((a, b) => a.lade - b.lade)
    .forEach((item) => {
      if (item.lade !== lastLade) {
        rows.push(
          <h2>Lade {item.lade}</h2> 
        );
      }
      rows.push(<FridgeRow item={item} />); 
      lastLade = item.lade; 
    });

  return (
    <div>
      <h1>Inhoud van de diepvries</h1>
      {rows}
    </div>
  );
}
