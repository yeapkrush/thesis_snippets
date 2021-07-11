/*
 * Implemented code for connecting to a BLE device
 */

const connectToBleDev = async (device) => {
	// Stop scanning
	ble.manager.stopDeviceScan();

	try {
		// Connect to the BLE device
		const dev = await ble.manager.connectToDevice(device.id, { autoConnect: true });
		// Discover the services and characteristics of
		// the connected device
		const service = await ble.manager.discoverAllServicesAndCharacteristicsForDevice(device.id);

		// Start listing/monitoring the characteristic of interest
		ble.manager.monitorCharacteristicForDevice(
			device.id,
			'6E400001-B5A3-F393-E0A9-E50E24DCCA9E', // Service UUID
			'6E400003-B5A3-F393-E0A9-E50E24DCCA9E', // Characteristic UUID
			// Callback function triggered for every incoming data
			(err, msg) => {
				if (msg !== null) {
					const raw = base64.decode(msg.value);
					// Process the data with the Action Creator
					ProcessBleData(raw);
				}
			},
			'transactionIdBLE'
		);

		// Update the Redux Stare variable with the
		// newly connected device details
		BleDevConnected(device);
	} catch (err) {
		console.log(err);
	}
};
