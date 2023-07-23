import './Facturas.css'
import Header from '../../components/header/Header';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Facturas(props) {
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
									<div className="card-body">
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card mb-4">
									<div className="card-body">
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

export default Facturas