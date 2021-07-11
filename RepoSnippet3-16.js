/*
 * Implemented function to retrieve user results from the cloud database
 */

const updateLocalResults = async (userId) => {
	const querySnapshot = await firestore()
		.collection('userSavedResults')
		.doc(userId)
		.collection('results')
		.orderBy('timeStamp', 'desc')
		.get();

	const results = [];
	try {
		querySnapshot.forEach((documentSnapshot) => {
			// We add each result to the [results] array
			results.push(documentSnapshot.data());
		});

		return results;
	} catch (e) {
		return null;
	}
};
