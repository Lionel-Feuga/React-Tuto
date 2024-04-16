import { useState } from "react";
import Fruits from "./components/Fruits";
import AddFruits from "./components/AddFruits";

function App() {
  //state ----------------------------------------------------------------------------------------------------------------------------

  let [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // comportements ----------------------------------------------------------------------------------------------------------------------------


  const fruitDelete = (id) => {
    //Copie du state
    const fruitsCopy = [...fruits];
    // Manipulation du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // Modification du state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const addHandle = (fruitAdded) => {
    // Copie du State
    const fruitsCopy = [...fruits];
    //Manipulation du State
    fruitsCopy.push(fruitAdded);
    //Modification du state avec le setter
    setFruits(fruitsCopy);

  };
  //render ----------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruits fruitsInfo={fruit} FruitDelete={fruitDelete} key={fruit.id}/>
        ))}
      </ul>
      <AddFruits addHandle={addHandle} />
    </div>
  );
}

export default App;
