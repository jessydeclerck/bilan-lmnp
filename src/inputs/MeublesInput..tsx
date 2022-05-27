import GenericAmountInput from "./GenericAmountInput";
import ChairIcon from '@mui/icons-material/Chair';
import {ChangeEventHandler} from "react";

interface MeublesInputProps {
    montantMeuble:number;
    handleMontantMeubleChange:ChangeEventHandler;
}

function MeublesInput(props:MeublesInputProps): JSX.Element {
    const {montantMeuble, handleMontantMeubleChange} = props;

    return <GenericAmountInput label={"Meubles"} step={100} icon={<ChairIcon/>} value={montantMeuble}
                               handleChangeFunction={handleMontantMeubleChange}/>
}

export default MeublesInput;