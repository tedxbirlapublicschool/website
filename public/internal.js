var config = {
	apiKey: "AIzaSyAc0JyGCT5IZPRYNnl5nZJ2kk1OA4_deDE",
	authDomain: "tedxbps.firebaseapp.com",
	databaseURL: "https://tedxbps.firebaseio.com",
	projectId: "tedxbps",
	storageBucket: "tedxbps.appspot.com",
	messagingSenderId: "774514740494"
};
firebase.initializeApp(config);

function showSnackbar(text) {
	// Get the snackbar DIV
	var x = document.getElementById("snackbar");

	// Add the "show" class to DIV
	x.className = "show";
	x.innerHTML = text;

	// After 5 seconds, remove the show class from DIV
	setTimeout(function() {
		x.className = x.className.replace("show", "");
	}, 5000);
}

function signIn() {
	var email = document.getElementById("login-email").value;
	var password = document.getElementById("login-pass").value;
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch((err) => {
			console.log(err);
			if (err.code == "auth/invalid-email") {
				showSnackbar("Invalid Email ID.");
			} else if (err.code == "auth/user-disabled") {
				showSnackbar("User has been disabled.");
			} else if (err.code == "auth/user-not-found") {
				showSnackbar("User not found.");
			} else if (err.code == "auth/wrong-password") {
				showSnackbar("Wrong username/password combination.");
			} else {
				showSnackbar("Sign in error. Please try again later!");
			}
		});

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			var email = user.email;
			document.getElementById("loggedIn").classList.remove("w3-hide");
			document.getElementById("login").classList.add("w3-hide");
			document.getElementById("a-1").classList.remove("w3-hide");
			document.getElementById("a-1-1").classList.add("w3-hide");
			document.getElementById("a-2-1").classList.add("w3-hide");
			document.getElementById("a-3-1").classList.add("w3-hide");
			document.getElementById("button-back").classList.remove("w3-hide");
			document
				.getElementById("button-logout")
				.classList.remove("w3-hide");
			document.getElementById("header-title").innerHTML = "Menu";
		} else {
			// User is signed out.
			document.getElementById("loggedIn").classList.add("w3-hide");
			document.getElementById("login").classList.remove("w3-hide");
			document.getElementById("a-1").classList.add("w3-hide");
			document.getElementById("a-1-1").classList.add("w3-hide");
			document.getElementById("a-2-1").classList.add("w3-hide");
			document.getElementById("a-3-1").classList.add("w3-hide");
			document.getElementById("button-back").classList.add("w3-hide");
			document.getElementById("button-logout").classList.add("w3-hide");
			document.getElementById("header-title").innerHTML = "Sign In";
		}
	});
}

function back() {
	document.getElementById("a-1").classList.remove("w3-hide");
	document.getElementById("a-1-1").classList.add("w3-hide");
	document.getElementById("a-2-1").classList.add("w3-hide");
	document.getElementById("a-3-1").classList.add("w3-hide");
}

function logout() {
	firebase.auth().signOut();
}

function modeSelect() {
	if (document.getElementById("a-1-radio1").checked) {
		document.getElementById("a-1").classList.add("w3-hide");
		document.getElementById("a-1-1").classList.remove("w3-hide");
	} else if (document.getElementById("a-1-radio2").checked) {
		document.getElementById("a-1").classList.add("w3-hide");
		document.getElementById("a-2-1").classList.remove("w3-hide");
	} else if (document.getElementById("a-1-radio3").checked) {
		document.getElementById("a-1").classList.add("w3-hide");
		document.getElementById("a-3-1").classList.remove("w3-hide");
	} else {
		showSnackbar("Please select a mode !");
	}
}

function qticketRegister() {}

function ticketRegister() {}
