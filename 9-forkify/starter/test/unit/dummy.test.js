/* eslint-disable no-undef */
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

//async test callback function , await result function
test('Sum adds numbers asynchronously', async () => {
	const result = await sum(3, 7);
	const expected = 10;

	expect(result).toBe(expected);
});

test('Subtract subtracts numbers', async () => {
	const result = subtract(7, 3);
	const expected = 4;

	expect(result).toBe(expected);
});
