const DiceResult = ({ result }) =>
	result !== null && (
		<p className="mt-4 text-xl">Resultado do dado: {result}</p>
	);
export default DiceResult;
