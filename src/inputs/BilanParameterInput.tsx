import {Box, InputLabel, Paper} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

interface BilanParameterProps {
    label: string;
    children: JSX.Element[] | JSX.Element;
    afficherAide?:boolean;
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
    const {label, children, height = '120px', minHeight, afficherAide = false} = props;

    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow:'auto',
        height,
        minHeight
    }}>
        <Box sx={{display:'flex', justifyContent:'space-between'}}><InputLabel sx={inputLabelStyle}>{label}</InputLabel> <InfoIcon/></Box>
        {children}
    </Paper>;
}

export default BilanParameterInput;

export type {BilanParameterProps};