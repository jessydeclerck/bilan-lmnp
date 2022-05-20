import React from 'react';
import './App.css';
import {Container, CssBaseline, Grid, Paper, Slider, ThemeOptions, AppBar} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {blue, amber, grey} from "@mui/material/colors";
import BilanParameterInput from "./inputs/BilanParameterInput";
import TauxEmpruntInput from "./inputs/TauxEmpruntInput";
import MontantEmpruntInput from "./inputs/MontantEmpruntInput";


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
                            <AppBar position="static"><h1>Bilan prévisionnel LMNP</h1></AppBar>

                        </header>
                    <Container maxWidth="lg" className="container">
                        <main>
                            <Grid container spacing={2}>
                                <Grid item xs={5}>
                                    <TauxEmpruntInput />
                                </Grid>
                                <Grid item xs={3}>
                                    <MontantEmpruntInput />
                                </Grid>
                                <Grid item xs={3}>

                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Grid>
                        </main>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}

export default App;
