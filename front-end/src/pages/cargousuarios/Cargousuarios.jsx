import React, { useState }  from 'react'
import './Cargousuarios.css'
import Header from '../../components/header/Header'
import axios from 'axios';
import { ApiURL, ApiUser } from '../../services/ApiURL';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useForm } from "react-hook-form";
// import {TableAxios} from '../../components/tableAxios/TableAxios';
import {TableBasic} from '../../components/tableBasic/TableBasic';


function Cargousuarios(props) {
	// const navigate = useNavigate();
	const [state, setState] = useState({
		problema: false,
		message: ''
	});

	const { register, handleSubmit, formState: { errors } } = useForm();
	const http = axios.create({
		baseURL: ApiURL,
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',
		},
		withCredentials: true
	});

	async function getUser(email,password){
		http.post(ApiUser, {
			email: email,
			password: password
		}).then(response => {
			document.body.classList.remove('body-animation');
			if(response.data.estatus === 'ok'){
				localStorage.setItem('token', response.data.access_token);
				// navigate(response.data.redireccion); //navigate('escritorio');
			} else {
				setState({ problema: true, message: response.data.message });
			}
			setState({ problema: false, message: '' });
		}).catch(error => {
			setState({ problema: true, message: error.response.data.message });
		});
	}

	const onSubmit = (data) => {
		getUser(data.email,data.password)
	}

	return (
		<div>
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header header={props.header} descripcion={props.descripcion} />
						<div className="container-xl px-4 mt-n10">
							<div className="col-xl-12">
								<div className="card mb-4">
									{/* <TableAxios /> */}
									<TableBasic />
								</div>
							</div>
							<div className="col-xl-12">
								{/* Account details card*/}
								<div className="card mb-4">
									<div className="card-body">
										<form onSubmit={handleSubmit(onSubmit)}>
											{
												state.problema === true && 
												<div className="alert alert-danger alert-dismissible fade show" role="alert">
													{state.message}
												</div>
											}
											{/* Form Group (nombre cargo)*/}
											<div className="mb-3">
												<label className="mb-1" htmlFor="inputNombre">Cargo</label>
												<input className="form-control" id="inputNombre" type="text" placeholder="Escribe el nombre del cargo" {...register("nombre", { required: true })} />
												{(errors.nombre && <small className="text-danger">Este campo es requerido</small>)}
											</div>
											{/* Form Group (descripcion)*/}
											<div className="mb-3">
												<label className="mb-1" htmlFor="inputDescripcion">Descripción</label>
												<textarea className="form-control" id="inputDescripcion" placeholder="Escribe la descripción del cargo" {...register("descripcion")} />
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

export default Cargousuarios