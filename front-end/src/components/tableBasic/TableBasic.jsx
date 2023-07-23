import React from 'react'
import './TableBasic.css'
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export class TableBasic extends React.Component {
	render () {
		const columns = [
			"Name",
			"Company",
			"City",
			"State",
		]
		const data = [
			["Joe James", "Test Corp", "Yonkers", "NY"],
			["John Walsh", "Test Corp", "Hartford", "CT"],
			["Bob Herm", "Test Corp", "Tampa", "FL"],
			["James Houston", "Test Corp", "Dallas", "TX"],
		]
		const options = {
			filterType: 'checkbox',
			textLabels: {
				body: {
					noMatch: "No hay datos que mostrar",
					toolTip: "Ordenar",
					columnHeaderTooltip: column => `Ordenar por ${column.label}`
				},
				pagination: {
					next: "Siguiente",
					previous: "Anterior",
					rowsPerPage: "No. Filas:",
					displayRows: "de",
				},
				toolbar: {
					search: "Buscar",
					downloadCsv: "Descargar CSV",
					print: "Imprimir",
					viewColumns: "Ver Columnas",
					filterTable: "Filtrar Tabla",
				},
				filter: {
					all: "Todos",
					title: "FILTROS",
					reset: "LIMPIAR",
				},
				viewColumns: {
					title: "Ver Columnas",
					titleAria: "Ver/Ocultar Columnas",
				},
				selectedRows: {
					text: "fila(s) seleccionada(s)",
					delete: "Borrar",
					deleteAria: "Borrar Filas Seleccionadas",
				},
			}
		}

		return(
			<ThemeProvider theme={darkTheme}>
				<MUIDataTable
					title={"Employee List"}
					data={data}
					columns={columns}
					options={options}
				/>
			</ThemeProvider>
		)
	}

}