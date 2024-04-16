export default function Fruits({fruitsInfo, FruitDelete}) {
  //State

  //Comportements

  //Renderd
  return (
    
      <li>
        {fruitsInfo.nom} <button onClick={() => FruitDelete(fruitsInfo.id)}>x</button>
      </li>
    
  );
}
