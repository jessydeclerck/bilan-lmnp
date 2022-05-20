import {InputLabel, Paper} from "@mui/material";

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

function BilanParameterInput(props: BilanParameterProps): JSX.Element {
    const {label, children} = props;

    return <Paper elevation={3} sx={{
        marginBlockStart: '20px',
        marginBlockEnd: '20px',
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '120px'
    }}>
        <InputLabel sx={inputLabelStyle}>{label}</InputLabel>
        {children}
    </Paper>;
}

export default BilanParameterInput;