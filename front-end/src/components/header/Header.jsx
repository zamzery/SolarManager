import React from 'react';
import './Header.css';
import {PersonAdd, Description, Timeline, Straighten, Pin, Person, School, Badge, AssignmentInd, AddCard,EventNote, DriveEta, MenuBook, Class, AttachMoney, Paid} from '@mui/icons-material';

function Header(props) {
	const getIconFromName = (header) => {
		switch (header) {
			case 'Escritorio':
				return <Timeline />;
			case 'Clases':
				return <School />;
			case 'Teorías':
				return <MenuBook />;
			case 'Practicas':
				return <DriveEta />;
			case 'Alumnos':
				return <PersonAdd />;
			case 'Pagos':
				return <AttachMoney />;
			case 'Facturas':
				return <Description />;
			case 'Complementos de Pago':
				return <Paid />;
			case 'Claves de Facturación':
				return <Pin />;
			case 'Unidades de Medida':
				return <Straighten />;
			case 'Métodos de Pago':
				return <AddCard />;
			case 'Usuarios':
				return <Person />;
			case 'Maestros':
				return <AssignmentInd />;
			case 'Cargo de Usuarios':
				return <Badge />;
			case 'Cursos':
				return <Class />;
			case 'Horarios':
				return <EventNote />;
			default:
				return null;
		}
	}
	return (
		<header className="page-header page-header-dark pb-10 bg-img-repeat overlay-warning overlay-50 bg-warning">
			<div className="container-xl px-4">
				<div className="page-header-content pt-4">
					<div className="row align-items-center justify-content-between">
					<div className="col-auto mt-4">
						<h1 className="page-header-title text-white">
							<div className="page-header-icon text-white">{getIconFromName(props.header)}</div>
							{console.log('getIconFromName: ', getIconFromName)}
							{props.header}
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