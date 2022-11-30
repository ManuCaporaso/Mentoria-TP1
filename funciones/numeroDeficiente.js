//4- Un número deficiente es todo número natural que cumple que la suma de sus divisores propios es menor
// que el propio número. Por ejemplo, 16 es un número deficiente ya que sus divisores propios son
// 1, 2, 4 y 8 y se cumple que 1+2+4+8=15, que es menor que 16. Programa una función que pasado
// un número por argumento devuelva True si es deficiente y False si no lo es.

const num = 35;

function numDef (num) {
let suma = 0;
for (let i = 1; i < num; i++)
if (num % i === 0) { 
    {suma = suma + i;
    }
}
return num > suma;
}

let resultado4 = numDef (num)



module.exports = numDef;