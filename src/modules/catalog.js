import getData from "./getData";
import renderGoods from "./renderGoods";
import { catalogFilter } from "./filters";

const catalog = () => {
  const catalogBtn = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogCategories = document.querySelectorAll(".catalog-list li");
  let isOpen = false;

  catalogBtn.addEventListener("click", (event) => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }
  });
  catalogCategories.forEach((category) => {
    category.addEventListener("click", () => {
      const value = category.textContent;
      getData().then((data) => {
        renderGoods(catalogFilter(data, value));
      });
    });
  });
};

export default catalog;
