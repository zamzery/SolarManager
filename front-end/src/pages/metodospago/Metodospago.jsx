import './Metodospago.css'
import Header from '../../components/header/Header';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Metodospago(props) {
	return (
		<div>
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<div id="layoutSidenav_content">
					<main>
						<Header header={props.header} descripcion={props.descripcion} />
						<div>Metodospago</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Metodospago