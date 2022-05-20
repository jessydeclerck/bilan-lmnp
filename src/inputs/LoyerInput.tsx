import BilanParameterInput from "./BilanParameterInput";
import {Box, FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {ChangeEvent, useState} from "react";

const label = "Loyer"

function LoyerInput(): JSX.Element {
    const [loyerHC, setLoyerHC] = useState(0);
    const [charges, setCharges] = useState(0);

    const handleLoyerHCChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoyerHC(Number(event.target.value));
    }

    const handleChargesChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCharges(Number(event.target.value));
    }

    return (
        <BilanParameterInput label={(loyerHC + charges > 0) ? label + ` (${loyerHC + charges}€)`:label }>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '60%'}}>
                <FormControl sx={{width: '45%'}}>
                    <InputLabel htmlFor={"outlined-adornment-loyer-hc"}>Loyer HC</InputLabel>
                    <OutlinedInput
                        id={"outlined-adornment-loyer-hc"}
                        label={"Loyer HC"}
                        value={loyerHC}
                        onChange={handleLoyerHCChange}
                        size="small"
                        inputProps={{
                            step: 50,
                            min: 0,
                            type: 'number',
                            'aria-labelledby': 'loyer-hc',
                        }}
                        endAdornment={<InputAdornment position="end">€</InputAdornment>}
                    />
                </FormControl>
                <FormControl sx={{width: '45%'}}>
                    <InputLabel htmlFor={"outlined-adornment-charges"}>Charges</InputLabel>
                    <OutlinedInput
                        id={"outlined-adornment-charges"}
                        label={"Charges"}
                        value={charges}
                        onChange={handleChargesChange}
                        size="small"
                        inputProps={{
                            step: 10,
                            min: 0,
                            type: 'number',
                            'aria-labelledby': 'charges',
                        }}
                        endAdornment={<InputAdornment position="end">€</InputAdornment>}
                    />
                </FormControl>
            </Box>
        </BilanParameterInput>
    );
}

export default LoyerInput;