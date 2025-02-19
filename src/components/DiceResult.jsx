import { Card, CardContent, Typography } from "@mui/material";

const DiceResult = ({ result, diceType }) =>
	result !== null && (
		<Card
			sx={{
				padding: 2,
				marginTop: 2,
				textAlign: "center",
				minWidth: "20vh",
				background: 'linear-gradient(45deg, #af92ce, #709ff0)',
				borderRadius: '8px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
			}}
		>
			<CardContent>
				<Typography
					variant="h6"
					sx={{
						color: 'white',
						textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
						fontWeight: 'bold',
					}}
				>
					Resultado do D{diceType}: {result}
				</Typography>
			</CardContent>
		</Card>
	);

export default DiceResult;
