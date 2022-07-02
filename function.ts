
{
    console.log("typeScript");
    // função
    const a = 1
    const b = 4


    // basica
    function functionSoma(a: number, b: number) {
        return a + b;
    }

    // arrow function
    const arrowFunctionSoma = (a: number, b: number) => {
        return a + b;
    }

    // arrow function resumida
    const arrowFunctionSomaResumida = (a: number, b: number) => a + b;
    // obs. retorna o valor entre => e ; 

    console.log('função soma basica: ', functionSoma(a, b));
    console.log('arrow function soma: ', arrowFunctionSoma(a, b));
    console.log('arrow function soma: ', arrowFunctionSomaResumida(a, b));
}
