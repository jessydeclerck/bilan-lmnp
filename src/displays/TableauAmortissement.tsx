import {LigneAmortissement} from "../services/EmpruntService";
import {InputLabel, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid/DataGrid";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";

interface TableauAmortissementProps{
    tableauAmortissement: LigneAmortissement[];
}

const inputLabelStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    lineHeight: 1.5,
    color: 'black',
}

const columns: GridColDef[] = [
    { field: 'mois', headerName: 'Mois', width: 50},
    { field: 'capitalRestantDu', headerName: 'Capital restant dû', width:200},
    { field: 'interets', headerName: 'Intérêts', width:100},
    { field: 'capitalRembourse', headerName: 'Capital remboursé', width: 200},
];

function TableauAmortissement(props:TableauAmortissementProps):JSX.Element{
    const {tableauAmortissement} = props;
    const tableauAmortissementFixed = tableauAmortissement.map(row => {
        return {id: row.id, mois: row.mois, capitalRestantDu: row.capitalRestantDu.toFixed(2), interets: row.interets.toFixed(2), capitalRembourse: row.capitalRembourse.toFixed(2) };
    })

    return <Paper elevation={3} sx={{
        padding: '5px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%'
    }}>
        <InputLabel sx={inputLabelStyle}>Tableau d'amortissement prêt</InputLabel>
        <DataGrid
            rows={tableauAmortissementFixed}
            columns={columns}
            pageSize={12}
            rowsPerPageOptions={[12]}
            disableSelectionOnClick
        />
    </Paper>;
}

export default TableauAmortissement;