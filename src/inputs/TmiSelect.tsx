import FormControl from "@mui/material/FormControl";
import BilanParameterInput from "./BilanParameterInput";
import {Box, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";

function TmiSelect(): JSX.Element {
    const [tmi, setTmi] = useState(30);

    const handleTmiChange = (event: SelectChangeEvent) => {
        setTmi(Number.parseInt(event.target.value));
    }

    return <BilanParameterInput label={"Tranche marginale d'imposition"}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <FormControl sx={{width:'80%'}}>
                <InputLabel id="select-tmi">TMI</InputLabel>
                <Select
                    labelId="select-tmi"
                    id="select-tmi"
                    value={tmi.toString()}
                    label="Tmi"
                    onChange={handleTmiChange}
                >
                    <MenuItem value={0}>0% - 0€ à 10 225€</MenuItem>
                    <MenuItem value={11}>11% - 10 226€ à 26 070€</MenuItem>
                    <MenuItem value={30}>30% - 26 071€ à 74 545€</MenuItem>
                    <MenuItem value={41}>41% - 74 546€ à 160 336€</MenuItem>
                    <MenuItem value={45}>45% - plus de 160 336€</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </BilanParameterInput>;
}

export default TmiSelect;