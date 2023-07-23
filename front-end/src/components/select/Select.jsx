import './Select.css'
import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { ApiURL } from '../../services/ApiURL'
import { useForm } from "react-hook-form";

function Selectpicker(props){
	const { register} = useForm();
	var url = ''
	const [data,setData] = useState([])
	if(props.datoselect==='cargos'){
		url = '/api/cargos'
	}
	useEffect(()=>{
		axios.get(ApiURL + url ).then(response => {
			setData(response.data)
		}).catch(error => {
			console.log(error)
		});
	},[url])
	return (
		<div>
			<select className="form-control" {...register("cargos")}>
				{data.map((opcion) => ( <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option> ))}
			</select>
		</div>
	)
}

export default Selectpicker