import React from 'react'
import {PersonAdd, Notifications, Build, Description, RequestQuote, Timeline, Straighten, Pin, Person, School, Badge, AssignmentInd, AddCard,EventNote, DriveEta, MenuBook, Class, AttachMoney, Paid} from '@mui/icons-material';
import './Sidebar.css'

function Sidebar() {
	return (
		<div id="layoutSidenav_nav">
			<nav className="sidenav shadow-right sidenav-dark">
				<div className="sidenav-menu">
					<div className="nav accordion" id="accordionSidenav">
					{/* Sidenav Menu Heading (Cuenta)*/}
					{/* * * Note: * * Visible only on and above the sm breakpoint*/}
					<div className="sidenav-menu-heading d-sm-none">Cuenta</div>
					{/* Sidenav Link (Alertas)*/}
					{/* * * Note: * * Visible only on and above the sm breakpoint*/}
					<a className="nav-link d-sm-none" href="alertas">
						<div className="nav-link-icon"><Notifications /></div>
						Alertas
						<span className="badge bg-warning-soft text-warning ms-auto">4 New!</span>
					</a>

					{/* Sidenav Menu Heading (Core)*/}
					<div className="sidenav-menu-heading">Principal</div>
					<a className="nav-link" href="escritorio">
						<div className="nav-link-icon"><Timeline /></div>
						Escritorio
					</a>
					<a className="nav-link" href="clases">
						<div className="nav-link-icon"><School /></div>
						Clases
					</a>
					<a className="nav-link" href="practicas">
						<div className="nav-link-icon"><DriveEta /></div>
						Práctica
					</a>
					<a className="nav-link" href="teorias">
						<div className="nav-link-icon"><MenuBook /></div>
						Teoría
					</a>
					<a className="nav-link" href="alumnos">
						<div className="nav-link-icon"><PersonAdd /></div>
						Alumnos
					</a>
					{/* Sidenav Heading (Facturación)*/}
					<div className="sidenav-menu-heading">Facturación y Pagos</div>
					<a className="nav-link" href="pagos">
						<div className="nav-link-icon"><AttachMoney /></div>
						Pagos
					</a>
					<button className="btn btn-link nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#facturacionNav" aria-expanded="false" aria-controls="facturacionNav">
						<div className="nav-link-icon"><RequestQuote /></div>
						Facturación
						<div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
					</button>
					<div className="collapse" id="facturacionNav" data-bs-parent="#facturacionSidenav">
						<nav className="sidenav-menu-nested nav accordion" id="facturacionSidenavPagesMenu">
							<a className="nav-link" href="facturas"><div className="nav-link-icon"><Description /></div> Facturas</a>
							<a className="nav-link" href="complementos"><div className="nav-link-icon"><Paid /></div> Complemento Pago</a>

							<button className="btn btn-link nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthSocial" aria-expanded="false" aria-controls="pagesCollapseAuthSocial">
								<div className="nav-link-icon"><Build /></div>
								Administrar Fact.
								<div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
							</button>
							<div className="collapse" id="pagesCollapseAuthSocial" data-bs-parent="#accordionSidenavPagesAuth">
								<nav className="sidenav-menu-nested nav">
									<a className="nav-link" href="clavesfacturacion"><div className="nav-link-icon"><Pin /></div> Claves Facturación</a>
									<a className="nav-link" href="unidadesmedida"><div className="nav-link-icon"><Straighten /></div> Unidades Medida</a>
									<a className="nav-link" href="metodospago"><div className="nav-link-icon"><AddCard /></div> Metodos Pago</a>
								</nav>
							</div>
						</nav>
					</div>
					{/* Sidenav Administrar*/}
					<button className="btn btn-link nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#administrarCollapse" aria-expanded="false" aria-controls="administrarCollapse">
						<div className="nav-link-icon"><Build /></div>
						Administrar
						<div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
					</button>
					<div className="collapse" id="administrarCollapse" data-bs-parent="#accordionSidenavAdministrar">
						<nav className="sidenav-menu-nested nav">
							<a className="nav-link" href="users">
								<div className="nav-link-icon"><Person /></div>
								Usuarios
							</a>
							<a className="nav-link" href="maestros">
								<div className="nav-link-icon"><AssignmentInd /></div>
								Mestros
							</a>
							<a className="nav-link" href="cargousuarios">
								<div className="nav-link-icon"><Badge /></div>
								Cargo Usuario
							</a>
							<a className="nav-link" href="cursos">
								<div className="nav-link-icon"><Class /></div>
								Cursos
							</a>
							<a className="nav-link" href="horarios">
								<div className="nav-link-icon"><EventNote /></div>
								Horarios
							</a>
						</nav>
					</div>
				</div>
			</div>
				{/* Sidenav Footer*/}
				<div className="sidenav-footer">
					<div className="sidenav-footer-content">
						<div className="sidenav-footer-subtitle">Conectado como:</div>
						<div className="sidenav-footer-title">Valerie Luna</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Sidebar