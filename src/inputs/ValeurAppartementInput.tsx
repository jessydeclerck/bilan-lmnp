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

    const popoverInfo = <PopoverInfo>Il s'agit de la valeur du bien immobilier hors terrain.<br/>
    <br/>Cette valeur est importante car en LMNP le bien en lui-même<br/> est considéré comme amortissable.<br/>
        Plus d'infos: <a href={'https://www.nexity.fr/guide-immobilier/conseils-investissement/le-dispositif-lmnp/simulation-amortissement-lmnp'} target={'_blank'} rel={'noreferrer'}>L'AMORTISSEMENT LMNP : EXPLICATIONS</a>
    </PopoverInfo>

    return <GenericAmountInput id={'valeur-appartement-input'} label={"Valeur bien nu"} icon={<ApartmentIcon/>} value={valeurBien} step={500}
                               handleChangeFunction={handleValeurBienChange}
                               popoverInfo={popoverInfo}
    />;
}

export default ValeurAppartementInput;