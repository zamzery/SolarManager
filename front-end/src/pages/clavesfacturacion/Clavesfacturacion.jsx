import './Clavesfacturacion.css'
import Header from '../../components/header/Header'

function Clavesfacturacion(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Clavesfacturacion</div>
			</main>
		</div>
	)
}

export default Clavesfacturacion