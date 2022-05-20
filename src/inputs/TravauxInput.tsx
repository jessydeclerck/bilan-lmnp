import BilanParameterInput from "./BilanParameterInput";
import {Box, FormControl, InputAdornment, InputLabel, OutlinedInput, Slider, Typography} from "@mui/material";
import {ChangeEvent, useState} from "react";

const label = "Travaux";

const sliderSteps = {
    min: 5,
    max: 10,
    step: 1
}

interface sliderMark {
    value: number;
    label: string
}

const marks:sliderMark[] = [];

for(let i = sliderSteps.min; i <= sliderSteps.max;  i+=sliderSteps.step){
    marks.push({value: i, label: i + ''})
}

function TravauxInput(): JSX.Element {
    const [montantTravaux, setMontantTravaux] = useState(0);
    const [dureeAmortissementTravaux, setDureeAmortissementTravaux] = useState(6);

    const handleMontantTravauxChange = (event:ChangeEvent<HTMLInputElement>) => {
        setMontantTravaux(Number(event.target.value));
    }

    const handleDureeAmortissementTravauxChange = (event: Event, newValue: number | number[]) => {
        setDureeAmortissementTravaux(Number(newValue))
    }

    return <BilanParameterInput label={label}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '60%'}}>
            <FormControl sx={{width: '32%'}}>
                <InputLabel htmlFor={"outlined-adornment-montant-travaux"}>Montant travaux</InputLabel>
                <OutlinedInput
                    id={"outlined-adornment-montant-travaux"}
                    label={"Montant travaux"}
                    value={montantTravaux}
                    onChange={handleMontantTravauxChange}
                    size="small"
                    inputProps={{
                        step: 100,
                        min: 0,
                        type: 'number',
                        'aria-labelledby': 'montant-travaux',
                    }}
                    endAdornment={<InputAdornment position="end">€</InputAdornment>}
                />
            </FormControl>
            <Box sx={{width: '60%', textAlign: 'right'}} >
            <Typography sx={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.6)'}}>Durée amortissement travaux (années)</Typography>
            <Slider
                aria-label={"Durée amortissement travaux"}
                value={dureeAmortissementTravaux}
                onChange={handleDureeAmortissementTravauxChange}
                valueLabelDisplay={"auto"}
                step={sliderSteps.step}
                min={sliderSteps.min}
                max={sliderSteps.max}
                marks={marks}
            >
            </Slider>
            </Box>
        </Box>
    </BilanParameterInput>;
}

export default TravauxInput;