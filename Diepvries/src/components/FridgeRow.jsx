export default function FridgeRow({ item }) {
    return (
      <p>
        Voeding: {item.aantal} {item.voeding}  - Gewicht: {item.gewicht} - {item.tijd}
      </p>
    );
  }
  