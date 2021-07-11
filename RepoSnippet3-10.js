/*
 * Implemented code to retrieve the latest biosensor measurement and analysis techniques from the cloud server. 
 */

const fetchSensorList = async () => {
	try {
		// We download the latest biosensor data from our cloud server
		const { data } = await firebase.functions().httpsCallable('getSensorList');

		// Action Creator to update [sensor] State in Redux Store
		updateSensorList(data);

		// We convert the [data] to string and save it in device storage
		const jsonValue = JSON.stringify(data);
		await AsyncStorage.setItem('@sensorList', jsonValue);
	} catch (error) {
		// For some reason, we could not reach the server
		console.log(error);

		// Retreive the biosensor data from local storage
		const jsonValue = await AsyncStorage.getItem('@sensorList');
		if (jsonValue != null) {
			// Convert the string of data to an object
			const data = JSON.parse(jsonValue);

			// Action Creator to update [sensor] State in Redux Store
			updateSensorList(data);
		} else {
			// Print error if local storage is also empty
			console.log('Local sensor list empty');
		}
	}
};
