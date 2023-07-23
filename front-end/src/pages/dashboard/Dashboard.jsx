import './Dashboard.css'
import Header from '../../components/header/Header';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Dashboard(props) {
	return (
		<div>
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header header={props.header} descripcion={props.descripcion} />
						{/* Main page content*/}
						<div className="container-xl px-4 mt-n10">
							<div className="row">
							<div className="col-xl-4 mb-4">
								{/* Dashboard example card 1*/}
								<a className="card lift h-100" href={() => false} >
								<div className="card-body d-flex justify-content-center flex-column">
									<div className="d-flex align-items-center justify-content-between">
									<div className="me-3">
										<i className="feather-xl text-primary mb-3" data-feather="package" />
										<h5>Powerful Components</h5>
										<div className="text-muted small">To create informative visual elements on your pages</div>
									</div>
									<img src="assets/img/illustrations/browser-stats.svg" alt="illustration" style={{width: '8rem'}} />
									</div>
								</div>
								</a>
							</div>
							<div className="col-xl-4 mb-4">
								{/* Dashboard example card 2*/}
								<a className="card lift h-100" href={() => false} >
								<div className="card-body d-flex justify-content-center flex-column">
									<div className="d-flex align-items-center justify-content-between">
									<div className="me-3">
										<i className="feather-xl text-secondary mb-3" data-feather="book" />
										<h5>Documentation</h5>
										<div className="text-muted small">To keep you on track when working with our toolkit</div>
									</div>
									<img src="assets/img/illustrations/processing.svg" alt="processing" style={{width: '8rem'}} />
									</div>
								</div>
								</a>
							</div>
							<div className="col-xl-4 mb-4">
								{/* Dashboard example card 3*/}
								<a className="card lift h-100" href={() => false} >
								<div className="card-body d-flex justify-content-center flex-column">
									<div className="d-flex align-items-center justify-content-between">
									<div className="me-3">
										<i className="feather-xl text-green mb-3" data-feather="layout" />
										<h5>Pages &amp; Layouts</h5>
										<div className="text-muted small">To help get you started when building your new UI</div>
									</div>
									<img src="assets/img/illustrations/windows.svg" alt="windows" style={{width: '8rem'}} />
									</div>
								</div>
								</a>
							</div>
							</div>
							<div className="row">
							<div className="col-xxl-8">
							{/* Illustration dashboard card example*/}
							<div className="card mb-4">
								<div className="card-body py-5">
									<div className="d-flex flex-column justify-content-center">
									<img className="img-fluid mb-4" src="assets/img/illustrations/data-report.svg" alt="data report" style={{height: '10rem'}} />
									<div className="text-center px-0 px-lg-5">
										<h5>New reports are here! Generate custom reports now!</h5>
										<p className="mb-4">Our new report generation system is now online. You can start creating custom reporting for any documents available on your account.</p>
										<a className="btn btn-primary p-3" href={() => false} >Get Started</a>
									</div>
									</div>
								</div>
							</div>
							<div className="row">
							<div className="col-xl-6 mb-4">
								{/* Dashboard activity timeline example*/}
								<div className="card card-header-actions h-100">
								<div className="card-header">
									Recent Activity
									<div className="dropdown no-caret">
									<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="text-gray-500" data-feather="more-vertical" /></button>
									<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownMenuButton">
										<h6 className="dropdown-header">Filter Activity:</h6>
										<a className="dropdown-item" href={() => false} ><span className="badge bg-green-soft text-green my-1">Commerce</span></a>
										<a className="dropdown-item" href={() => false} ><span className="badge bg-blue-soft text-blue my-1">Reporting</span></a>
										<a className="dropdown-item" href={() => false} ><span className="badge bg-yellow-soft text-yellow my-1">Server</span></a>
										<a className="dropdown-item" href={() => false} ><span className="badge bg-purple-soft text-purple my-1">Users</span></a>
									</div>
									</div>
								</div>
								<div className="card-body">
									<div className="timeline timeline-xs">
									{/* Timeline Item 1*/}
									<div className="timeline-item">
										<div className="timeline-item-marker">
										<div className="timeline-item-marker-text">27 min</div>
										<div className="timeline-item-marker-indicator bg-green" />
										</div>
										<div className="timeline-item-content">
										New order placed!
										<a className="fw-bold text-dark" href={() => false} >Order #2912</a>
										has been successfully placed.
										</div>
									</div>
									{/* Timeline Item 2*/}
									<div className="timeline-item">
										<div className="timeline-item-marker">
										<div className="timeline-item-marker-text">58 min</div>
										<div className="timeline-item-marker-indicator bg-blue" />
										</div>
										<div className="timeline-item-content">
										Your
										<a className="fw-bold text-dark" href={() => false} >weekly report</a>
										has been generated and is ready to view.
										</div>
									</div>
									{/* Timeline Item 3*/}
									<div className="timeline-item">
										<div className="timeline-item-marker">
										<div className="timeline-item-marker-text">2 hrs</div>
										<div className="timeline-item-marker-indicator bg-purple" />
										</div>
										<div className="timeline-item-content">
										New user
										<a className="fw-bold text-dark" href={() => false} >Valerie Luna</a>
										has registered
										</div>
									</div>
									{/* Timeline Item 4*/}
									<div className="timeline-item">
										<div className="timeline-item-marker">
										<div className="timeline-item-marker-text">1 day</div>
										<div className="timeline-item-marker-indicator bg-yellow" />
										</div>
										<div className="timeline-item-content">Server activity monitor alert</div>
									</div>
									{/* Timeline Item 5*/}
									<div className="timeline-item">
										<div className="timeline-item-marker">
										<div className="timeline-item-marker-text">1 day</div>
										<div className="timeline-item-marker-indicator bg-green" />
										</div>
										<div className="timeline-item-content">
										New order placed!
										<a className="fw-bold text-dark" href={() => false} >Order #2911</a>
										has been successfully placed.
										</div>
									</div>
									{/* Timeline Item 6*/}
									<div className="timeline-item">
										<div className="timeline-item-marker">
										<div className="timeline-item-marker-text">1 day</div>
										<div className="timeline-item-marker-indicator bg-purple" />
										</div>
										<div className="timeline-item-content">
										Details for
										<a className="fw-bold text-dark" href={() => false} >Marketing and Planning Meeting</a>
										have been updated.
										</div>
									</div>
									{/* Timeline Item 7*/}
									<div className="timeline-item">
										<div className="timeline-item-marker">
										<div className="timeline-item-marker-text">2 days</div>
										<div className="timeline-item-marker-indicator bg-green" />
										</div>
										<div className="timeline-item-content">
										New order placed!
										<a className="fw-bold text-dark" href={() => false} >Order #2910</a>
										has been successfully placed.
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							<div className="col-xl-6 mb-4">
								{/* Pie chart with legend example*/}
								<div className="card h-100">
								<div className="card-header">Traffic Sources</div>
								<div className="card-body">
									<div className="chart-pie mb-4"><canvas id="myPieChart" width="100%" height={50} /></div>
									<div className="list-group list-group-flush">
									<div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
										<div className="me-3">
										<i className="fas fa-circle fa-sm me-1 text-blue" />
										Direct
										</div>
										<div className="fw-500 text-dark">55%</div>
									</div>
									<div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
										<div className="me-3">
										<i className="fas fa-circle fa-sm me-1 text-purple" />
										Social
										</div>
										<div className="fw-500 text-dark">15%</div>
									</div>
									<div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
										<div className="me-3">
										<i className="fas fa-circle fa-sm me-1 text-green" />
										Referral
										</div>
										<div className="fw-500 text-dark">30%</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						<div className="col-xxl-4">
							<div className="row">
							<div className="col-xl-6 col-xxl-12">
								{/* Team members / people dashboard card example*/}
								<div className="card mb-4">
								<div className="card-header">People</div>
								<div className="card-body">
									{/* Item 1*/}
									<div className="d-flex align-items-center justify-content-between mb-4">
									<div className="d-flex align-items-center flex-shrink-0 me-3">
										<div className="avatar avatar-xl me-3 bg-gray-200"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-1.png" alt="profile" /></div>
										<div className="d-flex flex-column fw-bold">
										<a className="text-dark line-height-normal mb-1" href={() => false} >Sid Rooney</a>
										<div className="small text-muted line-height-normal">Position</div>
										</div>
									</div>
									<div className="dropdown no-caret">
										<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical" /></button>
										<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople1">
										<a className="dropdown-item" href={() => false} >Action</a>
										<a className="dropdown-item" href={() => false} >Another action</a>
										<a className="dropdown-item" href={() => false} >Something else here</a>
										</div>
									</div>
									</div>
									{/* Item 2*/}
									<div className="d-flex align-items-center justify-content-between mb-4">
									<div className="d-flex align-items-center flex-shrink-0 me-3">
										<div className="avatar avatar-xl me-3 bg-gray-200"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-2.png" alt="another profile" /></div>
										<div className="d-flex flex-column fw-bold">
										<a className="text-dark line-height-normal mb-1" href={() => false} >Keelan Garza</a>
										<div className="small text-muted line-height-normal">Position</div>
										</div>
									</div>
									<div className="dropdown no-caret">
										<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople2" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical" /></button>
										<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople2">
										<a className="dropdown-item" href={() => false} >Action</a>
										<a className="dropdown-item" href={() => false} >Another action</a>
										<a className="dropdown-item" href={() => false} >Something else here</a>
										</div>
									</div>
									</div>
									{/* Item 3*/}
									<div className="d-flex align-items-center justify-content-between mb-4">
									<div className="d-flex align-items-center flex-shrink-0 me-3">
										<div className="avatar avatar-xl me-3 bg-gray-200"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-3.png" alt="yet another profile" /></div>
										<div className="d-flex flex-column fw-bold">
										<a className="text-dark line-height-normal mb-1" href={() => false} >Kaia Smyth</a>
										<div className="small text-muted line-height-normal">Position</div>
										</div>
									</div>
									<div className="dropdown no-caret">
										<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople3" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical" /></button>
										<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople3">
										<a className="dropdown-item" href={() => false} >Action</a>
										<a className="dropdown-item" href={() => false} >Another action</a>
										<a className="dropdown-item" href={() => false} >Something else here</a>
										</div>
									</div>
									</div>
									{/* Item 4*/}
									<div className="d-flex align-items-center justify-content-between mb-4">
									<div className="d-flex align-items-center flex-shrink-0 me-3">
										<div className="avatar avatar-xl me-3 bg-gray-200"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-4.png" alt="profile 4" /></div>
										<div className="d-flex flex-column fw-bold">
										<a className="text-dark line-height-normal mb-1" href={() => false} >Kerri Kearney</a>
										<div className="small text-muted line-height-normal">Position</div>
										</div>
									</div>
									<div className="dropdown no-caret">
										<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople4" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical" /></button>
										<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople4">
										<a className="dropdown-item" href={() => false} >Action</a>
										<a className="dropdown-item" href={() => false} >Another action</a>
										<a className="dropdown-item" href={() => false} >Something else here</a>
										</div>
									</div>
									</div>
									{/* Item 5*/}
									<div className="d-flex align-items-center justify-content-between mb-4">
									<div className="d-flex align-items-center flex-shrink-0 me-3">
										<div className="avatar avatar-xl me-3 bg-gray-200"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-5.png" alt="profile 5" /></div>
										<div className="d-flex flex-column fw-bold">
										<a className="text-dark line-height-normal mb-1" href={() => false} >Georgina Findlay</a>
										<div className="small text-muted line-height-normal">Position</div>
										</div>
									</div>
									<div className="dropdown no-caret">
										<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople5" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical" /></button>
										<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople5">
										<a className="dropdown-item" href={() => false} >Action</a>
										<a className="dropdown-item" href={() => false} >Another action</a>
										<a className="dropdown-item" href={() => false} >Something else here</a>
										</div>
									</div>
									</div>
									{/* Item 6*/}
									<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center flex-shrink-0 me-3">
										<div className="avatar avatar-xl me-3 bg-gray-200"><img className="avatar-img img-fluid" src="assets/img/illustrations/profiles/profile-6.png" alt="profile 6" /></div>
										<div className="d-flex flex-column fw-bold">
										<a className="text-dark line-height-normal mb-1" href={() => false} >Wilf Ingram</a>
										<div className="small text-muted line-height-normal">Position</div>
										</div>
									</div>
									<div className="dropdown no-caret">
										<button className="btn btn-transparent-dark btn-icon dropdown-toggle" id="dropdownPeople6" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="more-vertical" /></button>
										<div className="dropdown-menu dropdown-menu-end animated--fade-in-up" aria-labelledby="dropdownPeople6">
										<a className="dropdown-item" href={() => false} >Action</a>
										<a className="dropdown-item" href={() => false} >Another action</a>
										<a className="dropdown-item" href={() => false} >Something else here</a>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							<div className="col-xl-6 col-xxl-12">
								{/* Project tracker card example*/}
								<div className="card card-header-actions mb-4">
								<div className="card-header">
									Projects
									<a className="btn btn-sm btn-primary-soft text-primary" href={() => false} >Create New</a>
								</div>
								<div className="card-body">
									{/* Progress item 1*/}
									<div className="d-flex align-items-center justify-content-between small mb-1">
									<div className="fw-bold">Server Setup</div>
									<div className="small">25%</div>
									</div>
									<div className="progress mb-3"><div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} /></div>
									{/* Progress item 2*/}
									<div className="d-flex align-items-center justify-content-between small mb-1">
									<div className="fw-bold">Database Migration</div>
									<div className="small">50%</div>
									</div>
									<div className="progress mb-3"><div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} /></div>
									{/* Progress item 3*/}
									<div className="d-flex align-items-center justify-content-between small mb-1">
									<div className="fw-bold">Version Release</div>
									<div className="small">75%</div>
									</div>
									<div className="progress mb-3"><div className="progress-bar bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} /></div>
									{/* Progress item 4*/}
									<div className="d-flex align-items-center justify-content-between small mb-1">
									<div className="fw-bold">Product Listings</div>
									<div className="small">100%</div>
									</div>
									<div className="progress"><div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} /></div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</main>
					<footer className="footer-admin mt-auto footer-dark">
					<div className="container-xl px-4">
						<div className="row">
						<div className="col-md-6 small">Copyright © Your Website 2021</div>
						<div className="col-md-6 text-md-end small">
							<a href={() => false} >Privacy Policy</a>
							·
							<a href={() => false} >Terms &amp; Conditions</a>
						</div>
						</div>
					</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default Dashboard