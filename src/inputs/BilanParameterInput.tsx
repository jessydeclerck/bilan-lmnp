import {InputLabel, Paper} from "@mui/material";

interface BilanParameterProps {
    label: string;
    children: JSX.Element[] | JSX.Element;
    height?: string;
    minHeight?: string
}

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

function BilanParameterInput(props: BilanParameterProps): JSX.Element {
    const {label, children, height = '120px', minHeight} = props;

    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow:'auto',
        height,
        minHeight
    }}>
        <InputLabel sx={inputLabelStyle}>{label}</InputLabel>
        {children}
    </Paper>;
}

export default BilanParameterInput;