import BilanParameterInput from "./BilanParameterInput";
import {Box, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {ChangeEvent, useState} from "react";
import FormControl from "@mui/material/FormControl";

function ChargesInput(): JSX.Element {
    const [taxeFonciere, setTaxeFonciere] = useState(0);
    const [assurancePNO, setAssurancePNO] = useState(0);
    const [garantieLoyerImpaye, setGarantieLoyerImpaye] = useState(0);
    const [chargesCoproProprietaire, setChargesCoproProprietaire] = useState(0);
    const [chargesCoproLocataire, setChargesCoproLocataire] = useState(0);

    const handleTaxeFonciereChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaxeFonciere(Number(event.target.value));
    }

    const handleAssurancePNOChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAssurancePNO(Number(event.target.value));
    }

    const handleGarantieLoyerImpayeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGarantieLoyerImpaye(Number(event.target.value));
    }

    const handleChargeCoproProprietaire = (event: ChangeEvent<HTMLInputElement>) => {
        setChargesCoproProprietaire(Number(event.target.value));
    }

    const handleChargesCoproLocataire = (event: ChangeEvent<HTMLInputElement>) => {
        setChargesCoproLocataire(Number(event.target.value));
    }

    return <BilanParameterInput label={"Charges"} height={'100%'}>
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
                    id={'taxe-fonciere'}
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
                    endAdornment={<InputAdornment position="end">€</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"assurance-pno"}>Assurance PNO</InputLabel>
                <OutlinedInput
                    id={"assurance-pno"}
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
                    endAdornment={<InputAdornment position="end">€</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"garantie-loyer-impaye"}>Garantie loyer impayé</InputLabel>
                <OutlinedInput
                    id={"garantie-loyer-impaye"}
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
                    endAdornment={<InputAdornment position="end">€</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"charges-copro-proprietaire"}>Charges copro propriétaire</InputLabel>
                <OutlinedInput
                    id={"charges-copro-proprietaire"}
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
                    endAdornment={<InputAdornment position="end">€</InputAdornment>}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor={"charges-copro-locataire"}>Charges copro locataire</InputLabel>
                <OutlinedInput
                    id={"charges-copro-locataire"}
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
                    endAdornment={<InputAdornment position="end">€</InputAdornment>}
                />
            </FormControl>
        </Box>
    </BilanParameterInput>
}

export default ChargesInput;