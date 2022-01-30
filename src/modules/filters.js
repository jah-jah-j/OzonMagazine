export const searchFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		return goodsItem.title.toLowerCase().includes(value.toLowerCase());
	});
};

export const catalogFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		return goodsItem.category.toLowerCase().includes(value.toLowerCase());
	});
};

export const priceFilter = (goods, valueMin, valueMax) => {
	return goods.filter((goodsItem) => {
		if (valueMax === '' && valueMin === '') {
			return goodsItem

		} else if (valueMax !== '' && valueMin === '') {
			return goodsItem.price < +valueMax

		} else if (valueMax === '' && valueMin !== '') {
			return goodsItem.price > +valueMin

		} else if (valueMax !== '' && valueMin !== '') {
			return goodsItem.price < +valueMax && goodsItem.price > +valueMin
		}
	});
};

export const saleFilter = (goods, value) => {
	if (value) {
		return goods.filter((goodsItem) => {
			return goodsItem.sale === true;
		});
	} else {
		return goods
	}
};
