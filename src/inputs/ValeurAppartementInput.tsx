import {ChangeEvent, useState} from "react";
import GenericAmountInput from "./GenericAmountInput";
import ApartmentIcon from '@mui/icons-material/Apartment';

function ValeurAppartementInput(): JSX.Element {
    const [valeurBien, setValeurBien] = useState(0);

    const handleValeurBienChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValeurBien(Number(event.target.value));
    }

    return <GenericAmountInput label={"Valeur bien nu"} icon={<ApartmentIcon/>} value={valeurBien} step={500}
                               handleChangeFunction={handleValeurBienChange}/>;
}

export default ValeurAppartementInput;