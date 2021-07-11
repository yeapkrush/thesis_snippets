/*
 * Implementation of Facebook authentication
 *
 */

async function onFacebookButtonPress() {
	try {
		// Get the users login result
		const result = await LoginManager.logInWithPermissions([ 'public_profile', 'email' ]);
		if (result.isCancelled) {
			throw 'User cancelled the login process';
		}

		// If login successful, get Access Token from Facebook
		const data = await AccessToken.getCurrentAccessToken();
		if (!data) {
			throw 'Something went wrong obtaining access token';
		}

		// Create a Facebook credential using the Access Token
		const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

		// Sign-in the user with credential
		return auth().signInWithCredential(facebookCredential);
	} catch (err) {
		console.log(err.message);
	}
}
