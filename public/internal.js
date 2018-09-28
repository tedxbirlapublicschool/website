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
	document.getElementById("a-1-2").classList.add("w3-hide");
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

var numRegular = 0;
var numStudent = 0;
var qticketId = "";
var userData = [];

function qticketRegister1() {
	numRegular = document.getElementById("a-1-1-regular").value;
	numStudent = document.getElementById("a-1-1-student").value;
	qticketId = document.getElementById("a-1-1-qticket").value;
	document.getElementById("a-1-2-qticket").value = qticketId;
	if (numRegular != 0) {
		document.getElementById("a-1-2-type").innerHTML = "Regular";
	} else if (numStudent != 0) {
		document.getElementById("a-1-2-type").innerHTML = "Student";
	} else {
		showSnackbar("Must have atleast one ticket of any type!");
		return;
	}
	document.getElementById("a-1-1").classList.add("w3-hide");
	document.getElementById("a-1-2").classList.remove("w3-hide");
}

function qticketRegister2() {
	var name = document.getElementById("a-1-2-name").value;
	var email = document.getElementById("a-1-2-email").value;
	var mobile = document.getElementById("a-1-2-mobile").value;
	var type = "";
	if (numRegular != 0) {
		type = "regular";
	} else {
		type = "student";
	}
	firebase
		.firestore()
		.collection("registrations")
		.add({
			name: name,
			email: email,
			mobile: mobile,
			type: type,
			qticketId: qticketId
		})
		.then((docRef) => {
			var qrcode = new QRCode("test", {
				text: docRef.id,
				width: 128,
				height: 128,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.H
			});
			var canvas = document
				.getElementById("test")
				.querySelector("canvas");
			var dataURL = canvas.toDataURL();
			document.getElementById("test").innerHTML = "";
			userData.push({
				ticketId: docRef.id,
				name: name,
				type: type,
				qr: dataURL
			});
			if (type == "regular") {
				numRegular--;
			} else {
				numStudent--;
			}
			if (numRegular != 0) {
				document.getElementById("a-1-2-type").innerHTML = "Regular";
				showSnackbar(
					"Remaining:-<br>Regular: " +
						numRegular +
						"<br>Student: " +
						numStudent
				);
				document.getElementById("a-1-2-name").value = "";
			} else if (numStudent != 0) {
				document.getElementById("a-1-2-type").innerHTML = "Student";
				showSnackbar(
					"Remaining:-<br>Regular: " +
						numRegular +
						"<br>Student: " +
						numStudent
				);
				document.getElementById("a-1-2-name").value = "";
			} else {
				var documentContent = "";
				for (let index = 0; index < userData.length; index++) {
					documentContent += `<table class="module" role="module" data-type="code" border="1" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
		<td height="220px" width="100%" valign="top" style="border: solid; height:220px; min-width:750px; margin: 20px;">
  <img src="${
		userData[index].qr
  }" style="float: left; margin: 10px;" width="200px" height="200px">
  <p style="font-size: 25px; margin: 10px; margin-top: 20px">TEDxBirlaPublicSchool</p>
  <p style="font-size: 18px;">Ticket Number: ${userData[index].ticketId}</p>
  <p style="font-size: 18px;">Name: ${userData[index].name}</p>
  <p style="font-size: 18px;">Ticket Type: ${userData[index].type}</p>
        </td>
      </tr>
    </table>`;
				}
				var myWindow = window.open("", "_blank");
				myWindow.document.write(
					`<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->

    <style type="text/css">
      body, p, div {
        font-family: arial;
        font-size: 14px;
      }
      body {
        color: #000000;
      }
      body a {
        color: #1188E6;
        text-decoration: none;
      }
      p { margin: 0; padding: 0; }
      table.wrapper {
        width:100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      @media screen and (max-width:480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
            text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 480px !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    </style>
    <!--user entered Head Start-->

     <!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size: 14px; font-family: arial; color: #000000; background-color: #ffffff;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffffff">
          <tr>
            <td valign="top" bgcolor="#ffffff" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
                          <center>
                          <table><tr><td width="600">
                          <![endif]-->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                            <tr>
                              <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff" width="100%" align="left">

    <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
           style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
      <tr>
        <td role="module-content">
          <p></p>
        </td>
      </tr>
    </table>

    <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:100% !important;width:100%;height:auto !important;" src="https://marketing-image-production.s3.amazonaws.com/uploads/1138b57e9333a475e438aa27b26e8b076871083d94f62c41fa0ed3e70bbe815fa3917b2608fb3df6e7636fa349e7319d3b091d662ed589082ea19323b9908ca5.png" alt="TEDxBirlaPublicSchool" width="600">
        </td>
      </tr>
	</table>` +
						documentContent +
						`</td>
                            </tr>
                          </table>
                          <!--[if mso]>
                          </td></tr></table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>`
				);
				myWindow.stop();
				document.getElementById("a-1-2-name").value = "";
				document.getElementById("a-1-2-email").value = "";
				document.getElementById("a-1-2-mobile").value = "";
				document.getElementById("a-1-2-qticket").value = "";
				document.getElementById("a-1-1-qticket").value = "";
				document.getElementById("a-1-1-regular").value = "";
				document.getElementById("a-1-1-student").value = "";
				userData = [];
				back();
				return;
			}
		})
		.catch((err) => {
			showSnackbar(err.message);
			return;
		});
}

function ticketRegister() {
	var name = document.getElementById("a-2-1-name").value;
	var email = document.getElementById("a-2-1-email").value;
	var mobile = document.getElementById("a-2-1-mobile").value;
	var type = "";
	if (document.getElementById("a-2-1-radio1").checked) {
		type = "Regular";
	} else if (document.getElementById("a-2-1-radio2").checked) {
		type = "Student";
	} else if (document.getElementById("a-2-1-radio3").checked) {
		type = "Teacher";
	} else {
		type = "Invitee";
	}
	firebase
		.firestore()
		.collection("registrations")
		.add({
			name: name,
			email: email,
			mobile: mobile,
			type: type
		})
		.then((docRef) => {
			var qrcode = new QRCode("test", {
				text: docRef.id,
				width: 128,
				height: 128,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.H
			});
			var canvas = document
				.getElementById("test")
				.querySelector("canvas");
			var dataURL = canvas.toDataURL();
			document.getElementById("test").innerHTML = "";
			var userDataTemp = {
				ticketId: docRef.id,
				name: name,
				type: type,
				qr: dataURL
			};
			var documentContent = "";
			documentContent += `<table class="module" role="module" data-type="code" border="1" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
		<td height="220px" width="100%" valign="top" style="border: solid; height:220px; min-width:750px; margin: 20px;">
  <img src="${
		userDataTemp.qr
  }" style="float: left; margin: 10px;" width="200px" height="200px">
  <p style="font-size: 25px; margin: 10px; margin-top: 20px">TEDxBirlaPublicSchool</p>
  <p style="font-size: 18px;">Ticket Number: ${userDataTemp.ticketId}</p>
  <p style="font-size: 18px;">Name: ${userDataTemp.name}</p>
  <p style="font-size: 18px;">Ticket Type: ${userDataTemp.type}</p>
        </td>
      </tr>
    </table>`;
			var myWindow = window.open("", "_blank");
			myWindow.document.write(
				`<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->

    <style type="text/css">
      body, p, div {
        font-family: arial;
        font-size: 14px;
      }
      body {
        color: #000000;
      }
      body a {
        color: #1188E6;
        text-decoration: none;
      }
      p { margin: 0; padding: 0; }
      table.wrapper {
        width:100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      @media screen and (max-width:480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
            text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 480px !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    </style>
    <!--user entered Head Start-->

     <!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size: 14px; font-family: arial; color: #000000; background-color: #ffffff;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffffff">
          <tr>
            <td valign="top" bgcolor="#ffffff" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
                          <center>
                          <table><tr><td width="600">
                          <![endif]-->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                            <tr>
                              <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff" width="100%" align="left">

    <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
           style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
      <tr>
        <td role="module-content">
          <p></p>
        </td>
      </tr>
    </table>

    <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:100% !important;width:100%;height:auto !important;" src="https://marketing-image-production.s3.amazonaws.com/uploads/1138b57e9333a475e438aa27b26e8b076871083d94f62c41fa0ed3e70bbe815fa3917b2608fb3df6e7636fa349e7319d3b091d662ed589082ea19323b9908ca5.png" alt="TEDxBirlaPublicSchool" width="600">
        </td>
      </tr>
	</table>` +
					documentContent +
					`</td>
                            </tr>
                          </table>
                          <!--[if mso]>
                          </td></tr></table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>`
			);
			myWindow.stop();
			document.getElementById("a-2-1-name").value = "";
			document.getElementById("a-2-1-email").value = "";
			document.getElementById("a-2-1-mobile").value = "";
			back();
			return;
		})
		.catch((err) => {
			showSnackbar(err.message);
			return;
		});
}

function ticketRetrieve() {
	var ticketId = document.getElementById("a-3-1-name").value;
	firebase
		.firestore()
		.collection("tickets")
		.doc(ticketId)
		.get()
		.then((doc) => {
			doc = doc.data();
			var qrcode = new QRCode("test", {
				text: ticketId,
				width: 128,
				height: 128,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.H
			});
			var canvas = document
				.getElementById("test")
				.querySelector("canvas");
			var dataURL = canvas.toDataURL();
			document.getElementById("test").innerHTML = "";
			var documentContent = "";
			documentContent += `<table class="module" role="module" data-type="code" border="1" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
		<td height="220px" width="100%" valign="top" style="border: solid; height:220px; min-width:750px; margin: 20px;">
  <img src="${dataURL}" style="float: left; margin: 10px;" width="200px" height="200px">
  <p style="font-size: 25px; margin: 10px; margin-top: 20px">TEDxBirlaPublicSchool</p>
  <p style="font-size: 18px;">Ticket Number: ${ticketId}</p>
  <p style="font-size: 18px;">Name: ${doc.name}</p>
  <p style="font-size: 18px;">Ticket Type: ${doc.type}</p>
        </td>
      </tr>
    </table>`;
			var myWindow = window.open("", "_blank");
			myWindow.document.write(
				`<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->

    <style type="text/css">
      body, p, div {
        font-family: arial;
        font-size: 14px;
      }
      body {
        color: #000000;
      }
      body a {
        color: #1188E6;
        text-decoration: none;
      }
      p { margin: 0; padding: 0; }
      table.wrapper {
        width:100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      @media screen and (max-width:480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
            text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 480px !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    </style>
    <!--user entered Head Start-->

     <!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size: 14px; font-family: arial; color: #000000; background-color: #ffffff;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffffff">
          <tr>
            <td valign="top" bgcolor="#ffffff" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
                          <center>
                          <table><tr><td width="600">
                          <![endif]-->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                            <tr>
                              <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff" width="100%" align="left">

    <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
           style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
      <tr>
        <td role="module-content">
          <p></p>
        </td>
      </tr>
    </table>

    <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:100% !important;width:100%;height:auto !important;" src="https://marketing-image-production.s3.amazonaws.com/uploads/1138b57e9333a475e438aa27b26e8b076871083d94f62c41fa0ed3e70bbe815fa3917b2608fb3df6e7636fa349e7319d3b091d662ed589082ea19323b9908ca5.png" alt="TEDxBirlaPublicSchool" width="600">
        </td>
      </tr>
	</table>` +
					documentContent +
					`</td>
                            </tr>
                          </table>
                          <!--[if mso]>
                          </td></tr></table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>`
			);
			myWindow.stop();
		})
		.catch((err) => {
			showSnackbar(err.message);
			return;
		});
}
