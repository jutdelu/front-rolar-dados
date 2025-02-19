import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiceResult from "./components/DiceResult";
import Button from "./components/Button";
import diceService from "./services/diceService";

function App() {
  const [diceRoll, setDiceRoll] = useState(null);

  const rollDice = async (faces) => {
    const result = await diceService.rollDice(faces);
    setDiceRoll(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header title="Sorteio de Dado" />
      <div className="mb-4 space-x-2">
        <Button label="D4" onClick={() => rollDice(4)} color="blue" />
        <Button label="D6" onClick={() => rollDice(6)} color="green" />
        <Button label="D8" onClick={() => rollDice(8)} color="red" />
      </div>
      <DiceResult result={diceRoll} />
      <Footer text="© 2024 Sorteador de Dados" />
    </div>
  )
}

export default App
