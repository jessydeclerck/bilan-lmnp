import {Box, FormControl, InputAdornment, InputLabel, OutlinedInput, Paper, Slider} from "@mui/material";
import {calculerMensualite} from "../services/EmpruntService";
import {useState} from "react";
import {generateMarks} from "../Utils/BilanUtils";
import PopoverInfo from "./PopoverInfo";

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

interface MensualitesProps {
    taux: number;
    capital: number;
    dureePret: number;
    handleDureePretChange: (event: Event, newValue: number | number[]) => void;
}

const dureeEmpruntSteps = {
    min: 15,
    max: 25,
    step: 5
}

const dureeMarks = generateMarks(dureeEmpruntSteps, ' ans');

function DureeEmprunt(props: MensualitesProps): JSX.Element {
    const {taux, capital, dureePret, handleDureePretChange} = props;
    const [valueDisplayed, setValueDisplayed] = useState(dureePret);
    const popoverInfo = <PopoverInfo>Méthode de calcul des mensualités utilisée: <br/><a href={'https://www.inc-conso.fr/content/comment-sont-calculees-les-mensualites-de-votre-emprunt'} target='_blank'>Comment sont calculées les<br/>mensualités de votre emprunt ?</a></PopoverInfo>;


    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '120px'
    }}>
        <InputLabel sx={inputLabelStyle}>Durée emprunt {popoverInfo}</InputLabel>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '60%',
            fontWeight: 'bold'
        }}>
            <Slider
                aria-label={"Durée emprunt"}
                value={valueDisplayed}
                onChange={(event, newValue) => {
                    setValueDisplayed(Number(newValue))
                    handleDureePretChange(event, newValue);
                }}
                valueLabelDisplay={"auto"}
                step={1}
                min={10}
                max={30}
                marks={dureeMarks}
                sx={{width: '60%'}}
            >
            </Slider>
            <FormControl sx={{width: '30%'}}>
                <InputLabel htmlFor={"mensualites"}>Mensualités</InputLabel>
                <OutlinedInput
                    id={"mensualites"}
                    label={"Mensualités"}
                    value={calculerMensualite(capital, taux, dureePret)}
                    size="small"
                    disabled
                    inputProps={{
                        step: 50,
                        min: 0,
                        type: 'number',
                        'aria-labelledby': 'loyer-hc',
                    }}
                    endAdornment={<InputAdornment position="end">€</InputAdornment>}
                />
            </FormControl>
        </Box>
    </Paper>;

}

export default DureeEmprunt;