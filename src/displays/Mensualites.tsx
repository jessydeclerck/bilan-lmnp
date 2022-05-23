import {Box, InputLabel, Paper} from "@mui/material";
import {calculerMensualite} from "../services/EmpruntService";

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

function Mensualites():JSX.Element{
    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height:'120px'
    }}>
        <InputLabel sx={inputLabelStyle}>Mensualités</InputLabel>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '60%', fontWeight: 'bold'}}>
        {calculerMensualite(80000, 1.8, 25)}€
        </Box>
    </Paper>;;
}

export default Mensualites;