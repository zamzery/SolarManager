import './Users.css'
import React, { useEffect,useState}  from 'react'
import Header from '../../components/header/Header';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { HexColorPicker } from "react-colorful";

import axios from 'axios';
import { ApiURL } from '../../services/ApiURL';
import { TableAxios } from '../../components/tableAxios/TableAxios';

function Users(props) {
	const [state, setState] = useState({
		problema: false,
		message: '',
		colorPicker: false,
	});
	const [color, setColor] = useState("#000000");
	const [data,setData] = useState([])
	const [filas,setFilas] = useState([])
	useEffect(()=>{
		axios.get(ApiURL + 'cargos' ).then(response => {
			setData(response.data)
		}).catch(error => {
			console.log(error)
		});
		getDataTable()
	},[])

	const getDataTable = async () => {
		await http.get(ApiURL+'users').then((response) => {
				const data = response.data;
				console.log(data)
				setFilas(data);
			}).catch((error) => {
				console.log(error);
			}
		);
	}

	const { register, handleSubmit, formState: { errors } } = useForm();
	const http = axios.create({
		baseURL: ApiURL,
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
		},
		withCredentials: true
	});

	const handleClick = () => {
		setState({ colorPicker: true })
	}
	
	const handleClose = () => {
		setState({ colorPicker: false })
	}
	
	const handleChange = (color,tipo) => {
		setColor(color)
	}

	const hightLight = () => {
		document.getElementById('inputColor').focus()
	}

	async function handleForm(data){
		console.log(data,http)
		// http.post(ApiUser, {
		// 	email: email,
		// 	password: password
		// }).then(response => {
		// 	document.body.classList.remove('body-animation');
		// 	if(response.data.estatus === 'ok'){
		// 		localStorage.setItem('token', response.data.access_token);
		// 		// navigate(response.data.redireccion); //navigate('escritorio');
		// 	} else {
		// 		setState({ problema: true, message: response.data.message });
		// 	}
		// 	setState({ problema: false, message: '' });
		// }).catch(error => {
		// 	setState({ problema: true, message: error.response.data.message });
		// });
	}

	const onSubmit = (data) => {
		handleForm(data)
	}

	const columns = [
		{
			name: "id",
			label: "ID",
		},
		{
			name: "nombre",
			label: "NOMBRE",
		},
		{
			name: "category",
			label: "CATEGORY",
		},
	];

	return (
		<div>
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header header={props.header} descripcion={props.descripcion} agregar={1} />
						<div className="container-xl px-4 mt-n10">
							<div className="col-xl-12">
								<div className="card mb-4">
									<div className="card-body">
										<TableAxios columnas={columns} datos={filas} />
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card mb-4">
									<div className="card-body">
										<form className='row' onSubmit={handleSubmit(onSubmit)}>
											{
												state.problema === true && 
												<div className="alert alert-danger alert-dismissible fade show" role="alert">
													{state.message}
												</div>
											}
											{/* Form Group (nombre usuario)*/}
											<div className="mb-3 form-group col-sm-12">
												<label className="mb-1" htmlFor="inputName"><span style={{color:'#FF0000'}}>*</span>Nombre</label>
												<input className="form-control" id="inputName" type="text" placeholder="Escribe el nombre del usuario" {...register("name", { required: true })} />
												{(errors.name && <small className="text-danger">Este campo es requerido</small>)}
											</div>
											{/* Form Group (email)*/}
											<div className="mb-3 form-group col-sm-6">
												<label className="mb-1" htmlFor="inputEmail"><span style={{color:'#FF0000'}}>*</span>Email</label>
												<input className="form-control" id="inputEmail" type="text" placeholder="Escribe el email" {...register("email", { email: true })} />
												{(errors.email && <small className="text-danger">Este campo es requerido</small>)}
											</div>
											{/* Form Group (contraseña)*/}
											<div className="mb-3 form-group col-sm-6">
												<label className="mb-1" htmlFor="inputPassword">Contraseña</label>
												<input className="form-control" id="inputPassword" type="text" placeholder="Escribe la contraseña" {...register("password")} />
											</div>
											{/* Form Group (cargo)*/}
											<div className="mb-3 form-group col-sm-6">
												<label className="mb-1" htmlFor="inputCargos"><span style={{color:'#FF0000'}}>*</span>Cargo</label>
												<select className="form-control" {...register("cargo_id")}>
													{data.map((opcion) => ( <option key={opcion.id} value={opcion.id} >{opcion.nombre}</option> ))}
												</select>
											</div>
											{/* Form Group (descripcion)*/}
											{/* <div className="mb-3">
												<label className="mb-1" htmlFor="inputDescripcion">Descripción</label>
												<textarea className="form-control" id="inputDescripcion" placeholder="Escribe la descripción del cargo" {...register("descripcion")} />
											</div> */}
											{/* Form Group (color)*/}
											<div className="mb-3 col-sm-6">
												<label className="mb-1" htmlFor="inputColor">Color</label>
												<div className="input-group">
													<span className="input-group-text colorful"  onClick={ handleClick }>
														<div style={{'backgroundColor':color,'height':'25px','width':'25px'}} />
													</span>
													<input className='form-control' type="text" id="inputColor" value={color} {...register("color")} />
													{ state.colorPicker ?
													<div style={ {position: 'absolute',	zIndex: '2'} }>
														<div style={ {position: 'fixed',top: '0px',right: '0px',bottom: '0px',left: '0px'} } onClick={ handleClose }/>
														<HexColorPicker color={ color } onChange={handleChange} onClick={hightLight} />
													</div> : null }
												</div>
											</div>
											<div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <button className="btn btn-danger" type="button" value="Volver" >Volver</button>
                                                <button className="btn btn-primary" type="submit" value="Guardar" >Guardar</button>
                                            </div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Users