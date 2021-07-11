// Implementation of the Main Stack in React Navigation

const MainStack = createStackNavigator();
const MainStackScreen = () => (
	<MainStack.Navigator
		screenOptions={{
			header: (props) => <MainHeader {...props} />
		}}
	>
		<MainStack.Screen name="Main" component={MainScreen} />
		<MainStack.Screen name="ScanSensor" component={ScanSensorScreen} />
		<MainStack.Screen name="BleDevicesScreen" component={BleDevicesScreen} />
		<MainStack.Screen name="PreviousResultsScreen" component={PreviousResultsScreen} />
		<MainStack.Screen name="MeasurementScreen" component={MeasurementScreen} />
		<MainStack.Screen name="MeasurementCompleteScreen" component={MeasurementCompleteScreen} />
		<MainStack.Screen name="ResultsScreen" component={ResultsScreen} />
	</MainStack.Navigator>
);
