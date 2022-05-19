import React from 'react';
import './App.css';
import {Container, Grid, Slider, Paper} from "@mui/material";

function App() {
    return (
        <>
            <Container maxWidth="lg" className="container">

                <header>
                    <h1>Bilan prévisionnel LMNP</h1>
                </header>
                <main>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Paper>
                            <Slider
                                aria-label="auto"
                                defaultValue={30}
                                valueLabelDisplay="on"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>World</Grid>
                        <Grid item xs={3}>1</Grid>
                        <Grid item xs={3}>2</Grid>
                        <Grid item xs={3}>3</Grid>
                    </Grid>
                </main>
            </Container>

        </>
    );
}

export default App;
