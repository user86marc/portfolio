// MENU Dropdowns
	const drop = document.querySelectorAll(".drpdwn");
	
	function toggleActive() {
		this.classList.toggle("active");
	  let dropdownContent = this.nextElementSibling;
	  dropdownContent.style.display === "block" ? 
	 	dropdownContent.style.display = "none" : 
		dropdownContent.style.display = "block";
	};

	drop.forEach(dropdown => dropdown.addEventListener("click", toggleActive));

	// MENU Hide on scroll
	let prevScrollpos = window.pageYOffset;
	
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
	prevScrollpos > currentScrollPos ?
	document.querySelector("nav").style.top = "0" :
	document.querySelector("nav").style.top = "-68px";
  prevScrollpos = currentScrollPos;
} 