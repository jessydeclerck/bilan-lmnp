import { round } from "../Utils/BilanUtils";

function calculerMensualite(capital: number, tauxAnnuel: number, annees: number): string {
    const tauxMensuel = tauxAnnuel / 12 / 100;
    return ((capital * tauxMensuel * Math.pow(1 + tauxMensuel, annees * 12)) / (Math.pow(1 + tauxMensuel, annees * 12) - 1)).toFixed(2);
}

interface LigneAmortissement {
    id: number;
    mois: number;
    capitalRestantDu: number;
    interets: number;
    capitalRembourse: number;
}

function genererTableauAmortissement(capital: number, taux: number, annees: number): LigneAmortissement[] {
    const tableauAmortissement: LigneAmortissement[] = [];
    const mensualite = round(Number.parseFloat(calculerMensualite(capital, taux, annees)));
    const tauxMensuel = taux / 12 / 100;

    tableauAmortissement.push({
        id: 1,
        mois: 1,
        capitalRestantDu: capital,
        interets: round(tauxMensuel * capital),
        capitalRembourse: round(mensualite - tauxMensuel * capital)
    })

    for (let idx = 1; idx < annees * 12; idx++) {
        const moisPrecedent = tableauAmortissement[idx - 1];
        const capitalRestantDu = round(moisPrecedent.capitalRestantDu - moisPrecedent.capitalRembourse);
        const interets = round(capitalRestantDu * tauxMensuel);
        tableauAmortissement.push({
            id: idx + 1,
            mois: idx + 1,
            capitalRestantDu,
            interets,
            capitalRembourse: round(mensualite - interets)
        })
    }

    return tableauAmortissement;
}

function getCapitalRestantDu(tableauAmortissement: LigneAmortissement[], mois: number): number {
    return tableauAmortissement[mois - 1].capitalRestantDu;
}

function getInterets(tableauAmortissement: LigneAmortissement[], annee: number) {
    const dernierMois = annee * 12;
    const premierMois = dernierMois - 12;
    const periodeAmortissement = tableauAmortissement.slice(premierMois, dernierMois);
    return periodeAmortissement.map(ligneAmortissement => ligneAmortissement.interets)
        .reduce((sum, currentValue) => sum + currentValue, 0);
}


export {calculerMensualite, genererTableauAmortissement, getCapitalRestantDu, getInterets};
export type {LigneAmortissement};
