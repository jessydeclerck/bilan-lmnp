function calculerMensualite(capital:number, tauxAnnuel:number, annees:number):string {
    const taux = tauxAnnuel/12/100;
    return ((capital*taux*Math.pow(1+taux, annees*12))/(Math.pow(1+taux, annees*12)-1)).toFixed(2);
}

export {calculerMensualite};