function scrollfn() {
	console.log(window.location.pathname);
	const logoimg = document.getElementById("navbarlogo");
	const navbar = document.getElementById("nav");
	if (window.location.pathname == "/") {
		logoimg.style.width = window.innerWidth - 50 + "px";
		logoimg.style.marginTop = window.innerHeight / 5 - 50 + "px";
		logoimg.style.marginBottom = "10px";
		navbar.style.backgroundColor = "rgba(29,29,29,0)";
	} else {
		logoimg.style.width = "350px";
		logoimg.style.marginTop = "10px";
		logoimg.style.marginBottom = "10px";
		navbar.style.backgroundColor = "rgba(29,29,29,1)";
		var paddingTop = document.getElementById("nav").clientHeight;
		var division = document.getElementById(
			window.location.pathname.substr(1)
		);
		division.style.marginTop = paddingTop + "px";
	}
	window.addEventListener("scroll", function() {
		if (window.location.pathname == "/") {
			var scrollvalue = Math.floor(window.scrollY);
			var percent = scrollvalue / 200;

			var maxwidth = window.innerWidth - 50;
			var percentvalue1 = maxwidth * percent;
			var width = maxwidth - percentvalue1;
			if (width <= maxwidth && width >= 350) {
				logoimg.style.width = width + "px";
			} else {
				logoimg.style.width = "350px";
			}

			var maxheight = window.innerHeight / 5 - 50;
			var percentvalue2 = maxheight * percent;
			var height = maxheight - percentvalue2;
			if (height <= maxheight && height >= 10) {
				logoimg.style.marginTop = height + "px";
			} else {
				logoimg.style.marginTop = "10px";
			}

			navbar.style.backgroundColor = "rgba(29,29,29," + percent + ")";
		}
	});
}
function manualscrollfn(direction) {
	window.scrollTo(0, 0);
	if (direction == 1) {
		$("#navbarlogo").animate(
			{ width: "350px", marginTop: "10px" },
			"slow",
			"swing",
			function() {
				var paddingTop = document.getElementById("nav").clientHeight;
				var division = document.getElementById(
					window.location.pathname.substr(1)
				);
				division.style.marginTop = paddingTop + "px";
			}
		);
		$("#nav").animate(
			{ backgroundColor: "rgba(29,29,29,1)" },
			"slow",
			"swing"
		);
	} else {
		var newwidth = window.innerWidth - 50 + "px";
		var newheight = window.innerHeight / 5 - 50 + "px";
		$("#navbarlogo").animate(
			{ width: newwidth, marginTop: newheight },
			"slow",
			"swing"
		);
		$("#nav").animate(
			{ backgroundColor: "rgba(29,29,29,0)" },
			"slow",
			"swing"
		);
	}
}
