import React, { useState } from 'react';
import logo from './ManejoDelSol_LogoHeader.jpg'
import {Menu, Notifications, AccountCircle, Logout, Warning, BarChart, MonitorHeart} from '@mui/icons-material';
import './Navbar.css'
import {red} from '@mui/material/colors';

function Navbar() {
	const [isActive, setActive] = useState(true);
	const clickMenuOpen = () => {
		if (isActive===true) {
			document.body.classList.add('sidenav-toggled')
		} else {
			document.body.classList.remove('sidenav-toggled');
		}
		setActive(!isActive);
	}

	return (
		<nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
			<button  onClick={() => { clickMenuOpen() }} className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">
				<Menu />
			</button>
			<a href="index.html"><img src={logo} className='logo_navbar' alt="Logo Principal" /></a>
			{/* Navbar Items*/}
			<ul className="navbar-nav align-items-center ms-auto">
				<ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'>
					{/* Alerts Dropdown*/}
					<li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
					<a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><Notifications /></a>
					<div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
						<h6 className="dropdown-header dropdown-notifications-header">
						<i className="me-2" data-feather="bell" />
						Alertas
						</h6>
						{/* Example Alert 1*/}
						<a className="dropdown-item dropdown-notifications-item" href="#">
						<div className="dropdown-notifications-item-icon bg-warning"><MonitorHeart /></div>
						<div className="dropdown-notifications-item-content">
							<div className="dropdown-notifications-item-content-details">December 29, 2021</div>
							<div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
						</div>
						</a>
						{/* Example Alert 2*/}
						<a className="dropdown-item dropdown-notifications-item" href="#">
						<div className="dropdown-notifications-item-icon bg-info"><BarChart /></div>
						<div className="dropdown-notifications-item-content">
							<div className="dropdown-notifications-item-content-details">December 22, 2021</div>
							<div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
						</div>
						</a>
						{/* Example Alert 3*/}
						<a className="dropdown-item dropdown-notifications-item" href="#">
						<div className="dropdown-notifications-item-icon bg-danger"><Warning /></div>
						<div className="dropdown-notifications-item-content">
							<div className="dropdown-notifications-item-content-details">December 8, 2021</div>
							<div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
						</div>
						</a>
						<a className="dropdown-item dropdown-notifications-footer" href="#">Ver todas las alertas</a>
					</div>
					</li>
					{/* User Dropdown*/}
					<li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
						<button type="button" className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" alt=""/></button>
						<div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
							<h6 className="dropdown-header d-flex align-items-center">
								<img className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" alt=""/>
								<div className="dropdown-user-details">
									<div className="dropdown-user-details-name">Valerie Luna</div>
									<div className="dropdown-user-details-email">vluna@aol.com</div>
								</div>
							</h6>
							<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<div className="dropdown-item-icon"><i data-feather="settings" /></div>
									<AccountCircle color="primary" /> <span style={{color: '#1565C0'}}> Configurar Cuenta</span>
								</a>
								<a className="dropdown-item" href="#">
								<div className="dropdown-item-icon"><i data-feather="log-out" /></div>
								<Logout sx={{ color: red[500] }} /> <span style={{color: 'red'}}>Cerrar Sesión </span> 
							</a>
						</div>
					</li>
				</ul>
			</ul>
		</nav>
	)
}

export default Navbar