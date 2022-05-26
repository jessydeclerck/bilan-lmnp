import {Grid, Input, InputAdornment, Slider} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {ChangeEvent, ChangeEventHandler, useState} from "react";
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
        label: '1.5%'
    },
    {
        value: 2,
        label: '2%'
    },
    {
        value: 2.5,
        label: '2.5%'
    },
    {
        value: 3,
        label: '3%'
    },
    {
        value: 3.5,
        label: '3.5%'
    },
    {
        value: 4,
        label: '4%'
    },
    {
        value: 4.5,
        label: '4.5%'
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

function TauxEmpruntInput(props:TauxEmpruntProps): JSX.Element {
    const {value, handleSliderChangeFunction, handleInputChangeFunction} = props;
    const [valueDisplayed, setValueDisplayed] = useState(value);

    return (
        <BilanParameterInput label={label}>
        <Grid container spacing={2} justifyContent={"center"} sx={{marginTop: '0px'}}>
            <Grid item>
                <AccountBalanceIcon/>
            </Grid>
            <Grid item xs={8}>
                <Slider
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
                    sx={{
                        alignSelf: 'center',
                    }}
                >
                </Slider>
            </Grid>
            <Grid item>
                <Input
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
            </Grid>
        </Grid>
        </BilanParameterInput>
    );
}

export default TauxEmpruntInput;