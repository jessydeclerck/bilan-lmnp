import BilanParameterInput from "./BilanParameterInput";
import {Box, InputAdornment, OutlinedInput} from "@mui/material";
import {ChangeEventHandler} from "react";


interface GenericAmountProps {
    label: string;
    icon: JSX.Element;
    value: number;
    step: number
    handleChangeFunction: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const kebabCase = (s: string): string => {
    return s
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

function GenericAmountInput(props: GenericAmountProps): JSX.Element {
    const {label, icon, value, step, handleChangeFunction} = props;
    const labelKebabCase = kebabCase(label);

    const inputProps = {
        step: step,
        min: 0,
        type: 'number',
        'aria-labelledby': labelKebabCase,
    }

    return <BilanParameterInput label={label}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '60%'}}>
            {icon}
            <OutlinedInput
                sx={{width: '75%'}}
                label={label}
                value={value}
                onChange={handleChangeFunction}
                size="small"
                inputProps={inputProps}
                endAdornment={<InputAdornment position="end">€</InputAdornment>}
            />
        </Box>
    </BilanParameterInput>;
}

export default GenericAmountInput;