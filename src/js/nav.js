const hamburger = document.querySelector(".js-hamburger");
const navMenu = document.querySelector(".js-nav-menu");
const navItems = document.querySelectorAll(".nav__item");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))


// Remove after element if list has dropdown menu
navItems.forEach(item => {
	item.classList.add("hasBorderBottom");
	if (item.childNodes.length > 3) {
		item.classList.remove("hasBorderBottom");
	}
})
