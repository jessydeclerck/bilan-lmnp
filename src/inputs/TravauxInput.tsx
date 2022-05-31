import {ChangeEventHandler} from "react";
import HandymanIcon from '@mui/icons-material/Handyman';
import GenericAmountInput from "./GenericAmountInput";

const label = "Travaux";

interface TravauxInputProps {
    montantTravaux: number;
    handleMontantTravauxChange: ChangeEventHandler;
}

function TravauxInput(props: TravauxInputProps): JSX.Element {
    const {montantTravaux, handleMontantTravauxChange} = props;

    return <GenericAmountInput id={'travaux-input'} label={label} icon={<HandymanIcon/>} value={montantTravaux} step={100}
                               handleChangeFunction={handleMontantTravauxChange}/>;
}

export default TravauxInput;