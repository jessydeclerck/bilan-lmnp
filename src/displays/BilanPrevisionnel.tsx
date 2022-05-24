import {InputLabel, Paper} from "@mui/material";
import {Charges, genererBilanPrevisionnel, LigneBilan} from "../services/BilanService";
import {LigneAmortissement} from "../services/EmpruntService";

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

interface BilanPrevisionnelProps {
    loyerCC: number;
    tableauAmortissement: LigneAmortissement[];
    charges?: Charges;
    tmi: number;
    mensualite: number;
}

function BilanPrevisionnel(props: BilanPrevisionnelProps): JSX.Element {
    const {loyerCC, tableauAmortissement, charges, tmi, mensualite} = props;

    if(!charges) {
        return <></>
    }

    const bilanPrevisionnel: LigneBilan[] = genererBilanPrevisionnel(loyerCC, tableauAmortissement, charges, tmi, mensualite);

    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%'
    }}>
        <InputLabel sx={inputLabelStyle}>Bilan comptable prévisionnel</InputLabel>
    </Paper>;
}

export default BilanPrevisionnel;