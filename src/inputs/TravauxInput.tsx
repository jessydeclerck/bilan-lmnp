import {ChangeEvent, useState} from "react";
import HandymanIcon from '@mui/icons-material/Handyman';
import GenericAmountInput from "./GenericAmountInput";

const label = "Travaux";

function TravauxInput(): JSX.Element {
    const [montantTravaux, setMontantTravaux] = useState(0);

    const handleMontantTravauxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantTravaux(Number(event.target.value));
    }

    return <GenericAmountInput label={label} icon={<HandymanIcon/>} value={montantTravaux} step={100}
                               handleChangeFunction={handleMontantTravauxChange}/>;
}

export default TravauxInput;