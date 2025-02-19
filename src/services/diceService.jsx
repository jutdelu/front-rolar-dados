const rollDice = async (faces) => {
	try {
		const response = await fetch(
			`http://localhost:3000/random?faces=${faces}`
		);
		const data = await response.json();
		return data.randomNumber;
	} catch (error) {
		console.error("Erro ao rolar o dado", error);
		return null;
	}
};
export default { rollDice };
