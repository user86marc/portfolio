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

// TYPEWRITER MEOW :)
// 1. for an element in html we want each character of the string to appear, one at a time, untill the end
// then each character of the string dissappear, one a t a time, until begginning, then
// do same for next line in the same space until end of end.
// 	Possible to:
// 		appendChild or append Letters? and how to remove again delete?
// 			why not .push and .pop from hidden element to visible element.

// 		Take string from hidden element, and .split into individual items of a middleArray
// 		Loop through middleArray/obj items (string characters)
		
// VERSION 1 -everything
	
// 	let hidden = [ "String", "Stirnnghgh", "hsdjhsfdjhfdsjhsd" ];
// 	let typeHere = document.querySelector("div.typeHere");
	
// 	while typeHere.length = 0 

// 	map.hidden
// 		take string and .split into indv character items into middleArray

// 			loop through middleArray
// 				wait 1 second
// 				.push item 1 into div.typeHere
// 				increment ++,
// 			when incrementor equals middleArray.length (end), run reverse
// 				wait 1 second
// 				.pop item 1 off div.typeHere
// 				de-increment --,

// onButtonClick


// VERSION 1 -just one line
// 	onButtonClick
// 	document querySelector div.hidden
// 	forEach div.hidden
// 		take string and .split into indv character items into middleArray
// 		while typeHere.length = 0 
// 			loop through middleArray
// 				wait 1 second
// 				.push item 1 into div.typeHere
// 				increment ++,
// 			when incrementor equals middleArray.length (end), run reverse
// 				wait 1 second
// 				.pop item 1 off div.typeHere
// 				de-increment --,




// 		What would call the function:
// 			window.onload
// 			button.onClick
// 			Modal.Appear (this one is best - actually a button click makes this appear)

// VERSION 2
// 	say we have the typeArea array and it is currently empty,
// 	start with lineOne
// 		function = type 
// 			go fetch the first char from lineOne array and push it to typeArea
// 			increment to char 2 and so on untill end,

// 	increment to lineTwo
// 		function = type 

// 2. All the while haveing a blinking cursor to the right. 
// 	Possible to:
// 	A second html element that has a left border, and
// 	a timer that for does the same function as above, appear - dissappear.
// 	just without the need to move between lines


//  in HTML doc we have:
	// <span class="typewrite" data-period="2000" data-type='[ 
	// 	"Meow listen up, you!", 
	// 	"Cats ...", 
	// 	"need ...", 
	// 	"food, right ... ", 
	// 	"meow!"]'>
	// 	<span class="wrap"></span>
	// </span>

// This is the prototype constructor function
	// let TxtType = function(el, toRotate, period) {
	// 	this.toRotate = toRotate;
	//   this.el = el;
	//   this.loopNum = 0;
	//   this.period = parseInt(period, 10) || 2000;
	//   this.txt = '';
	//   this.tick();
	//   this.isDeleting = false;
	// };

// The TxtType object inherets properties from TxtType.prototype 
// now give it a function called tick
	// TxtType.prototype.tick = function() {
	// 	let i = this.loopNum % this.toRotate.length;
	//   let fullTxt = this.toRotate[i];

	//   this.isDeleting ?
	//   this.txt = fullTxt.substring(0, this.txt.length - 1) :
	//   this.txt = fullTxt.substring(0, this.txt.length + 1);
 		
	// 	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	// 	let that = this;
	// 	let delta = 200 - Math.random() * 100;

	// 	if (this.isDeleting) { delta /= 2; }

	// 	if (!this.isDeleting && this.txt === fullTxt) {
	// 		delta = this.period;
	// 	  this.isDeleting = true;
	// 	} else if (this.isDeleting && this.txt === '') {
	// 		this.isDeleting = false;
	// 		this.loopNum++;
	// 		delta = 500;
	// 	}

	// 	setTimeout(function() {
	// 		that.tick();
	// 	}, delta);
	// };

// On window load 
// go and get .typewrite   qeurySelecotrAll
// forEach .typerwrite
// 	let toRotate be equal to the data-type of .typewrite
// 	let period be equal to the data-period of .typewrite

// Now if toRotate is true make a new TxtType with
// the params

	// window.onload = function() {
	// 	let elements = document.getElementsByClassName('typewrite');
		
	// 	for (let i=0; i<elements.length; i++) {
	// 		let toRotate = elements[i].getAttribute('data-type');
	// 		let period = elements[i].getAttribute('data-period');
	// 		if (toRotate) {
	// 			new TxtType(elements[i], JSON.parse(toRotate), period);
	// 	}
	// }

// Adds the cursor
	// let css = document.createElement("style");
	// 	css.type = "text/css";
	// 	css.textContent = ".typewrite > .wrap {border-right: 2px solid ghostwhite}";
	// 	document.body.appendChild(css);
	// };

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

