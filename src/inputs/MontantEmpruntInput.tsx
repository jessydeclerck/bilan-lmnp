import {ChangeEvent, useEffect, useState} from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GenericAmountInput from "./GenericAmountInput";

const label = "Emprunt"

function MontantEmpruntInput(): JSX.Element {
    const [montantEmprunt, setMontantEmprunt] = useState(0);

    useEffect(() => {
        console.log("Montant emprunté: " + montantEmprunt)
    }, [montantEmprunt]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantEmprunt(Number(event.target.value));
    }

    return <GenericAmountInput label={label} icon={<AccountBalanceIcon/>} value={montantEmprunt} step={500}
                               handleChangeFunction={handleInputChange}/>
}

export default MontantEmpruntInput;