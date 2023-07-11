import './Facturas.css'
import Header from '../../components/header/Header'

function Facturas(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Facturas</div>
			</main>
		</div>
	)
}

export default Facturas