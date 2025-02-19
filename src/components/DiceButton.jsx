import { Button } from "@mui/material";
const DiceButton = ({ label, onClick }) => (
	<Button
	variant="contained"
    onClick={onClick}
    sx={{ fontSize: 20, padding: "12px 24px", backgroundColor: "black", color: "white" }}
	>
		{label}
	</Button>
	
);
export default DiceButton;
