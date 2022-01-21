
console.group("Cuadrado")

function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado()


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//código triángulo
console.group("Triángulo")


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//código círculo
console.group("Círculo")


//Diámetro
function diametroCirculo (radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI );

//Círcunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 


//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}



//Aqui interactuamos con HTML parala el Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + " cm^2");
}





//Acá interactuamos con el HTML para el Triángulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTrianguloBase");
    const value3 = Number(base.value);


    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del triangulo es: " + perimetro + " cm");
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTrianguloBase");
    const value3 = base.value;
    const altura = document.getElementById("alturaTriangulo")
    const value4 = altura.value;

    const area = areaTriangulo(value3, value4);
    alert("El área del triangulo es: " + area + " cm^2")
}




//Acá interactuamos con el HTML para el Círculo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("radioCirculo");
    const value = radio.value;


    const perimetro = perimetroCirculo(value);
    alert("El perímetro de su círculo es: " + perimetro + " cm");
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radioCirculo");
    const value = radio.value;


    const area = areaCirculo(value);
    alert("El área de su círculo es: " + area + " cm");
}




//Isósceles
function altura (lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        alert("Es un triángulo Isoceles")
        const altura = Math.sqrt((lado1 * lado1) - (base * base) / 4);
        return altura
    }
    else {
        alert("NO es un triángulo isósceles")
    }
} 


function calcularAlturaIsTriangulo() {
    const input1 = document.getElementById("IsLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("IsLado2");
    const value2 = Number(input2.value);
    const base = document.getElementById("IsBase");
    const value3 = Number(base.value);

    const h = altura(value1, value2, value3);
    alert("La altura de su triángulo Isósceles es: " + h + " cm^2");
}