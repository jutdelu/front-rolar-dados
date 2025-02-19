import { Button } from "@mui/material";
const DiceButton = ({ label, onClick }) => (
	<Button
		variant="contained"
		onClick={onClick}
	>
		{label}
	</Button>
);
export default DiceButton;
