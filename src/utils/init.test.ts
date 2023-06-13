describe('Initialise Mission', () => {
	it('should initialise a new mission', () => {
		// Act
		const mission = initialiseMission();

		// Assert
		expect(mission).toBeDefined();
	});
});
