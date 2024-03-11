@charset "utf-8";



* {
    margin: 0px;
    padding: 0px;
    
    font-family:Pocket Calculator;
}


@media screen and (orientation: landscape) {
.bodyform {
   /* background-color: green;*/
}
	
	.icon-cart{
    width: 70%;
    height: 70%;
    stroke: #000;
}

.icon-cart:hover{
    cursor: pointer;
}

.Barra{
	background-color: dimgrey;
	width: 100%;
	
	height: auto;
   
   
	
	font-family: Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", "serif";
	font-size: 70px;
	color: white;
	align-content: center;
	text-align: center;
	text-decoration-line:underline;
}

.btn-add-cart{
	font-family:Baskerville, "Palatino Linotype", Palatino, "Century Schoolbook L", "Times New Roman", "serif";
	font-size: 150%;
	font-weight: 100;
	border-bottom-color: red;
	
}
.Subtitulos{
	font-size: 500%;
	font-family:Baskerville, "Palatino Linotype", Palatino, "Century Schoolbook L", "Times New Roman", "serif";
	color:gray;
	font-weight: 800;
}


.magenpro{
	width: 100%;
	height: 100%;
}

img{
    max-width: 100%;
}

/* Header */
header{
    display: flex;
    justify-content: space-between;
    padding: 30px 0 40px 0;
}

.container-icon{
    position:relative;
	align-items: flex-end;
	text-align-last: right;
}

.count-products{
    position: absolute;
    top: 70%;
    right: 0%;
    background-color: #000;
    color: #fff;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
	
}

#contador-productos{
    font-size: 400%;
}

.container-cart-products{
    position: absolute;
    top: 100%;
    right: 0;

    background-color: #fff;
    width: 150%;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    
}

.cart-product{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.20);

}

.info-cart-product{
    display: flex;
    justify-content: space-between;
    flex: 0.8;
}

.titulo-producto-carrito{
    font-size: 200px;
}

.precio-producto-carrito{
    font-weight: 700;
    font-size: 30px;
    margin-left: 30%;
}

.cantidad-producto-carrito{
    font-weight: 400;
    font-size: 150%;
}

.icon-close{
    width: 10%;
    height: 10%;
}

.icon-close:hover{
    stroke: red;
    cursor: pointer;
}

.cart-total{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
}

.cart-total h3{
    font-size: 200%;
    font-weight: 700;
}

.total-pagar{
    font-size: 200%;
    font-weight: 900;
}

.hidden-cart{
    display: none;
}




/* Main */
.container-items{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.item{
    border-radius: 10px;
}

.item:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20);
}

.item img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: all .5s;
}

.item figure{
    overflow: hidden;
}

.item:hover img{
    transform: scale(1.2);
}

.info-product{
    padding: 15px 30px;
    line-height: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.price{
    font-size: 18px;
    font-weight: 900;
}

.info-product button{
    border: none;
    background: none;
    background-color: #BB2C2E;
    color: #fff;
    padding: 15px 10px;
    cursor: pointer;
}

.cart-empty{
    padding: 20px;
    text-align: center;
}


.hidden{
    display: none;
}

	
	
}


@media screen and (orientation: portrait) {
.bodyform {
   /* background-color: green;*/
}
	
	.icon-cart{
    width: 70%;
    height: 70%;
    stroke: #000;
}

.icon-cart:hover{
    cursor: pointer;
}

.Barra{
	background-color: dimgrey;
	width: 100%;
	
	height: auto;
   
   
	
	font-family: Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", "serif";
	font-size: 70px;
	color: white;
	align-content: center;
	text-align: center;
	text-decoration-line:underline;
}

.btn-add-cart{
	font-family:Baskerville, "Palatino Linotype", Palatino, "Century Schoolbook L", "Times New Roman", "serif";
	font-size: 150%;
	font-weight: 100;
	border-bottom-color: red;
	
}
.Subtitulos{
	font-size: 500%;
	font-family:Baskerville, "Palatino Linotype", Palatino, "Century Schoolbook L", "Times New Roman", "serif";
	color:gray;
	font-weight: 800;
}


.magenpro{
	width: 100%;
	height: 100%;
}

img{
    max-width: 100%;
}

/* Header */
header{
    display: flex;
    justify-content: space-between;
    padding: 30px 0 40px 0;
}

.container-icon{
    position:relative;
	align-items: flex-end;
	text-align-last: right;
}

.count-products{
    position: absolute;
    top: 70%;
    right: 0%;
    background-color: #000;
    color: #fff;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
	
}

#contador-productos{
    font-size: 400%;
}

.container-cart-products{
    position: absolute;
    top: 100%;
    right: 0;

    background-color: #fff;
    width: 150%;
    z-index: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    
}

.cart-product{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.20);

}

.info-cart-product{
    display: flex;
    justify-content: space-between;
    flex: 0.8;
}

.titulo-producto-carrito{
    font-size: 200px;
}

.precio-producto-carrito{
    font-weight: 700;
    font-size: 30px;
    margin-left: 30%;
}

.cantidad-producto-carrito{
    font-weight: 400;
    font-size: 150%;
}

.icon-close{
    width: 10%;
    height: 10%;
}

.icon-close:hover{
    stroke: red;
    cursor: pointer;
}

.cart-total{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
}

.cart-total h3{
    font-size: 200%;
    font-weight: 700;
}

.total-pagar{
    font-size: 200%;
    font-weight: 900;
}

.hidden-cart{
    display: none;
}




/* Main */
.container-items{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.item{
    border-radius: 10px;
}

.item:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20);
}

.item img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: all .5s;
}

.item figure{
    overflow: hidden;
}

.item:hover img{
    transform: scale(1.2);
}

.info-product{
    padding: 15px 30px;
    line-height: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.price{
    font-size: 18px;
    font-weight: 900;
}

.info-product button{
    border: none;
    background: none;
    background-color: #BB2C2E;
    color: #fff;
    padding: 15px 10px;
    cursor: pointer;
}

.cart-empty{
    padding: 20px;
    text-align: center;
}


.hidden{
    display: none;
}


}
