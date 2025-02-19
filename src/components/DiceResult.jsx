import { Card, CardContent, Typography } from "@mui/material";

const DiceResult = ({ result}) =>
	result !== null && (
		<Card sx={{ padding: 2, marginTop: 2, textAlign: "center", minWidth:"50vh"}}>
			<CardContent>
				<Typography variant="h6">Resultado do dado: {result}</Typography>
			</CardContent>
		</Card>
	);
export default DiceResult;
