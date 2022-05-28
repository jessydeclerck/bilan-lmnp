import BilanParameterInput from "./BilanParameterInput";
import {Box, IconButton, Popover, Slider, Typography} from "@mui/material";
import React, {useState} from "react";
import {generateMarks} from "../Utils/BilanUtils";
import HelpIcon from '@mui/icons-material/Help';

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
    dureeAmortissementTravaux: number;
    dureeAmortissementMeubles: number;
    dureeAmortissementAgence: number;
    dureeAmortissementBien: number;
    dureeAmortissementNotaire: number;
    handleDureeAmortissementTravauxChange: (event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementMeublesChange: (event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementAgenceChange: (event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementBienChange: (event: Event, newValue: number | number[]) => void;
    handleDureeAmortissementNotaireChange: (event: Event, newValue: number | number[]) => void;
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
    const [agenceValueDisplayed, setAgenceValueDisplayed] = useState(dureeAmortissementAgence);
    const [bienValueDisplayed, setBienValueDisplayed] = useState(dureeAmortissementBien);
    const [meublesValueDisplayed, setMeublesValueDisplayed] = useState(dureeAmortissementMeubles);
    const [notaireValueDisplayed, setNotaireValueDisplayed] = useState(dureeAmortissementNotaire);
    const [travauxValueDisplayed, setTravauxValueDisplayed] = useState(dureeAmortissementTravaux);
    const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null);

    const open = Boolean(anchorEl);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };


    return <BilanParameterInput label={"Amortissements"} minHeight={'415px'} height={'100%'}>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '80%', alignSelf: 'center'}}>
            <Typography sx={typographyStyle}>Amortissement travaux
                (années)</Typography>
            <Slider
                aria-label={"Amortissement travaux"}
                value={travauxValueDisplayed}
                onChange={(event, newValue) => {
                    setTravauxValueDisplayed(Number(newValue));
                    handleDureeAmortissementTravauxChange(event, newValue);
                }}
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
                value={meublesValueDisplayed}
                onChange={(event, newValue) => {
                    setMeublesValueDisplayed(Number(newValue));
                    handleDureeAmortissementMeublesChange(event, newValue);
                }}
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
                value={agenceValueDisplayed}
                onChange={(event, newValue) => {
                    setAgenceValueDisplayed(Number(newValue));
                    handleDureeAmortissementAgenceChange(event, newValue);
                }}
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
                value={bienValueDisplayed}
                onChange={(event, newValue) => {
                    setBienValueDisplayed(Number(newValue));
                    handleDureeAmortissementBienChange(event, newValue);
                }}
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
                value={notaireValueDisplayed}
                onChange={(event, newValue) => {
                    setNotaireValueDisplayed(Number(newValue));
                    handleDureeAmortissementNotaireChange(event, newValue);
                }}
                valueLabelDisplay={"auto"}
                step={1}
                min={notaireSliderSteps.min}
                max={notaireSliderSteps.max}
                marks={notaireMarks}
            >
            </Slider>
        </Box>
        <IconButton onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose} sx={{marginLeft: 'auto', padding:'0'}}><HelpIcon sx={{fontSize: 'small', color: 'darkgrey'}}/></IconButton>
        <Popover
            id="mouse-over-popover"
            sx={{
                pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <Typography sx={{p: 1}}>Description amortissement<br/>Plusieurs lignes ?.</Typography>
        </Popover>
    </BilanParameterInput>;
}

export default AmortissementInput;