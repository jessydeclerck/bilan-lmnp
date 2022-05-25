import {ChangeEvent, ChangeEventHandler, useState} from "react";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GenericAmountInput from "./GenericAmountInput";

const label = "Frais d'agence";

interface FraisAgenceProps {
    fraisAgence:number;
    handleFraisAgenceChange:ChangeEventHandler;
}

function FraisAgenceInput(props:FraisAgenceProps): JSX.Element {
    const {fraisAgence, handleFraisAgenceChange} = props;

    return <GenericAmountInput label={label} icon={<PersonSearchIcon/>} value={fraisAgence} step={100}
                               handleChangeFunction={handleFraisAgenceChange}/>
}

export default FraisAgenceInput;