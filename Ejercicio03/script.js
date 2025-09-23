document.addEventListener('DOMContentLoaded', () => {
    function ordenar(arr) {
        const nuevoArray = [...arr];
        for (let i = 0; i < nuevoArray.length; i++) {
            for (let j = 0; j < nuevoArray.length - i - 1; j++) {
                if (nuevoArray[j] > nuevoArray[j + 1]) {
                    let temporal = nuevoArray[j];
                    nuevoArray[j] = nuevoArray[j + 1];
                    nuevoArray[j + 1] = temporal;
                }
            }
        }
        return nuevoArray;
    }

    console.log('Arreglo original: [5, 3, 2, 8, 1, 4]');
    console.log(ordenar([5, 3, 2, 8, 1, 4]));

    function esPar (numero) {
        return numero % 2 === 0;
    }

    console.log(esPar(7));
    console.log(esPar(4));

    function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
        let altura = 0;
        let dias = 0;
        while (altura < alturaDeseada) {
            altura += velocidadCrecimiento;
            dias++;
            if (altura >= alturaDeseada) {
                return dias;
            }
        altura -= velocidadDecrecimiento;
        }    
        return dias;
    }
    console.log(calcularDiasCrecimiento(7, 2, 31));
}); 