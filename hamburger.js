const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-link");
const navBar = document.querySelector(".nav-bar");
const bar = document.querySelector(".bar");
// const body = document.body;

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	navBar.classList.toggle("active");
	// bar.classList.toggle("active");
}

// ------------------------------------
const navLink = document.querySelectorAll(".nav-Link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
	navBar.classList.remove("active");
	// bar.classList.remove("active");
}

// --------------------------------------

window.onscroll = function () {
	if (
		document.body.scrollTop >= 100 ||
		document.documentElement.scrollTop >= 100
	) {
		// console.log("HEllo");
		navBar.classList.add("active");
	} else {
		navBar.classList.remove("active");
	}
};
