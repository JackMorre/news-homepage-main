const header = document.querySelector(".header");
const navButton = document.querySelector(".btn-mobile-nav");

const shade = document.querySelector(".page-mask");

navButton.addEventListener("click", function (e) {
	e.preventDefault();
	header.classList.toggle("nav-open");
	// shade.classList.toggle("darken");
});
