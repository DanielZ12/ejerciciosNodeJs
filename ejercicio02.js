/* 
Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:

*
Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas.

Ejemplos:

Input: 100
Output: zero

Input: 88
Output: even

Input: 155
Output: five

Input: 99
Output: odd
*/

function number_cardinality(n) {
    let arr = n.toString().split("")
    let num = arr[arr.length -1]

    if(num == 0){
        return "zero"
    }else if(num == 5){
        return "five"
    }else if(num % 2 == 0 && num !== 0){
        return "even"
    }else if(num % 2 !== 0 && num !== 5){
        return "odd"
    }

}
console.log(number_cardinality(100));