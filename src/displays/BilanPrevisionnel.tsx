import {InputLabel, Paper} from "@mui/material";
import {Charges, genererBilanPrevisionnel, LigneBilan} from "../services/BilanService";
import {LigneAmortissement} from "../services/EmpruntService";
import {frFR, GridColDef, GridToolbar} from "@mui/x-data-grid";
import {DataGrid} from "@mui/x-data-grid/DataGrid";

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

interface BilanPrevisionnelProps {
    loyerCC: number;
    tableauAmortissement: LigneAmortissement[];
    charges?: Charges;
    tmi: number;
    mensualite: number;
}

const columns: GridColDef[] = [
    {field: 'annee', headerName: 'Année', width: 65, sortable: false},
    {field: 'recettes', headerName: 'Recettes', width: 85, sortable: false},
    {field: 'capitalRestantDu', headerName: 'Capital restant dû', width: 110, sortable: false},
    {field: 'annuite', headerName: 'Annuité', width: 80, sortable: false},
    {field: 'interets', headerName: 'Intérêts', width: 80, sortable: false},
    {field: 'amortissements', headerName: 'Amortissements', width: 130, sortable: false},
    {field: 'charges', headerName: 'Charges', width: 85, sortable: false},
    {field: 'cumulDeficitBenef', headerName: 'Cumul déficit/benef', width: 110, sortable: false},
    {field: 'baseImposable', headerName: 'Base imposable', width: 100, sortable: false},
    {field: 'impotRevenu', headerName: 'Impôt revenu', width: 75, sortable: false},
    {field: 'prelevementSociaux', headerName: 'Prélévement sociaux', width: 100, sortable: false},
    {field: 'cashFlow', headerName: 'Cash flow', width: 90, sortable: false},
];


function BilanPrevisionnel(props: BilanPrevisionnelProps): JSX.Element {
    const {loyerCC, tableauAmortissement, charges, tmi, mensualite} = props;

    if (mensualite === 0 || !charges || tableauAmortissement.length === 0) {
        return <></>;
    }

    const bilanPrevisionnel: LigneBilan[] = genererBilanPrevisionnel(loyerCC, tableauAmortissement, charges, tmi, mensualite);

    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '800px'
    }}>
        <InputLabel sx={inputLabelStyle}>Bilan comptable prévisionnel</InputLabel>
        <DataGrid
            sx={{
                '& .MuiDataGrid-columnHeaderTitle': {
                    textOverflow: "clip",
                    whiteSpace: "break-spaces",
                    lineHeight: 1
                }
            }}
            rows={bilanPrevisionnel}
            columns={columns}
            disableSelectionOnClick
            disableColumnFilter
            disableColumnMenu
            components={{Toolbar: GridToolbar}}
            componentsProps={{toolbar: {printOptions: {disableToolbarButton: true}, csvOptions: {utf8WithBom: true}}}}
            localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        />
    </Paper>;
}

export default BilanPrevisionnel;