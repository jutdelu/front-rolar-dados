import { useState } from "react";
import { Card, CardContent, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiceResult from "./components/DiceResult";
import diceService from "./services/diceService";
import DiceButton from "./components/DiceButton";
import imageDice from "./assets/dice.svg";
import "./App.css";

const DiceButtonContainer = ({ buttons }) => (
	<Box display="flex" justifyContent="center" alignItems="center" minHeight="25vh">
		<Card sx={{ padding: 1 }}>
			<CardContent>
				<Box display="flex" justifyContent="center" gap={2}>
					{buttons.map((button, index) => (
						<DiceButton key={index} label={button.label} onClick={button.onClick} />
					))}
				</Box>
			</CardContent>
		</Card>
	</Box>
);

function App() {
	const [diceRoll, setDiceRoll] = useState(null);
	const [diceType, setDiceType] = useState("");

	const rollDice = async (faces) => {
		const result = await diceService.rollDice(faces);
		setDiceRoll(result);
		setDiceType(faces);
	};

	const buttons = [
		{ label: "D4", onClick: () => rollDice(4) },
		{ label: "D6", onClick: () => rollDice(6) },
		{ label: "D8", onClick: () => rollDice(8) },
	];

	return (
		<Box display="flex" justifyContent="center" alignItems="center" height="100vh" padding={2}>
			<Card sx={{ maxWidth: 700, margin: "auto", padding: 0, textAlign: "center" }}>
				<CardContent sx={{ padding: "12px" }}>
					<Header title="Sorteio de Dados!" />
					<Box className="container" sx={{ minHeight: "150px" }}>
						<img src={imageDice} className="logo" alt="Dice logo" />
					</Box>
					<Box display="flex" flexDirection="column" alignItems="center" gap={2}>
						<DiceButtonContainer buttons={buttons} />
						<DiceResult result={diceRoll} diceType={diceType} />
					</Box>
					<Footer text="feito por jutdelu" />
				</CardContent>
			</Card>
		</Box>
	);
}

export default App;
