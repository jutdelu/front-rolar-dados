import { Box, Typography } from "@mui/material";

const Footer = ({ text }) => (
	<Box
		component="footer"
		sx={{
			mt: 4,
			color: "gray",
			textAlign: "center",
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<Typography>{text}</Typography>
	</Box>
);

export default Footer;
