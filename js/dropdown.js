
// dropdown.onclick = function (event) {
// 	document.getElementById("myDropdown").classList.toggle("show");


// 	if (!event.target.matches('.item__title')) {
// 		let dropdowns = document.getElementsByClassName("dropdown-content");
// 		let i;
// 		for (i = 0; i < dropdowns.length; i++) {
// 			let openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains('show')) {
// 				openDropdown.classList.remove('show');
// 			}
// 		}
// 	}
// }

let toClose = false

function toggle(e) {
	e.stopPropagation();
	let btn = this;
	let menu = btn.nextSibling;

	while (menu && menu.nodeType != 1) {
		menu = menu.nextSibling
	}

	if (!menu) return;
	if (menu.style.display !== 'block') {
		menu.style.display = 'block';
		if (toClose) toClose.style.display = "none";
		toClose = menu;
	} else {
		menu.style.display = 'none';
		toClose = false;
	}

};
function closeAll() {
	toClose.style.display = 'none';
};

window.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".item__title").forEach(function (btn) {
		btn.addEventListener("click", toggle, true);
	});
});

window.onclick = function (event) {
	if (toClose) {
		closeAll.call(event.target);
	}
};