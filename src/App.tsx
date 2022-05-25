import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {AppBar, Container, CssBaseline, Grid, SelectChangeEvent, ThemeOptions} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {amber, blue, grey} from "@mui/material/colors";
import TauxEmpruntInput from "./inputs/TauxEmpruntInput";
import MontantEmpruntInput from "./inputs/MontantEmpruntInput";
import LoyerInput from "./inputs/LoyerInput";
import TravauxInput from "./inputs/TravauxInput";
import FraisAgenceInput from "./inputs/FraisAgenceInput";
import FraisNotaireInput from "./inputs/FraisNotaireInput";
import MeublesInput from "./inputs/MeublesInput.";
import ValeurAppartementInput from "./inputs/ValeurAppartementInput";
import ChargesInput from "./inputs/ChargesInput";
import AmortissementInput from "./inputs/AmortissementInput";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import TmiSelect from "./inputs/TmiSelect";
import DureeEmprunt from "./displays/DureeEmprunt";
import {calculerMensualite, genererTableauAmortissement, LigneAmortissement} from "./services/EmpruntService";
import TableauAmortissement from "./displays/TableauAmortissement";
import BilanPrevisionnel from "./displays/BilanPrevisionnel";
import {Charges} from "./services/BilanService";


const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: blue[700]
        },
        secondary: {
            main: amber[500]
        },
        background: {
            default: grey[300],
            paper: grey[200]
        },
    },
};

const theme = createTheme(themeOptions);

const defaultCharges: Charges = {
    meubles: {montant: 0, dureeAmortissement: 6},
    travaux: {montant: 0, dureeAmortissement: 6},
    fraisAgence: {montant: 0, dureeAmortissement: 6},
    valeurBienNu: {montant: 0, dureeAmortissement: 25},
    fraisNotaire: {montant: 0, dureeAmortissement: 20},
    taxeFonciere: 0,
    assurancePNO: 0,
    garantieLoyerImpaye: 0,
    coproProprietaire: 0,
    coproLocataire: 0
};

function App() {
    const [tauxEmprunt, setTauxEmprunt] = useState(1.5);
    const [montantEmprunt, setMontantEmprunt] = useState(0);
    const [dureePret, setDureePret] = useState(20);
    const [tableauAmortissement, setTableauAmortissement] = useState<LigneAmortissement[]>([])
    const [loyerHC, setLoyerHC] = useState(0);
    const [chargesLoyer, setChargesLoyer] = useState(0);
    const [mensualite, setMensualite] = useState(0);
    const [tmi, setTmi] = useState(30);
    const [charges, setCharges] = useState(defaultCharges);
    const [fraisAgence, setFraisAgence] = useState(0);
    const [fraisNotaire, setFraisNotaire] = useState(0);
    const [valeurBien, setValeurBien] = useState(0);
    const [montantMeuble, setMontantMeuble] = useState(0);
    const [montantTravaux, setMontantTravaux] = useState(0);
    const [taxeFonciere, setTaxeFonciere] = useState(0);
    const [assurancePNO, setAssurancePNO] = useState(0);
    const [garantieLoyerImpaye, setGarantieLoyerImpaye] = useState(0);
    const [chargesCoproProprietaire, setChargesCoproProprietaire] = useState(0);
    const [chargesCoproLocataire, setChargesCoproLocataire] = useState(0);
    const [dureeAmortissementTravaux, setDureeAmortissementTravaux] = useState(6);
    const [dureeAmortissementMeubles, setDureeAmortissementMeubles] = useState(6);
    const [dureeAmortissementAgence, setDureeAmortissementAgence] = useState(6);
    const [dureeAmortissementBien, setDureeAmortissementBien] = useState(25);
    const [dureeAmortissementNotaire, setDureeAmortissementNotaire] = useState(20);

    useEffect(() => {
        setCharges({
            meubles: {montant: montantMeuble, dureeAmortissement: dureeAmortissementMeubles},
            travaux: {montant: montantTravaux, dureeAmortissement: dureeAmortissementTravaux},
            fraisAgence: {montant: fraisAgence, dureeAmortissement: dureeAmortissementAgence},
            valeurBienNu: {montant: valeurBien, dureeAmortissement: dureeAmortissementBien},
            fraisNotaire: {montant: fraisNotaire, dureeAmortissement: dureeAmortissementNotaire},
            taxeFonciere,
            assurancePNO,
            garantieLoyerImpaye,
            coproProprietaire: chargesCoproProprietaire,
            coproLocataire: chargesCoproLocataire
        })
    }, [fraisAgence, fraisNotaire, valeurBien, montantMeuble, montantTravaux, taxeFonciere, assurancePNO, garantieLoyerImpaye, chargesCoproProprietaire, chargesCoproLocataire, dureeAmortissementTravaux, dureeAmortissementMeubles, dureeAmortissementAgence, dureeAmortissementBien, dureeAmortissementNotaire]);

    const handleDureeAmortissementTravauxChange = (event: Event, newValue: number | number[]) => {
        setDureeAmortissementTravaux(Number(newValue))
    }
    const handleDureeAmortissementMeublesChange = (event: Event, newValue: number | number[]) => {
        setDureeAmortissementMeubles(Number(newValue))
    }
    const handleDureeAmortissementAgenceChange = (event: Event, newValue: number | number[]) => {
        setDureeAmortissementAgence(Number(newValue))
    }
    const handleDureeAmortissementBienChange = (event: Event, newValue: number | number[]) => {
        setDureeAmortissementBien(Number(newValue))
    }
    const handleDureeAmortissementNotaireChange = (event: Event, newValue: number | number[]) => {
        setDureeAmortissementNotaire(Number(newValue))
    }

    const handleTaxeFonciereChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaxeFonciere(Number(event.target.value));
    }

    const handleAssurancePNOChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAssurancePNO(Number(event.target.value));
    }

    const handleGarantieLoyerImpayeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGarantieLoyerImpaye(Number(event.target.value));
    }

    const handleChargeCoproProprietaire = (event: ChangeEvent<HTMLInputElement>) => {
        setChargesCoproProprietaire(Number(event.target.value));
    }

    const handleChargesCoproLocataire = (event: ChangeEvent<HTMLInputElement>) => {
        setChargesCoproLocataire(Number(event.target.value));
    }

    const handleMontantTravauxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantTravaux(Number(event.target.value));
    }

    const handleMontantMeubleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantMeuble(Number(event.target.value));
    }

    const handleValeurBienChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValeurBien(Number(event.target.value));
    }

    const handleFraisNotaireChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFraisNotaire(Number(event.target.value));
    }

    const handleFraisAgenceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFraisAgence(Number(event.target.value));
    }

    const handleTmiChange = (event: SelectChangeEvent) => {
        setTmi(Number.parseInt(event.target.value));
    }

    const handleLoyerHCChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoyerHC(Number(event.target.value));
    }

    const handleChargesLoyerChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChargesLoyer(Number(event.target.value));
    }

    const handleDureePretChange = (event: Event, newValue: number | number[]) => {
        setDureePret(Number(newValue))
    }

    const handleTauxSliderChange = (event: Event, newValue: number | number[]) => {
        setTauxEmprunt(Number(newValue))
    }

    const handleTauxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTauxEmprunt(Number(event.target.value));
    }

    const handleMontantEmpruntChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantEmprunt(Number(event.target.value));
    }

    useEffect(() => {
        setTableauAmortissement(genererTableauAmortissement(montantEmprunt, tauxEmprunt, dureePret));
        setMensualite(Number.parseFloat(calculerMensualite(montantEmprunt, tauxEmprunt, dureePret)));
    }, [tauxEmprunt, montantEmprunt, dureePret])

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <header>
                        <AppBar position="static"
                                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}><MapsHomeWorkIcon
                            sx={{fontSize: 40, marginRight: '10px'}}/><h1> Bilan prévisionnel LMNP</h1></AppBar>
                    </header>
                    <Container maxWidth="lg" className="container">
                        <main>
                            <Grid container spacing={2} sx={{marginTop: '0px'}}>
                                <Grid item xs={5}>
                                    <TauxEmpruntInput value={tauxEmprunt}
                                                      handleInputChangeFunction={handleTauxInputChange}
                                                      handleSliderChangeFunction={handleTauxSliderChange}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <MontantEmpruntInput value={montantEmprunt}
                                                         handleInputChange={handleMontantEmpruntChange}/>
                                </Grid>
                                <Grid item xs={5}>
                                    <DureeEmprunt taux={tauxEmprunt} capital={montantEmprunt} dureePret={dureePret}
                                                  handleDureePretChange={handleDureePretChange}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <LoyerInput loyerHC={loyerHC} chargesLoyer={chargesLoyer}
                                                handleLoyerHCChange={handleLoyerHCChange}
                                                handleChargesLoyerChange={handleChargesLoyerChange}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <FraisAgenceInput fraisAgence={fraisAgence}
                                                      handleFraisAgenceChange={handleFraisAgenceChange}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <FraisNotaireInput fraisNotaire={fraisNotaire}
                                                       handleFraisNotaireChange={handleFraisNotaireChange}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <ValeurAppartementInput valeurBien={valeurBien}
                                                            handleValeurBienChange={handleValeurBienChange}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <MeublesInput montantMeuble={montantMeuble}
                                                  handleMontantMeubleChange={handleMontantMeubleChange}/>
                                </Grid>
                                <Grid container item spacing={2} xs={6}>
                                    <Grid item xs={4}>
                                        <TravauxInput montantTravaux={montantTravaux}
                                                      handleMontantTravauxChange={handleMontantTravauxChange}/>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TmiSelect tmi={tmi} handleTmiChange={handleTmiChange}/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ChargesInput taxeFonciere={taxeFonciere}
                                                      garantieLoyerImpaye={garantieLoyerImpaye}
                                                      assurancePNO={assurancePNO}
                                                      chargesCoproProprietaire={chargesCoproProprietaire}
                                                      chargesCoproLocataire={chargesCoproLocataire}
                                                      handleTaxeFonciereChange={handleTaxeFonciereChange}
                                                      handleAssurancePNOChange={handleAssurancePNOChange}
                                                      handleChargeCoproProprietaire={handleChargeCoproProprietaire}
                                                      handleChargesCoproLocataire={handleChargesCoproLocataire}
                                                      handleGarantieLoyerImpayeChange={handleGarantieLoyerImpayeChange}
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <AmortissementInput dureeAmortissementMeubles={dureeAmortissementMeubles}
                                                            dureeAmortissementTravaux={dureeAmortissementTravaux}
                                                            dureeAmortissementAgence={dureeAmortissementAgence}
                                                            dureeAmortissementBien={dureeAmortissementBien}
                                                            dureeAmortissementNotaire={dureeAmortissementNotaire}
                                                            handleDureeAmortissementAgenceChange={handleDureeAmortissementAgenceChange}
                                                            handleDureeAmortissementBienChange={handleDureeAmortissementBienChange}
                                                            handleDureeAmortissementMeublesChange={handleDureeAmortissementMeublesChange}
                                                            handleDureeAmortissementNotaireChange={handleDureeAmortissementNotaireChange}
                                                            handleDureeAmortissementTravauxChange={handleDureeAmortissementTravauxChange}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container item spacing={2} xs={6}>
                                    <Grid item xs={12}>
                                        <TableauAmortissement tableauAmortissement={tableauAmortissement}/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <BilanPrevisionnel loyerCC={loyerHC + chargesLoyer}
                                                       tableauAmortissement={tableauAmortissement} charges={charges}
                                                       tmi={tmi}
                                                       mensualite={mensualite}/>
                                </Grid>
                            </Grid>
                        </main>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}

export default App;
