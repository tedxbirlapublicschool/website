import Velocity from "velocity-animate";

function trigger(key) {
	if (key == "initialLoad") {
		scrollfn();
	}
	if (key == "home") {
		manualscrollfn(key);
	}
	if (key == "about") {
		manualscrollfn(key);
	}
	if (key == "events") {
		manualscrollfn(key);
	}
	if (key == "speakers") {
		manualscrollfn(key);
	}
	if (key == "blog") {
		manualscrollfn(key);
	}
	if (key == "partners") {
		manualscrollfn(key);
	}
	if (key == "team") {
		manualscrollfn(key);
	}
}
function scrollfn() {
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
	}
	return window.addEventListener("scroll", function() {
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
function manualscrollfn(flag) {
	window.scrollTo(0, 0);
	if (flag != "home") {
		Velocity(
			document.getElementById("navbarlogo"),
			{ width: "350px", marginTop: "10px" },
			{ duration: "300" }
		);
		Velocity(
			document.getElementById("nav"),
			{ backgroundColor: "rgba(29,29,29,1)", backgroundColorAlpha: 1 },
			{ duration: "300" }
		);
		setTimeout(function() {
			console.log(flag);
			padding(flag);
			if (flag == "speakers") {
				background();
			}
		}, 300);
		setTimeout(function() {
			console.log(flag);
			padding(flag);
			if (flag == "speakers") {
				background();
			}
		}, 500);
	} else {
		var newwidth = window.innerWidth - 50 + "px";
		var newheight = window.innerHeight / 5 - 50 + "px";
		Velocity(
			document.getElementById("navbarlogo"),
			{ width: newwidth, marginTop: newheight },
			{ duration: "300" }
		);
		Velocity(
			document.getElementById("nav"),
			{ backgroundColor: "rgba(29,29,29,0)", backgroundColorAlpha: 0 },
			{ duration: "300" }
		);
	}
}
function background() {
	var dotty = document.getElementById("dotty");
	var w = (dotty.width = window.innerWidth),
		h = (dotty.height = window.innerHeight),
		sum = w + h,
		ctx = dotty.getContext("2d"),
		opts = {
			side: 15,
			picksParTick: 2,
			baseTime: 40,
			addedTime: 10,

			colors: [
				"rgba(49,56,141,alp)",
				"rgba(254,8,97,alp)",
				"rgba(253,255,86,alp)"
			],

			addedAlpha: 20,
			strokeColor: "rgb(43,45,53)",

			hueSpeed: 0.2,
			repaintAlpha: 1
		},
		difX = (Math.sqrt(3) * opts.side) / 2, // height of a equilateral triangle
		difY = (opts.side * 3) / 2, // side of a triangle ( because it goes down to a vertex ) then half a side of the triangle in the hex below: s + s/2 = s*3/2
		rad = Math.PI / 6, // TAU / 6 = PI / 3 I thought, but apparently this way works better
		cos = Math.cos(rad) * opts.side,
		sin = Math.sin(rad) * opts.side,
		hexs = [],
		tick = 0;

	function loop() {
		window.requestAnimationFrame(loop);

		tick += opts.hueSpeed;

		ctx.shadowBlur = 0;
		ctx.fillStyle = "rgba(32,35,45,alp)".replace("alp", opts.repaintAlpha);
		ctx.fillRect(0, 0, w, h);

		for (var i = 0; i < opts.picksParTick; ++i)
			hexs[(Math.random() * hexs.length) | 0].pick();

		hexs.map(function(hex) {
			hex.step();
		});
	}
	function Hex(x, y) {
		this.x = x;
		this.y = y;
		this.sum = this.x + this.y;
		this.picked = false;
		this.time = 0;
		this.targetTime = 0;

		this.xs = [
			this.x + cos,
			this.x,
			this.x - cos,
			this.x - cos,
			this.x,
			this.x + cos
		];
		this.ys = [
			this.y - sin,
			this.y - opts.side,
			this.y - sin,
			this.y + sin,
			this.y + opts.side,
			this.y + sin
		];
	}

	Hex.prototype.pick = function() {
		this.color = opts.colors[(Math.random() * opts.colors.length) | 0];
		this.picked = true;
		this.time = this.time || 0;
		this.targetTime =
			this.targetTime ||
			(opts.baseTime + opts.addedTime * Math.random()) | 0;
	};
	Hex.prototype.step = function() {
		var prop = this.time / this.targetTime;

		ctx.beginPath();
		ctx.moveTo(this.xs[0], this.ys[0]);
		for (var i = 1; i < this.xs.length; ++i)
			ctx.lineTo(this.xs[i], this.ys[i]);
		ctx.lineTo(this.xs[0], this.ys[0]);

		if (this.picked) {
			++this.time;

			if (this.time >= this.targetTime) {
				this.time = 0;
				this.targetTime = 0;
				this.picked = false;
			}

			ctx.fillStyle = ctx.shadowColor = this.color.replace(
				"alp",
				Math.sin(prop * Math.PI)
			);
			ctx.fill();
		} else {
			ctx.strokeStyle = ctx.shadowColor = opts.strokeColor;
			ctx.stroke();
		}
	};

	for (var x = 0; x < w; x += difX * 2) {
		var i = 0;

		for (var y = 0; y < h; y += difY) {
			++i;
			hexs.push(new Hex(x + difX * (i % 2), y));
		}
	}
	loop();

	return window.addEventListener("resize", function() {
		w = dotty.width = window.innerWidth;
		h = dotty.height = window.innerHeight;
		sum = w + h;

		hexs.length = 0;
		for (var x = 0; x < w; x += difX * 2) {
			var i = 0;

			for (var y = 0; y < h; y += difY) {
				++i;
				hexs.push(new Hex(x + difX * (i % 2), y));
			}
		}
	});
}
function padding(division) {
	var paddingTop = document.getElementById("nav").clientHeight;
	division = document.getElementById(division);
	division.style.marginTop = paddingTop + "px";
}

export { trigger, scrollfn, manualscrollfn, background, padding };
