import { Button } from "@mui/material";
const DiceButton = ({ label, onClick }) => (
	<Button
	variant="contained"
    onClick={onClick}
    sx={{ fontSize: 20, padding: "5px 24px", backgroundColor: "rgba(143, 17, 228, 0.6)", color: "white" }}
	>
		{label}
	</Button>
	
);
export default DiceButton;
