import BilanParameterInput from "./BilanParameterInput";
import {Box, Slider, Typography} from "@mui/material";
import {useState} from "react";


const sliderSteps = {
    min: 5,
    max: 10,
    step: 1
}

interface sliderMark {
    value: number;
    label: string
}

const marks: sliderMark[] = [];

for (let i = sliderSteps.min; i <= sliderSteps.max; i += sliderSteps.step) {
    marks.push({value: i, label: i + ''})
}


function AmortissementInput(): JSX.Element {
    const [dureeAmortissementTravaux, setDureeAmortissementTravaux] = useState(6);

    const handleDureeAmortissementTravauxChange = (event: Event, newValue: number | number[]) => {
        setDureeAmortissementTravaux(Number(newValue))
    }

    return <BilanParameterInput label={"Amortissements"}>
            <Typography sx={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.6)'}}>Durée amortissement travaux
                (années)</Typography>
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
    </BilanParameterInput>
}

export default AmortissementInput;