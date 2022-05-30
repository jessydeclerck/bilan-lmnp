import BilanParameterInput from "./BilanParameterInput";
import {Box, FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {ChangeEventHandler} from "react";

const label = "Loyer"

interface LoyerInputProps {
    loyerHC: number;
    chargesLoyer: number;
    handleLoyerHCChange: ChangeEventHandler;
    handleChargesLoyerChange: ChangeEventHandler;
}

function LoyerInput(props: LoyerInputProps): JSX.Element {
    const {loyerHC, chargesLoyer, handleLoyerHCChange, handleChargesLoyerChange} = props;

    return (
        <BilanParameterInput label={(loyerHC + chargesLoyer > 0) ? label + ` (${loyerHC + chargesLoyer}€)` : label}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '80%'}}>
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
                        value={chargesLoyer}
                        onChange={handleChargesLoyerChange}
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