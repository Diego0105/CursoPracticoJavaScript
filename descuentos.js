const precioOrginal = 150;
const descuento = 22;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}


function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio de su producto con descuento es de: $" + precioConDescuento;
}