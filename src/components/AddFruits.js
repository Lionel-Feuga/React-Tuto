import { useState } from "react";

export default function AddFruits({addHandle}) {
  // State
  const [nouveauFruit, setNouveauFruit] = useState("");
  
  //Comportements


  const fruitFormSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAdded = {id,nom}
    addHandle(fruitAdded)
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  //Render
  return (
    <form action="submit" onSubmit={fruitFormSubmit}>
      <input
        onChange={handleChange}
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit"
      />
      <button>Ajouter</button>
    </form>
  );
}
