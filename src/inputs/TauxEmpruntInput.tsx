import {Box, Input, InputAdornment, Slider} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {ChangeEventHandler, useState} from "react";
import BilanParameterInput from "./BilanParameterInput";

const stepsValue = {
    step: 0.01,
    min: 0.5,
    max: 5
}

const marks = [
    {
        value: 1,
        label: '1%'
    },
    {
        value: 1.5,
    },
    {
        value: 2,
        label: '2%'
    },
    {
        value: 2.5,
    },
    {
        value: 3,
        label: '3%'
    },
    {
        value: 3.5,
    },
    {
        value: 4,
        label: '4%'
    },
    {
        value: 4.5,
    },
]

const label = "Taux emprunt"

function valuetext(value: number) {
    return `${value}%`;
}

interface TauxEmpruntProps {
    value: number;
    handleSliderChangeFunction: (event: Event, newValue: number | number[]) => void;
    handleInputChangeFunction: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function TauxEmpruntInput(props: TauxEmpruntProps): JSX.Element {
    const {value, handleSliderChangeFunction, handleInputChangeFunction} = props;
    const [valueDisplayed, setValueDisplayed] = useState(value);

    return (
        <BilanParameterInput label={label}>
                <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop:'10px'}}>
                    <AccountBalanceIcon/>
                    <Slider
                        id={'taux-emprunt-slider'}
                        aria-label={label}
                        value={valueDisplayed}
                        onChange={(event, newValue) => {
                            setValueDisplayed(Number(newValue));
                            handleSliderChangeFunction(event, newValue);
                        }}
                        getAriaValueText={valuetext}
                        valueLabelDisplay={"auto"}
                        step={stepsValue.step}
                        marks={marks}
                        min={stepsValue.min}
                        max={stepsValue.max}
                        sx={{width: '65%'}}
                    >
                    </Slider>
                    <Input
                        id={'taux-emprunt-input'}
                        value={valueDisplayed}
                        onChange={(event) => {
                            setValueDisplayed(Number(event.target.value));
                            handleInputChangeFunction(event);
                        }}
                        size="small"
                        inputProps={{
                            step: stepsValue.step,
                            min: stepsValue.min,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                        startAdornment={<InputAdornment position="end">%</InputAdornment>}
                        sx={{width: '70px'}}
                    />
                </Box>
        </BilanParameterInput>
    );
}

export default TauxEmpruntInput;