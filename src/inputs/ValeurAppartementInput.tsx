import {ChangeEventHandler} from "react";
import GenericAmountInput from "./GenericAmountInput";
import ApartmentIcon from '@mui/icons-material/Apartment';
import PopoverInfo from "../displays/PopoverInfo";

interface ValeurAppartementProps {
    valeurBien: number;
    handleValeurBienChange: ChangeEventHandler;
}

function ValeurAppartementInput(props: ValeurAppartementProps): JSX.Element {
    const {valeurBien, handleValeurBienChange} = props;

    return <GenericAmountInput label={"Valeur bien nu"} icon={<ApartmentIcon/>} value={valeurBien} step={500}
                               handleChangeFunction={handleValeurBienChange}
                               popoverInfo={<PopoverInfo>test <br/> test</PopoverInfo>}
    />;
}

export default ValeurAppartementInput;