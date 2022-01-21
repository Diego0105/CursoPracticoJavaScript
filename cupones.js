function calcularPrecioConDescuento (precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [
    "Thor",
    "Hulk",
    "Doctor Strange",
    "Capitan America",
    "Iron man",
    "Spiderman"
];

function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case coupons[0]: 
        descuento = 10;
      break;
      case coupons[1]: 
        descuento = 15;
      break;
      case coupons[2]: 
        descuento = 20;
      break;
      case coupons[3]: 
        descuento = 25;
      break;
      case coupons[4]: 
        descuento = 30;
      break;
      case coupons[2]: 
      descuento = 35;
      break;
    }
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }