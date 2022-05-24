function calculerMensualite(capital: number, tauxAnnuel: number, annees: number): string {
    const tauxMensuel = tauxAnnuel / 12 / 100;
    return ((capital * tauxMensuel * Math.pow(1 + tauxMensuel, annees * 12)) / (Math.pow(1 + tauxMensuel, annees * 12) - 1)).toFixed(2);
}

interface LigneAmortissement {
    id:number;
    mois: number;
    capitalRestantDu: number;
    interets: number;
    capitalRembourse: number;
}

function genererTableauAmortissement(capital: number, taux: number, annees: number): LigneAmortissement[] {
    const tableauAmortissement: LigneAmortissement[] = [];
    const mensualite = Number.parseFloat(calculerMensualite(capital, taux, annees));
    const tauxMensuel = taux / 12 / 100;

    tableauAmortissement.push({
        id: 1,
        mois: 1,
        capitalRestantDu: capital,
        interets: tauxMensuel * capital,
        capitalRembourse: mensualite - tauxMensuel * capital
    })

    for (let idx = 1; idx < annees * 12; idx++) {
        const moisPrecedent = tableauAmortissement[idx - 1];
        const capitalRestantDu = moisPrecedent.capitalRestantDu - moisPrecedent.capitalRembourse;
        const interets = capitalRestantDu * tauxMensuel;
        tableauAmortissement.push({
            id: idx+1,
            mois: idx + 1,
            capitalRestantDu,
            interets,
            capitalRembourse: mensualite - interets
        })
    }

    return tableauAmortissement;
}

export {calculerMensualite, genererTableauAmortissement};
export type { LigneAmortissement };
