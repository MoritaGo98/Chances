//Formas de crear un arreglo

let numeros = [10, 20, 30, 40, 50]
console.log(numeros)

let planetas = new Array("Marte", "Sol", "Luna")
console.log(planetas)

//Acceder a los elementos de un arreglo
console.log("Primer planeta:", planetas[0]);
console.log("Ultimo planeta", planetas[planetas.length - 1])

//Metodos comunes de los arreglos 
let planet = ["Venus", "Tierra", "Marte", "Jupiter"]

//Agregar elementos
planet.push("Saturno")
console.log("Despues de push:", planet)

//Eliminar elementos
planet.pop()
console.log("Despues de pop:", planet)

planet.unshift("Mercurio")
console.log("Despues de shift:", planet)

//Propiedades utilies de los arreglos
console.log("Numero de planetas:", planetas.length)
console.log("El arreglo incluye a 'venus'?", planet.includes("venus"))

//Ordenar un arreglo
let number = [3, 4, 5, 6, 8, 11, 1]
number.sport();
console.log("Ordenados:", number)

number.reverse();
console.log("Invertidos:", number)

//Arreglos multidimensionales
let matriz = [
    ["Juan", 18],
    ["Pedro", 23],
    ["David", 81]
]
console.log("Edad de pablo:", matriz[0][1])