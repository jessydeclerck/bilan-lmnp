interface LigneBilan {
    id: number;
    annee:number;
    recettes:number;
    capitalRestantDu:number;
    interets:number;
    amortissements:number;
    charges:number;
    cumulDeficitBenef:number;
    baseImposable:number;
    prelevementSociaux:number;
    impotRevenu:number;
    cashFlow:number;
    rentabilite:number;
}



export type {LigneBilan};