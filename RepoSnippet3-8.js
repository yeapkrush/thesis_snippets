// Implementation of Google authentication

async function onGoogleButtonPress() {
	try {
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn();

		// Create a Google credential with the ID token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		// Sign-in the user with the credential
		return auth().signInWithCredential(googleCredential);
	} catch (err) {
		console.log(err.message);
	}
}
