import React, { useState }  from 'react'
import axios from 'axios'
import './Auth.css'
import { useForm } from "react-hook-form";
import logo from './ManejoDelSol_LogoHeader.jpg'
import { ApiURL, ApiUser } from '../services/ApiURL';
import {useNavigate} from 'react-router-dom';

function Auth() {
	// const [showModal, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	document.body.classList.add('body-animation');
	const navigate = useNavigate();
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
				navigate(response.data.redireccion); //navigate('escritorio');
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
		<div id="layoutAuthentication">
			<div id="layoutAuthentication_content">
				<main>
					<div className="container-xl px-4">
						<div className="row justify-content-center">
							<div className="col-lg-5">
								{/* Basic login form*/}
								<div className="card shadow-lg border-0 rounded-lg mt-5">
									<div className="card-header justify-content-center text-center">
										<span id="titulo">Sistema de Administración</span><br></br>
										<img src={logo} className='logo' alt="Logo Principal" />
									</div>
									<div className="card-body">
										{/* Login form*/}
										<form onSubmit={handleSubmit(onSubmit)}>
										{
											state.problema === true && 
											<div className="alert alert-danger alert-dismissible fade show" role="alert">
												{state.message}
											</div>
										}
											{/* Form Group (email address)*/}
											<div className="mb-3">
												<label className="mb-1" htmlFor="inputEmailAddress">Email</label>
												<input className="form-control" autoComplete="username" id="inputEmailAddress" type="email" placeholder="Escribe tu dirección Email" {...register("email", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i , required: true })} />
												{(errors.email?.type === 'pattern' && <small className="text-danger">El email no es válido</small>) || (errors.email && <small className="text-danger">Este campo es requerido</small>)}
											</div>
											{/* Form Group (password)*/}
											<div className="mb-3">
												<label className="mb-1" htmlFor="inputPassword">Contraseña</label>
												<input className="form-control" autoComplete="current-password" id="inputPassword" type="password" placeholder="Escribe tu contraseña" {...register("password", { required: true })} />
												{errors.password && <small className="text-danger">Este campo es requerido</small>}
											</div>
											<div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalRecuperaContrasena">¿Olvidaste tu contraseña?</button>
                                                <button className="btn btn-dark" type="submit" value="Acceder" >Acceder</button>
                                            </div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
			<div id="layoutAuthentication_footer">
				<footer className="footer-admin mt-auto footer-dark">
					<div className="container-xl px-4 text-center">
						<div className="row">
							<div className="col-md-12 small">©2023 Manejo del Sol</div>
						</div>
					</div>
				</footer>
			</div>
			{/* Modal Recuperar Contraseña */}
			<div className="modal fade" id="modalRecuperaContrasena" tabIndex={-1} role="dialog" aria-labelledby="modalRecuperaContrasena" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="modalRecuperaContrasenaTitulo">Recupera tu Contraseña</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
						</div>
						<div className="modal-body">
							<label>Escribe tu email de recuperación</label>
							<input type="email" className="form-control" placeholder="Escribe tu email" />
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
							<button type="button" className="btn btn-primary">Enviar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth