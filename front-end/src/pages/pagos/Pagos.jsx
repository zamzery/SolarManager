import './Pagos.css'
import Header from '../../components/header/Header'

function Pagos(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Pagos</div>
			</main>
		</div>
	)
}

export default Pagos