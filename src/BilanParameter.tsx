import {Grid, Input, InputLabel, Paper, Slider} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

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

function valuetext(value: number) {
    return `${value}%`;
}

function BilanParameter(props: BilanParameterProps): JSX.Element {
    const {label, children} = props;

    return <Paper elevation={3} sx={{
        marginBlockStart: '20px',
        marginBlockEnd: '20px',
        padding: '5px 10px',
        borderBox: 'box-sizing',
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
                    defaultValue={1.5}
                    getAriaValueText={valuetext}
                    valueLabelDisplay={"auto"}
                    step={0.1}
                    marks
                    min={0.5}
                    max={3}
                    sx={{
                        alignSelf: 'center',
                    }}
                >
                </Slider>
            </Grid>
            <Grid item>
                <Input
                    value="1.5"
                    size="small"
                    inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    sx={{width: '42px'}}
                />
            </Grid>
        </Grid>
        {props.children}
    </Paper>;
}

export default BilanParameter;