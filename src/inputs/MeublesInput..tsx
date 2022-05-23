import GenericAmountInput from "./GenericAmountInput";
import ChairIcon from '@mui/icons-material/Chair';
import {ChangeEvent, useState} from "react";

function MeublesInput(): JSX.Element {
    const [montantMeuble, setMontantMeuble] = useState(0);

    const handleMontantMeubleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMontantMeuble(Number(event.target.value));
    }

    return <GenericAmountInput label={"Meubles"} step={100} icon={<ChairIcon/>} value={montantMeuble}
                               handleChangeFunction={handleMontantMeubleChange}/>
}

export default MeublesInput;