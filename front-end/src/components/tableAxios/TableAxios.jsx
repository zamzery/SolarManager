import MUIDataTable from "mui-datatables";

export const TableAxios = (props) => {
	const options = {
		// filterType: 'checkbox',
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

	//Renderizado del datatable
	return (
		<MUIDataTable
			data={props.datos}
			columns={props.columnas}
			options={options}
		/>	
	)
}