/*
 * Configuring [firebase-admin] package with credentials 
 */

// Import firebase services credentials
const serviceAccount = require('./service_account.json');

// Grant access to admin to access Firebase services
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
