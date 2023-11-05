const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');
const productsListI = document.querySelector('.container-itemsI');
const productsListII = document.querySelector('.container-itemsparlante');
const productsListradio = document.querySelector('.container-itemsreadio');
const productsListtostador = document.querySelector('.container-itemstosatador');
const productsListollapre = document.querySelector('.container-itemsollaspr');
const productsListollarroc = document.querySelector('.container-itemsarroc');
const productsListcafete = document.querySelector('.container-itemscafete');
const productsListcocigas = document.querySelector('.container-itemscocigas');
const productsListmesa = document.querySelector('.container-itemsmesa');
const productsListsilla = document.querySelector('.container-itemssilla');
const productsListVenti = document.querySelector('.container-itemsVenti');
const productsListcocigascasa = document.querySelector('.container-itemscocigascasa');
const productsListplancgas = document.querySelector('.container-itemsplancgas');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


function intolistener(e){//funcion para el click atrapa classes
	console.log(e.target.classList);
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
}

productsList.addEventListener('click', e => {
	intolistener(e);
	
});
productsListI.addEventListener('click', e => {
	intolistener(e);
	
});

productsListII.addEventListener('click', e => {
	intolistener(e);
	
});

productsListradio.addEventListener('click', e => {
	intolistener(e);
	
});


productsListtostador.addEventListener('click', e => {
	intolistener(e);
	
});

productsListollapre.addEventListener('click', e => {
	intolistener(e);
	
});


productsListollarroc.addEventListener('click', e => {
	intolistener(e);
	
})

productsListcafete.addEventListener('click', e => {
	intolistener(e);
	
})

productsListcocigas.addEventListener('click', e => {
	intolistener(e);
	
})

productsListmesa.addEventListener('click', e => {
	intolistener(e);
	
})

productsListsilla.addEventListener('click', e => {
	intolistener(e);
	
})

productsListVenti.addEventListener('click', e => {
	intolistener(e);
	
})

productsListcocigascasa.addEventListener('click', e => {
	intolistener(e);
	
})


productsListplancgas.addEventListener('click', e => {
	intolistener(e);
	
})


rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(2));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `c$${total}`;
	countProducts.innerText = totalOfProducts;
};
