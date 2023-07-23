import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from 'axios';

export const TableAxios = (props) => {
	//Configuración de los hooks
	const [datos, setDatos] = useState([]);

	//Acción para mostarr los datos con axios
	const baseURL = 'https://fakestoreapi.com/products';

	const getData = async () => {
		await axios.get(baseURL).then((response) => {
				const data = response.data;
				console.log(data)
				setDatos(data);
			}).catch((error) => {
				console.log(error);
			}
		);
	}

	useEffect(() => {
		getData();
	}, []);

	//Definición de las columnas
	const columns = [
		{
			name: "id",
			label: "ID",
		},
		{
			name: "title",
			label: "TITLE",
		},
		{
			name: "category",
			label: "CATEGORY",
		},
	];

	//Renderizado del datatable
	return (
		<MUIDataTable
			title={"Employee List"}
			data={datos}
			columns={columns}
		/>	
	)
}