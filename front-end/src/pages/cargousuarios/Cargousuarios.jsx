import './Cargousuarios.css'
import Header from '../../components/header/Header'
import {Margin, Save} from '@mui/icons-material';

function Cargousuarios(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div className="container-xl px-4 mt-n10">
					<div className="col-xl-12">
						<div className="card mb-4">
							<div className="card-body">
								Tabla
							</div>
						</div>
					</div>
					<div className="col-xl-12">
						{/* Account details card*/}
						<div className="card mb-4">
							<div className="card-body">
								<form>
									{/* Form Group (username)*/}
									<div className="mb-3">
										<label className="small mb-1" htmlFor="nombreCargo">Nombre del Cargo</label>
										<input className="form-control" id="nombreCargo" type="text" placeholder="Enter your username" />
										<input type="hidden" id="idCargo" name="idCargo" value="0" />
									</div>
									{/* Form Group (email address)*/}
									<div className="mb-3">
										<label className="small mb-1" htmlFor="descripcion">Descripción</label>
										<textarea className="form-control" id="descripcion" type="text" placeholder="Descripción del cargo"></textarea>
									</div>
									<button className="btn btn-primary" type="button" id="btnGuardar"><Save fontSize='small' style={{paddingRight: '4px'}} />Gurdar</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Cargousuarios