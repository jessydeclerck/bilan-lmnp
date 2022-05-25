import {getCapitalRestantDu, getInterets, LigneAmortissement} from "./EmpruntService";
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


function getCharges(charges: Charges, interets: number): number {
    const {
        taxeFonciere = 0,
        assurancePNO = 0,
        garantieLoyerImpaye = 0,
        coproProprietaire = 0,
        coproLocataire = 0
    } = charges;
    return round(taxeFonciere + assurancePNO + garantieLoyerImpaye + coproProprietaire + coproLocataire + interets);
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
    return round(charge.montant / charge.dureeAmortissement);
}

function getBaseImposable(recettes: number, amortissements: number, totalCharges: number) {
    if (recettes - amortissements - totalCharges < 0) {
        return 0;
    }
    return round(recettes - amortissements - totalCharges);
}

function genererBilanPrevisionnel(loyerCC: number, tableauAmortissement: LigneAmortissement[], charges: Charges, tmi: number, mensualite: number): LigneBilan[] {
    const result = [];
    const recettes = round(loyerCC * 12);
    const annuite = round(mensualite * 12);

    for (let idx = 1; idx <= 30; idx++) {
        const interets = getInterets(tableauAmortissement, idx);
        const capitalRestantDu = getCapitalRestantDu(tableauAmortissement, 12 * idx + 1);
        const amortissements = getAmortissements(charges, 1);
        const chargesNonAmortissables = getCharges(charges, interets);
        const cumulDeficitBenef = round(recettes - amortissements - chargesNonAmortissables);
        const baseImposable = getBaseImposable(recettes, amortissements, chargesNonAmortissables);
        const prelevementSociaux = round(baseImposable * 17.2 / 100);
        const impotRevenu = round((baseImposable - prelevementSociaux) * tmi / 100);
        const cashFlow = round(recettes - annuite - chargesNonAmortissables - prelevementSociaux - impotRevenu);
        const rentabiliteNette = 0; //TODO

        result.push({
            id: idx,
            annee: idx,
            recettes,
            capitalRestantDu,
            annuite,
            interets,
            amortissements,
            charges: chargesNonAmortissables,
            cumulDeficitBenef,
            baseImposable,
            prelevementSociaux,
            impotRevenu,
            cashFlow,
            rentabilite: rentabiliteNette
        })

    }

    return result;
}

export {genererBilanPrevisionnel};
export type {LigneBilan, Charges, ChargeAmortissable};