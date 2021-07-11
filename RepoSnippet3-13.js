/* 
 * Implemented code for initiating a BLE device scan
 */

useEffect(() => {
	// Starting the device scan using the instance of BleManager which
	// we created in the Redux Store
	ble.manager.startDeviceScan(null, null, (err, device) => {
		if (err) {
			return console.log(err);
		}

		// We need to filter out hidden BLE devices
		if (device.name != null) {
			// We check whether the found BLE device is already in the list
			if (!availableDevices.some((element) => element.id === device.id)) {
				// We push the newly found device to the array
				availableDevices.push({ name: device.name, id: device.id });
			}
		}
	});

	// Clean-up function
	return () => {
		ble.manager.stopDeviceScan();
	};
}, []);
