const postData = (cart) => {
	fetch("https://ozon-test-db68c-default-rtdb.firebaseio.com/cart.json", {
		method: "POST",
		body: JSON.stringify(cart),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then((response) => response.json());
};

export default postData;
