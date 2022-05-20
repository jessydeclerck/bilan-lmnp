import {Grid, Input, InputAdornment, Slider} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {ChangeEvent, useState} from "react";
import BilanParameterInput from "./BilanParameterInput";

const stepsValue = {
    step: 0.01,
    min: 0.5,
    max: 3
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
]

const label = "Taux emprunt"

function valuetext(value: number) {
    return `${value}%`;
}

function TauxEmpruntInput(): JSX.Element {
    const [tauxEmprunt, setTauxEmprunt] = useState(1.5);


    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setTauxEmprunt(Number(newValue))
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTauxEmprunt(Number(event.target.value));
    }

    return (
        <BilanParameterInput label={label}>
        <Grid container spacing={2} justifyContent={"center"} sx={{marginTop: '0px'}}>
            <Grid item>
                <AccountBalanceIcon/>
            </Grid>
            <Grid item xs={8}>
                <Slider
                    aria-label={label}
                    value={tauxEmprunt}
                    onChange={handleSliderChange}
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
                    value={tauxEmprunt}
                    onChange={handleInputChange}
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