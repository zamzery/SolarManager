import React from 'react';
import './Header.css';
import {PersonAdd, Description, Timeline, Straighten, Pin, Person, School, Badge, AssignmentInd, AddCard,EventNote, DriveEta, MenuBook, Class, AttachMoney, Paid, Add
} from '@mui/icons-material';

function Header(props) {
	function getIconFromName (header) {
		const headerIcons = {
			'Escritorio': <Timeline />,
			'Clases': <School />,
			'Teorías': <MenuBook />,
			'Practicas': <DriveEta />,
			'Alumnos': <PersonAdd />,
			'Pagos': <AttachMoney />,
			'Facturas': <Description />,
			'Complementos de Pago': <Paid />,
			'Claves de Facturación': <Pin />,
			'Unidades de Medida': <Straighten />,
			'Métodos de Pago': <AddCard />,
			'Usuarios': <Person />,
			'Maestros': <AssignmentInd />,
			'Cargo de Usuarios': <Badge />,
			'Cursos': <Class />,
			'Horarios': <EventNote />
		};
		return headerIcons[header];
	}
	return (
		<header className="page-header page-header-dark pb-10 bg-img-repeat overlay-warning overlay-50 bg-warning">
			<div className="container-xl px-4">
				<div className="page-header-content pt-4">
					<div className="row align-items-center justify-content-between">
						<div className="col-auto mt-4">
							<h1 className="page-header-title text-white">
								<div className="page-header-icon text-white">{getIconFromName(props.header)}</div>
								{props.header} {props.agregar===1 && <button id="btnAgregar" className="btn btn-sm btn-success agregar"> <Add /> Agregar</button>}
							</h1>
							<div className="text-white">{props.descripcion}</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header