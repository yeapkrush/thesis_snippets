/*
 * Implemented code for email/password sign in
 */

// Function added to the Sign-in button
const signInFcn = async (email, password) => {
	try {
		// Few error checks before making the request
		if (email.length < 1) throw 'Email empty';
		if (password.length < 1) throw 'Password empty';

		// Sending the email and password to the server
		await auth().signInWithEmailAndPassword(email, password);
	} catch (err) {
		console.log(err);
	}
};
