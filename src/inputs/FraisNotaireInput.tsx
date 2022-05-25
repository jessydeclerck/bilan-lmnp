import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GenericAmountInput from "./GenericAmountInput";
import {ChangeEventHandler} from "react";

interface FraisNotaireProps {
    fraisNotaire: number;
    handleFraisNotaireChange: ChangeEventHandler;
}

function FraisNotaireInput(props:FraisNotaireProps): JSX.Element {
    const {fraisNotaire, handleFraisNotaireChange} = props;

    return <GenericAmountInput label={"Frais notaire"} icon={<HistoryEduIcon/>} value={fraisNotaire} step={100}
                               handleChangeFunction={handleFraisNotaireChange}/>;
}

export default FraisNotaireInput;