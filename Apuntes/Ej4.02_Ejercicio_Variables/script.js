/*
    Objeto "Matematicas"
    Propiedad "pi" Math.PI
    Función "suma()" que admita "n" valores como parametros (suma(n)).

    function suma() {
        arguments[0] == 3;
        arguments[1] == 2;
        arguments[2] == 4;
        arguments[3] == 5;
    }
    suma(3, 2, 4, 5);

    Funcion "multiplica()" que tiene que admitir "n" valores como parametros. La función debe ser añadida después de declarar el objeto.

    Resolver las operaciones:
        - 4+5+PI+3*4*7
        - 4*PI*8*(12+4+7)
*/

const MATES = {
    pi: Math.PI,
    suma: function () {
        if (arguments) {
            let resultado = 0;

            for (let i=0; i<arguments.length; i++) {
                resultado += arguments[i];
            }

            return resultado;
        }
        return 0;
    },
    multiplica: function () {
        if (arguments) {
            let resultado = 1;

            for (let i=0; i<arguments.length; i++) {
                resultado *= arguments[i];
            }

            return resultado;
        }
        return 1;
    },
    dividir: function () {
        if (arguments) {
            let resultado = arguments[0];

            for (let i=1; i<arguments.length; i++) {
                resultado /= arguments[i];
            }

            return resultado;
        }
        return 1;
    }
}

const OPERACION = MATES.suma(2,4,3);
console.log(OPERACION);

const OPERACION2 = MATES.multiplica(2,4,3);
console.log(OPERACION2);

const OPERACION3 = MATES.dividir(4,2);
console.log(OPERACION3);
