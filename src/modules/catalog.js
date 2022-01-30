import getData from "./getData";
import renderGoods from "./renderGoods";
import {catalogFilter} from "./filters";

const catalog = () => {
	const catalogBtn = document.querySelector(".catalog-button > button");
	const catalogModal = document.querySelector(".catalog");
	const catalogCategories = document.querySelectorAll(".catalog-list li");
	let isOpen = false;

	const toggleCatalogModal = () => {
		isOpen = !isOpen;
		if (isOpen) {
			catalogModal.style.display = "block";
		} else {
			catalogModal.style.display = "";
		}
	}

	catalogBtn.addEventListener("click", toggleCatalogModal);

	catalogCategories.forEach((category) => {
		category.addEventListener("click", () => {
			const value = category.textContent;
			getData().then((data) => {
				renderGoods(catalogFilter(data, value));
			});
			toggleCatalogModal();
		});
	});


};

export default catalog;
