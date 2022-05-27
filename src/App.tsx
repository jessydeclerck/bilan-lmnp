import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import {AppBar, Container, CssBaseline, Grid, SelectChangeEvent, ThemeOptions, Typography} from "@mui/material";
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
import {debounce} from "lodash";
import {useLocalStorage} from "./hooks/useLocalStorage";


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
    const [tauxEmprunt, setTauxEmprunt] = useLocalStorage('tauxEmprunt',1.5);
    const [montantEmprunt, setMontantEmprunt] = useLocalStorage('montantEmprunt',0);
    const [dureePret, setDureePret] = useLocalStorage('dureePret', 20);
    const [tableauAmortissement, setTableauAmortissement] = useLocalStorage('tableauAmortissement', [] as LigneAmortissement[]);
    const [loyerHC, setLoyerHC] = useLocalStorage('loyerHC', 0);
    const [chargesLoyer, setChargesLoyer] = useLocalStorage('chargesLoyer',0);
    const [mensualite, setMensualite] = useLocalStorage('mensualite',0);
    const [tmi, setTmi] = useLocalStorage('tmi', 30);
    const [charges, setCharges] = useLocalStorage('charges', defaultCharges);
    const [fraisAgence, setFraisAgence] = useLocalStorage('fraisAgence',0);
    const [fraisNotaire, setFraisNotaire] = useLocalStorage('fraisNotaire',0);
    const [valeurBien, setValeurBien] = useLocalStorage('valeurBien',0);
    const [montantMeuble, setMontantMeuble] = useLocalStorage('montantMeuble',0);
    const [montantTravaux, setMontantTravaux] = useLocalStorage('montantTravaux',0);
    const [taxeFonciere, setTaxeFonciere] = useLocalStorage('taxeFonciere',0);
    const [assurancePNO, setAssurancePNO] = useLocalStorage('assurancePNO',0);
    const [garantieLoyerImpaye, setGarantieLoyerImpaye] = useLocalStorage('garantieLoyerImpaye',0);
    const [chargesCoproProprietaire, setChargesCoproProprietaire] = useLocalStorage('chargesCoproProprietaire',0);
    const [chargesCoproLocataire, setChargesCoproLocataire] = useLocalStorage('chargesCoproLocataire',0);
    const [dureeAmortissementTravaux, setDureeAmortissementTravaux] = useLocalStorage('dureeAmortissementTravaux',6);
    const [dureeAmortissementMeubles, setDureeAmortissementMeubles] = useLocalStorage('dureeAmortissementMeubles',6);
    const [dureeAmortissementAgence, setDureeAmortissementAgence] = useLocalStorage('dureeAmortissementAgence',6);
    const [dureeAmortissementBien, setDureeAmortissementBien] = useLocalStorage('dureeAmortissementBien',25);
    const [dureeAmortissementNotaire, setDureeAmortissementNotaire] = useLocalStorage('dureeAmortissementNotaire',20);

    const useDebounced = <T extends (...args: any) => any>(func:T, delay:number) => {
        return useCallback(debounce(func, delay), []);
    }

    const updateCharges = (charges:Charges) => {
        setCharges(charges);
    }

    const debouncedUpdateCharges = useDebounced(updateCharges, 200);

    useEffect(() => {
        const newValue = {
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
        }
        debouncedUpdateCharges(newValue)
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

    const debouncedHandleDureePretChange = useDebounced(handleDureePretChange, 200);

    const handleTauxSliderChange = (event: Event, newValue: number | number[]) => {
        setTauxEmprunt(Number(newValue))
    }

    const handleTauxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTauxEmprunt(Number(event.target.value));
    }

    const handleMontantEmpruntChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantEmprunt(Number(event.target.value));
    }

    const updateDisplays = (tauxEmprunt:number, montantEmprunt:number, dureePret:number) => {
        setTableauAmortissement(genererTableauAmortissement(montantEmprunt, tauxEmprunt, dureePret));
        setMensualite(Number.parseFloat(calculerMensualite(montantEmprunt, tauxEmprunt, dureePret)));
    }

    const debouncedUpdateDisplays = useDebounced(updateDisplays, 200);

    useEffect(() => {
        debouncedUpdateDisplays(tauxEmprunt, montantEmprunt, dureePret);
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
                                <Grid item md={5} xs={12}>
                                    <TauxEmpruntInput value={tauxEmprunt}
                                                      handleInputChangeFunction={handleTauxInputChange}
                                                      handleSliderChangeFunction={useDebounced(handleTauxSliderChange, 200)}/>
                                </Grid>
                                <Grid item md={2} xs={12}>
                                    <MontantEmpruntInput value={montantEmprunt}
                                                         handleInputChange={handleMontantEmpruntChange}/>
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <DureeEmprunt taux={tauxEmprunt} capital={montantEmprunt} dureePret={dureePret}
                                                  handleDureePretChange={debouncedHandleDureePretChange}/>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <LoyerInput loyerHC={loyerHC} chargesLoyer={chargesLoyer}
                                                handleLoyerHCChange={handleLoyerHCChange}
                                                handleChargesLoyerChange={handleChargesLoyerChange}/>
                                </Grid>
                                <Grid item md={2} xs={6}>
                                    <FraisAgenceInput fraisAgence={fraisAgence}
                                                      handleFraisAgenceChange={handleFraisAgenceChange}/>
                                </Grid>
                                <Grid item md={2} xs={6}>
                                    <FraisNotaireInput fraisNotaire={fraisNotaire}
                                                       handleFraisNotaireChange={handleFraisNotaireChange}/>
                                </Grid>
                                <Grid item md={3} xs={6}>
                                    <ValeurAppartementInput valeurBien={valeurBien}
                                                            handleValeurBienChange={handleValeurBienChange}/>
                                </Grid>
                                <Grid item md={2} xs={6}>
                                    <MeublesInput montantMeuble={montantMeuble}
                                                  handleMontantMeubleChange={handleMontantMeubleChange}/>
                                </Grid>
                                <Grid container item spacing={2} md={6} xs={12}>
                                    <Grid item md={4} xs={12}>
                                        <TravauxInput montantTravaux={montantTravaux}
                                                      handleMontantTravauxChange={handleMontantTravauxChange}/>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <TmiSelect tmi={tmi} handleTmiChange={handleTmiChange}/>
                                    </Grid>
                                    <Grid item md={4} xs={12}>
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
                                    <Grid item md={8} xs={12}>
                                        <AmortissementInput dureeAmortissementMeubles={dureeAmortissementMeubles}
                                                            dureeAmortissementTravaux={dureeAmortissementTravaux}
                                                            dureeAmortissementAgence={dureeAmortissementAgence}
                                                            dureeAmortissementBien={dureeAmortissementBien}
                                                            dureeAmortissementNotaire={dureeAmortissementNotaire}
                                                            handleDureeAmortissementAgenceChange={useDebounced(handleDureeAmortissementAgenceChange,200)}
                                                            handleDureeAmortissementBienChange={useDebounced(handleDureeAmortissementBienChange, 200)}
                                                            handleDureeAmortissementMeublesChange={useDebounced(handleDureeAmortissementMeublesChange,200)}
                                                            handleDureeAmortissementNotaireChange={useDebounced(handleDureeAmortissementNotaireChange,200)}
                                                            handleDureeAmortissementTravauxChange={useDebounced(handleDureeAmortissementTravauxChange,200)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container item spacing={2} md={6} xs={12}>
                                    <Grid item md={12} xs={12}>
                                        <TableauAmortissement tableauAmortissement={tableauAmortissement}/>
                                    </Grid>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <BilanPrevisionnel loyerCC={loyerHC + chargesLoyer}
                                                       tableauAmortissement={tableauAmortissement} charges={charges}
                                                       tmi={tmi}
                                                       mensualite={mensualite}/>
                                </Grid>
                            </Grid>
                        </main>
                        <footer>
                            <p><Typography sx={{color:'DimGray', fontSize:'14px', textAlign:'center'}}>Code disponible sur <a href={'https://github.com/jessydeclerck/bilan-lmnp'} target={'_blank'}>GitHub</a></Typography></p>
                        </footer>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}

export default App;
