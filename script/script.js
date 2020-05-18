// MENU
	const drop = document.querySelectorAll(".drpdwn");
	
	function toggleActive() {
		this.classList.toggle("active");
	  var dropdownContent = this.nextElementSibling;
	  dropdownContent.style.display === "block" ? 
	 	dropdownContent.style.display = "none" : 
		dropdownContent.style.display = "block";
	};

	drop.forEach(dropdown => dropdown.addEventListener("click", toggleActive));
	// If we use querySelectorAll, we must send it through a forEach/loop of some kind drumkit video

	// ORIGINAL MENU
	// var drop = document.getElementsByClassName("drpdwn");
	// var i;

	// for (i = 0; i < drop.length; i++) {     								//this is the 'forEach' that loops the query selector all
	//   drop[i].addEventListener("click", function() {
	//     this.classList.toggle("active");
	//     var dropdownContent = this.nextElementSibling;

	//     if (dropdownContent.style.display === "block") {
	//       dropdownContent.style.display = "none";
	//     } else {
	//       dropdownContent.style.display = "block";
	//     }
	//   });
	// } 

	// Original TYPEWRITER MEOW :)
	let TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
	  this.el = el;
	  this.loopNum = 0;
	  this.period = parseInt(period, 10) || 2000;
	  this.txt = '';
	  this.tick();
	  this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
		let i = this.loopNum % this.toRotate.length;
	  let fullTxt = this.toRotate[i];

	  if (this.isDeleting) {
	  	this.txt = fullTxt.substring(0, this.txt.length - 1);
	  } else {
	  	this.txt = fullTxt.substring(0, this.txt.length + 1);
	  }
		
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		let that = this;
		let delta = 200 - Math.random() * 100;

		if (this.isDeleting) { delta /= 2; }

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
		  this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function() {
			that.tick();
		}, delta);
	};

	window.onload = function() {
		let elements = document.getElementsByClassName('typewrite');
		for (let i=0; i<elements.length; i++) {
			let toRotate = elements[i].getAttribute('data-type');
			let period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}

	let css = document.createElement("style");
		css.type = "text/css";
		css.textContent = ".typewrite > .wrap { border-right: 0.2em solid #fff }";
		document.body.appendChild(css);
	};

// Drag n Drop
	(function() {
		if (
			!document.querySelectorAll || 		
			!('draggable' in document.createElement('span')) || 
			window.opera
		) {
	  return;
	  }
		
		//get the collection of draggable items and add their draggable attribute
		for (var items = document.querySelectorAll('[data-draggable="item"]'),     
			len = items.length, 
			i = 0; i < len; i ++
	  ) {
			items[i].setAttribute('draggable', 'true');
		}

		//variable for storing the dragging item reference 
		//this will avoid the need to define any transfer data 
		//which means that the elements don't need to have IDs 
		var item = null;

		//dragstart event to initiate mouse dragging
		document.addEventListener('dragstart', function(e) {
			//set the item reference to this element
			item = e.target;
			
			//we don't need the transfer data, but we have to define something
			//otherwise the drop action won't work at all in firefox
			//most browsers support the proper mime-type syntax, eg. "text/plain"
			//but we have to use this incorrect syntax for the benefit of IE10+
			e.dataTransfer.setData('text', '');
	  }, false);

		//dragover event to allow the drag by preventing its default
		//ie. the default action of an element is not to allow dragging 
		document.addEventListener('dragover', function(e) {
			if(item)
			{e.preventDefault();}
		}, false);	

		//drop event to allow the element to be dropped into valid targets
		document.addEventListener('drop', function(e) {
			//if this element is a drop target, move the item here 
			//then prevent default to allow the action (same as dragover)
			if(e.target.getAttribute('data-draggable') == 'target') {
				e.target.appendChild(item);
				e.preventDefault();
			}
		}, false);
		
		//dragend event to clean-up after drop or abort
		//which fires whether or not the drop target was valid
		document.addEventListener('dragend', function(e) {
			item = null;
		}, false);
	})();	

// Smart List
var close = document.getElementsByClassName("close");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("UL");
var xx = document.getElementsByClassName("list");
var i;

// Add new item to list
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	  close.forEach = (i) => {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
		// OLD
		// for (i = 0; i < close.length; i++) {
		//  close[i].onclick = function() {
		//    var div = this.parentElement;
		//    div.style.display = "none";
		//  }
  }
}

function addListAfterClick() {
	if (inputLength() > 0 ) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Add close button to existing items
for (i = 0; i < xx.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  xx[i].appendChild(span);
}

// Click item to add strike-through
list.addEventListener("click", function(strike) {
	if (strike.target.tagName === "LI"); {
		strike.target.classList.toggle("done");
	}
}, false);

// Click close button to remove item
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Background Generator
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
 
// function setGradient() {
// 	body.style.background =
// 	 "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")no-repeat fixed center center";
// 	 css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);
// 
// Let's make a random generator
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// setInterval(function() {
//     var element = document.getElementById("box");
//     //generate random red, green and blue intensity
//     var r = getRandomInt(0, 255);
//     var g = getRandomInt(0, 255);
//     var b = getRandomInt(0, 255);
    
//     element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// }, 1500);