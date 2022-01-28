const postData = () => {
  fetch("https://ozon-test-db68c-default-rtdb.firebaseio.com/goods/0.json", {
    method: "PATCH",
    body: JSON.stringify({
      id: 0,
      title: "Игровая приставка Sony PlayStation 4 Pro",
      price: 33990,
      sale: false,
      img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
      hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
      category: "Игровая приставка",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export default postData;
