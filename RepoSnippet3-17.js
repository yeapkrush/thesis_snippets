/* 
 * Implemented callback function for monitoring authentication state
 */

useEffect(() => {
	// auth().onAuthStateChanged() is provided by
	// [@react-native-firebase/auth]
	const subscriber = auth().onAuthStateChanged(async (user) => {
		// We pass the [user] to the Action Creator
		initializeAuth(user);
	});

	return subscriber; // Cleaning up the subscriber
}, []);
