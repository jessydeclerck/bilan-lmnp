import {getAnnuite, getCapitalRestantDu, getInterets, LigneAmortissement} from "./EmpruntService";
import {round} from "../Utils/BilanUtils";

interface LigneBilan {
    id: number;
    annee: number;
    recettes: number;
    capitalRestantDu: number;
    annuite: number;
    interets: number;
    amortissements: number;
    charges: number;
    cumulDeficitBenef: number;
    baseImposable: number;
    prelevementSociaux: number;
    impotRevenu: number;
    cashFlow: number;
    rentabilite: number;
}

interface Charges {
    meubles: ChargeAmortissable;
    travaux: ChargeAmortissable;
    fraisAgence: ChargeAmortissable;
    valeurBienNu: ChargeAmortissable;
    fraisNotaire: ChargeAmortissable;
    taxeFonciere: number;
    assurancePNO: number;
    garantieLoyerImpaye: number;
    coproProprietaire: number;
    coproLocataire: number;
}

interface ChargeAmortissable {
    montant: number;
    dureeAmortissement: number;
}


function getChargesNonAmortissables(charges: Charges): number {
    const {
        taxeFonciere = 0,
        assurancePNO = 0,
        garantieLoyerImpaye = 0,
        coproProprietaire = 0,
        coproLocataire = 0
    } = charges;
    return taxeFonciere + assurancePNO + garantieLoyerImpaye + coproProprietaire + coproLocataire;
}

function getAmortissements(charges: Charges, annee: number): number {
    const {meubles, travaux, fraisAgence, valeurBienNu, fraisNotaire} = charges;
    return getAmortissement(meubles, annee) + getAmortissement(travaux, annee)
        + getAmortissement(fraisAgence, annee) + getAmortissement(valeurBienNu, annee)
        + getAmortissement(fraisNotaire, annee);
}

function getAmortissement(charge: ChargeAmortissable, annee: number): number {
    if (annee > charge.dureeAmortissement) {
        return 0;
    }
    return charge.montant / charge.dureeAmortissement;
}

function getCumulDeficitBenefForCurrentYear(recettes: number, amortissements: number, chargesNonAmortissables: number, interets: number) {
    return recettes - amortissements - chargesNonAmortissables - interets;
}

function getCumulDeficitBenefFromLastYear(result: LigneBilan[], annee: number) {
    return result.find(ligneBilan => ligneBilan.annee === annee - 1 && ligneBilan.cumulDeficitBenef < 0)?.cumulDeficitBenef ?? 0;
}

function genererBilanPrevisionnel(loyerCC: number, tableauAmortissement: LigneAmortissement[], charges: Charges, tmi: number, mensualite: number): LigneBilan[] {
    const result = [];
    const recettes = loyerCC * 12;

    for (let annee = 1; annee <= 30; annee++) {
        const interets = getInterets(tableauAmortissement, annee);
        const capitalRestantDu = getCapitalRestantDu(tableauAmortissement, 12 * annee + 1);
        const annuite = getAnnuite(tableauAmortissement, annee);
        const amortissements = getAmortissements(charges, annee);
        const chargesNonAmortissables = getChargesNonAmortissables(charges);
        let cumulDeficitBenef = getCumulDeficitBenefForCurrentYear(recettes, amortissements, chargesNonAmortissables, interets);
        let baseImposable;
        const cumulDeficitBenefLastYear = getCumulDeficitBenefFromLastYear(result, annee);
        cumulDeficitBenef += cumulDeficitBenefLastYear;
        if (cumulDeficitBenef < 0) {
            baseImposable = 0;
        } else {
            baseImposable = cumulDeficitBenef;
            cumulDeficitBenef = getCumulDeficitBenefForCurrentYear(recettes, amortissements, chargesNonAmortissables, interets);
        }
        const prelevementSociaux = baseImposable * 17.2 / 100;
        const impotRevenu = (baseImposable - prelevementSociaux) * tmi / 100;
        const cashFlow = recettes - annuite - chargesNonAmortissables - prelevementSociaux - impotRevenu;
        const rentabiliteNette = 0; //TODO


        result.push({
            id: round(annee),
            annee: round(annee),
            recettes: round(recettes),
            capitalRestantDu: round(capitalRestantDu),
            annuite: round(annuite),
            interets: round(interets),
            amortissements: round(amortissements),
            charges: round(chargesNonAmortissables),
            cumulDeficitBenef: round(cumulDeficitBenef),
            baseImposable: round(baseImposable),
            prelevementSociaux: round(prelevementSociaux),
            impotRevenu: round(impotRevenu),
            cashFlow: round(cashFlow),
            rentabilite: round(rentabiliteNette)
        })

    }

    return result;
}

export {genererBilanPrevisionnel};
export type {LigneBilan, Charges, ChargeAmortissable};