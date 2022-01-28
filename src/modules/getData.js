const getData = () => {
  return fetch(
    "https://ozon-test-db68c-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => response.json());
};

export default getData;
