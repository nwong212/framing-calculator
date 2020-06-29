// )                )       )
// ( /(   (  (      ( /(    ( /(   (
// )\())  )\))(   ' )\())   )\())  )\ )
// ((_)\  ((_)()\ ) ((_)\   ((_)\  (()/(
// _((_) _(())\_)()  ((_)   _((_)  /(_))_
// | \| | \ \((_)/ / / _ \  | \| | (_)) __|
// | .` |  \ \/\/ / | (_) | | .` |   | (_ |
// |_|\_|   \_/\_/   \___/  |_|\_|    \___|
//
// Created by Nathan Wong
// https://nathanwong.studio
//
// Frame Depth Calculator v. 1.0
// Copyright 2020 Nathan Wong
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	frameDesign();
}

function frameDesign() {

	var rabbet = document.getElementById("rabbet");
	var rabbetEl = document.getElementById('frameside');
	var spacer = document.getElementById("spacer");
	var spacerEl = document.getElementById("svg-spacer");
	var topSelect = document.getElementById("topMat");
	var topEl = document.getElementById('svg-top');
	var bottomSelect = document.getElementById("bottomMat");
	var bottomEl = document.getElementById('svg-bottom');
	var backingBoard = document.getElementById("backing");
	var backingEl = document.getElementById('svg-board');
	var additional = document.getElementById("additional");
	var additionalEl = document.getElementById('svg-additional');
	var strainer = document.getElementById("strainer");
	var strainerEl = document.getElementById('svg-strainer');
	var strainerX = document.getElementById('svg-x')
	var glazing = document.getElementById("glazing");
	var glazingEl = document.getElementById('svg-glazing');
	var form = document.getElementById('frameCalc');
	var remainder = document.getElementById('remaining');
	var svgRemainder = document.getElementById('measurement-remainder');

//When Rabbet Changes
	rabbet.addEventListener("input", rabbetChanged);

	function rabbetChanged() {
		document.getElementById("measurement-rabbet").textContent = rabbet.value + "\42";
	}

//When Spacer Changes
	spacer.addEventListener("input", spacerd);

	function spacerd() {

		document.getElementById("measurement-spacer").textContent = spacer.value + "\42";

		if (spacer.value.length == 0 || spacer.value == 0) {

			spacer.value = 0

			document.getElementById("spacer-group").style.display = "none";
		} else {

			document.getElementById("spacer-group").style.display = "inline";
		}
	}

	//Top Mat

	topSelect.addEventListener("change", topChange, false);

	function topChange() {

		document.getElementById("measurement-top").textContent = topSelect.options[topSelect.selectedIndex].value + "\42";

		if (topSelect.value == "1/16") {
			document.getElementById("top-group").style.display = "inline";

			document.getElementById("svg-top").setAttribute("points", "103.5,61.3 40.7,61.3 40.7,65.3 109.2,65.3 ");

		} else if (topSelect.value == "1/8") {
			document.getElementById("top-group").style.display = "inline";

			document.getElementById("svg-top").setAttribute("points", "103.5,61.3 40.7,61.3 40.7,69.3 109.2,69.3");

		} else if (topSelect.value == "0") {
			document.getElementById("top-group").style.display = "none";
		}
	}

	//Bottom Mat

	bottomSelect.addEventListener("change", bottomChange, false);

	function bottomChange() {

		document.getElementById("measurement-bottom").textContent = bottomSelect.options[bottomSelect.selectedIndex].value + "\42";

		if (bottomSelect.value == "1/16") {

			document.getElementById("svg-bottom").setAttribute("height", "4");

			document.getElementById("svg-bottom").style.display = "inline";
			document.getElementById("measurement-bottom").style.display = "inline";

		} else if (bottomSelect.value == "1/8") {

			document.getElementById("svg-bottom").setAttribute("height", "8");

			document.getElementById("svg-bottom").style.display = "inline";
			document.getElementById("measurement-bottom").style.display = "inline";

		} else if (bottomSelect.value == "0") {
			document.getElementById("svg-bottom").style.display = "none";
			document.getElementById("measurement-bottom").style.display = "none";
		}
	}

	//Backing Board

	backingBoard.addEventListener("input", backingChanged);

	function backingChanged() {
		document.getElementById("measurement-backing").textContent = backingBoard.value + "\42";

		if (backingBoard.value.length == 0 || backingBoard.value == "0") {
			document.getElementById("svg-board").style.display = "none";
			document.getElementById("measurement-backing").style.display = "none";

			backingBoard.value = 0

		} else {
			document.getElementById("svg-board").style.display = "inline";
			document.getElementById("measurement-backing").style.display = "inline";
		}

	}

	// Additional Space
	additional.addEventListener("input", moreAdded);

	function moreAdded() {
		document.getElementById("measurement-additional").textContent = additional.value + "\42";

		if (additional.value.length == 0 || additional.value == 0) {
			document.getElementById("additional-group").style.display = "none";
			additional.value = 0
		} else {

		document.getElementById("additional-group").style.display = "inline";
		}
	}


	//Strainer
	strainer.addEventListener("input", strainerChanged);

	function strainerChanged() {
		document.getElementById("measurement-strainer").textContent = strainer.value + "\42";

		if (strainer.value.length == 0 || strainer.value == "0") {
			document.getElementById("svg-strainer").style.display = "none";
			document.getElementById("measurement-strainer").style.display = "none";
			strainer.value = 0
		} else {
			document.getElementById("svg-strainer").style.display = "inline";
			document.getElementById("measurement-strainer").style.display = "inline";
		}

	}

	//Glazing
	glazing.addEventListener("input", glazingChanged);

	function glazingChanged() {
		document.getElementById("measurement-glazing").textContent = glazing.value + "\42";

		if (glazing.value == "0" || glazing.length == 0) {
			document.getElementById("svg-glazing").style.display = "none";
			document.getElementById("measurement-glazing").style.display = "none";
			glazing.value = 0;
		} else {
			document.getElementById("svg-glazing").style.display = "inline";
			document.getElementById("measurement-glazing").style.display = "inline";
		}



	}

	//Calculator
	//This function calculates the difference between the rabbet depth and the package depth and outputs a user-friendly fraction.

	form.addEventListener('change', calculate);

	function calculate() {

		//defining our values list

		var values = [
			rabbet.value, //0
			glazing.value, //1
			spacer.value, //2
			topSelect.value, //3
			bottomSelect.value, //4
			backingBoard.value, //5
			strainer.value, //6
			additional.value];//7


		//taking those values and converting them from fractions to decimals

		values.forEach(function(x, i, values) {
			if (x.indexOf('/') != -1) {
				var parts = x.split(" ")
				var decParts;
				if (parts.length > 1) {
					decParts = parts[1].split("/");
				} else {
					decParts = parts[0].split("/");
					parts[0] = 0;
				}
				values[i] = parseInt(parts[0], 10) + (parseInt(decParts[0], 10) / parseInt(decParts[1], 10))
			} else {
				values[i] = parseInt(x, 10)
			}
		});

		// slicing out the rabbet value
		var noRabbet = values.slice(1)

		//Subtracting the frame package from the rabbet depth.
		var maths = values[0] - noRabbet.reduce((a, b) => a + b, 0)


		//scale elements to size on screen

		var scaledElements = values.map(function(x) { return x * 64; });

		//Rabbet
		var rabbetHeight = scaledElements[0]

		rabbetEl.setAttribute("height", rabbetHeight + 10)

		//Glazing : Standard height = 8
		var glazingHeight = scaledElements[1]
		var glazingDiff = glazingHeight - 8

		glazingEl.setAttribute("height", glazingHeight)

		document.getElementById("notGlazing").setAttribute("transform", "translate(0 " + glazingDiff + ")")

		//Spacer
		var spacerHeight = scaledElements[2]
		var spacerDiff = spacerHeight - 40

		spacerEl.setAttribute("height", spacerHeight)

		document.getElementById("notSpacer").setAttribute("transform", "translate(0 " + spacerDiff + ")")

		document.getElementById("measurement-spacer").setAttribute("y", spacerHeight / 2 + 40.5)

		//Top Mat
		var topHeight = scaledElements[3];
		var topDiff = topHeight - 4;

		topEl.setAttribute("height", topHeight);

		document.getElementById("notTop").setAttribute("transform", "translate(0 " + topDiff + ")");



		// topEl.setAttribute("height", spacerHeight)

		//Bottom Mat
		var bottomHeight = scaledElements[4];
		var bottomDiff = bottomHeight - 4;

		bottomEl.setAttribute("height", bottomHeight);

		document.getElementById("notBottom").setAttribute("transform", "translate(0 " + bottomDiff + ")");

		//Backing
		var backingHeight = scaledElements[5];
		var backingDiff = backingHeight - 8;

		backingEl.setAttribute("height", backingHeight);

		document.getElementById("notBacking").setAttribute("transform", "translate(0 " + backingDiff + ")");

		//Strainer
		var strainerHeight = scaledElements[6]
		var strainerDiff = strainerHeight - 32
		var strainerY = 128.5 + strainerDiff

		strainerEl.setAttribute("height", strainerHeight);
		strainerX.setAttribute("y2", strainerY)

		// strainerEl.setAttribute("height", strainerHeight)

		//Additional
		var additionalHeight = scaledElements [7]

		additionalEl.setAttribute("height", additionalHeight)

		document.getElementById("strainer-group").setAttribute("transform", "translate(0 " + additionalHeight + ")");

		// var frameHeight = document.getElementById('frame-group').getBBox().height

		// console.log(values);
		remainder.value = numberToFraction(maths) + "\42"
		svgRemainder.textContent = numberToFraction(maths)  + "\42"

		var fractioned;
		var nonNeg;

		if (maths < 0) {
			nonNeg = Math.abs(maths)

			fractioned = numberToFraction(nonNeg)

			remainder.value = "-" + fractioned + "\42"
			svgRemainder.textContent = "-" + fractioned + "\42"

			remainder.classList.add('negative')

			svgRemainder.setAttribute("class", 'negative')

			// frameSide.setAttribute("height", frameHeight - 5)

		} else if (maths >= 0) {

			fractioned = numberToFraction(maths)

			remainder.value = fractioned + "\42"
			svgRemainder.textContent = fractioned + "\42"

			remainder.classList.remove('negative')

			svgRemainder.setAttribute("class", 'positive')
		}
		// if (maths == 0) {
		// 	frameSide.setAttribute("height", frameHeight + 0)
		// }
		// if (maths > 0) {
		// 	frameSide.setAttribute("height", frameHeight + 5)
		//
		// }
	}
	/**
	 * Converts numbers to fractions:
	 * - 1.25 to 1 1/4
	 * - 2 to 2
	 */
	var numberToFraction = function(amount) {
		// This is a whole number and doesn't need modification.
		if (parseFloat(amount) === parseInt(amount)) {
			return amount;
		}
		// Next 12 lines are cribbed from https://stackoverflow.com/a/23575406.
		var gcd = function(a, b) {
			if (b < 0.0000001) {
				return a;
			}
			return gcd(b, Math.floor(a % b));
		};
		var len = amount.toString().length - 2;
		var denominator = Math.pow(10, len);
		var numerator = amount * denominator;
		var divisor = gcd(numerator, denominator);
		numerator /= divisor;
		denominator /= divisor;
		var base = 0;
		// In a scenario like 3/2, convert to 1 1/2
		// by pulling out the base number and reducing the numerator.
		if (numerator > denominator) {
			base = Math.floor(numerator / denominator);
			numerator -= base * denominator;
		}
		amount = Math.floor(numerator) + '/' + Math.floor(denominator);
		if (base) {
			amount = base + ' ' + amount;
		}
		return amount;
	};
}
