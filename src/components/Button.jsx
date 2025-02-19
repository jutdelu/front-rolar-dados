const Button = ({ label, onClick, color }) => (
	<button
		className={`px-4 py-2 bg-${color}-500 text-white rounded-lg shadow`}
		onClick={onClick}
	>
		{label}
	</button>
);
export default Button;
