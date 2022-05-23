import React, {ChangeEvent, useState} from 'react';
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

    const handleTauxSliderChange = (event: Event, newValue: number | number[]) => {
        setTauxEmprunt(Number(newValue))
    }

    const handleTauxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTauxEmprunt(Number(event.target.value));
    }

    const handleMontantEmpruntChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantEmprunt(Number(event.target.value));
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <header>
                        <AppBar position="static" sx={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}><MapsHomeWorkIcon sx={{fontSize: 40, marginRight: '10px'}}/><h1> Bilan prévisionnel LMNP</h1></AppBar>

                    </header>
                    <Container maxWidth="lg" className="container">
                        <main>
                            <Grid container spacing={2} sx={{marginTop: '0px'}}>
                                <Grid item xs={5}>
                                    <TauxEmpruntInput value={tauxEmprunt} handleInputChangeFunction={handleTauxInputChange} handleSliderChangeFunction={handleTauxSliderChange}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <MontantEmpruntInput value={montantEmprunt} handleInputChange={handleMontantEmpruntChange}/>
                                </Grid>
                                <Grid item xs={5}>
                                    <DureeEmprunt taux={tauxEmprunt} capital={montantEmprunt}/>
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
                                <Grid item xs={3}>
                                    <TravauxInput/>
                                </Grid>
                                <Grid item xs={4}>
                                    <TmiSelect/>
                                </Grid>
                                <Grid item xs={5}>

                                </Grid>
                                <Grid item xs={3}>
                                    <ChargesInput/>
                                </Grid>
                                <Grid item xs={5}>
                                    <AmortissementInput/>
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
