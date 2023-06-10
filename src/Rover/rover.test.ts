describe('Rover', () => {
	it('can be created', () => {
		// Arrange
		const expected = true;

		// Act
		const result = createRover();

		// Assert
		expect(result).toBe(expected);
	});
});
