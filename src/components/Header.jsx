import { Typography, Box } from "@mui/material";

const Header = ({ title }) => (
	<Box
		display="flex"
		justifyContent="center"
		alignItems="center"
		width="100%"
		mt={2}
	>
		<Typography
			variant="h2"
			component="header"
			gutterBottom
		>
			{title}
		</Typography>
	</Box>
);

export default Header;
