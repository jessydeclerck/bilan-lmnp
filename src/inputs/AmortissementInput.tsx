import BilanParameterInput from "./BilanParameterInput";
import {Box, Slider, Typography} from "@mui/material";
import {useState} from "react";
import {generateMarks} from "../Utils/BilanUtils";

const defaultSliderSteps = {
    min: 5,
    max: 10,
    step: 1
}

const bienSliderSteps = {
    min: 20,
    max: 50,
    step: 5
}

const notaireSliderSteps = {
    min: 20,
    max: 40,
    step: 5
}

const defaultMarks = generateMarks(defaultSliderSteps);
const bienMarks = generateMarks(bienSliderSteps);
const notaireMarks = generateMarks(notaireSliderSteps);

const typographyStyle = {fontSize: '13px', color: 'rgba(0, 0, 0, 0.6)'};

interface AmortissementInputProps {
    dureeAmortissementTravaux:number;
    dureeAmortissementMeubles:number;
    dureeAmortissementAgence:number;
    dureeAmortissementBien:number;
    dureeAmortissementNotaire:number;
    handleDureeAmortissementTravauxChange:(event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementMeublesChange:(event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementAgenceChange:(event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementBienChange:(event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementNotaireChange:(event: Event, newValue: number | number[]) => void;
}

function AmortissementInput({
                                dureeAmortissementAgence,
                                dureeAmortissementBien,
                                dureeAmortissementMeubles,
                                dureeAmortissementNotaire,
                                dureeAmortissementTravaux,
                                handleDureeAmortissementAgenceChange,
                                handleDureeAmortissementBienChange,
                                handleDureeAmortissementMeublesChange,
                                handleDureeAmortissementNotaireChange,
                                handleDureeAmortissementTravauxChange
                            }: AmortissementInputProps): JSX.Element {

    return <BilanParameterInput label={"Amortissements"} height={'415px'}>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '80%', alignSelf: 'center'}}>
            <Typography sx={typographyStyle}>Amortissement travaux
                (années)</Typography>
            <Slider
                aria-label={"Amortissement travaux"}
                value={dureeAmortissementTravaux}
                onChange={handleDureeAmortissementTravauxChange}
                valueLabelDisplay={"auto"}
                step={defaultSliderSteps.step}
                min={defaultSliderSteps.min}
                max={defaultSliderSteps.max}
                marks={defaultMarks}
            >
            </Slider>
            <Typography sx={typographyStyle}>Amortissement meubles
                (années)</Typography>
            <Slider
                aria-label={"Amortissement meubles"}
                value={dureeAmortissementMeubles}
                onChange={handleDureeAmortissementMeublesChange}
                valueLabelDisplay={"auto"}
                step={defaultSliderSteps.step}
                min={defaultSliderSteps.min}
                max={defaultSliderSteps.max}
                marks={defaultMarks}
            >
            </Slider>
            <Typography sx={typographyStyle}>Amortissement frais d'agence
                (années)</Typography>
            <Slider
                aria-label={"Amortissement frais d'agence"}
                value={dureeAmortissementAgence}
                onChange={handleDureeAmortissementAgenceChange}
                valueLabelDisplay={"auto"}
                step={defaultSliderSteps.step}
                min={defaultSliderSteps.min}
                max={defaultSliderSteps.max}
                marks={defaultMarks}
            >
            </Slider>
            <Typography sx={typographyStyle}>Amortissement du bien
                (années)</Typography>
            <Slider
                aria-label={"Amortissement du bien"}
                value={dureeAmortissementBien}
                onChange={handleDureeAmortissementBienChange}
                valueLabelDisplay={"auto"}
                step={1}
                min={bienSliderSteps.min}
                max={bienSliderSteps.max}
                marks={bienMarks}
            >
            </Slider>
            <Typography sx={typographyStyle}>Amortissement frais de notaire
                (années)</Typography>
            <Slider
                aria-label={"Amortissement frais de notaire"}
                value={dureeAmortissementNotaire}
                onChange={handleDureeAmortissementNotaireChange}
                valueLabelDisplay={"auto"}
                step={1}
                min={notaireSliderSteps.min}
                max={notaireSliderSteps.max}
                marks={notaireMarks}
            >
            </Slider>
        </Box>
    </BilanParameterInput>;
}

export default AmortissementInput;