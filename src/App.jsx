import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiceResult from "./components/DiceResult";
import diceService from "./services/diceService";
import DiceButton from "./components/DiceButton";
import { Card, CardContent, Box } from "@mui/material";

function App() {
	const [diceRoll, setDiceRoll] = useState(null);

	const rollDice = async (faces) => {
		const result = await diceService.rollDice(faces);
		setDiceRoll(result);
	};

	const DiceButtonContainer = ({ buttons }) => (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="50vh"
		>
			<Card sx={{ padding: 1 }}>
				<CardContent>
					<Box
						display="flex"
						justifyContent="center"
						gap={2}
					>
						{buttons.map((button, index) => (
							<DiceButton
								key={index}
								label={button.label}
								onClick={button.onClick}
							/>
						))}
					</Box>
				</CardContent>
			</Card>
		</Box>
	);

	const buttons = [
		{ label: "D4", onClick: () => rollDice(4) },
		{ label: "D6", onClick: () => rollDice(6) },
		{ label: "D8", onClick: () => rollDice(8) },
	];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<Header title="Sorteio de Dado" />
			<DiceButtonContainer buttons={buttons} />
			<DiceResult result={diceRoll} />
			<Footer text="© 2024 Sorteador de Dados" />
		</div>
	);
}

export default App;
