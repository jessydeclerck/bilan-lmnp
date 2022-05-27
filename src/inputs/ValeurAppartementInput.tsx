import {ChangeEvent, ChangeEventHandler, useState} from "react";
import GenericAmountInput from "./GenericAmountInput";
import ApartmentIcon from '@mui/icons-material/Apartment';

interface ValeurAppartementProps {
    valeurBien:number;
    handleValeurBienChange:ChangeEventHandler;
}

function ValeurAppartementInput(props:ValeurAppartementProps): JSX.Element {
    const {valeurBien, handleValeurBienChange} = props;

    return <GenericAmountInput label={"Valeur bien nu"} icon={<ApartmentIcon/>} value={valeurBien} step={500}
                               handleChangeFunction={handleValeurBienChange}/>;
}

export default ValeurAppartementInput;