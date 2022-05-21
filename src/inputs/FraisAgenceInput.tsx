import {ChangeEvent, useState} from "react";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GenericAmountInput from "./GenericAmountInput";

const label = "Frais d'agence";

function FraisAgenceInput(): JSX.Element {
    const [fraisAgence, setFraisAgence] = useState(0);

    const handleFraisAgenceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFraisAgence(Number(event.target.value));
    }

    return <GenericAmountInput label={label} icon={<PersonSearchIcon/>} value={fraisAgence} step={100}
                               handleChangeFunction={handleFraisAgenceChange}/>
}

export default FraisAgenceInput;