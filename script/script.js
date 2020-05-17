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

