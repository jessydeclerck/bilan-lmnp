import BilanParameterInput from "./BilanParameterInput";
import {Box, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {ChangeEventHandler} from "react";
import FormControl from "@mui/material/FormControl";
import PopoverInfo from "../displays/PopoverInfo";

interface ChargesInputProps {
    taxeFonciere: number;
    assurancePNO: number;
    garantieLoyerImpaye: number;
    chargesCoproProprietaire: number;
    chargesCoproLocataire: number;
    handleTaxeFonciereChange: ChangeEventHandler;
    handleAssurancePNOChange: ChangeEventHandler;
    handleGarantieLoyerImpayeChange: ChangeEventHandler;
    handleChargeCoproProprietaire: ChangeEventHandler;
    handleChargesCoproLocataire: ChangeEventHandler;
}

function ChargesInput(props: ChargesInputProps): JSX.Element {
    const {
        taxeFonciere,
        assurancePNO,
        garantieLoyerImpaye,
        chargesCoproProprietaire,
        chargesCoproLocataire,
        handleTaxeFonciereChange,
        handleAssurancePNOChange,
        handleGarantieLoyerImpayeChange,
        handleChargesCoproLocataire,
        handleChargeCoproProprietaire
    } = props;

    const popoverInfo = <PopoverInfo>Charges annuelles non amortissables</PopoverInfo>

    return <BilanParameterInput label={"Charges"} minHeight={'415px'} popoverInfo={popoverInfo}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '100%'
        }}>
            <FormControl>
                <InputLabel htmlFor={"taxe-fonciere"}>Taxe foncière</InputLabel>
                <OutlinedInput
                    id={'taxe-fonciere-input'}
                    label={"Taxe foncière"}
                    value={taxeFonciere}
                    onChange={handleTaxeFonciereChange}
                    size="small"
                    inputProps={{
                        step: 50,
                        min: 0,
                        type: 'number',
                        'aria-labelledby': 'Taxe foncière',
                    }}
                    endAdornment={<InputAdornment position="end">€/an</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"assurance-pno"}>Assurance PNO</InputLabel>
                <OutlinedInput
                    id={"assurance-pno-input"}
                    label={"Assurance PNO"}
                    value={assurancePNO}
                    onChange={handleAssurancePNOChange}
                    size="small"
                    inputProps={{
                        step: 50,
                        min: 0,
                        type: 'number',
                        'aria-labelledby': 'Assurance PNO',
                    }}
                    endAdornment={<InputAdornment position="end">€/an</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"garantie-loyer-impaye"}>Garantie loyer impayé</InputLabel>
                <OutlinedInput
                    id={"garantie-loyer-impaye-input"}
                    label={"Garantie loyer impayé"}
                    value={garantieLoyerImpaye}
                    onChange={handleGarantieLoyerImpayeChange}
                    size="small"
                    inputProps={{
                        step: 50,
                        min: 0,
                        type: 'number',
                        'aria-labelledby': 'Garantie loyer impayé',
                    }}
                    endAdornment={<InputAdornment position="end">€/an</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"charges-copro-proprietaire"}>Charges copro propriétaire</InputLabel>
                <OutlinedInput
                    id={"charges-copro-proprietaire-input"}
                    label={"Charges copro propriétaire"}
                    value={chargesCoproProprietaire}
                    onChange={handleChargeCoproProprietaire}
                    size="small"
                    inputProps={{
                        step: 10,
                        min: 0,
                        type: 'number',
                        'aria-labelledby': 'Charges copro propriétaire',
                    }}
                    endAdornment={<InputAdornment position="end">€/an</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"charges-copro-locataire"}>Charges copro locataire</InputLabel>
                <OutlinedInput
                    id={"charges-copro-locataire-input"}
                    label={"Charges copro locataire"}
                    value={chargesCoproLocataire}
                    onChange={handleChargesCoproLocataire}
                    size="small"
                    inputProps={{
                        step: 10,
                        min: 0,
                        type: 'number',
                        'aria-labelledby': 'Charges copro locataire',
                    }}
                    endAdornment={<InputAdornment position="end">€/an</InputAdornment>}
                />
            </FormControl>
        </Box>
    </BilanParameterInput>
}

export default ChargesInput;