import './Maestros.css'
import Header from '../../components/header/Header'

function Maestros(props) {
	return (
		<div id="layoutSidenav_content">
			<main>
				<Header header={props.header} descripcion={props.descripcion} />
				<div>Maestros</div>
			</main>
		</div>
	)
}

export default Maestros