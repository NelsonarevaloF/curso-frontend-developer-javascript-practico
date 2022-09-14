const navbarEmail = document.querySelector('.navbar-email');
const mobileMenuImg = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailContainer = document.querySelector('#productDetailContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');

mobileMenuImg.addEventListener('click', showMobileMenu);
navbarEmail.addEventListener('click', showDesktopMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetail);


function showDesktopMenu() {
	const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

	if(!isAsideClosed) {
		shoppingCardContainer.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
	const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

	if(!isAsideClosed) {
		shoppingCardContainer.classList.add('inactive');
	}
	closeProductDetail ()
	mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
	const isMobileMenuclosed = mobileMenu.classList.contains('inactive');

	if(!isMobileMenuclosed) {
		mobileMenu.classList.add('inactive');
	}

	const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

	if(!isProductDetailClosed) {
		productDetailContainer.classList.add('inactive');
	}

	shoppingCardContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
	shoppingCardContainer.classList.add('inactive');
	productDetailContainer.classList.remove('inactive');
}

function closeProductDetail () {
	productDetailContainer.classList.add('inactive');
}

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
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940?'
});
productList.push({
	name: 'Desktop Pc',
	price: 250,
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
		productImg.addEventListener('click', openProductDetailAside);

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