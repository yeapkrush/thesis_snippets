/*
 * Implemented code of the [onSuccess()] function to extract QR code data
 */

const onSuccess = ({ data }) => {
	try {
		// Extracting the QR code data
		// If one statement fails, then it will jump to the catch(err)
		const batchId = data.slice(0, 6);
		const sensorType = data.slice(6, 9);
		const cal1 = parseFloat(data.slice(9, 16));
		const cal0 = parseFloat(data.slice(16, 22));
		const MFD = `${data.slice(4, 6)}.${data.slice(2, 4)}.20${data.slice(0, 2)}`;

		//Search the scanned biosensor type in the local sensor list
		const FilteredSensor = localSensorList.filter((item) => {
			return parseInt(item.id) === parseInt(sensorType);
		});

		// If we found the biosensor in the local list then
		// the if statement will be true
		if (FilteredSensor.length === 1) {
			const sensor = FilteredSensor[0];
			// Action Creator for updating the State variable in the Redux Store
			updateScannedSensor({
				name: sensor.name,
				image: sensor.iURI,
				batchId,
				sensorType,
				cal1,
				cal0,
				MFD,
				script: sensor.script
			});
		}
	} catch (err) {
		console.log('Error, ScanSensorScreen: ' + err);
		updateScannedSensor({});
	}
};
