import {getCapitalRestantDu, getInterets, LigneAmortissement} from "./EmpruntService";
import {round} from "../Utils/BilanUtils";

interface LigneBilan {
    id: number;
    annee:number;
    recettes:number;
    capitalRestantDu:number;
    annuite:number;
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

interface Charges{
    meubles:ChargeAmortissable;
    travaux:ChargeAmortissable;
    fraisAgence:ChargeAmortissable;
    valeurBienNu:ChargeAmortissable;
    fraisNotaire:ChargeAmortissable;
    taxeFonciere:number;
    assurancePNO:number;
    garantieLoyerImpaye:number;
    coproProprietaire:number;
    coproLocataire:number;
}

interface ChargeAmortissable {
    montant:number;
    dureeAmortissement:number;
}


function getCharges(charges:Charges, interets:number):number{
    const {taxeFonciere = 0, assurancePNO = 0, garantieLoyerImpaye = 0, coproProprietaire = 0, coproLocataire = 0} = charges;
    return taxeFonciere+assurancePNO+garantieLoyerImpaye+coproProprietaire+coproLocataire+interets;
}

function getAmortissements(charges:Charges, annee:number):number{
    const {meubles, travaux, fraisAgence,valeurBienNu,fraisNotaire} = charges;
    return getAmortissement(meubles, annee) + getAmortissement(travaux, annee)
        + getAmortissement(fraisAgence, annee) + getAmortissement(valeurBienNu, annee)
        + getAmortissement(fraisNotaire, annee);
}

function getAmortissement(charge:ChargeAmortissable, annee:number):number {
    if (annee > charge.dureeAmortissement) {
        return 0;
    }
    return round(charge.montant/charge.dureeAmortissement);
}

function getBaseImposable(recettes:number, amortissements:number, totalCharges:number){
    if (recettes - amortissements - totalCharges < 0){
        return 0;
    }
    return recettes - amortissements - totalCharges;
}

function genererBilanPrevisionnel(loyerCC:number, tableauAmortissement:LigneAmortissement[], charges:Charges, tmi:number, mensualite:number):LigneBilan[]{
    const interetsAnnee1 = getInterets(tableauAmortissement, 1);
    const recettes = round(loyerCC*12);
    const annuite = round(mensualite*12);
    const amortissements = getAmortissements(charges, interetsAnnee1);
    const totalCharges = getCharges(charges, 1);
    const baseImposable = getBaseImposable(recettes, amortissements, totalCharges);
    const prelevementSociaux = round(baseImposable * 17.2/100);
    const impotRevenu = round((baseImposable-prelevementSociaux)*tmi/100);
    const cashFlow = recettes - annuite - totalCharges - prelevementSociaux - impotRevenu;
    const firstLine = {
        id: 1,
        annee: 1,
        recettes: recettes,
        capitalRestantDu: getCapitalRestantDu(tableauAmortissement, 13),
        annuite: annuite,
        interets: interetsAnnee1,
        amortissements: amortissements,
        charges: charges,
        cumulDeficitBenef: recettes - amortissements - totalCharges,
        baseImposable: baseImposable,
        prelevementSociaux: prelevementSociaux,
        impotRevenu:impotRevenu,
        cashFlow: cashFlow,
        rentabilite: 0

    }
    return [];
}

export type {LigneBilan};