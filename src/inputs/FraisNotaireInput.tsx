import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GenericAmountInput from "./GenericAmountInput";
import {ChangeEvent, useState} from "react";

function FraisNotaireInput(): JSX.Element {
    const [fraisNotaire, setFraisNotaire] = useState(0);

    const handleFraisNotaireChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFraisNotaire(Number(event.target.value));
    }

    return <GenericAmountInput label={"Frais notaire"} icon={<HistoryEduIcon/>} value={fraisNotaire} step={100}
                               handleChangeFunction={handleFraisNotaireChange}/>;
}

export default FraisNotaireInput;