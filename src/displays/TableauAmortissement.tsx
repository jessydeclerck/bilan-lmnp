import {LigneAmortissement} from "../services/EmpruntService";
import {InputLabel, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid/DataGrid";
import {GridColDef} from "@mui/x-data-grid";

interface TableauAmortissementProps {
    tableauAmortissement: LigneAmortissement[];
}

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

const columns: GridColDef[] = [
    {field: 'mois', headerName: 'Mois', width: 60, sortable: false},
    {field: 'capitalRestantDu', headerName: 'Capital restant dû', width: 180, sortable: false},
    {field: 'interets', headerName: 'Intérêts', width: 100, sortable: false},
    {field: 'capitalRembourse', headerName: 'Capital remboursé', width: 180, sortable: false},
];

function TableauAmortissement({tableauAmortissement}: TableauAmortissementProps): JSX.Element {

    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%'
    }}>
        <InputLabel sx={inputLabelStyle}>Tableau d'amortissement prêt</InputLabel>
        <DataGrid
            rows={tableauAmortissement}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[12]}
            disableSelectionOnClick
            disableColumnFilter
            disableColumnMenu
        />
    </Paper>;
}

export default TableauAmortissement;