import {InputLabel, Paper} from "@mui/material";

interface BilanParameterProps {
    label: string;
    children: JSX.Element[] | JSX.Element;
    height?: string;
    minHeight?: string;
    popoverInfo?: JSX.Element | null;
}

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.3em',
    lineHeight: 1.5,
    color: 'black',
}

function BilanParameterInput(props: BilanParameterProps): JSX.Element {
    const {label, children, height = '120px', minHeight, popoverInfo} = props;

    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow:'auto',
        height,
        minHeight
    }}>
        <InputLabel sx={inputLabelStyle}><>{label} {popoverInfo}</></InputLabel>
        {children}
    </Paper>;
}

export default BilanParameterInput;