import firebase from "firebase";
var config = {
	apiKey: "AIzaSyAc0JyGCT5IZPRYNnl5nZJ2kk1OA4_deDE",
	authDomain: "tedxbps.firebaseapp.com",
	databaseURL: "https://tedxbps.firebaseio.com",
	projectId: "tedxbps",
	storageBucket: "tedxbps.appspot.com",
	messagingSenderId: "774514740494"
};
firebase.initializeApp(config);
export { firebase };
