/*
NOTE:: JS is used to generate a copy of each element in the list, this can be done in HTML itself, but JS provides the flexibility of editing the list without worrying about maintaining 2 different instances
*/
const scrollList = document.querySelector(".scroll-list");
const items = Array.from(scrollList.children);

window.addEventListener("load", () => {
	items.forEach((item) => {
		const clone = item.cloneNode(true);
		clone.setAttribute("aria-hidden", "true");
		scrollList.appendChild(clone);
	});
});
