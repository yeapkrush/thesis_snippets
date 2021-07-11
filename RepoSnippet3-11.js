// Configured <QRCodeScanner /> JSX code.

<QRCodeScanner
	showMarker={true}
	onRead={(e) => onSuccess(e)}
	flashMode={RNCamera.Constants.FlashMode.off}
	cameraStyle={{
		height: camSize,
		width: 200,
		marginTop: mgTop
	}}
/>;
