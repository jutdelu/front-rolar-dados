import { Typography, Box } from "@mui/material";

const Header = ({ title }) => (

	
		<Typography
			variant="h2"
			component="header"
			gutterBottom
			sx={{
				color: 'black',
				textShadow: '2px 2px 4px rgba(143, 17, 228, 0.6)',
				fontWeight: 'bold',
			}}
		>
			{title}
		</Typography>

);

export default Header;
