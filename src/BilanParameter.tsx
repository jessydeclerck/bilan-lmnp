import {Grid, Input, InputLabel, Paper, Slider} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {ChangeEvent, useEffect, useState} from "react";

interface BilanParameterProps {
    label: string;
    children: JSX.Element[] | JSX.Element;
}

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

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

function valuetext(value: number) {
    return `${value}%`;
}

function BilanParameter(props: BilanParameterProps): JSX.Element {
    const [tauxEmprunt, setTauxEmprunt] = useState(1.5);
    const {label, children} = props;

    useEffect(() => {
        console.log(tauxEmprunt)
    }, [tauxEmprunt])

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setTauxEmprunt(Number(newValue))
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTauxEmprunt(Number(event.target.value));
    }

    return <Paper elevation={3} sx={{
        marginBlockStart: '20px',
        marginBlockEnd: '20px',
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }}>
        <InputLabel sx={inputLabelStyle}>{label}</InputLabel>
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
                    sx={{width: '50px'}}
                />
            </Grid>
        </Grid>
        {children}
    </Paper>;
}

export default BilanParameter;