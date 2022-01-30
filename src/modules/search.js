import getData from "./getData";
import renderGoods from "./renderGoods";
import {searchFilter} from "./filters";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");
  const searchBtn = document.querySelector(".search-btn > button");

  const searchData = (value) => {
    getData().then((data) => {
      renderGoods(searchFilter(data, value));
    });
  };

  searchBtn.addEventListener("click", () => {
    searchData(searchInput.value);
  });

  searchInput.addEventListener("keydown", (evt) => {
    const value = evt.target.value;
    if (evt.keyCode === 13) {
      searchData(value);
    }
  });
};

export default search;
