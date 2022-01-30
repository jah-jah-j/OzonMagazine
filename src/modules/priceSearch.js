import getData from "./getData";
import renderGoods from "./renderGoods";
import {priceFilter, saleFilter} from "./filters";

const priceSearch = () => {
	const priceMin = document.getElementById("min");
	const priceMax = document.getElementById("max");
	const saleCheckbox = document.querySelector(".filter-check_checkbox");
	const saleCheckmark = document.querySelector(".filter-check_checkmark");


	priceMin.addEventListener("input", () => {
		getData().then((data) => {
			renderGoods(priceFilter(saleFilter(data, saleCheckbox.checked), priceMin.value, priceMax.value));
		});
	});
	priceMax.addEventListener("input", () => {
		getData().then((data) => {
			renderGoods(priceFilter(saleFilter(data, saleCheckbox.checked), priceMin.value, priceMax.value));
		});
	});

	saleCheckbox.addEventListener("change", () => {
		if (saleCheckbox.checked) {
			saleCheckmark.classList.add('checked')
		} else {
			saleCheckmark.classList.remove('checked')
		}
		getData().then((data) => {
			renderGoods(priceFilter(saleFilter(data, saleCheckbox.checked), priceMin.value, priceMax.value));
		});
	});
}
export default priceSearch;
