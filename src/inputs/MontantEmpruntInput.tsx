import BilanParameterInput from "./BilanParameterInput";
import {ChangeEvent, useEffect, useState} from "react";
import {Box, InputAdornment, OutlinedInput} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const label = "Montant emprunté"

function MontantEmpruntInput(): JSX.Element {
    const [montantEmprunt, setMontantEmprunt] = useState(0);

    useEffect(() => {
        console.log("Montant emprunté: " + montantEmprunt)
    }, [montantEmprunt]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantEmprunt(Number(event.target.value));
    }

    return (
        <BilanParameterInput label={label}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',height: '60%'}}>
                <AccountBalanceIcon/>
                    <OutlinedInput
                        value={montantEmprunt}
                        onChange={handleInputChange}
                        size="small"
                        inputProps={{
                            step: 500,
                            min: 0,
                            type: 'number',
                            'aria-labelledby': 'montant-emprunt',
                        }}
                        endAdornment={<InputAdornment position="end">€</InputAdornment>}
                        sx={{width: '60%'}}
                    />
            </Box>
        </BilanParameterInput>);
}

export default MontantEmpruntInput;