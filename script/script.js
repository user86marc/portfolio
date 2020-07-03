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