const navbarEmail = document.querySelector('.navbar-email');
const mobileMenuImg = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

mobileMenuImg.addEventListener('click', showMobileMenu);
navbarEmail.addEventListener('click', showDesktopMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart)


function showDesktopMenu() {
	const isAsideClosed = aside.classList.contains('inactive');

	if(!isAsideClosed) {
		aside.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
	const isAsideClosed = aside.classList.contains('inactive');

	if(!isAsideClosed) {
		aside.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
	const isMobileMenuclosed = mobileMenu.classList.contains('inactive');

	if(!isMobileMenuclosed) {
		mobileMenu.classList.add('inactive');
	}

	aside.classList.toggle('inactive');
}

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Playstation 3',
	price: 20,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});


function renderProducts(productList) {
	for (product of productList){
		
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
		
		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
		
		const containerInfo = document.createElement('div');
		const priceProduct = document.createElement('p');
		priceProduct.innerText = '$' + product.price;
		const nameProduct = document.createElement('p');
		nameProduct.innerText = product.name;

		containerInfo.appendChild(priceProduct);
		containerInfo.appendChild(nameProduct);

		const figureBotton = document.createElement('figure');
		const imageBotton = document.createElement('img');
		imageBotton.setAttribute('src', './icons/bt_add_to_cart.svg');

		figureBotton.appendChild(imageBotton);

		productInfo.append(containerInfo, figureBotton);
		productCard.append(productImg, productInfo);

		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);