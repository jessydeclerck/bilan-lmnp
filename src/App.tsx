import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {AppBar, Container, CssBaseline, Grid, ThemeOptions} from "@mui/material";
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
import {
    genererTableauAmortissement,
    getCapitalRestantDu,
    getInterets,
    LigneAmortissement
} from "./services/EmpruntService";
import TableauAmortissement from "./displays/TableauAmortissement";


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

function App() {
    const [tauxEmprunt, setTauxEmprunt] = useState(1.5);
    const [montantEmprunt, setMontantEmprunt] = useState(0);
    const [dureePret, setDureePret] = useState(20);
    const [tableauAmortissement, setTableauAmortissement] = useState<LigneAmortissement[]>([])

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
        const tab = genererTableauAmortissement(montantEmprunt, tauxEmprunt, dureePret)
        setTableauAmortissement(tab);
        console.log('Interets année 1:', getInterets(tab, 1));
        console.log('Capital restant du année 1:', getCapitalRestantDu(tab, 13));
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
                                    <LoyerInput/>
                                </Grid>
                                <Grid item xs={2}>
                                    <FraisAgenceInput/>
                                </Grid>
                                <Grid item xs={2}>
                                    <FraisNotaireInput/>
                                </Grid>
                                <Grid item xs={3}>
                                    <ValeurAppartementInput/>
                                </Grid>
                                <Grid item xs={2}>
                                    <MeublesInput/>
                                </Grid>
                                <Grid container item spacing={2} xs={6}>
                                    <Grid item xs={4}>
                                        <TravauxInput/>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TmiSelect/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ChargesInput/>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <AmortissementInput/>
                                    </Grid>
                                </Grid>
                                <Grid container item spacing={2} xs={6}>
                                    <Grid item xs={12}>
                                        <TableauAmortissement tableauAmortissement={tableauAmortissement}/>
                                    </Grid>
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
