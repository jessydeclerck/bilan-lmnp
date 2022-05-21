import React from 'react';
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
                                <Grid item xs={6}>
                                    <TauxEmpruntInput/>
                                </Grid>
                                <Grid item xs={2}>
                                    <MontantEmpruntInput/>
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
                                    <TravauxInput/>
                                </Grid>
                                <Grid item xs={2}>
                                    <MeublesInput/>
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
