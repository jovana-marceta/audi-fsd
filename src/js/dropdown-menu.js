const navItems = document.querySelectorAll(".nav__item");

// Remove after element if list has dropdown menu
navItems.forEach(item => {
	item.classList.add("hasBorderBottom");
	if (item.childNodes.length > 3) {
		item.classList.remove("hasBorderBottom");
	}
})
