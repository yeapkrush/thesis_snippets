// Combining [MainStackScreen] and [AuthStackScreen] to render selectively depending on the user’s authentication status

const RootStack = createStackNavigator();
const RootStackScreen = ({ isSignedIn }) => (
	<RootStack.Navigator headerMode="none">
		{isSignedIn ? (
			<RootStack.Screen name="App" component={MainStackScreen} />
		) : (
			<RootStack.Screen name="Auth" component={AuthStackScreen} />
		)}
	</RootStack.Navigator>
);

export default RootStackScreen;
