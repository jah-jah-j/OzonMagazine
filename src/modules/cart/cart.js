const cart = () => {
  const cartBtn = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const modalCloseBtn = cartModal.querySelector(".cart-close");

  const openModal = () => {
    cartModal.style.display = "flex";
  };
  const closeModal = () => {
    cartModal.style.display = "";
  };

  cartBtn.addEventListener("click", openModal);
  modalCloseBtn.addEventListener("click", closeModal);
  cartModal.addEventListener("click", (evt) => {
    if (evt.target === cartModal) {
      closeModal();
    }
  });

  cartModal.addEventListener("mousemove", (evt) => {
    if (evt.target === cartModal) {
      cartModal.style.cursor = "pointer";
    } else {
      cartModal.style.cursor = "";
    }
  });
};

export default cart;
