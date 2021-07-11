/*
 * Implemented function to disconnect from the connected biosensor
 */

const disconnectBLE = async () => {
	try {
		ble.manager.cancelTransaction('transactionIdBLE');
		await ble.manager.cancelDeviceConnection(BleDeviceId);
	} catch (err) {
		console.log(err);
	}

	// Clear the stored device info in [ble] State variable
	BleDevDisconnected();
};
