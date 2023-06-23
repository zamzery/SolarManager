import React from 'react'
import {PersonAdd, Notifications, Build, Description, RequestQuote, BarChartSharp, Mail, Straighten, Pin, Person, School, Badge, AssignmentInd, AddCard,EventNote, DriveEta, MenuBook, Class, AttachMoney, Paid} from '@mui/icons-material';

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
					<a className="nav-link d-sm-none" href="#">
						<div className="nav-link-icon"><Notifications /></div>
						Alertas
						<span className="badge bg-warning-soft text-warning ms-auto">4 New!</span>
					</a>
					{/* Sidenav Link (Mensajes)*/}
					{/* * * Note: * * Visible only on and above the sm breakpoint*/}
					<a className="nav-link d-sm-none" href="#">
						<div className="nav-link-icon"><Mail /></div>
						Mensajes
						<span className="badge bg-success-soft text-success ms-auto">2 New!</span>
					</a>
					{/* Sidenav Menu Heading (Core)*/}
					<div className="sidenav-menu-heading">Principal</div>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><BarChartSharp /></div>
						Escritorio
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><School /></div>
						Clases
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><DriveEta /></div>
						Práctica
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><MenuBook /></div>
						Teoría
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><PersonAdd /></div>
						Alumnos
					</a>
					{/* Sidenav Heading (Facturación)*/}
					<div className="sidenav-menu-heading">Facturación y Pagos</div>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><AttachMoney /></div>
						Pagos
					</a>
					<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#facturacionNav" aria-expanded="false" aria-controls="facturacionNav">
						<div className="nav-link-icon"><RequestQuote /></div>
						Facturación
						<div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
					</a>
					<div className="collapse" id="facturacionNav" data-bs-parent="#facturacionSidenav">
						<nav className="sidenav-menu-nested nav accordion" id="facturacionSidenavPagesMenu">
							<a className="nav-link" href="pricing.html"><div className="nav-link-icon"><Description /></div> Facturas</a>
							<a className="nav-link" href="invoice.html"><div className="nav-link-icon"><Paid /></div> Complemento Pago</a>

							<a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthSocial" aria-expanded="false" aria-controls="pagesCollapseAuthSocial">
								<div className="nav-link-icon"><Build /></div>
								Administrar Fact.
								<div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
							</a>
							<div class="collapse" id="pagesCollapseAuthSocial" data-bs-parent="#accordionSidenavPagesAuth">
								<nav class="sidenav-menu-nested nav">
									<a className="nav-link" href="pricing.html"><div className="nav-link-icon"><Pin /></div> Claves Facturación</a>
									<a className="nav-link" href="invoice.html"><div className="nav-link-icon"><Straighten /></div> Unidades Medida</a>
									<a className="nav-link" href="invoice.html"><div className="nav-link-icon"><AddCard /></div> Metodos Pago</a>
								</nav>
							</div>
						</nav>
					</div>
					{/* Sidenav Administrar*/}
					<div className="sidenav-menu-heading">Administrar</div>
					{/* Sidenav Accordion (Layout)*/}
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><Person /></div>
						Usuarios
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><AssignmentInd /></div>
						Mestros
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><Badge /></div>
						Cargo
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><Class /></div>
						Cursos
					</a>
					<a className="nav-link" href="charts.html">
						<div className="nav-link-icon"><EventNote /></div>
						Horarios
					</a>
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