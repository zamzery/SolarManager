import './Unidadesmedida.css'
import Header from '../../components/header/Header';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Unidadesmedida(props) {
	return (
		<div>
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header header={props.header} descripcion={props.descripcion} />
						<div>Unidadesmedida</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Unidadesmedida