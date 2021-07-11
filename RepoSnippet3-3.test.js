// Cloud Function 2: Test case 3
//
test('returns "Test_URL" for authed request with devId', async () => {
	let result;
	const data = { deviceId: 'sampleId' };
	try {
		const response = await testFunction(data, getContext());
		result = response;
	} catch (err) {
		result = err;
	}
	// Determining the test result
	expect(result).toEqual('Test_URL');
});
