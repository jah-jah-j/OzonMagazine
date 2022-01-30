import renderCart from './renderCart'
import postData from './postData'

const cart = () => {
	const cartBtn = document.getElementById("cart");
	const cartModal = document.querySelector(".cart");
	const modalCloseBtn = cartModal.querySelector(".cart-close");
	const goodsWrapper = document.querySelector('.goods');
	const cartTotal = cartModal.querySelector('.cart-total > span')
	const sendGoodsBtn = cartModal.querySelector('.cart-confirm')
	const cartBtnCounter = cartBtn.querySelector('.counter')

	document.addEventListener('DOMContentLoaded', () => {
		const cartArr = localStorage.getItem('cartArr') ?
			JSON.parse(localStorage.getItem('cartArr')) : [];

		cartBtnCounter.textContent = cartArr.length
	})

	const openCart = () => {
		const cartArr = localStorage.getItem('cartArr') ?
			JSON.parse(localStorage.getItem('cartArr')) : [];

		cartModal.style.display = "flex";

		renderCart(cartArr);
		cartTotal.textContent = cartArr.reduce((sum, item) => {
			return sum + item.price;
		}, 0)
		cartBtnCounter.textContent = cartArr.length
	}

	const closeCart = () => {
		cartModal.style.display = "";
	};

	cartBtn.addEventListener("click", openCart);
	modalCloseBtn.addEventListener("click", closeCart);
	cartModal.addEventListener("click", (evt) => {
		if (evt.target === cartModal) {
			closeCart();
		}
	});

	cartModal.addEventListener("mousemove", (evt) => {
		if (evt.target === cartModal) {
			cartModal.style.cursor = "pointer";
		} else {
			cartModal.style.cursor = "";
		}
	});

	goodsWrapper.addEventListener('click', event => {
		if (event.target.classList.contains('btn-primary')) {
			const card = event.target.closest('.card');
			const key = +(card.dataset.key);
			const goods = JSON.parse(localStorage.getItem('goods'));
			const cartArr = localStorage.getItem('cartArr') ?
				JSON.parse(localStorage.getItem('cartArr')) : [];
			const goodsItem = goods.find(item => {
				return item.id === key
			});
			cartArr.push(goodsItem);
			localStorage.setItem('cartArr', JSON.stringify(cartArr));
			cartBtnCounter.textContent = cartArr.length
		}
	})

	cartModal.addEventListener('click', event => {
		if (event.target.classList.contains('btn-primary') && !event.target.classList.contains('cart-confirm')) {
			const cartArr = localStorage.getItem('cartArr') ?
				JSON.parse(localStorage.getItem('cartArr')) : [];
			const card = event.target.closest('.card');
			const key = +(card.dataset.key);
			const index = cartArr.findIndex((cartItem => {
				return cartItem.id === key
			}));

			cartArr.splice(index, 1);

			localStorage.setItem('cartArr', JSON.stringify(cartArr));

			renderCart(cartArr);
			cartTotal.textContent = cartArr.reduce((sum, item) => {
				return sum + item.price;
			}, 0)
			cartBtnCounter.textContent = cartArr.length
		}
	});

	sendGoodsBtn.addEventListener('click', event => {
			const cartArr = localStorage.getItem('cartArr') ?
				JSON.parse(localStorage.getItem('cartArr')) : [];

			if (cartArr.length > 0) {
				postData(cartArr);

				localStorage.removeItem('cartArr');
				renderCart([]);
				cartTotal.textContent = 0;
				cartBtnCounter.textContent = 0;
			} else {
				alert('Выберите товар')
			}
		}
	)

};

export default cart;
