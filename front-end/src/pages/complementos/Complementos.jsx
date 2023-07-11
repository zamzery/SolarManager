import './Complementos.css'
import Header from '../../components/header/Header'

function Complementos(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Complementos</div>
			</main>
		</div>
	)
}

export default Complementos