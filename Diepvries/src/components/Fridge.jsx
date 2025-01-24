export default function Fridge({ items }) {
    return (
      <div>
        <h1>Inhoud van de diepvries</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              Lade {item.lade} 
            </li>
          ))}
        </ul>
      </div>
    );
  }