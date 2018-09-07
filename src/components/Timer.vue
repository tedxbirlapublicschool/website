<template>
	<div id="timer">
		<div class="container"></div>
		<div class="container2">
			<h1>Time is running out!<br>Reserve your seats!</h1>
			<button>Get Tickets</button>
		</div>
	</div>
</template>
<script>
export default {
	name: "Timer",
	props: ["date", "month", "year"],
	mounted: function() {
		var vm = this;
		class Countdown {
			get TIMESTAMP_SECOND() {
				return 1000;
			}
			get TIMESTAMP_MINUTE() {
				return 60 * this.TIMESTAMP_SECOND;
			}
			get TIMESTAMP_HOUR() {
				return 60 * this.TIMESTAMP_MINUTE;
			}
			get TIMESTAMP_DAY() {
				return 24 * this.TIMESTAMP_HOUR;
			}
			get TIMESTAMP_WEEK() {
				return 7 * this.TIMESTAMP_DAY;
			}
			get TIMESTAMP_YEAR() {
				return 365 * this.TIMESTAMP_DAY;
			}

			/**
			 * @param {{}} userOptions structure like this.options below
			 */
			constructor(userOptions) {
				this.options = {
					cont: null,
					countdown: true,
					date: {
						year: 0,
						month: 0,
						day: 0,
						hour: 0,
						minute: 0,
						second: 0
					},
					endCallback: null,
					outputFormat: "year|week|day|hour|minute|second",
					outputTranslation: {
						year: "Years",
						week: "Weeks",
						day: "Days",
						hour: "Hours",
						minute: "Minutes",
						second: "Seconds"
					}
				};

				this.lastTick = null;
				this.intervalsBySize = [
					"year",
					"week",
					"day",
					"hour",
					"minute",
					"second"
				];
				this.elementClassPrefix = "countDown_";
				this.interval = null;
				this.digitConts = {};

				this._assignOptions(this.options, userOptions);
			}

			start() {
				let date, dateData;

				this._fixCompatibility();

				date = this._getDate(this.options.date);

				dateData = this._prepareTimeByOutputFormat(date);

				this._writeData(dateData);

				this.lastTick = dateData;

				if (this.options.countdown && date.getTime() <= Date.now()) {
					if (typeof this.options.endCallback === "function") {
						this.stop();
						this.options.endCallback();
					}
				} else {
					this.interval = setInterval(() => {
						this._updateView(this._prepareTimeByOutputFormat(date));
					}, this.TIMESTAMP_SECOND);
				}
			}

			stop() {
				if (this.interval !== null) {
					clearInterval(this.interval);
				}
			}

			/**
			 * @param {Date|Object|String|Number} date
			 *
			 * @returns {Date}
			 * @private
			 */
			_getDate(date) {
				if (typeof date === "object") {
					if (date instanceof Date) {
						return date;
					} else {
						let expectedValues = {
							day: 0,
							month: 0,
							year: 0,
							hour: 0,
							minute: 0,
							second: 0
						};

						for (let i in expectedValues) {
							if (
								expectedValues.hasOwnProperty(i) &&
								date.hasOwnProperty(i)
							) {
								expectedValues[i] = date[i];
							}
						}

						return new Date(
							expectedValues.year,
							expectedValues.month > 0
								? expectedValues.month - 1
								: expectedValues.month,
							expectedValues.day,
							expectedValues.hour,
							expectedValues.minute,
							expectedValues.second
						);
					}
				} else if (typeof date === "number" || typeof date === "string") {
					return new Date(date);
				} else {
					return new Date();
				}
			}

			/**
			 * @param {Date} dateObj
			 *
			 * @return {{}}
			 * @private
			 */
			_prepareTimeByOutputFormat(dateObj) {
				let usedIntervals,
					output = {},
					timeDiff;

				usedIntervals = this.intervalsBySize.filter((item) => {
					return this.options.outputFormat.split("|").indexOf(item) !== -1;
				});

				timeDiff = this.options.countdown
					? dateObj.getTime() - Date.now()
					: Date.now() - dateObj.getTime();

				usedIntervals.forEach((item) => {
					let value;
					if (timeDiff > 0) {
						switch (item) {
							case "year":
								value = Math.trunc(timeDiff / this.TIMESTAMP_YEAR);
								timeDiff -= value * this.TIMESTAMP_YEAR;
								break;
							case "week":
								value = Math.trunc(timeDiff / this.TIMESTAMP_WEEK);
								timeDiff -= value * this.TIMESTAMP_WEEK;
								break;
							case "day":
								value = Math.trunc(timeDiff / this.TIMESTAMP_DAY);
								timeDiff -= value * this.TIMESTAMP_DAY;
								break;
							case "hour":
								value = Math.trunc(timeDiff / this.TIMESTAMP_HOUR);
								timeDiff -= value * this.TIMESTAMP_HOUR;
								break;
							case "minute":
								value = Math.trunc(timeDiff / this.TIMESTAMP_MINUTE);
								timeDiff -= value * this.TIMESTAMP_MINUTE;
								break;
							case "second":
								value = Math.trunc(timeDiff / this.TIMESTAMP_SECOND);
								timeDiff -= value * this.TIMESTAMP_SECOND;
								break;
						}
					} else {
						value = "00";
					}
					output[item] = (("" + value).length < 2
						? "0" + value
						: "" + value
					).split("");
				});

				return output;
			}

			_fixCompatibility() {
				Math.trunc =
					Math.trunc ||
					function(x) {
						if (isNaN(x)) {
							return NaN;
						}
						if (x > 0) {
							return Math.floor(x);
						}
						return Math.ceil(x);
					};
			}

			/**
			 * @param {{}} data
			 * @private
			 */
			_writeData(data) {
				let code = `<div class="${this.elementClassPrefix}cont">`,
					intervalName;

				for (intervalName in data) {
					if (data.hasOwnProperty(intervalName)) {
						let element = `<div class="${
								this.elementClassPrefix
							}_interval_basic_cont">
											<div class="${this._getIntervalContCommonClassName()} ${this._getIntervalContClassName(
								intervalName
							)}">`,
							intervalDescription = `<div class="${
								this.elementClassPrefix
							}interval_basic_cont_description">
														${
																this.options
																	.outputTranslation[
																	intervalName
																]
															}
													</div>`;
						data[intervalName].forEach((digit, index) => {
							element += `<div class="${this._getDigitContCommonClassName()} ${this._getDigitContClassName(
								index
							)}">
												${this._getDigitElementString(digit, 0)}
											</div>`;
						});

						code += element + "</div>" + intervalDescription + "</div>";
					}
				}

				this.options.cont.innerHTML = code + "</div>";
				this.lastTick = data;
			}

			/**
			 * @param {Number} newDigit
			 * @param {Number} lastDigit
			 *
			 * @returns {String}
			 * @private
			 */
			_getDigitElementString(newDigit, lastDigit) {
				return `<div class="${this.elementClassPrefix}digit_last_placeholder">
								<div class="${
									this.elementClassPrefix
								}digit_last_placeholder_inner">
									${lastDigit}
								</div>
							</div>
							<div class="${
								this.elementClassPrefix
							}digit_new_placeholder">${newDigit}</div>
							<div class="${
								this.elementClassPrefix
							}digit_last_rotate">${lastDigit}</div>
							<div class="${this.elementClassPrefix}digit_new_rotate">
								<div class="${
									this.elementClassPrefix
								}digit_new_rotated">
									<div class="${
										this.elementClassPrefix
									}digit_new_rotated_inner">
										${newDigit}
									</div>
								</div>
							</div>`;
			}

			/**
			* @param {{}} data
			* @private
			*/
			_updateView(data) {
				for (let intervalName in data) {
					if (data.hasOwnProperty(intervalName)) {
						data[intervalName].forEach((digit, index) => {
							if (
								this.lastTick !== null &&
								this.lastTick[intervalName][index] !==
									data[intervalName][index]
							) {
								this._getDigitCont(
									intervalName,
									index
								).innerHTML = this._getDigitElementString(
									data[intervalName][index],
									this.lastTick[intervalName][index]
								);
							}
						});
					}
				}

				this.lastTick = data;
			}

			/**
			* @param {String} intervalName
			* @param {String} index
			*
			* @returns {HTMLElement}
			* @private
			*/
			_getDigitCont(intervalName, index) {
				if (!this.digitConts[`${intervalName}_${index}`]) {
					this.digitConts[
						`${intervalName}_${index}`
					] = this.options.cont.querySelector(
						`.${this._getIntervalContClassName(
							intervalName
						)} .${this._getDigitContClassName(index)}`
					);
				}

				return this.digitConts[`${intervalName}_${index}`];
			}

			/**
			* @param {String} intervalName
			*
			* @returns {String}
			* @private
			*/
			_getIntervalContClassName(intervalName) {
				return `${this.elementClassPrefix}interval_cont_${intervalName}`;
			}

			/**
			* @returns {String}
			* @private
			*/
			_getIntervalContCommonClassName() {
				return `${this.elementClassPrefix}interval_cont`;
			}

			/**
			* @param {String} index
			*
			* @returns {String}
			* @private
			*/
			_getDigitContClassName(index) {
				return `${this.elementClassPrefix}digit_cont_${index}`;
			}

			/**
			* @returns {String}
			* @private
			*/
			_getDigitContCommonClassName() {
				return `${this.elementClassPrefix}digit_cont`;
			}

			/**
			* @param {{}} options
			* @param {{}} userOptions
			*/
			_assignOptions(options, userOptions) {
				for (let i in options) {
					if (options.hasOwnProperty(i) && userOptions.hasOwnProperty(i)) {
						if (
							options[i] !== null &&
							typeof options[i] === "object" &&
							typeof userOptions[i] === "object"
						) {
							this._assignOptions(options[i], userOptions[i]);
						} else {
							options[i] = userOptions[i];
						}
					}
				}
			}
		}
		var cd = new Countdown({
			cont: document.querySelector('.container'),
			countdown: true,
			date: {
				year: vm.year,
				month: vm.month,
				day: vm.date,
				hour: 14,
				minute: 0,
				second: 0
			},
			endCallback: function(){
				console.log("end");
			},
			outputFormat: 'month|day|hour|minute|second',
		});
		cd.start();
	}
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Oswald");
#timer {
	width: 100vw;
	height: 60vh;
	background-color: #181818;
	text-align: center;
}

.container {
	display: inline-block;
	position: relative;
	width: 50vw;
	min-width: 650px;
	top: 50%;
	transform: translateY(-50%);
}

.container2 {
	font-family: "Oswald", sans-serif;
	font-size: 2em;
	color: whitesmoke;
	display: inline-block;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}

button {
	margin: 10px;
	display: inline block;
	border-radius: 12px;
	border: 0px;
	width: 250px;
	background-color: white;
	color: black;
}

.countDown_cont {
	font-family: Lato, Arial, Gadget, sans-serif;
	font-size: 13px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	color: #333;
}

.countDown_interval_cont {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: distribute;
	justify-content: space-around;
	width: auto;
}

.countDown_interval_cont:nth-child(n + 1):not(:last-child) {
	margin-right: 1em;
}

.countDown_interval_basic_cont {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
}

.countDown_interval_basic_cont_description {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	margin-left: 0.3em;
	margin-top: 0.3em;
	font-size: 1.2em;
	font-weight: bold;
	color: white;
	text-shadow: 0.1em 0.1em 0.1em #000000;
}

.countDown_digit_cont {
	-webkit-perspective: 3.2em;
	perspective: 3.2em;
	box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2);
	width: 1em;
	height: 1.6em;
	position: relative;
	line-height: 1.6em;
	font-size: 5em;
	font-weight: bold;
	border-radius: 0.08em;
}

.countDown_digit_cont:nth-child(n + 1):not(:last-child) {
	margin-right: 0.05em;
}

.countDown_digit_last_placeholder,
.countDown_digit_new_placeholder {
	position: absolute;
	left: 0;
	width: 100%;
	height: 50%;
	text-align: center;
	overflow: hidden;
}

.countDown_digit_last_placeholder {
	bottom: 0;
	background: white;
	border-radius: 0 0 0.08em 0.08em;
}

.countDown_digit_last_placeholder_inner {
	width: 100%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	bottom: 50%;
	position: absolute;
}

.countDown_digit_new_placeholder {
	top: 0;
	background: #f7f7f7;
	border-radius: 0.08em 0.08em 0 0;
}

.countDown_digit_last_rotate,
.countDown_digit_new_rotate {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	width: 100%;
	height: 50%;
	font-weight: bold;
	position: absolute;
	top: 0;
	overflow: hidden;
	-webkit-animation-duration: 0.4s;
	animation-duration: 0.4s;
	-webkit-animation-timing-function: linear;
	animation-timing-function: linear;
	border-radius: 0.08em 0.08em 0 0;
	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards;
	-webkit-transform-origin: 100% 100%;
	transform-origin: 100% 100%;
}

.countDown_digit_last_rotate:after,
.countDown_digit_new_rotate:after {
	content: "";
	position: absolute;
	z-index: -1;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	border-bottom: 0.01em solid rgba(0, 0, 0, 0.1);
}

.countDown_digit_last_rotate {
	-webkit-animation-name: countDown_flip_1;
	animation-name: countDown_flip_1;
	background: #f7f7f7;
}

.countDown_digit_new_rotate {
	-webkit-animation-name: countDown_flip_2;
	animation-name: countDown_flip_2;
	background: white;
}

.countDown_digit_new_rotated {
	-webkit-transform: rotateX(180deg);
	transform: rotateX(180deg);
	width: 100%;
	height: 100%;
}

.countDown_digit_new_rotated_inner {
	width: 100%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	bottom: 50%;
	position: absolute;
}
@-webkit-keyframes countDown_flip_1 {
	0% {
		-webkit-transform: rotateX(0deg);
		transform: rotateX(0deg);
		z-index: 1;
	}
	100% {
		-webkit-transform: rotateX(-180deg);
		transform: rotateX(-180deg);
		z-index: 0;
	}
}

@keyframes countDown_flip_1 {
	0% {
		-webkit-transform: rotateX(0deg);
		transform: rotateX(0deg);
		z-index: 1;
	}
	100% {
		-webkit-transform: rotateX(-180deg);
		transform: rotateX(-180deg);
		z-index: 0;
	}
}

@-webkit-keyframes countDown_flip_2 {
	0% {
		-webkit-transform: rotateX(0deg);
		transform: rotateX(0deg);
		z-index: 0;
	}
	100% {
		-webkit-transform: rotateX(-180deg);
		transform: rotateX(-180deg);
		z-index: 1;
	}
}

@keyframes countDown_flip_2 {
	0% {
		-webkit-transform: rotateX(0deg);
		transform: rotateX(0deg);
		z-index: 0;
	}
	100% {
		-webkit-transform: rotateX(-180deg);
		transform: rotateX(-180deg);
		z-index: 1;
	}
}
</style>
