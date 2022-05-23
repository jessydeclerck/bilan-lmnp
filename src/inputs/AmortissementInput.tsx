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

function AmortissementInput(): JSX.Element {
    const [dureeAmortissementTravaux, setDureeAmortissementTravaux] = useState(6);
    const [dureeAmortissementMeubles, setDureeAmortissementMeubles] = useState(6);
    const [dureeAmortissementAgence, setDureeAmortissementAgence] = useState(6);
    const [dureeAmortissementBien, setDureeAmortissementBien] = useState(25);
    const [dureeAmortissementNotaire, setDureeAmortissementNotaire] = useState(20);

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