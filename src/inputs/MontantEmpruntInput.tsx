import {ChangeEventHandler} from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GenericAmountInput from "./GenericAmountInput";

const label = "Emprunt"

interface MontantEmpruntProps {
    value: number;
    handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function MontantEmpruntInput(props:MontantEmpruntProps): JSX.Element {
    const {value, handleInputChange} = props;

    return <GenericAmountInput label={label} icon={<AccountBalanceIcon/>} value={value} step={500}
                               handleChangeFunction={handleInputChange}/>
}

export default MontantEmpruntInput;